'use client';

import { GroupSizeSelector } from './components/GroupSizeSelector/GroupSizeSelector';
import { PersonInput } from './components/PersonInput/PersonInput';
import { ResultDisplay } from './components/ResultDisplay/ResultDisplay';
import { Button } from '@/components/ui/button';
import { useBillSplitter } from './hooks/useBillSplitter';

export default function BillSplitter() {
  const {
    groupSize,
    setGroupSize,
    people,
    updatePerson,
    updateItemPrice,
    totalBill,
    setTotalBill,
    result,
    handleCalculate,
    warningMessage
  } = useBillSplitter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#01257D] to-[#00FFFF] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-[#01257D]">Restaurant Bill Splitter</h1>
          <GroupSizeSelector groupSize={groupSize} setGroupSize={setGroupSize} />
          {people.map((person, index) => (
            <PersonInput
              key={index}
              index={index}
              person={person}
              updatePerson={updatePerson}
              updateItemPrice={updateItemPrice}
            />
          ))}
          <div className="mt-4">
            <label htmlFor="totalBill" className="block text-sm font-medium text-[#01257D]">
              Total Bill
            </label>
            <input
              type="number"
              id="totalBill"
              value={totalBill === 0 ? '' : totalBill}
              onChange={(e) => setTotalBill(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-[#01257D] shadow-sm focus:border-[#00FFFF] focus:ring focus:ring-[#00FFFF] focus:ring-opacity-50"
            />
          </div>
          {warningMessage && (
            <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
              {warningMessage}
            </div>
          )}
          <div className="mt-6 flex justify-center">
            <Button onClick={handleCalculate} className="bg-[#01257D] hover:bg-[#00FFFF] hover:text-[#01257D] text-white transition-colors duration-200">Calculate Split</Button>
          </div>
          {result.length > 0 && <ResultDisplay result={result} />}
        </div>
      </div>
    </div>
  );
};

