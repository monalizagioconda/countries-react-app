import { SearchOutline as SearchOutlineIcon } from "react-ionicons";
import styles from "./Filters.module.css";

function Filters({ onQuery, onRegion }) {
  const handleInput = e => {
    onQuery(e.target.value.toLowerCase().trim());
  };

  const handleChange = e => {
    onRegion(e.target.value);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.search}>
        <SearchOutlineIcon height="16px" width="16px" color="currentColor" className={styles.icon} />
        <input
          type="text"
          id="query"
          placeholder="Search for a country..."
          className={styles.input}
          onInput={handleInput}
        />
      </div>
      <select name="region" id="region" onChange={handleChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filters;
