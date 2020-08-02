import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import history from '../../history';
import './AddPlant.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function AddPlant({ myPlants, createMyPlant, shouldWater }) {

  const [nickName, setNickName] = useState('');
  const [bought, setBought] = useState('');
  const [lastWatered, setLastWatered] = useState('');

  let query = useQuery();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickName) return alert('The name is missing!')
    if (!bought) return alert('The date is missing!')
    if (!lastWatered) return alert('The date is missing!')
    let commonName = query.get("name");
    let id = query.get("id");
    createMyPlant(nickName, bought, lastWatered, commonName, id);
    setNickName('');
    setBought('');
    setLastWatered('');
    history.push('/myplants')
  }

  const handleNickName = (e) => {
    setNickName(e.target.value);
  }

  const handleBought = (e) => {
    console.log(e.target.value)
    setBought(e.target.value);
  }

  const handleLastWatered = (e) => {
    setLastWatered(e.target.value);
  }

  return (
    <form className="plant_form" onSubmit={handleSubmit}>
      <h2>Last 3 questions ...</h2>
      {(!shouldWater) ?
        <hr className="hr_green" />
        : <hr className="hr_yellow" />
      }
      <h3 className="form_subtitle">What's their name?</h3>
      <p className="subtitle_desc">Every plant needs a name to feel loved!</p>
      <input type="text" name={nickName} value={nickName} onChange={handleNickName} placeholder="type name here" />
      <h3 className="form_subtitle">When did you adopt them?</h3>
      <input type="date" name={bought} value={bought} onChange={handleBought} />
      <h3 className="form_subtitle">When did you last water them?</h3>
      <input type="datetime-local" name={lastWatered} value={lastWatered} onChange={handleLastWatered} /><br />
      {(!shouldWater) ?
        <button className="form_btn_green" type="submit">Add my new plant</button>
        : <button className="form_btn_yellow" type="submit">Add my new plant</button>
      }
    </form>

  )

}

export default AddPlant;