import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound.png';

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={PageNotFound}  />
            <h1> 404 - error </h1>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;