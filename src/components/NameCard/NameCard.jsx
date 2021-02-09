import React from 'react';
import './NameCard.css'

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';
const NameCard = (props) => {
    return (
        <a target="_blank" rel="noreferrer"
            className="card-Link" href={`${nameCheapUrl}${props.suggestedName}`}>
            <div className="result-name-card">
                <p className="results">
                    {props.suggestedName}
                </p>
            </div>
        </a>
    )
}

export default NameCard