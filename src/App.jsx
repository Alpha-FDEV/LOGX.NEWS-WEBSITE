import { useDispatch } from "react-redux"
import AppLayout from "./components/utilities/AppLayout"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { setTypeNews } from "./slices/LatestSlice"
import { ToastContainer } from "react-toastify"


function App() { 
  const dispatch = useDispatch()
  const {type} = useParams()
  
  return (
    <div>
      <ToastContainer />
      {useEffect(
        function () {
          console.log(type)
          dispatch(setTypeNews(type));
        },
        [type]
      )}
      <AppLayout />
    </div>
  );
}

export default App
