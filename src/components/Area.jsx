
function Area({ mode, fontSize }) {
    return (
        <label htmlFor="text_area">
            <textarea id="text_area"
                      style={{ fontSize: `${fontSize}px` }}
                      className={`text-area text-area-fancy-design ${mode === 'light' ? 'text-area-for-light' : 'text-area-for-dark'}`}
            ></textarea>
        </label>
    );
}

export default Area;
