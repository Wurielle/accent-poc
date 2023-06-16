import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Trans, withTranslation } from 'react-i18next'

function App({i18n, t}: any) {
  const [count, setCount] = useState(0)
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{  t('Vite + React') }</h1>
      <div className="card">
        <button onClick={() => changeLanguage('fr')}>fr</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => setCount((count) => count + 1)}>
            {t('count is {{count}}', {
                count,
            })}
        </button>
        <p>
            <Trans>
                Edit <code>src/App.tsx</code> and save to test HMR
            </Trans>
        </p>
      </div>
      <p className="read-the-docs">
          {t('Click on the Vite and React logos to learn more')}
          {t('nice!!')}
          {t('even better')}
          {t('it should be good')}
      </p>
    </>
  )
}

export default withTranslation()(App)
