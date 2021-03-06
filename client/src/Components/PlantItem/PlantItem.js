import React from 'react';
import history from '../../history';
import { IoIosHeartEmpty } from 'react-icons/io';
import './PlantItem.css';

function PlantItem({ plant }) {
  const name = plant.commonName;
  const id = plant._id;
  const url = `/addplant?name=${name}&id=${id}`;

  return (
    <div className="plantcard" id={`plantcard-${plant.commonName}`}>
      <div className="plantcard_img">
        <img className="circle_img" src={plant.imgUrl} alt={plant.commonName} />
      </div>
      <div className="plantcard-info">
        <h2 className="plantcard-title">{plant.commonName}</h2>
        <h4 className="plantcard-scientific">{plant.scientificName}</h4>
      </div>
      <button
        className="add_button_yellow"
        type="button"
        id='add-plant-button'
        onClick={() => history.push(url)}
      >
        <IoIosHeartEmpty style={{ verticalAlign: 'baseline' }} size={18} />
        <span className="add_button_text"> Add me</span>
      </button>
    </div>
  );
}

export default PlantItem;
