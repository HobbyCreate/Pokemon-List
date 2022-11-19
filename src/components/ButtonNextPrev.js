import React from 'react'

function ButtonNextPrev({ onPrevClick, onNextClick }) {
    return (
        <div className="btnPrevNext-container">
            {onPrevClick && <button type="text" className="btn" onClick={onPrevClick}>Prev</button>}
            {onNextClick && <button type="text" className="btn" onClick={onNextClick}>Next</button>}
        </div>
    )
}

export default ButtonNextPrev