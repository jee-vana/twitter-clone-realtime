import LeftSideBar from "@/components/LeftSideBar";
import Maincomponent from "@/components/Maincomponent";


export default function Home() {
  return (
    <main className="w-full h-full flex-row flex justify-center items-center relative">
      <div className="max-w-screen-xl w-[1280px] h-full flex flex-row relative">
        <LeftSideBar />
        <Maincomponent />
        <section className="">Timeline</section>
      </div>
    </main>
  );
}
