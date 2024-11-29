import { useState, useEffect } from 'react'

interface Person {
  name: string
  items: { price: number }[]
}

export function useBillSplitter() {
  const [groupSize, setGroupSize] = useState(0);
  const [people, setPeople] = useState<Person[]>([]);
  const [totalBill, setTotalBill] = useState(0);
  const [result, setResult] = useState<{ name: string; amount: number }[]>([]);
  const [warningMessage, setWarningMessage] = useState('');

  useEffect(() => {
    setPeople(prevPeople => {
      const newPeople = [...prevPeople]
      while (newPeople.length < groupSize) {
        newPeople.push({ name: '', items: [] })
      }
      return newPeople.slice(0, groupSize)
    });
  }, [groupSize]);

  const updatePerson = (index: number, name: string, itemCount: number) => {
    setPeople(prevPeople => {
      const newPeople = [...prevPeople];
      const existingItems = newPeople[index]?.items || [];
      newPeople[index] = {
        name,
        items: Array(itemCount).fill(null).map((_, i) => existingItems[i] || { price: 0 })
      };
      return newPeople;
    });
  }

  const updateItemPrice = (personIndex: number, itemIndex: number, price: number) => {
    setPeople(prevPeople => {
      const newPeople = [...prevPeople];
      if (newPeople[personIndex] && newPeople[personIndex].items[itemIndex]) {
        newPeople[personIndex].items[itemIndex].price = price;
      }
      return newPeople;
    });
  };

  const validateFields = (): boolean => {
    if (groupSize === 0) {
      setWarningMessage('Please set the number of people.');
      return false;
    }

    if (totalBill === 0) {
      setWarningMessage('Please enter the total bill amount.');
      return false;
    }

    for (const person of people) {
      if (person.name.trim() === '') {
        setWarningMessage('Please enter names for all people.');
        return false;
      }

      if (person.items.length === 0) {
        setWarningMessage('Please add at least one item for each person.');
        return false;
      }

      for (const item of person.items) {
        if (item.price === 0) {
          setWarningMessage('Please enter prices for all items.');
          return false;
        }
      }
    }

    setWarningMessage('');
    return true;
  }

  const handleCalculate = async () => {
    if (!validateFields()) {
      return;
    }

    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ people, totalBill }),
    })
    const data = await response.json();
    setResult(data.data);
  };

  return {
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
  };
};

