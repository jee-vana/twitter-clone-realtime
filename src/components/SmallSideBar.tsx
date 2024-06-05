import { NAVIGATION_ITEMS } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'

const SmallSideBar = () => {
  return (
    <section className="fixed flex-col items-stretch xl:flex h-screen space-y-4 ml-52">
      <div className="flex flex-col mr-3">
      { NAVIGATION_ITEMS.map((item) => (
          <Link className="hover:bg-white/10 text-white/80 text-xl transition duration-200 rounded-3xl p-4 flex items-center justify-start space-x-2 w-full"
            href={item.title === 'X' ? '/home' : `/${item.title.toLowerCase()}`} 
            key={item.title} >
              <div className="text-white pr-2 text-[1.8rem]">
                <item.icon />
              </div>
            </Link>
        ))}
          <button className="rounded-full bg-primary mt-5 h-12 text-bold text-lg text-center hover:bg-opacity-70 transition duration-200">
              Post
            </button>
      </div>
        <button className="mr-3 mt-3 absolute bottom-7 text-xs flex items-center rounded-full w-full pr-4 hover:bg-white/10 transition duration-200">
        <div className="rounded-full bg-slate-400 w-8 h-8 m-3"></div>
        </button>
    </section>
  )
}

export default SmallSideBar