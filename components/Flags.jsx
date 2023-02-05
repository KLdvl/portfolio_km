import React from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useDispatch, useSelector } from "react-redux"
import {changeLang} from '../store/langSlice'
import i18n from '../i18n/i18n';

export const Flags = ({ country }) => {
    const langState = useSelector((state) => state.lang.lang);
    const dispatch = useDispatch();

    const handleLang = () => {
        i18n.changeLanguage((langState === 'gb' ? 'fr' : 'en'))
        langState === 'gb' ? dispatch(changeLang('fr')) : dispatch(changeLang('gb'))
    }

    return (
        <div id={`${country}`} onClick={handleLang} className={`fi fi-${country}`}>
        </div>
    )
}