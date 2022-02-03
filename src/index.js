import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
import App from './App';


ReactDOM.render(

    <Router>
        <App/>
    </Router>,

  document.getElementById('root')
);
