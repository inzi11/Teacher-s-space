import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function AINoteGenerator({ setGeneratedContent }) {
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  async function generateNote() {
    // empty prompt
    if (!prompt.trim()) return;

    setIsLoading(true);
    setErrorMsg("");
    setPreview("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const result = await model.generateContent(
        `Generate simple, clean educational notes about: ${prompt}

        IMPORTANT RULES:
        - DO NOT use Markdown formatting.
        - DO NOT use asterisks (*), hashtags (#), dashes (---), or any special characters.
        - DO NOT use bold, italic, or headings syntax.
        - Write everything in plain text only.
        - No lists using "-"
        - Use normal numbered lists only if needed (1. 2. 3.)
        - Keep spacing clean with one blank line between paragraphs.
        - Make the notes teacher-friendly and easy to read.
        - Start with a simple explanation, then key points, then examples.
        - Keep the tone educational and clear.

        The output must be plain text and ready to use directly in a note editor.`
      );

      console.log(result);

      const output = result.response.text();

      setPreview(output);
    } catch (error) {
      console.log("Error generatoing AI notes: ", error);
      setErrorMsg("Failed to generate notes");
    }

    setIsLoading(false);
  }

  function useThisNote() {
    setGeneratedContent(preview);
  }

  return (
    <>



    <div className="bg-white shadow p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">AI Notes Generator</h2>

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

      {errorMsg && <p className="text-red-500 mt-3">{errorMsg}</p>}

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
      </>
  );
}

export default AINoteGenerator;
