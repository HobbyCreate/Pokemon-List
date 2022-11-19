import React from 'react'

function PokeCard({ pokemon, onClick }) {
    return (
        <div className="card-container">
            {pokemon.map(poke =>
                <button className="card" key={poke.name} value={poke.id} onClick={onClick}>
                    <div className="poke-id" value={poke.id}>{poke.id}</div>
                    <br />
                    <img src={`${poke.sprites.front_default}`} alt={poke.name}  value={poke.id} />
                    <br />
                    <div className="poke-name" value={poke.id}>{poke.name.toUpperCase()}</div>
                    <div className="type-container" value={poke.id}>
                        {poke.types.map(p =>
                            p.type.name === 'fire' ? <div className='type-fire' value={poke.id}>{p.type.name}</div>
                                : p.type.name === 'water' ? <div className='type-water' value={poke.id}>{p.type.name}</div>
                                    : p.type.name === 'grass' ? <div className='type-grass' value={poke.id}>{p.type.name}</div>
                                        : p.type.name === 'ground' ? <div className='type-ground' value={poke.id}>{p.type.name}</div>
                                            : p.type.name === 'electric' ? <div className='type-electric' value={poke.id}>{p.type.name}</div>
                                                : p.type.name === 'poison' ? <div className='type-poison' value={poke.id}>{p.type.name}</div>
                                                    : <div className='type-normal' value={poke.id}>{p.type.name}</div>
                        )}
                    </div>

                </button>
            )}
        </div>
    )
}

export default PokeCard