import React, { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import RenderImage from '../../shared/ImageRender';
import NO_DESCRIPTION from '../../shared/Constants';

function ShowItem() {
  let { id } = useParams();
  const [showItem, setShowItem] = useState({});
  useEffect(async () => {
    const result = await axios(
      `https://api.tvmaze.com/shows/${id}`,
    );

    setShowItem(result.data);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <RenderImage show={showItem} classStyle="rounded mx-auto d-block"/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <strong>{showItem.name}</strong>
        </div>
      </div>
      <div className="row">
        {parse(showItem.summary? showItem.summary : NO_DESCRIPTION)}
      </div>
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Language</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
                <th scope="col">Official Site</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{showItem.language}</td>
                <td>{showItem.status}</td>
                <td>{showItem.type}</td>
                <td>{showItem.officialSite}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Genres</th>
                <th scope="col">Schedule</th>
                <th scope="col">Country</th>
                <th scope="col">Time Zone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{showItem.genres && showItem.genres.map(g => (<span>{g}, </span>))}</td>
                <td>{showItem.schedule && showItem.schedule.days}</td>
                <td>{showItem.network && showItem.network.country.name}</td>
                <td>{showItem.network && showItem.network.country.timezone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowItem;