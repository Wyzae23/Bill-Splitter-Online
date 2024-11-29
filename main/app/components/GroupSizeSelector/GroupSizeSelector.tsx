interface GroupSizeSelectorProps {
    groupSize: number
    setGroupSize: (size: number) => void
  }
  
  export function GroupSizeSelector({ groupSize, setGroupSize }: GroupSizeSelectorProps) {
    return (
      <div className="mb-4">
        <label htmlFor="groupSize" className="block text-sm font-medium text-[#01257D]">
          Number of People
        </label>
        <input
          type="number"
          id="groupSize"
          value={groupSize === 0 ? '' : groupSize}
          onChange={(e) => setGroupSize(Math.max(0, parseInt(e.target.value) || 0))}
          className="mt-1 block w-full rounded-md border-[#01257D] shadow-sm focus:border-[#00FFFF] focus:ring focus:ring-[#00FFFF] focus:ring-opacity-50"
        />
      </div>
    );
  };
  
  