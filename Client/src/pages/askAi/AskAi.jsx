import "./askAi.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const AskAi = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, loading]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const currentQuestion = input;
    setLoading(true);
    setInput("");

    setChatHistory((prev) => [...prev, { type: "question", content: currentQuestion }]);

    try {
      const apiKey = import.meta.env.VITE_API_KEY;

      if (!apiKey) {
        throw new Error("API key is not set in .env");
      }

      const result = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = result.data.candidates[0].content.parts[0].text.trim();
      setChatHistory((prev) => [...prev, { type: "answer", content: aiResponse }]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          type: "answer",
          content: "Oops! Something went wrong. Please try again!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ask-ai-wrapper">
      <div className="ask-ai-title">Ask your personal Financial Advisor!</div>

      <form className="ask-ai-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your financial question here..."
          value={input}
          onChange={handleInputChange}
          disabled={loading}
        />
        <button className="ai-btn" disabled={loading || !input.trim()}>
          Ask
        </button>
      </form>
      <div ref={chatContainerRef} className="ask-ai-chat-container">
        {chatHistory.length === 0 ? (
          <div className="ask-ai-welcome">
          
          </div>
        ) : (
          <>
            {chatHistory.map((chat, index) => (
              <div key={index} className="ask-ai-response">
                <strong>{chat.type === "question" ? "You:" : "AI:"}</strong> {chat.content}
              </div>
            ))}
          </>
        )}
        {loading && (
          <div className="ask-ai-response ask-ai-thinking">
            <strong>AI:</strong> Thinking...
          </div>
        )}
      </div>
    </div>
  );
};

export default AskAi;