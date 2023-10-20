'use client'

import { toast } from '@/hooks/use-toast';
import { useSession } from 'next-auth/react';
//only for patient
import React, { useState } from 'react';

function MedicineForm() {
  const {data:session} = useSession()
  const [medicineEntry, setMedicineEntry] = useState({
    name: '',
    hour: '',
    minute: '',
    frequency: '0',
    caretaker: '',
    number: '',
  });

  const handleMedicineNameChange = (value:  string) => {
    setMedicineEntry({ ...medicineEntry, name: value });
  };

  const handleHourChange = (value:  string) => {
    setMedicineEntry({ ...medicineEntry, hour: value });
  };

  const handleMinuteChange = (value:  string) => {
    setMedicineEntry({ ...medicineEntry, minute: value });
  };

  const handleFrequencyChange = (value:  string) => {
    setMedicineEntry({ ...medicineEntry, frequency: value });
  };
  
  const handleCaretakerChange = (value:  string) => {
    setMedicineEntry({ ...medicineEntry, caretaker: value });
  };

  const handleNumberChange = (value:  string) => {
    setMedicineEntry({ ...medicineEntry, number: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const dataToSave = {
      name: medicineEntry.name,
      hour: `${medicineEntry.hour}`,
      minute: `${medicineEntry.minute}`,
      email : session?.user?.email,
      freq: medicineEntry.frequency,
      caretaker: medicineEntry.caretaker,
      number: medicineEntry.number,
    };

    try {
      const response = await fetch('http://localhost:5000/medicine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      });

      if (response.ok) {
        console.log('Medicine data saved successfully.');
        toast({
          title: "Medicine added for alert",
          description:` You will be notified at ${medicineEntry.hour} : ${medicineEntry.minute}`
        })
        handleMedicineNameChange('')
        handleHourChange('')
        handleMinuteChange('')
        // Clear the form or take any other desired action
      } else {
        console.error('Failed to save medicine data.');
        toast({
          title: "Something went wrong",
          description:`There is some problem from our end.`,
          variant: 'destructive',
        })
      }
    } catch (error) {
      console.error('An error occurred while saving medicine data:', error);
    }
  };

  return (
    <div className="flex flex-col w-[400px]">
      <h1 className="font-semibold text-xl m-auto">Add Medicine Details</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center'>
          <label>
            <input
              type="text"
              placeholder='Medicine Name'
              value={medicineEntry.name}
              className='w-[300px] h-[40px] border-2 border-black px-3 rounded-lg my-1'
              onChange={(e) => handleMedicineNameChange(e.target.value)}
            />
          </label>
          <label>
            <input
              type="number"
              min="0"
              max="23"
              placeholder='Hour'
              className='w-[300px] h-[40px] border-2 border-black px-3 rounded-lg my-1'
              value={medicineEntry.hour}
              onChange={(e) => handleHourChange(e.target.value)}
            />
          </label>
          <label>
            <input
              type="number"
              min="0"
              max="59"
              placeholder='Minute'
              className='w-[300px] h-[40px] border-2 border-black px-3 rounded-lg my-1'
              value={medicineEntry.minute}
              onChange={(e) => handleMinuteChange(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              min="0"
              max="59"
              placeholder='Caretaker email'
              className='w-[300px] h-[40px] border-2 border-black px-3 rounded-lg my-1'
              value={medicineEntry.caretaker}
              onChange={(e) => handleCaretakerChange(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder='mobile number with country code'
              className='w-[300px] h-[40px] border-2 border-black px-3 rounded-lg my-1'
              value={medicineEntry.number}
              onChange={(e) => handleNumberChange(e.target.value)}
            />
          </label>
          <label>
            <select
              value={medicineEntry.frequency}
              className='w-[300px] h-[40px] border-2 border-black px-3 rounded-lg my-1'
              onChange={(e) => handleFrequencyChange(e.target.value)}
            >
              <option value="8">Daily</option>
              <option value="0">Sunday</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Webnesday</option>
              <option value="4">Thrusday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
            </select>
          </label>
          <button type="submit" className='w-[300px] h-[40px] border-2 border-black px-3 rounded-lg my-1 hover:cursor-pointer hover:bg-orange-600'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MedicineForm;
