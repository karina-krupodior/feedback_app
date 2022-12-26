import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import dataForItems from './components/data';
import FeedbackList from './FeedbackList';
import FeedbackForm from './components/FeedbackForm';

function App() {
    const [data,setData] = useState(dataForItems)
    const  handleRemove = (id) =>{
        if(window.confirm("Are you sure you want to delete item ?")) {
            const newList = data.filter((item => item.id !== id))
            setData(newList)
        }}
const handleAdd = (newDataList) => {
        newDataList.id = uuidv4()
setData([newDataList,...data])
}
return (
<>
<div className='container'> 
<Header/>
<FeedbackForm handleAdd={handleAdd} />
<FeedbackList  data={data}  handleRemove={ handleRemove}   />
</div>
</>
);
}

export default App;
