import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData]=useState([])
    useEffect(()=>{
fetch('https://api.github.com/users/Rahul-202134')
.then(response=>response.json())
.then(data=>{
    console.log(data)
    setData(data)
})
    },[])
  return (
    <div className='bg-gray-700 text-white text-3xl text-center m-12'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} className='text-center ml-4 mb-8' alt="Git picture" width={200} />
    </div>
  )
}

export default Github
