import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultContainer.css'
const ResultContainer = (props) => {
    var i = 0;
    const suggestedNamesList = props.suggestedNames.map((suggestedName) => {
        i = i + 1;
        return <NameCard key={i} suggestedName={suggestedName} />
    });
    return (
        <div className="result-container">
            {suggestedNamesList}
        </div>
    )
}

export default ResultContainer