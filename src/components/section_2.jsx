
const Section_2 = ({ tasks, setTasks }) => {
  return (
    <div className="w-2/3 h-screen bg-black border-l-2 border-white p-14">
      <h1 className="text-4xl font-bold font-[Poppins] tracking-wide text-white">Recent Notes</h1>
      <div className="flex flex-row flex-wrap gap-8 mt-7 ">
        {tasks.map((task, index) => (
          <div key={index} className="bg-[url(https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png)]
           h-72 w-58 rounded-2xl text-black font-[Poppins] flex flex-col justify-between bg-fill bg-no-repeat bg-center">
            <div>
              <h1 className="font-bold text-3xl pt-8 px-5">{task.title}</h1>
              <p className="font-semibold text-xl pt-5 px-5 text-gray-500">{task.desc}</p>
            </div>
            <div> 
              <button className="bg-red-600 text-white font-semibold px-19 py-1 mb-6 mx-3 rounded cursor-pointer" onClick={() => {
                const copy = [...tasks];
                copy.splice(index, 1);
                setTasks(copy);
              }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section_2