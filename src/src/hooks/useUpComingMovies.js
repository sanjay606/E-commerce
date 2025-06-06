import { useDispatch } from "react-redux"
import {    addNowUpComingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"

const useUpComingMovies=()=>{
    
  const dispatch = useDispatch()
  

  const getUpComingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)

    const json = await data.json()
   

    dispatch ( addNowUpComingMovies(json.results))
  }

useEffect(() => {
    getUpComingMovies()
},[])
}

export default useUpComingMovies;