import React from 'react'

const StarRating = ({rating,handleRating}) => {
    const Stars =(x) => {
        let star =[];
        for (let i=1 ; i <= 5 ; i++){
            if (i<=x){
                star.push(<span onClick={()=> handleRating(i)} style={{color:'gold' , cursor:'pointer'}}>★</span>);
            }
            else 
                star.push(<span onClick={()=> handleRating(i)} style={{color:'black' , cursor:'pointer'} } >★</span>);
         
            }
            return star;
        

       
    };
    
  return (
    <div>{Stars(rating)}</div>
   
  )
}

export default StarRating