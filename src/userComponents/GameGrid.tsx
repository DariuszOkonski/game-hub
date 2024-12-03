import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

export interface Game {
  id: number;
  name: string;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const { error, games } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;