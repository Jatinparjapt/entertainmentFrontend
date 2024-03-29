import React, { useEffect } from 'react'
import axios from 'axios';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Spiner from '../../components/spinerFolder/Spiner'
import { useDispatch, useSelector } from 'react-redux'
import {bookmarksDetailsTvSeries} from "../../Redux/bookMarks"
import AOS from 'aos';
import 'aos/dist/aos.css';
const BTvSeries = () => {
  AOS.init();
  const dispatch = useDispatch()
  // access bookmarkedtvseries from  redux store
  const bookmarksTvseries = useSelector(state=>state.bookmarkDetails.bookmarksDataTvseries)
  // const selector = useSelector()
  // console.log(bookmarksTvseries)
  useEffect(() => {
    const bookmarkTvSeriesData = async ()=>{
      try {  
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/account/21026937/watchlist/tv?language=en-US&page=1&sort_by=created_at.asc',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmI3YmM0NjhlZDg0YmE2NGVjMTNlMzViZmUxMjI1ZiIsInN1YiI6IjY1ZDhjNmZjMTQ5NTY1MDE3YmY2N2Q5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wbUnxNfU9lOdqtQzy0lNL-8MR28pUG5TgVvHzefb60A'
  }
};
 const fetchBookmarkedTvseries = await axios(options)
//  console.log(fetchBookmarkedTvseries , " data bookmarkedtvseries")
 if(fetchBookmarkedTvseries.status === 200){
  // send data to store to save tvSeries bookmarked
 dispatch(bookmarksDetailsTvSeries(fetchBookmarkedTvseries.data.results))
 }
   
      } catch (error) {
        console.log(error)
      }
    }
  bookmarkTvSeriesData();
  
  }, [dispatch])
  
  if(!bookmarksTvseries ){
    return(
      //show spiner until data is loading...
      <Spiner/>
    )
  }else if(bookmarksTvseries.length === 0 || !Array.isArray(bookmarksTvseries)){
    // console.log(bookmarksTvseries.length === 0)
    return (
      <div className="flex justify-start my-24 mx-16 " >
        <h1 className='text-red-400 text-2xl' >
        You don't have any bookmaked Tv Series

        </h1>
      </div>
    )
  } 
  else{
    // console.clear();
    return (
      <><div className="flex justify-center ">
      <h1 className='text-zinc-200 text-2xl' >Bookmarked Tv Series
      </h1></div>
      <section data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500" className='flex my-24  flex-wrap mx-16' >
        
    { bookmarksTvseries.map((items)=>{
      const {media_type ,id , name , poster_path , origin_country, first_air_date} = items
      return (
        <>
         <div className='my-3 mr-auto ml-auto w-full h-full  sm:w-60  md:w-72  items-center' >
        <div  key={id} className='  hover:scale-105 hover:transition hover:ease-in-out hover:delay-150  hover:m-2 ml-auto mr-auto  flex flex-col justify-center w-full h-full  sm:w-60  md:w-72 ' > 
        
      <div className=' relative w-full h-[14rem] flex justify-center  ' >
      <img className='w-full object-cover rounded-2xl  ' height={210} src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt="" />
      <div className='text-white absolute top-3 right-60' >
      <BookmarkIcon  />
      </div>
      <div className='absolute bottom-5 w-full  ' >
      <div className='text-zinc-200 flex justify-evenly' >
        <span>{media_type}</span>
        <span>{first_air_date}</span>
        <span>{origin_country}</span>
      </div>
      <div className='text-zinc-100 flex justify-center font-bold ' >
        <div>{name}</div></div>
        </div>
      </div>
     </div>
     
     </div>
      </> 
      )
    }) }
  
    
      </section>
      </>
    )
  }
}

export default BTvSeries