import React, { useState } from "react";
import StoreCard from "../components/StoreCard";

const dummyStores = [
  { id: 1, name: "Store A", address: "123 Main St", rating: 4.2 },
  { id: 2, name: "Store B", address: "456 Oak Ave", rating: 3.8 },
];

const UserDashboard = () => {
  const [stores] = useState(dummyStores);

  const handleRate = (id, rating) => {
    console.log(`User rated store ${id} with ${rating}`);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {stores.map((store) => (
        <StoreCard key={store.id} store={store} onRate={handleRate} />
      ))}
    </div>
  );
};

export default UserDashboard;
