import "./App.css";
import Mainresume from "./component/mainResume";
import Testflex from "./component/Testflex";
import Videobackground from "./component/Videobackground";
import ResponsiveAppBar from "./component/ResponsiveAppBar";

function App() {
    return (
        <div >
            {/* <Videobackground></Videobackground> */}
            <ResponsiveAppBar></ResponsiveAppBar>
            <Mainresume></Mainresume>
            {/* <Testflex></Testflex> */}
        </div>
    );
}

export default App;
