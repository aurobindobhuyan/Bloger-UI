import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowDetails = (props) => {
     const [details, setDetails] = useState({})
     const [comments, setComments] = useState([])
     const [userName, setUserName] = useState({})
     const { id } = props.match.params

     useEffect(() => {
          Promise.all([axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`), axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)])
               .then((value) => {
                    const [res1, res2] = value
                    axios.get(`https://jsonplaceholder.typicode.com/users/${res1.data.userId}`)
                         .then((res) => {
                              setUserName(res.data)
                         })
                         .catch((err) => {
                              alert(err.message)
                         })
                    setDetails(res1.data)
                    setComments(res2.data)
               })
               .catch((err) => {
                    alert(err.message)
               })
     }, [])

     return (
          <>
               <h1>User Name - {userName.name}</h1>
               <h2>TITLE : {details.title}</h2>
               <h3>BODY : {details.body}</h3>
               <hr />
               <h3>Comments - {comments.length}</h3>
               <ul>
                    {
                         comments.map(ele => <li key={ele.id}>{ele.body}</li>)
                    }
               </ul>
               <hr />
               <Link to={`/users/${details.userId}`}>Mor posts from author : {userName.name}</Link>
          </>
     )
}

export default ShowDetails