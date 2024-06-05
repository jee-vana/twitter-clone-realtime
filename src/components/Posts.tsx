import { TWEET_ACTIONS } from '@/utils/constants'
import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import { GiHistogram } from 'react-icons/gi'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoBookmarkOutline } from 'react-icons/io5'
import { MdOutlineFileUpload } from 'react-icons/md'
import { RxLoop } from 'react-icons/rx'
import { VscVerifiedFilled } from 'react-icons/vsc'

const Posts = () => {
  return (
    <section className="border-t-[1px] border-white/25 w-[42rem] min-h-64 flex">
        <div className="flex flex-col">
            {/* Image */}
            <div className="w-10 h-10 bg-slate-100 rounded-full m-2"/>
        </div>
        <div className="flex flex-col w-full m-3">
            <div className="flex items-center">
                <div className="mr-1 text-md font-bold">Jeevan A </div>
                <VscVerifiedFilled className='text-primary text-xl'/>
                <div className="mx-1 text-white/60">@j_thriver</div>
                <div className="h-1 w-1 rounded-full bg-white"></div>
                <div className="mx-1 text-white/50">2 hours ago</div>
            </div>
            <div className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aliquid. Error quia magnam odio atque eos facere, cum consequuntur esse unde fugit officiis nostrum, laboriosam, cumque illo vel! Dolor, sint?
            </div>
            {/* <Image /> */}
            <div className="w-full h-[400px] bg-slate-500 rounded-2xl" />
            <div className="flex mt-4 justify-between">
                {
                    TWEET_ACTIONS.map((item) => (
                        <div className={`flex items-center text-white/60 ${(item.name === 'Like') ? "hover:text-red hover:font-medium" : (item.name === 'Retweet') ? "hover:text-bright" : 'hover:text-primary'}   cursor-pointer transition duration-200 ease-in-out`}
                        key={item.value}>
                            <item.icon className='text-xl'/>
                            <div className="m-1">
                                {item.value}
                            </div>
                        </div>
                    ))
                }
                <div className="flex items-center space-x-3">
                    <IoBookmarkOutline className='text-white/60 hover:text-primary cursor-pointer transition duration-200 ease-in-out text-xl' />
                    <MdOutlineFileUpload className='text-white/60 hover:text-primary cursor-pointer transition duration-200 ease-in-out text-xl' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Posts