import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import femaleImage from "../../Photo/female.png";
import maleImage from "../../Photo/male.png";
import "./TeamDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  
  } from "@fortawesome/free-brands-svg-icons";
import {faFlag,faFutbol,faVenusMars,faMapMarker} from '@fortawesome/free-solid-svg-icons';
const TeamDetails = () => {
  const { teamId } = useParams();
  const [countryDetail, setCountryDetail] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountryDetail(data.teams[0]));
  }, [teamId]);

  const {
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strDescriptionES,
    strTeamBadge,
  } = countryDetail;
  let image;
      if(strGender ==='Male'){
          image = maleImage;
      }
      else{
          image = femaleImage;
      }
  return (
    <>
      <div className="banner">
        <img className="team-badge" src={strTeamBadge} alt="" />
      </div>
      <div className="w-75 detailDiv">
        <div className="team-info d-flex justify-content-between bg-dark rounded">
          <div className="text">
            <h3>{strTeam}</h3>
            <small><FontAwesomeIcon icon={faMapMarker}/> Founded: {intFormedYear}</small>
            <br />
            <small><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</small>
            <br />
            <small><FontAwesomeIcon icon={faFutbol}/> Sport Type: {strSport}</small>
            <br />
            <small><FontAwesomeIcon icon={faVenusMars}/> Gender: {strGender}</small>
            <br />
          </div>
          <div className="team-image">
            <img className="image-size" src={image} alt="" />
          </div>
        </div>
        <br />
        <p className="team-description">{strDescriptionEN}</p>
        <br />
        <p className="team-description">{strDescriptionES}</p>
        <div className="icon-center pt-3 pb-3">
          <a href="https://www.facebook.com" target="blank">
            <FontAwesomeIcon icon={faFacebook} size="5x" />
          </a>
          <a href="https://www.twitter.com" target="blank">
            <FontAwesomeIcon icon={faTwitter} size="5x" />
          </a>
          <a href="https://www.youtube.com" target="blank">
            <FontAwesomeIcon icon={faYoutube} size="5x" />
          </a>
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
