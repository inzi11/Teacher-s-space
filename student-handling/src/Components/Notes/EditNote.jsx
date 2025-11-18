import React, { useState } from "react";

function EditNote({ generatedContent, setEditNote, setGeneratedContent }) {
  let [value, setValue] = useState(generatedContent);
  return (
      <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center pt-[10vh] transition-opacity duration-300 animate-fadeIn"
          onClick={()=> setEditNote(false)}
      >
          <div
              className="bg-white p-6 rounded-2xl w-[92%] max-w-lg md:max-w-3xl lg:max-w-[80%]  border border-white/10
              shadow-2xl transform -translate-y-10 opacity-0 animate-slideDown relative"
              onClick={(e)=> e.stopPropagation()}
          >
              

             <h2 className="text-2xl font-bold mb-4">Edit Note </h2>
        <div>
          <textarea
            className="w-full p-3 h-[350px] rounded-lg outline-none border border-solid
             border-amber-500 leading-relaxed"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id=""
          ></textarea>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => setEditNote(false)}
            className="px-4 py-2 bg-red-600 text-white font-semibold text-lg rounded-lg"
          >
            Cancel
          </button>
          <button
                    onClick={() => {
                          setGeneratedContent(value)
                          setEditNote(false)
                      }
            }
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >Save</button>
        </div>
          </div>
          
{/* animations */}
              <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        .animate-fadeIn {
          animation: fadeIn .25s ease-out forwards;
        }
        
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-45px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown .35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default EditNote;
