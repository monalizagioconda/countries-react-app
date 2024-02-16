import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import BackButton from "../components/BackButton";
import CountryDetails from "../components/CountryDetails";

const getUrl = countryCode =>
  `https://restcountries.com/v3.1/alpha/${countryCode}?fields=capital,population,name,cioc,region,subregion,flags,currencies,languages,tld,borders`;

const Details = () => {
  const [country, setCountry] = useState();
  const { countryId } = useParams()

  useEffect(() => {
    countryId && fetch(getUrl(countryId))
      .then(res => res.json())
      .then((countryData) => {
        if (!countryData) {
          return setCountry(undefined);
        }

        const {
          capital,
          population,
          name: { common: name, nativeName },
          cioc: code,
          region,
          subregion,
          flags: { png: flagUrl },
          currencies,
          languages,
          tld,
          borders,
        } = countryData;

        setCountry({
          capital: capital && capital[0],
          population: population.toLocaleString(),
          name,
          nativeName: Object.values(nativeName)[0].common,
          code,
          region,
          subregion,
          flagUrl,
          currencies: Object.values(currencies)
            .map(currency => currency.name)
            .join(", "),
          languages: Object.values(languages).join(", "),
          tld: tld[0],
          borders,
        });
      });
  }, [countryId]);

  return (
    <div>
      <BackButton />
      {country ? (
        <CountryDetails country={country} />
      ) : (
        <p>Loading country...</p>
      )}
    </div>
  );
};

export default Details;
