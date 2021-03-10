import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { useHistory } from 'react-router';

const Team = (props) => {
    const {strTeamBadge,strGender,strSport,strTeam,idTeam} = props.sport;
    let history = useHistory();
    const handleClicked =(teamId)=>{
        history.push(`/team/${teamId}`);        
    }
    // console.log(props)
    
    return (
        <div className="col-lg-3 col-sm-12 text-center mt-5 team">
            <img className="w-25 mt-5 rounded img-fluid" src={strTeamBadge} alt="Logo"/>
            <h1>{strTeam}</h1>
            <h2>Sport Type: {strSport}</h2>
            <button onClick={()=>handleClicked(idTeam)} className="btn btn-primary btn-lg">Explore  <FontAwesomeIcon icon = {faArrowRight}/></button>
            <br/>
            <br/>

        </div>
    );
};

export default Team;