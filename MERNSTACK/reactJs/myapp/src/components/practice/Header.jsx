import React from 'react'

export default function ({Name, imageURL,width,height}) {

  return (
    <>
        <h1>{Name}</h1>
        <img  className="avatar" src ={imageURL} style={{width:{width}, height:{height}}} alt='image not found' />

    </>
  )
}
