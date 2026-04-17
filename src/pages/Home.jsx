import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
// যদি AddFriendModal এর এরর ঠিক হয়ে থাকে তবে নিচের লাইনটি আনকমেন্ট করুন
// import AddFriendModal from '../components/AddFriendModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error("Error loading friends:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-10 py-20 bg-[#F9FAFB]">
      
      {/* --- 1. Banner Section --- */}
      <div className="text-center mb-20">
        <h1 className="text-6xl font-black text-[#1E293B] mb-6 tracking-tighter italic">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-10">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        {/* Add Friend Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2B4E41] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 mx-auto hover:opacity-90 transition-all shadow-lg active:scale-95"
        >
          <UserPlus size={20} /> Add a Friend
        </button>
      </div>

      {/* --- 2. Summary Stats Cards (আপনার ইমেজ অনুযায়ী) --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24 text-center">
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-5xl font-black text-[#1E293B]">12</h3>
          <p className="text-gray-400 font-bold text-[10px] mt-2 uppercase tracking-widest">Total Friends</p>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-5xl font-black text-[#1E293B]">4</h3>
          <p className="text-gray-400 font-bold text-[10px] mt-2 uppercase tracking-widest">On Track</p>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-5xl font-black text-[#1E293B]">8</h3>
          <p className="text-gray-400 font-bold text-[10px] mt-2 uppercase tracking-widest">Need Attention</p>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-5xl font-black text-[#1E293B]">24</h3>
          <p className="text-gray-400 font-bold text-[10px] mt-2 uppercase tracking-widest">Interactions</p>
        </div>
      </div>

      {/* --- 3. Your Friends Grid (12 Cards, 4 Columns) --- */}
      <div className="mb-10">
        <h2 className="text-3xl font-black text-[#1E293B] mb-12">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends.slice(0, 12).map((friend) => (
            <div 
              key={friend.id}
              onClick={() => navigate(`/friend/${friend.id}`)}
              className="bg-white rounded-[40px] p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 flex flex-col items-center text-center group"
            >
              {/* Profile Image */}
              <div className="mb-5">
                <img 
                  src={friend.picture} 
                  alt={friend.name} 
                  className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform border-4 border-white shadow-md"
                />
              </div>
              
              <h3 className="text-2xl font-black text-[#1E293B] mb-1 leading-tight">{friend.name}</h3>
              <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-5">
                {friend.days_since_contact} Days Ago
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {friend.tags.map((tag, i) => (
                  <span key={i} className="bg-[#DCFCE7] text-[#166534] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Status Badge */}
              <div className="mt-auto w-full">
                <span className={`block w-full py-3 rounded-full text-[11px] font-black text-white shadow-sm transition-colors uppercase
                  ${friend.status === 'overdue' ? 'bg-[#EF4444]' : 
                    friend.status === 'almost-due' ? 'bg-[#F59E0B]' : 
                    'bg-[#10B981]'}`}
                >
                  {friend.status.replace('-', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* যদি AddFriendModal এর এরর ঠিক হয়ে থাকে তবে নিচের লাইনটি আনকমেন্ট করুন */}
      {/* <AddFriendModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </div>
  );
};

export default Home;