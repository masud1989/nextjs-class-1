"use client"

import { useSearchParams } from 'next/navigation'
import React from 'react'

// const page = ({searchParams}) => {
const page = () => {
    const param = useSearchParams()
  return (
    <div>
        <h1>Product Page</h1>
        <h2>{param.get('name')}</h2>
        <h2>{param.get('price')}</h2>
        {/* <h2>{searchParams.name}</h2>
        <h2>{searchParams.price}</h2> */}
    </div>
  )
}

export default page