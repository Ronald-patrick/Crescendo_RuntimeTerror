import React from 'react'
import '../CSS/Card.css';
const Card = () => {
    return (
        <div className='card'>
                <img src="./pasta.jpg"></img>
                <h1>Italian Pasta</h1>
                <div className='carddetails'>
                    <div className='carddet'>
                    <i class="bi bi-alarm"></i>
                    45 mins
                    </div>
                    <div className='divider'></div>
                    <div className='carddet'>
                    <i class="bi bi-basket"></i>
                    450 kcal
                    </div>
                    
                </div>
                <button>More</button>
                
        </div>
        
    )
}

export default Card
