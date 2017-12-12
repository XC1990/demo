import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import { Provider } from 'react-redux';
import  store  from './store/index';

const Wrapper = () => {
    return (<MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
    )
};

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
