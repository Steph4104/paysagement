import React from 'react';
import ReactDOM from 'react-dom';
import './libs/fontawesome/fontawesome-all.min';
import './styles/base.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import './i18n';

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>,
    document.getElementById('root')
);

registerServiceWorker();