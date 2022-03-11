import React from "react"
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import UserPosts from "./UserPosts"
import ShowDetails from "./ShowDetails"

const App = () => {

     return (
          <>
               <h1>Blogger Project</h1>
               <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
               </ul>

               <Route path="/" component={Home} exact={true} />
               <Route path="/users" exact={true} component={Users} />
               <Route path="/posts" component={Posts} exact={true} />
               <Route path="/users/:id" component={UserPosts} />
               <Route path="/posts/:id" component={ShowDetails} />
          </>
     )
}

export default App