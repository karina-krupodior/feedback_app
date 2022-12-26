import React from 'react';
import Card from './Card';
import { FaTimes } from 'react-icons/fa';

export default function FeedbackItem({text,rating,id,handleRemove}) {
  return (
    <>
       <Card>
        <p className='text-display'>{text}</p>
        <p className='num-display'>{rating} </p>
        <button className='close' type='button' onClick={()=> handleRemove(id)}><FaTimes color='red'/></button>
   </Card>
    </>

  )
}
