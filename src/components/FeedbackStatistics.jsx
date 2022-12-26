import React from 'react'

export default function FeedbackStatistics({data}) {
    let average = data.reduce((prev,cur) => {
        return prev + cur.rating
    },0)/data.length
    average =  +average.toFixed(1)
  return (
    <div className="feedback-stats">
  <h3 >Reviews: {data.length}</h3>
    <h3>Average Rating: { isNaN(average) ? 0 :  average }  </h3>
    </div>
  )
}
