import {useState, useEffect} from 'react'

function useNewsApi({
    category,
    country,
    pageNo,
    pageSize,
    search,
}){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`newsapi.org/v2/top-headlines?country=${country}&page=${pageNo}&pageSize=${pageSize}&q=${search}&category=${category}&apiKey=0893fe334c98459b9729623e83cff16e`)
        .then((res)=>res.json())
        .then((res)=>setarticles(res[articles]))
    },[category,country,pageSize,search,pageNo])
    return data;
}
export default useNewsApi;