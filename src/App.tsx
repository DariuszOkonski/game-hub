// https://www.chakra-ui.com/ - css library
// https://rawg.io/ - games api
import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import NavBar from './userComponents/NavBar';
import GameGrid from './userComponents/GameGrid';
import GenreList from './userComponents/GenreList';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
