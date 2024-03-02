import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [value, setValue] = useState([])

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then((res => {
      console.log(res)
      const keys = Object.keys(res.data.message)
      console.log(keys)
      setValue(keys)
    }))
  }, [])

  return (
    <>
      <div className="container">
        <div className="heading_text">
          <h1>Dog Breeds</h1>
        </div>
        <Link to={`/breed-details`}>Hey</Link>
        <div className="content flex">
          {value.map(el => (
            <div key={el} className="box">
              <Link to={`/breed-details/${el}`}>{el}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home