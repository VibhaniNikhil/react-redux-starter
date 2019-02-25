import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import routes from '../../routes'

class DefaultLayout extends React.Component {
    render() {        
        return (
            <div> 
                <DefaultHeader />
                <Switch>
                    {routes.map((route, index) => {
                        return route.component ? (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                <route.component {...props}/>
                                )}/>
                        ) : (null)
                    })}
                </Switch>
                <DefaultFooter />
            </div>
        )
    }
}

export default DefaultLayout