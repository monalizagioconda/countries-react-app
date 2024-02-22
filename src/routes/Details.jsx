import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { setData as setCountry } from "../reducers/countries.js";
import BackButton from "../components/BackButton";
import CountryDetails from "../components/CountryDetails";

const getUrl = countryCode =>
  `https://restcountries.com/v3.1/alpha/${countryCode}?fields=capital,population,name,cioc,region,subregion,flags,currencies,languages,tld,borders`;

const Details = () => {
  const dispatch = useDispatch()
  const { countryId } = useParams()
  const country = useSelector(state => state.countries.data[countryId]);

  useEffect(() => {
    if (!country) fetch(getUrl(countryId))
      .then(res => res.json())
      .then((countryData) => {
        if (!countryData) return

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

        dispatch(setCountry({
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
        }));
      });
  }, [country, countryId, dispatch]);

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
