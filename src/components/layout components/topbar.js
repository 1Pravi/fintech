import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/layout styles/topbar.css';

function Topbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const openAiWindow = () => {
    navigate("/ai-insights");
  };

  return (
    <div className="topbar">
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>☰</button>
      <h1>FIN ANALYSIS</h1>

      {/* AI Assistant Button - Styled as a mic */}
      <button className="ai-window-open-button" onClick={openAiWindow} title="AI Insights">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 1a3 3 0 0 1 3 3v8a3 3 0 0 1-6 0V4a3 3 0 0 1 3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      </button>
    </div>
  );
}

export default Topbar;
