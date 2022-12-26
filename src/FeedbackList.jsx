import React from 'react'
import FeedbackItem from './components/FeedbackItem'
import FeedbackStatistics from './components/FeedbackStatistics'
import { motion,AnimatePresence } from "framer-motion"

export default function FeedbackList({data,handleRemove}) {
  return (
    <div className='feedback-list'>
    <AnimatePresence> 
    <FeedbackStatistics data={data}/>
    {data.map((item =>(
      <motion.div
      initial ={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      > 
    <div key={item.id}>
      <FeedbackItem data={data} text={item.text} id={item.id} rating = {item.rating} handleRemove={ handleRemove} /></div>
      </motion.div>
    )))}
    </AnimatePresence>
    </div>)
}
