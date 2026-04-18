import { createDatabase } from "../factory-pattern/fp_1";
import type { BaseRecord, Database, Pokemon } from "./types";

const PokemonDB = createDatabase<Pokemon>();
const pokemonDbInstance = new PokemonDB();

pokemonDbInstance.set({
  id: "Bulbasaur",
  attack: 50,
  defense: 90,
});

console.log(pokemonDbInstance.get("Bulbasaur"));
