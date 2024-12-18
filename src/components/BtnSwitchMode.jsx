
function BtnSwitchMode({ mode, handleSwitchMode }) {
    return (
        <button className={`btn-switch-mode btn-fancy-design ${mode === 'light' ? 'btn-for-light btn-hover-light' : 'btn-for-dark btn-hover-dark'}`}
                onClick={handleSwitchMode}>
            Go {mode === 'light' ? 'Dark' : 'Light'}
        </button>
    );
}

export default BtnSwitchMode;
