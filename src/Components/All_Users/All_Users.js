import React,{useEffect, useState} from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebaseConfig';

const  AllUserData = () =>{
    const {user, setUser} = useState([]);
    // Get a list of cities from your database
    async function getCities(db) {
        const citiesCol = collection(db, 'signup');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
      
       return  cityList;
    }

    useEffect(()=>{
        getCities(db);
    })
    return(
        <div>
            <table>
                <tr>
               
                </tr>
            </table>
           
            <h1>vinay</h1>
        </div>
    )
}

export default AllUserData;