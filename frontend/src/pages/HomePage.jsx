import {useState} from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
const HomePage=()=>{
    const [isRateLimited,setIsRateLimited]= useState(true);
    const [notes,setNotes]= useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchNotes = async()=>{
            try{
                const res=await fetch("http://localhost:5001/api/notes");
                
            }
            catch(error){

            }
        };
    },[])
    return(
         <div className="min-h-screen">
        <Navbar />
        {isRateLimited && <RateLimitedUI />}

    </div>
    );
};
export default HomePage;