import { useEffect, useState } from "react"


export default function getUserSession({account}) {
  const [sessionData,setSessionData ] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const fetchUserData = async ()=>{
        setLoading(true)
        try {
            const res = await fetch(`https://server.konnektsmartlife.com/web/session/`,{
                method:'POST',
                body:JSON.stringify({account})
            })
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            const data = await res.json()
            setSessionData(data)
        } catch (error) {
            console.log('Error sending request:',error.message||error)
            setError(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchUserData()
    },[serverURL,account])
  return {sessionData,loading,error
  }
}
