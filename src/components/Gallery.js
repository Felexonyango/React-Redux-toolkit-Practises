import React,{useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { getphotos } from '../redux/GallerySlice'

const Gallery = () => {
    const dispatch =useDispatch()
    const photos=useSelector((state)=>state.gallery.photos)
    useEffect(()=>{

dispatch(getphotos())

    },[dispatch])
    console.log(photos)
  return (
    <div className='app'>
        <h1>Gallery photos</h1>
        <div className='Gallery'>
      
        {photos.map(photo=>(

            <img 
            key={photo.id}
            alt={photo.author}
            src={photo.url}
            width="700"
            height="400px"

          
            />
        ))}
      
      </div>

    </div>
  )
}

export default Gallery