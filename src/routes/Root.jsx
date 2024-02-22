import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import styles from './Root.module.css'

const mql = matchMedia('(prefers-color-scheme: dark)')

const initialTheme = localStorage.getItem('theme') || (mql.matches ? 'dark' : 'light');

function Root() {
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
        <Outlet />
      </main>
    </div>
  )
}

export default Root
