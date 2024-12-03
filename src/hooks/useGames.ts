import React, { useEffect, useState } from 'react';
import { FetchGamesResponse, Game } from '../userComponents/GameGrid';
import apiClient from '../services/api-client';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return {
    games,
    error,
  };
};

export default useGames;
