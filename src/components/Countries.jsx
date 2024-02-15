import { useEffect, useState } from 'react'
import Header from './Header'
import styles from './Countries.module.css'
import ListView from './ListView'
import DetailsView from './DetailsView'

const mql = matchMedia('(prefers-color-scheme: dark)')

const initialTheme = localStorage.getItem('theme') || (mql.matches ? 'dark' : 'light');

function Countries() {
  const searchParams = new URLSearchParams(window.location.search);
  const countryCode = searchParams.get("country");
  const [isDarkMode, setDarkMode] = useState(initialTheme === 'dark');
  
  const onModeChange = () => {
    setDarkMode(prevMode => !prevMode);
  }

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.containerDark : styles.containerLight}`}>
      <Header onModeChange={onModeChange} isDarkMode={isDarkMode} />
      <hr />
      <main className={`${styles.main} fixed-width-content`}>
        {countryCode ? <DetailsView countryCode={countryCode} /> : <ListView />}
      </main>
    </div>
  )
}

export default Countries
