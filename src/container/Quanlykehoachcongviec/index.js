import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
class Quanlykehoachcongviec extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Quanlykehoachcongviec}>
                Quanlykehoachcongviec
            </div>
        );
    }
}

Quanlykehoachcongviec.propTypes = {

};

export default withStyles(styles)(Quanlykehoachcongviec);