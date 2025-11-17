import React, {useState } from "react";

function AINoteGenerator({setGeneratedContent}) {
  
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const [prompt, setPrompt] = useState("");

  function generateNote() {
    // empty prompt
    if (!prompt.trim()) return; 

    setIsLoading(true);


    // Temporary simulation for now
    setTimeout(() => {
      const fakeAIText = `Generated notes for: ${prompt}`;
      setPreview(fakeAIText);
      setIsLoading(false);
    }, 3000);
  }

  function useThisNote() {
    setGeneratedContent(preview);
  }

  return (
    <div className="bg-white shadow p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">
        AI Notes Generator 
      </h2>

      <input
        className="w-full border p-3 rounded-lg"
        placeholder="Enter topic or prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateNote}
        className="mt-3 px-5 py-2 bg-purple-600 text-white rounded-lg"
      >
        {isLoading ? "Generating..." : "Generate"}
      </button>

      {preview && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <p className="whitespace-pre-wrap">{preview}</p>

          <button
            onClick={useThisNote}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Use This Note
          </button>
        </div>
      )}
    </div>
  );
}

export default AINoteGenerator;
