import React from 'react';
import { Phone, MessageSquare, Video, Users, ChevronDown } from 'lucide-react';

const Timeline = () => {
  // ডামি ডাটা - আপনার ইমেজের সাথে মিল রেখে
  const interactions = [
    { type: 'Meetup', person: 'Tom Baker', date: 'March 29, 2026', icon: <Users size={18} className="text-yellow-600" />, bgColor: 'bg-yellow-50' },
    { type: 'Text', person: 'Sarah Chen', date: 'March 28, 2026', icon: <MessageSquare size={18} className="text-gray-400" />, bgColor: 'bg-white' },
    { type: 'Meetup', person: 'Olivia Martinez', date: 'March 25, 2026', icon: <Users size={18} className="text-yellow-600" />, bgColor: 'bg-yellow-50' },
    { type: 'Video', person: 'Aisha Patel', date: 'March 23, 2026', icon: <Video size={18} className="text-gray-400" />, bgColor: 'bg-white' },
    { type: 'Meetup', person: 'Sarah Chen', date: 'March 21, 2026', icon: <Users size={18} className="text-yellow-600" />, bgColor: 'bg-yellow-50' },
    { type: 'Call', person: 'Marcus Johnson', date: 'March 19, 2026', icon: <Phone size={18} className="text-green-600" />, bgColor: 'bg-white' },
    { type: 'Meetup', person: 'Aisha Patel', date: 'March 17, 2026', icon: <Users size={18} className="text-yellow-600" />, bgColor: 'bg-yellow-50' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Title */}
      <h1 className="text-4xl font-black text-[#1E293B] mb-8">Timeline</h1>

      {/* Filter Dropdown */}
      <div className="mb-8 relative max-w-[200px]">
        <button className="w-full flex justify-between items-center px-4 py-2 bg-white border border-gray-100 rounded-xl shadow-sm text-sm font-medium text-gray-400">
          Filter timeline
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Timeline Items */}
      <div className="flex flex-col gap-4">
        {interactions.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-4 p-5 rounded-2xl border border-gray-50 shadow-sm transition-all hover:shadow-md cursor-pointer ${item.bgColor}`}
          >
            {/* Icon Circle */}
            <div className="w-10 h-10 flex items-center justify-center">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <p className="text-sm font-bold text-gray-500">
                <span className="text-[#2B4E41]">{item.type}</span> with {item.person}
              </p>
              <p className="text-xs font-bold text-gray-300 mt-0.5">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;