import React from 'react'


const Gallery = ({data}) => {
    return (
        <div className="characters">
            <ul>
                {data.map(char => (
                    <li key={char.id}>
                        <div className="card">
                            <div className="image">
                                <img src={char.image} alt="image"/>
                            </div>
                            <div className="description">
                                <h2>{char.name}</h2>
                                <div className="status_wrap">
                                    <div className={`status ${char.status === 'Alive' ? 'alive' : char.status == 'Dead' ? 'dead' : 'unknow'}`}></div>
                                    {char.status} - {char.species}
                                </div>
                                <div className="location">
                                    <h5>Last Known Location:</h5>
                                    <p>{char.location.name}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Gallery