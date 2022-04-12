import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getPost } from '../redux/postSlice'
const Post = () => {
    const dispatch=useDispatch()
    const posts=useSelector((state)=>state.post.post)
 
    useEffect(()=>{

        dispatch(getPost())
        
            },[dispatch])
  return (
 <div>
<ul>
    {posts.map(post=>(
        <li>{post.body}</li>
    ))}
</ul>

 </div>
  )
}

export default Post