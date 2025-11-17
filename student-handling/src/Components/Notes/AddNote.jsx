import React, { useState } from "react";
import AINoteGenerator from "../components/notes/AINoteGenerator";
import {saveNotes} from "../../Api/NotesAPI"

function AddNote() {
  const [generatedContent, setGeneratedContent] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");



  function submitNote() {
    if (!title.trim() || !generatedContent.trim()) {
      alert("please add title and content!");
      return;
    }


    let noteData = {
      title, 
      subject, 
      generatedContent
    }


    saveNotes(noteData)
      .then(res => {
        console.log(res.data);
        alert("Note saved Succesfully");

        // clear Fields
        setTitle("");
        setSubject("");
        setGeneratedContent("");
      })
      .catch(err => {
        console.log("Error in saving notes: ", err);
        alert("Error saving note!");
      });


  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Note</h1>

      {/* AI Generator Component */}
      <AINoteGenerator setGeneratedContent={setGeneratedContent} />

      {/* Manual Note Form */}
      <div className="mt-10 bg-white shadow p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Manual Note</h2>

        <p className="text-gray-500 mb-4">
          The AI generated content (if used) will appear below:
        </p>

        <form action="" onSubmit={submitNote}>

           <div>
            <label htmlFor="">Subject</label>
            <input type="text" name="subject" value={subject}
               onChange={(e) => setSubject(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="">Title</label>
            <input type="text" name="title" value={title}
            onChange={(e) => setTitle(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="">Content</label>
            <textarea
              name="content"
              className="w-full border rounded-lg p-3 h-32"
              placeholder="Content from AI or your own..."
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
            />
          </div>

          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow">
            Save Note
            </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
