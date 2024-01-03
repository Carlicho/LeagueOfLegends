import { useState } from 'react';
import './app.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './components/Cabecera';


export function App() {
  const mensajeFooter = 'Footer League of Legends Api';
  const [searchText, setSearchText] = useState('');
  const [playerData, setPlayerData] = useState({});
  const API_KEY = 'RGAPI-0bbad348-737e-4641-8d31-ffae886d45b6';

  function searchForPlayer(event) {
    var APIcallString =
      'https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
      searchText +
      '?api_key=' +
      API_KEY;

    axios
      .get(APIcallString)
      .then(function (response) {
        setPlayerData(response.data);
        console.log(playerData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='container '>
      <Cabecera
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={searchForPlayer}
      />

      <div className='mainapp'>
        {JSON.stringify(playerData) !== '{}' ? (
          <div className=' bg-dark d-flex flex-column justify-content-sm-center '>
            <p className="p-2 text-light">{playerData.name}</p>
            <p className="p-2 text-light">summonerLevel={playerData.summonerLevel}</p>
            <img
            className="p-2 "
              width="100"
              height="100"
              src={
                'https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/' +
                playerData.profileIconId +
                '.png'
              }
              alt="image"
            />
          </div>
        ) : (
          <>
            <p>We don't have playerData</p>
          </>
        )}
      </div>

      <footer className='d-flex justify-content-sm-center'>{mensajeFooter}</footer>
    </div>
  );
}