import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './divider.style.scss';

/**
 * Envie uma cor
 * @param {*} props 
 */
const Divider = (props) => {
    return(
        <div className="divider-container">
            <div className="divider-line" style={{backgroundColor: props.color}}></div>
                <div className="divider-icon"><FontAwesomeIcon icon={faStar} size="2x" color={props.color} /></div>
            <div className="divider-line" style={{backgroundColor: props.color}}></div>
        </div>
    )
}

export default Divider;