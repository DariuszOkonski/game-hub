// https://www.chakra-ui.com/ - css library
// https://rawg.io/ - games api
import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import './App.css';
import NavBar from './userComponents/NavBar';
import GameGrid from './userComponents/GameGrid';
import GenreList from './userComponents/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './userComponents/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './userComponents/SortSelector';
import GameHeading from './userComponents/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery((prevState) => ({
                ...prevState,
                genre,
              }))
            }
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery((prevState) => ({
                    ...prevState,
                    platform,
                  }))
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery((prevState) => ({
                  ...prevState,
                  sortOrder,
                }))
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
