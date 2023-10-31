'use client'

import { useEffect, useState } from "react"

export default function Home() {
  
  const [data, setData] = useState([])

  useEffect( ()=> {
    (async () => {
      let  res = await fetch('https://dummyjson.com/products')
      let jsonData = await res.json()
      setData(jsonData['products'])
    })()
  }, [])
  

  return (
    <div>
      <h1>This is Home Page</h1>
      {
        data.map( (item, index) =>{
          return <div key={index}>
            <h1>{item.title}</h1>
            <h1>{item.price}</h1>
            <p>{item.description}</p>
          </div>
        })
      }
    </div>
  )
}
