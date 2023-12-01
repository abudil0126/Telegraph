import React from 'react'
import './Comments.css'
import UsersComment from '../../../img/UsersComments.png'
import { IoIosArrowForward } from 'react-icons/io'
import { useTranslation } from 'react-i18next'


const Comments = () => {
    const {t} = useTranslation()
    return (
        <div className='comments'>
            <div><img src={UsersComment} className="comments__img" alt="" /></div>
            <div className='comments__info'>
                <h2 className='comments__title'>{t("comments.title")}</h2>
                <p className='comments__text'>
                    {t("comments.text")}<br/>
                    <br />
                    {t("comments.text2")}
                </p>
            </div>
        </div>
    )
}

export default Comments