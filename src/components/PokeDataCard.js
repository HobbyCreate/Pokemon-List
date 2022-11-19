import React from 'react'

function PokeDataCard({ pokeInfo, onClickBack, idx }) {
    let idex = idx%20;
    console.log(pokeInfo)
    return (
        <div>
            <button type="button" onClick={onClickBack} className="btn">Back</button>
            <div className="poke-dataCard">
                <div className="name">{(Object.values(pokeInfo)[idex].name).toUpperCase()}</div>
                <img className="big-img" src={`${Object.values(pokeInfo)[idex].sprites.other.dream_world.front_default}`} alt="" />
                {Object.values(pokeInfo)[idex].stats.map(info => 
                    <div className="stat">{(info.stat.name.toUpperCase())} : {(info.base_stat)}</div>
                )}
            </div>
        </div>
    )
}

export default PokeDataCard