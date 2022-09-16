import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skillls/Skills";
import {Projects} from "./projects/Projects";
import {Udalenno} from "./udalunno/Udalenno";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Udalenno/>
        </div>
    );
}

export default App;
