"use client"
import React from "react";
import { User, Bot, Tag, CreditCard, } from "lucide-react";

const SuggestionChips = ({ onSuggestionClick }) => (
  <div className="flex flex-wrap gap-2 mt-3">
    <button 
      onClick={() => onSuggestionClick("Tell me about your pricing options")}
      className="flex items-center gap-1 px-3 py-1 text-sm bg-white text-[#F54F35] rounded-full border border-[#F54F35] hover:bg-[#F54F35] hover:text-white transition-colors"
    >
      <CreditCard className="w-3 h-3" /> Pricing
    </button>
    <button 
      onClick={() => onSuggestionClick("What features do you offer?")}
      className="flex items-center gap-1 px-3 py-1 text-sm bg-white text-[#F54F35] rounded-full border border-[#F54F35] hover:bg-[#F54F35] hover:text-white transition-colors"
    >
      <Tag className="w-3 h-3" /> Features
    </button>
   
  </div>
);

// check it working or not : if not then make new file

// Quick action buttons component
const QuickActions = ({ onActionClick }) => (
  <div className="flex flex-col gap-2 mt-3">
    <button 
      onClick={() => onActionClick("Tell me about your pricing plans")}
      className="w-full text-left px-4 py-2 text-sm bg-white text-gray-700 rounded-lg border hover:bg-gray-50 transition-colors"
    >
      💰 Tell me about your pricing plans
    </button>
    <button 
      onClick={() => onActionClick("What are your main features?")}
      className="w-full text-left px-4 py-2 text-sm bg-white text-gray-700 rounded-lg border hover:bg-gray-50 transition-colors"
    >
      🎯 What are your main features?
    </button>
    <button 
      onClick={() => onActionClick("I'd like to see a demo")}
      className="w-full text-left px-4 py-2 text-sm bg-white text-gray-700 rounded-lg border hover:bg-gray-50 transition-colors"
    >
      🎥 I&#39;d like to see a demo
    </button>
    <button 
      onClick={() => onActionClick("How can you help my business?")}
      className="w-full text-left px-4 py-2 text-sm bg-white text-gray-700 rounded-lg border hover:bg-gray-50 transition-colors"
    >
      🤝 How can you help my business?
    </button>
  </div>
);

const ChatMessage = ({ message, isBot, isTyping, isFirstMessage, onActionClick, onSuggestionClick }) => (
  <div className={`flex gap-3 ${isBot ? '' : 'flex-row-reverse'} ${isTyping ? 'animate-fade-in' : ''}`}>
    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isBot ? 'bg-[#F54F35]' : 'bg-gray-200'}`}>
      {isBot ? (
        <Bot className="w-5 h-5 text-white" />
      ) : (
        <User className="w-5 h-5 text-gray-600" />
      )}
    </div>
    <div className="flex flex-col max-w-[80%]">
      <div className={`p-3 rounded-lg ${
        isBot ? 'bg-gray-100' : 'bg-[#F54F35] text-white'
      }`}>
        {isTyping ? (
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        ) : (
          <div className="whitespace-pre-wrap">{message}</div>
        )}
      </div>
      
      {/* Show suggestions only for first bot message */}
      {isBot && isFirstMessage && (
        <div>
          <p className="text-sm text-gray-500 mt-3 mb-2">Quick Actions:</p>
          <QuickActions onActionClick={onActionClick} />
          <p className="text-sm text-gray-500 mt-3 mb-2">Or explore by topic:</p>
          <SuggestionChips onSuggestionClick={onSuggestionClick} />
        </div>
      )}
    </div>
  </div>
);

export default ChatMessage;