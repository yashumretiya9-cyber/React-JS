import React, { useState } from "react";

const NoteApp = () => {
  const [Heading, setHeading] = useState("");
  const [Notes, setNotes] = useState("");
  const [Task, setTask] = useState([]);

  function Submitform() {
    // console.log("Task Created.....", { Title: Heading, Topics: Notes });
    let card = [...Task];
    card.push({ Title: Heading, Topics: Notes });
    setTask(card);
    // console.log(Task);
    setHeading("");
    setNotes("");
  }

  return (
    <>
      <section className="lg:flex item-center jsutify-center">
        {/* Add task */}
        <div className="lg:w-1/2 h-screen flex items-center justify-center ">
          <form
            className="bg-[#222] text-amber-300 font-bold rounded-xl p-6"
            onSubmit={(e) => {
              e.preventDefault();
              Submitform();
            }}
          >
            <h1 className="text-center text-3xl items-center justify-center text-amber-400 font-bold">
              Cretae Your Notes{" "}
            </h1>
            <input
              type="text"
              className="bg-[#555] px-4 py-2 outline-none text-white block my-4 w-96 focus:ring-2 focus:ring-amber-600 font-bold"
              placeholder="Heading"
              value={Heading}
              onChange={(e) => {
                setHeading(e.target.value);
              }}
            />
            <textarea
              rous="10"
              className="bg-[#555] px-4 py-10 outline-none text-white block my-4 w-96 focus:ring-2 focus:ring-amber-600 "
              placeholder="Topics"
              value={Notes}
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            ></textarea>
            <input
              type="submit"
              value="Create Note"
              className="w-96 px-4 py-2 bg-red-600 active:scale-95 active:text-amber-100 active:text-aember600 rounded-md"
            />
          </form>
        </div>

        {/* create note */}
        <div className="lg:w-1/2 h-screen max-lg:border-t-2 lg:border-l-2 border-dashed border-black bg-white p-6 flex flex-wrap gap-4 justify-center overflow-auto">
          {Task.map((task, id) => {
            return (
              <div
                className="w-full max-w-72 h-72 bg-white shadow-2xl rounded-2xl flex items-end justify-center pb-3 border border-orange-400 relative "
                key={id}
              >
                <img
                  src="./pin.png"
                  alt="pin"
                  className="w-12 h-10 absolute z-10 top-2 rotate-1 drop-shadow-2xl "
                />
                <div className="bg-orange-100 rounded-3xl w-64 h-58">
                  <h1 className="text-3xl text-orange-500 py-1 p-2">
                    {id + 1}
                  </h1>
                  <h1 className="text-center text-xl font-semibold py-1">
                    {task.Title}
                  </h1>
                  <p className="text-md text-gray-700 font-medium p-2">
                    {task.Topics}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default NoteApp;
