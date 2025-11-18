import React, { useEffect, useState } from "react";
import AINoteGenerator from "./AINoteGenerator";
import {saveNotes} from "../../Api/NotesAPI"
import EditNote from "./EditNote";


// i have to add react-quill to make the modal more dynamic and functional -> it works on html
function AddNote() {
  const [generatedContent, setGeneratedContent] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [editNote, setEditNote] = useState(false);



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


  useEffect(() => {
    editNote ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  }, [editNote])


  function EditNoteText() {
    setEditNote(true); 
    console.log("Edit page opened!!")
  }
  return (

    <>
      {/* edit note pop-up section */}
      
      {
        editNote && 
        <EditNote
          generatedContent={generatedContent}
          setEditNote={setEditNote}
          setGeneratedContent={setGeneratedContent}

        />
      }

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

        <div className="flex gap-4 flex-col">

           <div className="flex flex-col justify-between ">
            <label htmlFor=""  className="font-semibold mb-3">Subject</label>
            <input
              type="text"
              className="border rounded-sm px-3 py-1 text-lg  outline-none"
              name="subject"
              value={subject}
               onChange={(e) => setSubject(e.target.value)}/>
          </div>

          <div className="flex flex-col justify-between ">
            <label htmlFor="" className="font-semibold mb-3">Title</label>
            <input
              type="text"
              name="title"
              className="border rounded-sm px-3 p-1 text-lg outline-none"
              value={title}
            onChange={(e) => setTitle(e.target.value)}/>
          </div>

          <div>
            <div className="flex justify-between mb-3">
                <label htmlFor="" className="font-semibold">Content</label>
              <button
                  onClick={EditNoteText}
                className="text-white bg-[var(--primary)] px-3 py-1 font-semibold rounded-md ">Add/Edit</button>

            </div>
            <textarea
              name="content"
              className="w-full border rounded-lg px-3 p-3 h-32  outline-none"
              placeholder="Content from AI or your own..."
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
            />
          </div>

          <button
            onClick={submitNote}
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow"
          >
            Save Note
            </button>
        </div>
      </div>
      </div>
      
          </>
  );
}

export default AddNote;
