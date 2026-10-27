import React from 'react';
import { Bot } from 'lucide-react';

export const AIFactory: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center space-y-4">
      <div className="w-16 h-16 bg-purple-500/10 text-purple-400 rounded-3xl flex items-center justify-center mx-auto mb-4">
        <Bot className="w-8 h-8" />
      </div>
      <h2 className="text-xl font-extrabold text-white">AI Factory Section Removed</h2>
      <p className="text-sm text-slate-400">
        AI factory and API keys configuration have been removed as requested. You can manage questions, students, and exams from the other admin tabs.
      </p>
    </div>
  );
};

export default AIFactory;
