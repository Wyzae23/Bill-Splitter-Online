interface ResultDisplayProps {
    result: { name: string; amount: number }[]
  }
  
  export function ResultDisplay({ result }: ResultDisplayProps) {
    return (
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2 text-center text-[#01257D]">Bill Split Result</h2>
        <ul className="space-y-2">
          {result.map((person, index) => (
            <li key={index} className="flex justify-between items-center bg-[#E6F9FF] p-2 rounded border border-[#01257D]">
              <span className="font-medium text-[#01257D]">{person.name}:</span>
              <span className="text-[#01257D] font-semibold">${person.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  