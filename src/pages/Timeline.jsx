import { useState } from 'react';

const Timeline = () => {
  const [filter, setFilter] = useState("All");
  const logs = [
    { name: "Arif Ahmed", type: "Call", date: "12 April" },
    { name: "Yasin", type: "Text", date: "13 April" },
    { name: "Sakib", type: "Video", date: "14 April" }
  ];

  const filteredLogs = filter === "All" ? logs : logs.filter(l => l.type === filter);

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black">Timeline</h2>
        <div className="flex gap-2 bg-white p-1 rounded-xl border">
          {["All", "Call", "Text", "Video"].map(f => (
            <button onClick={() => setFilter(f)} className={`px-4 py-2 rounded-lg font-bold ${filter === f ? 'bg-[#2B4E41] text-white' : 'text-gray-500'}`}>{f}</button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {filteredLogs.map((log, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border flex justify-between items-center">
            <span className="font-bold text-lg">{log.name}</span>
            <span className="font-black text-xs uppercase text-gray-400">{log.type} — {log.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;