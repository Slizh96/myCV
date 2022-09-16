import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skillls/Skills";
import {Projects} from "./projects/Projects";
import {Udalenno} from "./udalunno/Udalenno";
import {Contacts} from "./contacts/Contacts";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Udalenno/>
            <Contacts/>
        </div>
    );
}

export default App;
