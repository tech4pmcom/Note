
function BtnDownload({ mode, handleDownload }) {
    return (
        <button className={`btn-download btn-fancy-design ${mode === 'light' ? 'btn-for-light btn-hover-light' : 'btn-for-dark btn-hover-dark'}`}
                onClick={handleDownload}>
            Download
        </button>
    );
}

export default BtnDownload;
