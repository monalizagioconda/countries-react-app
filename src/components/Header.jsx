import { Moon as MoonFilledIcon, MoonOutline as MoonOutlineIcon } from 'react-ionicons'

import styles from './Header.module.css'

function Header({ onModeChange, isDarkMode }) {
  return (
    <header className={styles.header}>
      <div className={`${styles.content} fixed-width-content`}>
        <h1>Where in the world?</h1>
        <button className={styles.button} onClick={onModeChange}>
          {isDarkMode ? (
            <MoonFilledIcon height="20px" width="20px" color="currentColor" className={styles.icon} />
          ) : (
            <MoonOutlineIcon height="20px" width="20px" color="currentColor" className={styles.icon} />
          )}
          <span>{isDarkMode ? 'Light' : 'Dark'} Mode</span>
        </button>
      </div>
    </header>
  )
}

export default Header
