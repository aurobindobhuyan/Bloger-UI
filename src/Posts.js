import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Posts = (props) => {
     const [posts, setPosts] = useState([])

     useEffect(() => {
          axios.get('https://jsonplaceholder.typicode.com/posts')
               .then((response) => {
                    setPosts(response.data)
               })
               .catch((err) => {
                    alert(err.message)
               })
     }, [])

     return (
          <>
               <h1>Total Posts - {posts.length}</h1>
               <ul>
                    {
                         posts.map(ele => <li key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>)
                    }
               </ul>
          </>
     )
}

export default Posts