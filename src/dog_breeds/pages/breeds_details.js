import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BreedsDetails() {
  let { breed } = useParams();
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res => {
      console.log(res)
      setImages(res.data.message)
    }))
  }, [])

  return (
    <>
      <div>
        <div className="container">
          <h1 className="dog_heading">{breed}</h1>
          <div className="content flex">
            {images.map(el => (
              <div key={el} className="image_box">
                <img src={el} alt=""/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
    
  )
}

export default BreedsDetails