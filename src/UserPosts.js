import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserPosts = (props) => {
     const [userPosts, setUserPosts] = useState([])
     const [userName, setUserName] = useState({})
     const { id } = props.match.params

     useEffect(() => {
          Promise.all([axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`), axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)])
               .then((value) => {
                    const [result1, result2] = value
                    setUserPosts(result1.data)
                    setUserName(result2.data)
               })
               .catch((err) => {
                    alert(err.message)
               })
     }, [])

     return (
          <>
               <h1>USER NAME : {userName.name}</h1>
               <h3>Posts written by user</h3>
               <ul>
                    {
                         userPosts.map(ele => <li key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>)
                    }
               </ul>
          </>
     )
}

export default UserPosts