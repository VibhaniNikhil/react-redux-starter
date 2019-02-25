import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
    class Authentication extends React.Component {
        componentWillMount() {
            console.log(this.props)      
        }

        componentWillUpdate() {

        }

        render() {
            
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    const mapStateToProps = (state) => ({
        auth: state.Auth
    })

    return connect(mapStateToProps)(Authentication)
}