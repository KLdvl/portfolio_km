import '../styles/globals.css'
import React from 'react'
import Navbar from "../components/Navbar";
import './i18n';
import { Provider } from 'react-redux'
import { store, persistor } from '../store/index'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }) {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            < Component {...pageProps} />
        </PersistGate>
    </Provider>
}

export default MyApp
