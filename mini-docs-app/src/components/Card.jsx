import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
function Card({ data, reference }) {

  return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}}  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative w-60 h-72 flex-shrink-0 rounded-[40px] px-8 py-10 bg-zinc-900 text-white overflow-hidden'>
            <FaRegFileLines/>
            <div className='text-sm leading-tight mt-5 font-semibold'>{ data.desc }</div>
            <div className='absolute bottom-0 left-0 w-full'>
              <div className="flex items-center justify-between py-3 mb-5 px-8">
                <h5>{ data.filesize }</h5>
                <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                  {data.close ? <IoMdClose size=".9em" color="#ffffff"/> : <LuDownload size=".9em" color="#ffffff"/>}
                </span>
              </div>
              {data.tag.isOpen && <div className={`w-full ${data.tag.color == 'blue' ? "bg-blue-400" : "bg-green-400"} py-4 flex items-center justify-center`}>
                  <h3 className="text-sm font-semibold">{ data.tag.title }</h3>
              </div>
              }
            </div>
        </motion.div>
  )
}

export default Card
