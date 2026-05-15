import { useState } from "react"

const Section_1 = ({ tasks, setTasks }) => {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
  
    const handleSubmit = (e) =>{
        e.preventDefault()
       const copy_task = [...tasks];
       copy_task.push({title, desc})
       setTasks(copy_task);
        setTitle('')
        setDesc('')
    }

  return (
    <div className=" p-14 bg-black text-white  w-1/3 h-screen">
        <form  onSubmit={handleSubmit} className=" flex flex-col gap-7">
        <h1 className="text-4xl font-bold font-[Poppins] tracking-wide" >Add Notes</h1>
        <input type="text" placeholder="Enter your notes" className="text-white border-2 border-white outline-none py-2 px-4 text-md rounded" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <textarea name="" id="" placeholder="Write the details here" className="text-white outline-none border-2 border-white py-2 px-4 text-md rounded" onChange={(e)=>setDesc(e.target.value)} value={desc}></textarea>
        <button type="submit" className="bg-white text-black px-4 py-2 rounded font-semibold text-lg cursor-pointer">Add note</button>
        </form>
    </div>
  )
}

export default Section_1