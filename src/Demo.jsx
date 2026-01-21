import { useState } from 'react';

function BagStore() {
  // Initialize as empty string so the list is hidden at start
  const [minPrice, setMinPrice] = useState("");

  const allBags = [
    { id: 1, name: "Eco Tote", price: 15 },
    { id: 2, name: "Daily Backpack", price: 45 },
    { id: 3, name: "Premium Leather Satchel", price: 120 },
    { id: 4, name: "Simple Clutch", price: 8 }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lone Wolf's Bag Shop</h2>
      
      <label>Show bags expensive than: $</label>
      <input 
        type="number" 
        style={{ color: 'black' }}
        value={minPrice}
        // If the input is empty, set to "", otherwise convert to Number
        onChange={(e) => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))} 
      />

      <hr />

      <div className="bag-list">
        {/* Only show the list if minPrice is actually a number/has value */}
        {minPrice !== "" && (
          allBags
            .filter(bag => bag.price < minPrice)
            .map(bag => (
              <div key={bag.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h3>{bag.name}</h3>
                <p>Price: ${bag.price}</p>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default BagStore;