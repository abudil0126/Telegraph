import React from 'react'
import './Download.css'
import Android from '../../../img/android.svg'
import Apple from '../../../img/apple.svg'
import OC from '../../../img/OC.svg'
import { useTranslation } from 'react-i18next'
import { IoCloudDownloadOutline } from "react-icons/io5";

const Download = () => {
    const {t} = useTranslation()
  return (
    <div className='download'>
        <div className="download__card">
            <img src={Android} className="download__img" alt="" />
            <h4 className='download__title'>Android</h4>
            <p className='download__text'>{t("download.text")}</p>
            <small className='download__small'>{t("download.small")}<IoCloudDownloadOutline /></small>
        </div>
        <div className="download__card">
        <img src={Apple} className="download__img" alt="" />
            <h4 className='download__title'>Iphone</h4>
            <p className='download__text'>{t("download.text")}</p>
            <small className='download__small'>{t("download.small")}<IoCloudDownloadOutline /></small>
        </div>
        <div className="download__card">
        <img src={OC} className="download__img" alt="" />
            <h4 className='download__title'>Mac or Windows</h4>
            <p className='download__text'>{t("download.text")}</p>
            <small className='download__small'>{t("download.small")}<IoCloudDownloadOutline /></small>
        </div>
    </div>
  )
}

export default Download