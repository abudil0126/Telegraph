import React from 'react'
import './Nav.css'
import { useTranslation } from 'react-i18next'
import i18n from '../../services/language/i18next'

const Nav = () => {
    const {t} = useTranslation()
  return (
    <nav>
        <div className='logo'>
            <h1>Telegraph</h1>
        </div>
        <div className='menu'>
            <select value={localStorage.getItem('lang')} className='lang' onChange={(e) => i18n.changeLanguage(e.target.value)}>
                <option value='en'>EN</option>
                <option value='ru'>RU</option>
                <option value='uz'>UZ</option>
            </select>
            <button className='try__btn'>{t('nav__btn')}</button>
        </div>
    </nav>
  )
}

export default Nav