import { MessageSquare } from 'lucide-react';

const ChatWidget = () => (
  <div className="fixed bottom-5 right-5 w-[60px] h-[60px] bg-[#ff914d] rounded-full flex items-center justify-center text-white text-2xl cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)] z-[100]">
    <MessageSquare size={24} />
  </div>
);

export default ChatWidget;