import React from "react";

const StoreCard = ({ store, onRate }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{store.name}</h3>
      <p className="text-gray-500">{store.address}</p>
      <p className="mt-2">⭐ Average Rating: {store.rating || "No ratings yet"}</p>
      <div className="mt-3">
        <label className="block text-sm font-medium">Submit Rating</label>
        <select
          className="border p-2 rounded w-full mt-1"
          onChange={(e) => onRate(store.id, e.target.value)}
        >
          <option value="">Select rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StoreCard;
