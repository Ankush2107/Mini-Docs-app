import { useRef } from "react";
import Card from "./Card";

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing", 
      filesize: ".9mb0", 
      close: true,
      tag:  {isOpen: true, title: "Download now", color: "green"}
    }, 
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing", 
      filesize: ".9mb0", 
      close: true,
      tag:  {isOpen: true, title: "Download now", color: "blue"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing", 
      filesize: ".9mb0", 
      close: false,
      tag:  {isOpen: false, title: "Download now", color: "blue"}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing", 
      filesize: ".9mb0", 
      close: true,
      tag:  {isOpen: true, title: "Download now", color: "blue"}
    }
  ]
  return (
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap py-6 px-6 '>
          {data.map((item, index) => (
            <Card key={index} data={item} reference={ref} />
          ))}
      </div>
  )
}

export default Foreground;
