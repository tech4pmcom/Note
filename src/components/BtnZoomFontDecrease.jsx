
function BtnZoomFontDecrease({ mode, handleZoomFontDecrease, zoomDecreaseAvailable }) {
    return (
        <button className={`btn-zoom-font-decrease btn-fancy-design
        ${zoomDecreaseAvailable ? '' : 'btn-disabled'}
        ${mode === 'light' ? 'btn-for-light btn-hover-light' : 'btn-for-dark btn-hover-dark'}`}
                onClick={handleZoomFontDecrease}>
            -
        </button>
    );
}

export default BtnZoomFontDecrease;
