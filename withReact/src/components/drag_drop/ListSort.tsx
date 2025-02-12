import React, { useRef, useState } from "react";

const ListSort: React.FC = function () {
  const [people, setPeople] = useState([
    { id: 1, name: "Emma Watson" },
    { id: 2, name: "Shraddha Kapoor" },
    { id: 3, name: "Sabila Nur" },
    { id: 4, name: "Millie" },
    { id: 5, name: "Lisa" },
  ]);

  const dragPerson = useRef<number>(0);
  const dragOverPerson = useRef<number>(0);
  function handleSort() {
    const peopleclone = [...people];

    const temp = peopleclone[dragPerson["current"]];
    peopleclone[dragPerson["current"]] = peopleclone[dragOverPerson["current"]];
    peopleclone[dragOverPerson["current"]] = temp;

    setPeople(peopleclone);
  }
  return (
    <main className="grid place-items-center min-h-max space-y-4">
      <h1 className="text-2xl font-bold mt-4">List of the Beauties</h1>
      {people.map((beauty, index) => (
        <div
          key={index}
          className="relative flex space-x-2 border rounded-sm p-2 bg-slate-400 cursor-grab"
          draggable
          onDragStart={() => (dragPerson.current = index)}
          onDragEnter={() => (dragOverPerson.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
        >
          <p>{beauty.name}</p>
        </div>
      ))}
    </main>
  );
};

export default ListSort;
