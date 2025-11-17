import React, { useEffect, useState } from 'react'
import {getAllNotes , deleteNote} from "../../Api/NotesAPI"
function NotesPage() {

    let [allNotes, setAllNotes] = useState([]);
    let [flag, setFlag] = useState(false);

    useEffect(() => {
        getAllNotes()
            .then(res => {
                setAllNotes(res.data);
            }).catch(err => {
                console.log("error in fetching the notes", err);
            })    
    }, [flag]);


    async function removeNote(id) {
        deleteNote(id)
            .then(res => {
                console.log(res);
                setFlag(prev => !prev);
            }
            ).catch(err => console.log("error in deleting the note", err));
    }

  return (
        <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Notes </h1>

      {allNotes.length === 0 ? (
        <p className="text-gray-500">No notes found~</p>
      ) : (
          <div className="grid gap-4">
            {/* create a comp for this  */}
           {allNotes.map((note) => (
            <div
              key={note._id}
              className="bg-white shadow p-5 rounded-xl border"
            >
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">{note.title}</h2>

                <div className="flex gap-2">
                  <Link
                    to={`/notes/edit/${note._id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => removeNote(note._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <p className="text-gray-600 mt-2">{note.subject}</p>
              <p className="text-gray-700 mt-3 line-clamp-3">{note.content}</p>
              <p className="text-xs text-gray-400 mt-3">
                Created on: {new Date(note.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))} 
        </div>
      )}
    </div>
  )
}

export default NotesPage
