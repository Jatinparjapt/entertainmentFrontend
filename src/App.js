import './App.css';
import {  Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Routes/Home"
import Bookmark from "./Routes/Bookmark"
import Movies from "./Routes/Movies"
import Tvseries from "./Routes/Tvseries"
import Header from './components/Header';
import MovieSinglePage from './Routes/singlePagesRoutes/singlePageForMovie/MovieSinglePage';
import TvSeriesSinglePage from './Routes/singlePagesRoutes/singlePageTvSeries/TvSeriesSinglePage';
import Recommendation from './Routes/singlePagesRoutes/singlePageRecommendation/Recommendation';
import Login from './Routes/loginSingupPages/Login';
import Signup from './Routes/loginSingupPages/Signup';
import PageNotFound from './Routes/PageNotFound';
import { initGA, logPageView } from "./utils/analytics";
import { useEffect } from 'react';
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Spiner from './components/spinerFolder/Spiner';
function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location])
 console.clear()
    return (
    <>
    {/* <Home/> */}
    <Header/>
  
{/* <Spiner/> */}
          
           <Routes>
          <Route exact path="" element={<Home/>} />
          <Route exact path="login" element={<Login/>} />
          <Route exact path="singup" element={<Signup/>} />
          <Route path="bookmarks" element={<Bookmark/>} />
          <Route path="movies" element={<Movies/>}/>
          <Route path="tvseries" element={<Tvseries/>} />
          <Route path="movie/:original_title" element={<MovieSinglePage/>}/>
          <Route path="tvseries/:original_title" element={<TvSeriesSinglePage/>}/>
          <Route path="recommendation/:original_title" element={<Recommendation/>}/>
          <Route path="*" element={<PageNotFound/>}/>

        </Routes>
        {/* <Outlet /> */}
       </>
  );
}

export default App;
