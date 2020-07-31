import React from 'react';
import { Link } from "react-router-dom";
import { IoIosPartlySunny, IoMdSunny, IoIosWater, IoMdSnow, IoMdAddCircleOutline } from "react-icons/io";
import './PlantItem.css'

function PlantItem({ plant }) {

  const name = plant.commonName;
  const id = plant._id;
  const url = `/addplant?name=${name}&id=${id}`

  return (
    <div className="plantcard">
      <div className="plantcard_img">
        <img src={require('../../assets/' + plant._id + '.jpg')} alt={plant.commonName} />
      </div>
      <div className="plantcard-info">
        <h2 className="plantcard-title">{plant.commonName}</h2>
        <h4 className="plantcard-type">{plant.scientificName}</h4>
      </div>
      {/* <div className="plantcard-icons">
        <div className="info-light">
          {props.plant.light === 'any' ? <IoIosPartlySunny />
            : props.plant.light === 'medium' ? <IoMdSunny />
              : <div><IoMdSunny /><IoMdSunny /></div>
          }
        </div>
        <div className="info-water">
          {props.plant.water === 'two weeks' ? <IoIosWater />
            : props.plant.water === 'weekly' ? <div><IoIosWater /><IoIosWater /></div>
              : <div><IoIosWater /><IoIosWater /><IoIosWater /></div>
          }
        </div>
        <div className="info-air">
          {!props.plant.air_purifying ? null
            : <IoMdSnow/>         
          }
        </div>
      </div> */}
      <Link to={url}>
        <div>
          <IoMdAddCircleOutline className="add_icon" size={40} />
        </div>
      </Link>
    </div>
  )

}

export default PlantItem;