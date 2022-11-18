import React from 'react'

function PokeCard({ pokemon, onClick }) {
    return (
        <div className="card-container">
            {pokemon.map(poke =>
                <button className="card" key={poke.name} value={poke.name} onClick={onClick}>
                    <div className="poke-id">{poke.id}</div>
                    <br />
                    <img src={`${poke.sprites.front_default}`} alt={poke.name} value={poke.name} />
                    <br />
                    <div className="poke-name">{poke.name.toUpperCase()}</div>
                    <div className="type-container">
                        {poke.types.map(p =>
                            p.type.name === 'fire' ? <div className='type-fire'>{p.type.name}</div>
                                : p.type.name === 'water' ? <div className='type-water'>{p.type.name}</div>
                                    : p.type.name === 'grass' ? <div className='type-grass'>{p.type.name}</div>
                                        : p.type.name === 'ground' ? <div className='type-ground'>{p.type.name}</div>
                                            : p.type.name === 'electric' ? <div className='type-electric'>{p.type.name}</div>
                                                : p.type.name === 'poison' ? <div className='type-poison'>{p.type.name}</div>
                                                    : <div className='type-normal'>{p.type.name}</div>
                        )}
                    </div>

                </button>
            )}
        </div>
    )
}

export default PokeCard