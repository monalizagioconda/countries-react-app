import styles from "./CountryDetails.module.css";
import InfoElement from "./InfoElement";

const CountryDetails = ({
  country: { flagUrl, name, nativeName, population, region, subregion, capital, tld, currencies, languages, borders },
}) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={flagUrl} alt={`${name} flag`} />
      </div>
      <div>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.infoContent}>
          <InfoElement label="NativeName" value={nativeName} />
          <InfoElement label="Population" value={population} />
          <InfoElement label="Region" value={region} />
          <InfoElement label="Sub Region" value={subregion || "-"} />
          <InfoElement label="Capital" value={capital} />
          <InfoElement label="Top Level Domain" value={tld[0]} />
          <InfoElement label="Currencies" value={currencies} />
          <InfoElement label="Languages" value={languages} />
        </div>
        <div>
          <strong className={styles.borderCountries}>Border Countries:</strong>
          {(borders || []).map(border => (
            <a key={border} className={`shadow-button ${styles.shadowButton}`} href={`?country=${border}`}>
              {border}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
