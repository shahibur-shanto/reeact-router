import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    const [leagues,setLeagues] = useState([])
    const [sports,setSports] = useState([]);

    // useEffect(()=>{
    //     const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setLeagues(data.leagues))
    // },[])
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSports(data.teams))
    },[])
    // console.log(sports)
    // console.log(leagues);
    return (
        <div className="main-div">
        <div className="row w-100 justify-content-center">
        
            
                {
                    sports.map(sport=><Team sport={sport}></Team>)
                }
                

        </div>
        </div>
    );
};

export default Home;