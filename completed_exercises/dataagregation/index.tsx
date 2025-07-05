// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
import _Pokemon from './pokemon.json';
import _PokemonTypes from './pokemon-types.json';
import _Types from './types.json';

// import { groupBy, keyBy } from 'lodash';

interface TypesResponse {
  id: number;
  identifier: string;
  generation_id: number;
  damage_class_id: number;
}

interface PokemonTypesResponse {
  pokemon_id: number;
  type_id: number;
  slot: number;
}

interface PokemonResponse {
  id: number;
  identifier: string;
  species_id: number;
  height: number;
  weight: number;
  base_experience: number | string;
  order: number | string;
  is_default: number;
}

const Pokemon = _Pokemon as PokemonResponse[];
const PokemonTypes = _PokemonTypes as PokemonTypesResponse[];

const Types = _Types as TypesResponse[];

interface PokemonListItem extends PokemonResponse {
  types: (PokemonTypesResponse & TypesResponse)[];
}

//  const example = {
//   id: number;
//   identifier: string;
//   species_id: number;
//   height: number;
//   weight: number;
//   base_experience: number | string;
//   order: number | string;
//   is_default: number;
//   types: [
//     {
//        id: number;
//       identifier: string;
//       generation_id: number;
//       damage_class_id: number;
//        pokemon_id: number,
//       type_id: number,
//       slot: number,
//     }
//   ]
// }

// Limit for items per page
const LIM = 20;

// TODO: Implement
const agrigatePokemon = (page: number): PokemonListItem[] => {
  // TODO: Return the list of pokemon, a PokemonListItem []
  // PokemonTypes' pokemon_id === Pokemon's id
  // PokemonTypes' type_id === Types' id.
  const typesHash = {};
  for (let i = 0; i < Types.length; i++) {
    const typeToLookup = Types[i];
    typesHash[typeToLookup.id] = typeToLookup;
  }
  console.log(typesHash);
  const typesPokeHash = {};
  for (let i = 0; i < PokemonTypes.length; i++) {
    const pokeTypeToLookup = PokemonTypes[i];
    if (typesPokeHash[pokeTypeToLookup.pokemon_id]) {
      typesPokeHash[pokeTypeToLookup.pokemon_id].push({
        type_id: pokeTypeToLookup.type_id,
        slot: pokeTypeToLookup.slot,
      });
    } else {
      typesPokeHash[pokeTypeToLookup.pokemon_id] = [
        { type_id: pokeTypeToLookup.type_id, slot: pokeTypeToLookup.slot },
      ];
    }
  }
  console.log('type', typesPokeHash);

  const newPokemon = [];
  for (let i = 0; i < Pokemon.length; i++) {
    const poke = Pokemon[i];
    poke.types = [];
    const allTypes = typesPokeHash[poke.id];

    for (let j = 0; j < allTypes.length; j++) {
      const typeToLookup = allTypes[j];
      const typeLookup = typesHash[typeToLookup.type_id];
      poke.types.push(typeLookup);
    }
    newPokemon.push(poke);
  }

  return newPokemon;
};

// const usePokemonList = ({ page }: { page: number }) => {
//   return useQuery({
//     queryKey: ['pokemon', page],
//     queryFn: async () => await agrigatePokemon(page),
//     staleTime: Infinity,
//     cacheTime: Infinity,
//   }) as { data: PokemonListItem[] | undefined };
// };

// export default function App() {
//   const [page, setPage] = useState(0);

//   const { data } = usePokemonList({ page });

//   // TODO: Make the CSS match DESIGN_SPEC.png
//   return (
//     <div className=''>
//       <h1 className='poke-title'>Pokedex</h1>
//       <ul className='pokedex-container'>
//         {data?.map((v, i) => (
//           <li key={v.identifier} className='w-40 pokemon-card'>
//             <h2 className='capitalize font-medium'>{v.identifier}</h2>
//             <img
//               className='img-pokemon'
//               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${v.id}.png`}
//             />
//             <div className='button-container'>
//               {v.types.map((type) => {
//                 return (
//                   <div
//                     className={`${bgclasses[type.identifier]} btn-types`}
//                     key={`${v.id}_${type.identifier}`}>
//                     <span className='opacity-70 capitalize text-xs'>
//                       {type.identifier}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className='px-6 pb-6 grid grid-fr-auto'>
//         <span className='text-white text-sm'>Page: {page}</span>
//         <div className='text-sm'>
//           <button
//             className='disabled:opacity-50'
//             disabled={page === 0}
//             type='button'
//             onClick={() => {
//               setPage((p) => p - 1);
//             }}>
//             Previous Page
//           </button>
//           <button
//             className='disabled:opacity-50'
//             // How do I disable this when we've reached the end of the list?
//             // disabled={page > 0}
//             type='button'
//             onClick={() => setPage((p) => p + 1)}>
//             Next Page
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// Tailwind Pokemon Type Class Lookup table.
// the class bg-fire applies the fire type background color.
const bgclasses = {
  fire: 'bg-fire',
  normal: 'bg-normal',
  water: 'bg-water',
  fighting: 'bg-fighting',
  flying: 'bg-flying',
  poison: 'bg-poison',
  ground: 'bg-ground',
  rock: 'bg-rock',
  bug: 'bg-bug',
  ghost: 'bg-ghost',
  steel: 'bg-steel',
  grass: 'bg-grass',
  electric: 'bg-electric',
  psychic: 'bg-psychic',
  ice: 'bg-ice',
  dragon: 'bg-dragon',
  dark: 'bg-dark',
  fairy: 'bg-fairy',
};
