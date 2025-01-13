import React from 'react';

const quickQuestions = [
  { question: "What are some effective study techniques for better retention?" },
  { question: "How can I improve my time management for studying?" },
  { question: "Can you create a customized study plan for my subjects?" },
  { question: "What are the best ways to prepare for exams?" },
  { question: "Can you help me with interactive lessons in mathematics?" },
  { question: "What are some strategies to stay focused during study sessions?" },
  { question: "How can I track my learning progress with quizzes?" },
];


export const QuickQuestions = ({ onQuestionClick }) => {
  return (
    <div className="w-full max-w-sm p-6 bg-gray-800 shadow-lg rounded-2xl border border-gray-700 pointer-events-auto">
      <h2 className="font-black text-xl mb-4 text-gray-100">Quick Questions</h2>
      <div className="max-h-80 overflow-y-auto scrollbar-custom">
        <ul className="flex flex-col gap-2">
          {quickQuestions.map(({ question }, index) => (
            <li key={index} className="relative group">
              <button
                onClick={() => onQuestionClick(question)}
                className="w-full text-left p-4 rounded-lg bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform transform hover:scale-105 duration-300"
              >
                <span className="flex items-center gap-3 text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-blue-400 group-hover:text-blue-500 transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  {question}
                </span>
                {/* Additional hover detail */}
                <span className="absolute left-0 top-full mt-2 hidden group-hover:block p-2 bg-gray-900 text-white text-xs rounded-md shadow-lg">
                  Click to select this question
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: #1f2937; /* Dark background for the track */
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #4b5563; /* Darker thumb color */
          border-radius: 6px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #6b7280; /* Lighter thumb color on hover */
        }
      `}</style>
    </div>
  );
};
