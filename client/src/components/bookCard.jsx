import React, { useEffect } from "react";
import { useState } from "react";


const Card = (props)=>{
    const [found,setFound] = useState(false);
    
    return[
        (props.isSearched === false)?
        
            <div className="bookCard">
                <img src="https://www.nicepng.com/png/detail/363-3637443_cropped-perry-public-library-color-logo-a-book.png" alt="" />
                <h2>{props.booksData.title}</h2>
                <h3>by {props.booksData.author}</h3>
                <p>publisher: {props.booksData.publication}</p>
                <p>units: {props.booksData.copiesLeft}</p>
            </div>
        
        :
            (props.booksData.title.toLowerCase()===props.searchField.title.toLowerCase() || props.booksData.author.toLowerCase()===props.searchField.author.toLowerCase()) ?
                // {setFound(true)},              
                <div className="bookCard" >
                    <img src="https://www.nicepng.com/png/detail/363-3637443_cropped-perry-public-library-color-logo-a-book.png" alt="" />
                    <h2>{props.booksData.title}</h2>
                    <h3>by {props.booksData.author}</h3>
                    <p>publisher: {props.booksData.publication}</p>
                    <p>units: {props.booksData.copiesLeft}</p>
                </div>
            :
                (null)
    ]
}

export default Card;