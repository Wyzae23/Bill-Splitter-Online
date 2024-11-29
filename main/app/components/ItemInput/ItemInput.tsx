interface ItemInputProps {
    personIndex: number
    itemIndex: number
    price: number
    updateItemPrice: (personIndex: number, itemIndex: number, price: number) => void
  };
  
  export function ItemInput({ personIndex, itemIndex, price, updateItemPrice }: ItemInputProps) {
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      updateItemPrice(personIndex, itemIndex, Number(e.target.value));
    };
  
    return (
      <div className="mt-2">
        <label htmlFor={`item-${personIndex}-${itemIndex}`} className="block text-sm font-medium text-[#01257D]">
          Item {itemIndex + 1} Price
        </label>
        <input
          type="number"
          id={`item-${personIndex}-${itemIndex}`}
          value={price === 0 ? '' : price}
          onChange={handlePriceChange}
          placeholder="Price"
          className="mt-1 block w-full rounded-md border-[#01257D] shadow-sm focus:border-[#00FFFF] focus:ring focus:ring-[#00FFFF] focus:ring-opacity-50"
        />
      </div>
    );
  };
  
  