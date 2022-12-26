import React from 'react'
import Card from './Card'
import { useState } from 'react'
import Button from './Button'
import RatingSelect from '../RatingSelect'

export default function FeedbackForm({handleAdd}) {
    const [review,setReview] = useState('')
    const [btnDisabled,setDisabled] = useState(true)
    const [message,setMessage] = useState("")
    const [rating,setRating] = useState(10)

    const HandleInput = (e) => {
        setReview(e.target.value)
        if(review === '') {
            setMessage("")
            setDisabled(true)
        }else if (review !== "" && review.trim().length <= 10) {
            setMessage("At least must be 10 characters")
            setDisabled(true)
        }else {
            setDisabled(false)
            setMessage("")
        }

    }
    const handleSubmit =  (e) => {
        e.preventDefault()
        if(review.trim().length > 10 ){
            const newDataList = {
                text:review,
                rating:rating
            }
            handleAdd(newDataList)
            setReview("")

        }

    }
return (
    <Card>
        <form onSubmit={handleSubmit}>
        <h2> How would you rate your  service with us?</h2>
        <RatingSelect select ={(rating)=> setRating(rating)}/>
        <div className="input-group">
        <input  type="text" placeholder='Write a review'  onChange={HandleInput} value={review}/>
        <Button type='submit' className='btn' version='primary' isDisabled={btnDisabled}>Send</Button>
        </div>
        </form>
        {message}
    </Card>
)
}
