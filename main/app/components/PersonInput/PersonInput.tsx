import { useState, useEffect } from 'react'
import { ItemInput } from '../ItemInput/ItemInput';

interface PersonInputProps {
  index: number
  person: { name: string; items: { price: number }[] }
  updatePerson: (index: number, name: string, itemCount: number) => void
  updateItemPrice: (personIndex: number, itemIndex: number, price: number) => void
};

export function PersonInput({ index, person, updatePerson, updateItemPrice }: PersonInputProps) {
  const [name, setName] = useState(person.name);
  const [itemCount, setItemCount] = useState(person.items.length);

  useEffect(() => {
    updatePerson(index, name, itemCount);
  }, [name, itemCount, index, updatePerson]);

  return (
    <div className="mb-6 p-4 border border-[#01257D] rounded-lg bg-[#E6F9FF]">
      <label htmlFor={`person-${index}`} className="block text-sm font-medium text-[#01257D]">
        Person {index + 1} Name
      </label>
      <input
        type="text"
        id={`person-${index}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-1 block w-full rounded-md border-[#01257D] shadow-sm focus:border-[#00FFFF] focus:ring focus:ring-[#00FFFF] focus:ring-opacity-50"
      />
      <label htmlFor={`itemCount-${index}`} className="block mt-2 text-sm font-medium text-[#01257D]">
        Number of Items
      </label>
      <input
        type="number"
        id={`itemCount-${index}`}
        value={itemCount === 0 ? '' : itemCount}
        onChange={(e) => setItemCount(Math.max(0, parseInt(e.target.value) || 0))}
        className="mt-1 block w-full rounded-md border-[#01257D] shadow-sm focus:border-[#00FFFF] focus:ring focus:ring-[#00FFFF] focus:ring-opacity-50"
        min="0"
      />
      {person.items.map((item, itemIndex) => (
        <ItemInput
          key={itemIndex}
          personIndex={index}
          itemIndex={itemIndex}
          price={item.price}
          updateItemPrice={updateItemPrice}
        />
      ))}
    </div>
  );
}

