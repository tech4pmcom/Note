
import Area from "./components/Area";
import Panel from "./components/Panel";
import React from "react";

function App() {
    const [modeState, setModeState] = React.useState('light');
    const [zoomDecreaseAvailableState, setZoomDecreaseAvailableState] = React.useState(true);
    const [zoomIncreaseAvailableState, setZoomIncreaseAvailableState] = React.useState(true);
    const [fontSizeState, setFontSizeState] = React.useState(18);

    const handleSwitchMode = () => {
        setModeState(modeState === 'light' ? 'dark' : 'light');
    };

    const handleZoomFontDecrease = () => {
        if (fontSizeState > 12) {
            setFontSizeState(fontSizeState - 2);
        } else {
            setZoomDecreaseAvailableState(false);
        }
        setZoomIncreaseAvailableState(true);
    };
    const handleZoomFontIncrease = () => {
        if (fontSizeState < 32) {
            setFontSizeState(fontSizeState + 2);
        } else {
            setZoomIncreaseAvailableState(false);
        }
        setZoomDecreaseAvailableState(true);
    };

    return (
        <>
            <Area mode={modeState}
                  fontSize={fontSizeState}
            />
            <Panel mode={modeState}
                   handleSwitchMode={handleSwitchMode}
                   handleZoomFontDecrease={handleZoomFontDecrease}
                   handleZoomFontIncrease={handleZoomFontIncrease}
                   zoomDecreaseAvailable={zoomDecreaseAvailableState}
                   zoomIncreaseAvailable={zoomIncreaseAvailableState}
            />
        </>
    );
}

export default App;
