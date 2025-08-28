import React, { useEffect, useState } from 'react'

export default function useGetAccountInfo({username,serverURL}) {
    const [userData,setUserData ] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const fetchUserData = async ()=>{
        setLoading(true)
        try {
            const res = await fetch(`${serverURL}/v2/pppoe/users${username}`)
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            const data = await res.json()
            setUserData(data)
        } catch (error) {
            console.log('Error sending request:',error.message||error)
            setError(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchUserData()
    },[serverURL,username])

  return {userData,loading,error}
}
