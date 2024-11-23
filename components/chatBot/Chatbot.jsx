"use client";
import React, { useEffect, useRef, useState } from "react";
import { X, Send, Bot, Loader2 } from "lucide-react";
import ChatMessage from "./ChatMessage";
import botResponses from "@/data/botResponses";

const Chatbot = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: botResponses.greeting[0], isBot: true },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Handle scroll function: This function is responsible for managing the scroll behavior of the chat container.s
  const handleScroll = (e) => {
    e.stopPropagation();
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      if (scrollTop === 0) {
        chatContainerRef.current.scrollTop = 1;
      } else if (scrollTop + clientHeight === scrollHeight) {
        chatContainerRef.current.scrollTop = scrollHeight - clientHeight - 1;
      }
    }
  };

  // Prevent scroll propagation:This function stops scroll events from propagating to parent containers.
  const preventScrollPropagation = (e) => {
    e.stopPropagation();
  };

  // Auto-scroll to bottom when new messages arrive(working fine) :Automatically scrolls the chat container to the latest message.
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const generateBotResponse = (userMessage) => {
    const messageLower = userMessage.toLowerCase();

    // Company-specific context patterns
    const contexts = {
      pricing:
        /\b(pricing|cost|price|plan|package|subscription|payment|affordable|expensive)\b/i,
      features:
        /\b(feature|capability|function|tool|work|do|can|able|offer)\b/i,
      demo: /\b(demo|demonstration|show|preview|trial|test|try|see|watch)\b/i,
      integration:
        /\b(integrate|connection|sync|api|webhook|connect|work with)\b/i,
      support: /\b(support|help|contact|reach|assist|issue|problem)\b/i,
      case_studies:
        /\b(case study|example|success|story|result|outcome|achieve|client)\b/i,
      greeting: /\b(hi|hello|hey|good|morning|afternoon|evening)\b/i,
    };

    // Customer sentiment patterns
    const sentiments = {
      frustrated:
        /\b(frustrated|annoying|upset|angry|mad|irritated|difficult|not working)\b/i,
      confused:
        /\b(confused|unclear|don't understand|what do you mean|explain|clarify)\b/i,
    };

    // Check for sentiment first
    for (const [sentiment, pattern] of Object.entries(sentiments)) {
      if (pattern.test(messageLower)) {
        return botResponses[sentiment][
          Math.floor(Math.random() * botResponses[sentiment].length)
        ];
      }
    }

    // Check for specific contexts
    for (const [context, pattern] of Object.entries(contexts)) {
      if (pattern.test(messageLower)) {
        return botResponses[context][
          Math.floor(Math.random() * botResponses[context].length)
        ];
      }
    }

    // For longer messages, use detailed response
    if (messageLower.length > 50) {
      return botResponses.detailed[
        Math.floor(Math.random() * botResponses.detailed.length)
      ];
    }

    // Default response if no specific context is matched
    return botResponses.default[
      Math.floor(Math.random() * botResponses.default.length)
    ];
  };

  // New function to handle quick actions and suggestion clicks
  const handleActionClick = (actionMessage) => {
    if (actionMessage.trim()) {
      setMessages((prev) => [...prev, { text: actionMessage, isBot: false }]);
      setIsTyping(true);

      // Simulate response time
      const responseTime = Math.random() * 1000 + 1000; // 1-2 seconds

      setTimeout(() => {
        const botResponse = generateBotResponse(actionMessage);
        setIsTyping(false);
        setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
      }, responseTime);
    }
  };

  const handleSend = async () => {
    if (message.trim()) {
      const userMessage = message.trim();
      setMessage("");
      setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
      setIsTyping(true);

      // Simulate varying response times for more realism
      const responseTime = Math.random() * 1000 + 1000; // 1-2 seconds

      setTimeout(() => {
        const botResponse = generateBotResponse(userMessage);
        setIsTyping(false);
        setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
      }, responseTime);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-20 right-4 sm:right-6 md:right-8 w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-lg shadow-2xl z-50 flex flex-col"
      style={{ overscrollBehavior: "contain" }}
      onWheel={preventScrollPropagation}
      onTouchMove={preventScrollPropagation}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="bg-[#F54F35] p-2 rounded-lg">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">RMax Assistant</h3>
            <p className="text-sm text-gray-500">
              {isTyping ? "Typing..." : "Online"}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 chat-container"
        style={{
          overscrollBehavior: "contain",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        onScroll={handleScroll}
        onWheel={preventScrollPropagation}
        onTouchMove={preventScrollPropagation}
      >
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.text}
            isBot={msg.isBot}
            isTyping={isTyping && index === messages.length - 1}
            isFirstMessage={index === 0 && msg.isBot}
            onActionClick={handleActionClick}
            onSuggestionClick={handleActionClick}
          />
        ))}
        {isTyping && <ChatMessage message="" isBot={true} isTyping={true} />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
            disabled={isTyping}
          />
          <button
            onClick={handleSend}
            disabled={isTyping || !message.trim()}
            className={`p-2 rounded-lg transition-colors ${
              isTyping || !message.trim()
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
            aria-label="Send message"
          >
            {isTyping ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
