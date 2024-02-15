import { useEffect, useState } from "react";
import Filters from "./Filters";
import InfoElement from "./InfoElement";
import styles from "./ListView.module.css";

const API_URL_ALL =
  "https://restcountries.com/v3.1/all?fields=capital,population,name,cioc,cca2,ccn3,cca3,region,flags";

const transformCountry = ({
  capital,
  population,
  name: { common: name },
  cioc,
  cca2,
  ccn3,
  cca3,
  region,
  flags: { png: flagUrl },
}) => ({
  // zwracamy obiekt niejawnie, stąd (), żeby nie było, że to ciało funkcji
  // zwykły sposób {return {obj}}
  capital: capital && capital[0],
  population: population.toLocaleString(),
  name,
  code: cioc || cca2 || cca3 || ccn3,
  region,
  flagUrl,
});

const ListView = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = countries.filter(country => {
    return (!query || country.name.toLowerCase().includes(query)) && (!region || country.region === region);
  });

  const renderCountryItem = country => (
    <li className={styles.item} key={country.code}>
      <a href={`?country=${country.code}`} className={styles.anchor}>
        <div className={styles.imageContainer}>
          <img src={country.flagUrl} alt={`${country.name} flag`} className={styles.image} />
        </div>
        <div className={styles.infoContainer}>
          <strong className={styles.countryName}>{country.name}</strong>
          <InfoElement label="Population" value={country.population} />
          <InfoElement label="Region" value={country.region} />
          <InfoElement label="Capital" value={country.capital} />
        </div>
      </a>
    </li>
  );

  useEffect(() => {
    fetch(API_URL_ALL)
      .then(res => res.json())
      .then(countriesRaw => {
        setCountries(countriesRaw.map(transformCountry));
      });
  }, []);

  return (
    <div>
      <Filters onQuery={setQuery} onRegion={setRegion} />
      <ul className={styles.list}>{filteredCountries.map(renderCountryItem)}</ul>
    </div>
  );
};

export default ListView;
