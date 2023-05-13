import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './component/App';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

//console.log('%cFIELD', 'background-color:red; color: white; padding:10px', field)
//console.log('%cNAME', 'background-color:orange; color: white; padding:10px', name)
//console.log('%cCHILDREN', 'background-color:green; color: white; padding:10px', children)