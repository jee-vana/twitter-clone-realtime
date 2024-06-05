import React from 'react'
import Posts from './Posts'

const Maincomponent = () => {
  return (
    <main className="xl:ml-[275px] ml-[4.5rem] max-w-2xl min-h-screen border-l-[1px] border-r-[1px] border-white/25" >
        <div className="sticky top-0 flex items-center w-[42rem] h-14 border-white/25  backdrop-blur bg-black/40">
            <div className="font-bold text-md my-3 ml-[11.5rem] border-b-4 border-b-primary">For You </div>
            <div className=" text-md my-3 ml-40 text-white/50">Following</div>
        </div>
        <div className="border-t-[1px] border-white/25 w-[42rem] min-h-32 flex">
            <div className="flex flex-col">
                {/* Image */}
                <div className="w-10 h-10 bg-slate-100 rounded-full m-2"/>
            </div>
            <div className="flex flex-col items-center w-full">
            <div className="w-full h-full">
                <input type="text" placeholder="What's happening?!" className="w-[95%] bg-black m-3 text-2xl" />
                {/* shadcn component */}
                <div className="text-primary mx-6 my-1">everyone can reply</div>
            </div>
            <div className="flex border-t-[1px] border-white/25 w-[95%] mr-8 max-h-20 px-4 py-2 items-center justify-between">
            <div className="text-primary">icons</div>
                <button className="rounded-full bg-primary h-10 w-20 text-bold text-lg text-center hover:bg-opacity-70 transition duration-200">
                Post
                </button>
            </div>
            </div>
        </div>
        {
            Array.from({length: 5}).map((_, index) => (
                <div key={index}>
                    <Posts /> 
                </div>
            ))
        }
    </main>
  )
}

export default Maincomponent