import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TeamDetails = () => {
    const {teamId} = useParams();
    const [countryDetail, setCountryDetail] = useState([]);
    useEffect(()=>{
       const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountryDetail(data))
    },[teamId])
    const {strTeam,intFormedYear,strCountry,strSport,strGender}=countryDetail.teams[0]; 
    console.log(countryDetail);
    // console.log(teamId);
    return (
        <div>
            <h1>{strTeam}</h1>
            <h1>{intFormedYear}</h1>
            <h3>{strCountry}</h3>
            <h5>{strSport}</h5>
            <h5>{strGender}</h5>
        </div>
    );
};

export default TeamDetails;