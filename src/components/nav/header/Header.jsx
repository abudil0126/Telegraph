import React from 'react'
import './Header.css'
import UsersPhone from '../../../img/UsersPhone.png'
import { useTranslation } from 'react-i18next'
const Header = () => {
    const {t} = useTranslation()
  return (
    <header>
        <div className='header__info'>
            <h1 className='header__title'>{t("header.title")}</h1>
            <p className='header__text'>{t("header.text")}</p>
            <button className='header__btn'>{t("header.btn")}</button>
        </div>
        <div className='header__img'>
            <img src={UsersPhone} alt="" />
        </div>
    </header>
  )
}

export default Header