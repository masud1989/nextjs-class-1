import React from 'react';

const getData = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let resData = await response.json()

  return resData
};

const page = async () => {
  const data = await getData()
  return (
    <div>
        <h1>Blog Page</h1>
        {
          data.map( (item, index) => {
            return <div>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
            </div>
          })
        }
    </div>
  )
}

export default page


// https://jsonplaceholder.typicode.com/posts 