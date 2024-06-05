import { GoHome } from "react-icons/go";
import { RiTwitterXLine } from "react-icons/ri";
import { BsThreeDots, BsTwitterX } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { CiViewList } from "react-icons/ci";
import { PiBookmarkSimple } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { IoBookmarkOutline, IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { GiHistogram } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { RxLoop } from "react-icons/rx";

export const NAVIGATION_ITEMS = [
  {
    title: 'X',
    icon: BsTwitterX,
  },
  {
    title: 'Home',
    icon: GoHome,
  },
  {
    title: "Explore",
    icon: GoSearch,
  },
  {
    title: 'Notifications',
    icon: HiOutlineBell,
  },
  {
    title: 'Messages',
    icon: HiOutlineEnvelope,
  },
  
  {
    title: 'Lists',
    icon: CiViewList,
  },
  {
    title: 'Bookmarks',
    icon: PiBookmarkSimple,
  },
  {
    title: 'Communities',
    icon: BsPeople,
  },
  {
    title: 'Premium',
    icon: RiTwitterXLine,
  },
  {
    title: 'Profile',
    icon: IoPersonOutline,
  },
  {
    title: 'More',
    icon: CiCircleMore,
  }
];

                
export const TWEET_ACTIONS = [
  {
    name: 'Comment',
    icon: FaRegComment,
    value: '2k',
  },
  {
    name: 'Retweet',
    icon: RxLoop,
    value: '1k',
  },
  {
    name: 'Like',
    icon: IoIosHeartEmpty,
    value: '100k',
  },
  {
    name: 'Share',
    icon: GiHistogram,
    value: '104.5k',
  },
]