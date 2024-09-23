import { useState } from 'react';
import './Country.css'


const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {

    const {name,flags,population,area, cca3} = country;

    const [visited,setVisited] = useState(false);

    const handleVisited =()=>{
        setVisited(!visited);
    }

    // const passWithParam = () =>{
    //     handleVisitedCountry(country);
    // }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color : visited ? 'purple' : 'black'}}>{name.common}</h3>
            <img src={flags.png} alt="Flag" height="180px" width="300px" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I already visit this country.' : 'I want to go there '}
            <hr />
            
        </div>
    );
};

export default Country;