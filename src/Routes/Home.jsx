import React ,{useEffect} from 'react'
import SecondComp from './homeComponents/SecondComp'
// import Spiner from '../components/spinerFolder/Spiner'
// import FirstComp from "./homeComponents/FirstComp.jsx"
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
{/* <Spiner/> */}
    {/* <FirstComp/> */}
    <SecondComp/>
   
    </>
  )
}

export default Home