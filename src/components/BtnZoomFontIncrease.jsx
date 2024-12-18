
function BtnZoomFontIncrease({ mode, handleZoomFontIncrease, zoomIncreaseAvailable }) {
    return (
        <button className={`btn-zoom-font-increase btn-fancy-design
        ${zoomIncreaseAvailable ? '' : 'btn-disabled'}
        ${mode === 'light' ? 'btn-for-light btn-hover-light' : 'btn-for-dark btn-hover-dark'}`}
                onClick={handleZoomFontIncrease}>
            +
        </button>
    );
}

export default BtnZoomFontIncrease;
