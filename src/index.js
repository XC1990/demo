import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import { Provider } from 'react-redux';
import  configureStore  from './store/index';

const Wrapper = () => {
    return (<MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
    )
};


const store = configureStore()

ReactDOM.render(<Wrapper/>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(<Wrapper/>, document.getElementById('root'))
    })
}

registerServiceWorker();


