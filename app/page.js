'use client'
import React, { useState } from 'react'

import Header from '@/Components/Header';
import axios from 'axios';

function page() {

  let [marks, SetMarks] = useState(80);

  let [userA, setUSer] = useState("Kuldeep Kant");
  let [url, setUrl] = useState('');
  let getImages = async () => {
    console.log("Image Leelo");
    let response = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(response.data.message);
    setUrl(response.data.message)

  }

  return (
    <>
      <h1>My Marks are {marks},{userA}</h1>
      <button onClick={() => SetMarks(marks + 1)} className='p-3 rounded-xl bg-slate-300 border-r-amber-700'>Update</button>
      <hr></hr>
      <button onClick={getImages} className='bg-green-400 p-2 font-serif'>Get Image</button>
      <img src={url} alt='Not found' />
    </>
  )
}

export default page
