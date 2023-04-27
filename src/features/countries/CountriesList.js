import { selectAllCountries } from "./countriesSlice";
import '../../styles.css';

const Countries = () =>{
    const countries = selectAllCountries();

    return (
        <div>
            {countries.map((country)=>
                <div key={country.id}>
                    <img className="imageTest" src={country.image} alt={country.country}/>
                    <div>
                        <h3>{country.country}</h3>
                        <p>{country.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Countries;