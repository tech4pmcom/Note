
import BtnDownload from "./BtnDownload";
import BtnSwitchMode from "./BtnSwitchMode";
import BtnZoomFontIncrease from "./BtnZoomFontIncrease";
import BtnZoomFontDecrease from "./BtnZoomFontDecrease";

function Panel({
                   mode,
                   handleSwitchMode,
                   handleZoomFontDecrease,
                   handleZoomFontIncrease,
                   zoomDecreaseAvailable,
                   zoomIncreaseAvailable
               }) {
    const handleDownload = () => {
        const date = (new Date()).toISOString().split('T')[0]
        let fileName = prompt("Enter file name:", date);
        const content = document.getElementById('text_area').value;

        const lines = content.split('\n');
        lines.splice(0, 0, '');
        lines.splice(1, 0, fileName);
        lines.splice(2, 0, '-'.repeat(50));
        lines.splice(3, 0, '');
        lines.push('');
        const fileContent = lines.join('\n');

        if (fileName) {
            fileName = fileName.replace(/(\.txt)?$/, ".txt");
            const link = document.createElement('a');
            link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContent);
            link.download = fileName;
            link.style.display = 'none';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <>
            <BtnSwitchMode mode={mode} handleSwitchMode={handleSwitchMode} />
            <BtnZoomFontDecrease mode={mode}
                                 zoomDecreaseAvailable={zoomDecreaseAvailable}
                                 handleZoomFontDecrease={handleZoomFontDecrease} />
            <BtnZoomFontIncrease mode={mode}
                                 zoomIncreaseAvailable={zoomIncreaseAvailable}
                                 handleZoomFontIncrease={handleZoomFontIncrease} />
            <BtnDownload mode={mode} handleDownload={handleDownload} />
        </>
    );
}

export default Panel;
