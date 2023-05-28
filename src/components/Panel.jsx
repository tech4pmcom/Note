
import BtnDownload from "./BtnDownload";

const handleDownload = () => {
    const content = document.getElementById('text_area').value;
    const date = (new Date()).toISOString().split('T')[0]
    let fileName = prompt("Enter file name:", date);
    if (fileName) {
        fileName = fileName.replace(/(\.txt)?$/, ".txt");
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
        link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function Panel() {
    return (
        <>
            <BtnDownload handleDownload={handleDownload} />
        </>
    );
}

export default Panel;
