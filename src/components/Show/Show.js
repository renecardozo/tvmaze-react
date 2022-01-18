import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import RenderImage from '../../shared/ImageRender';
import NO_DESCRIPTION from '../../shared/Constants';
import './Show.css';



function truncate(str) {
  return str.length > 100 ? str.substring(0, 100) + '...' : str;
}

function Show() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'http://api.tvmaze.com/search/shows?q=girls',
    );

    setData(result.data);
  }, []);

  const onClickItem = ({show}) => {
    navigate(`/shows/${show.id}`);
    console.log(show);
  }

  return (
    <div className="shows-container">
      {data.map(item => (
        <div className="card margin-top10" style={{width: '18rem'}} key={item.show.id}>
          <RenderImage show={item.show} classStyle="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{item.show.name}</h5>
            {parse(item.show.summary? truncate(item.show.summary) : NO_DESCRIPTION)}
            <div className="show-container-button">
              <button type="button" className="btn btn-dark" onClick={() => onClickItem(item)}>See more...</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Show;