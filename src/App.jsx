import React, { useState } from 'react';
import { Title, Container, Button, InputValue, Card, CartData } from './styles';

import api from './services/api.js';

function App() {

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [typedPokemon, setTypedPokemon] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // executamos o event.preventDefault() para não haver recarregamento.
    if (!typedPokemon) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.get(`/pokemon/${typedPokemon}`);
      setPokemon(response.data);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError('Pokemon não encontrado!');
      setIsLoading(false);
      setPokemon(null);
    }
  };

  return (
    <Container>
      <Title>Seja bem-vindo ao Pokedex!</Title>
      <h3> Digite o nome ou o id de um pokemon para comecar! </h3>
      <form onSubmit={handleSubmit}>
        <InputValue
          value={typedPokemon}
          placeholder="Nome do Pokemon/Id"
          onChange={(e) => setTypedPokemon(e.target.value.toLowerCase())} //Pegar o valor que o usuario digitou e seta para typedPokemon
        />
        <Button type="submit">
          {isLoading ? (<span>carregando...</span>) : (<p>Buscar</p>)}
        </Button>
      </form>

      {!pokemon && (
        <p>Digite um pokemon válido!</p>
      )}

      {pokemon && (
        <div key={pokemon.id}>
          {isLoading ?
            <p>Carregando</p>
            :
            <>
              <Card>
                <div>
                  <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />
                  <h1>{pokemon.name}</h1>
                </div>
                <CartData>
                  <p><strong>Altura:</strong>:{pokemon.height * 10}cm </p>
                  <p><strong>Peso:</strong>:{pokemon.weight / 10}kg </p>
                  <p><strong>Tipo:</strong>:{pokemon.types[0].type.name}</p>
                  <p><strong>id</strong>:{pokemon.id}</p>
                </CartData>
              </Card>
            </>
          }
        </div>
      )}


    </Container>
  );
}

export default App;
