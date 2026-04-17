import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Calendar } from 'lucide-react';

const FriendDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <div className="p-20 text-center font-bold">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 font-bold text-gray-500 mb-8">
        <ArrowLeft size={20} /> Back
      </button>
      <div className="bg-white rounded-[40px] shadow-xl border-4 border-white overflow-hidden">
        <div className="h-32 bg-[#2B4E41]"></div>
        <div className="px-10 pb-10">
          <img src={friend.picture} className="w-32 h-32 rounded-[32px] border-8 border-white -mt-16 object-cover shadow-lg" alt="" />
          <h1 className="text-4xl font-black mt-6">{friend.name}</h1>
          <p className="text-gray-500 mt-2 font-medium">{friend.bio}</p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <p className="text-xs font-bold text-gray-400 uppercase">Status</p>
              <p className="font-bold text-primary">{friend.status}</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <p className="text-xs font-bold text-gray-400 uppercase">Contact Goal</p>
              <p className="font-bold">{friend.goal} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;