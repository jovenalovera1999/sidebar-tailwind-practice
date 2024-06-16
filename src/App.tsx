import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen-full p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-200 relative`}
      >
        <BsArrowLeft
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          } `}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillAppstore className="bg-blue-300 text-4xl rounded cursor-pointer block float-left mr-2" />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Microsoft
          </h1>
        </div>
      </div>
      <div className="flex-1 p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
        <p className="text-1xl">
          Hello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello World Hello World Hello World Hello WorldHello World Hello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello WorldHello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello World Hello WorldHello World Hello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World Hello
          WorldHello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello World Hello World Hello World Hello
          WorldHello World Hello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello WorldHello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello World Hello
          WorldHello World Hello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello World Hello WorldHello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          WorldHello WorldHello WorldHello World Hello WorldHello World Hello
          World Hello World Hello WorldHello World Hello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          WorldHello WorldHello World Hello WorldHello World Hello WorldHello
          World Hello World Hello WorldHello World Hello WorldHello WorldHello
          World
        </p>
      </div>
    </div>
  );
}

export default App;
