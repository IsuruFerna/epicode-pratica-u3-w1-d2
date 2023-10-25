import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

import fantacy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";

function App() {
   return (
      <div className="App vh-100">
         <header className="App-header">
            <MyNav />
         </header>
         <main>
            <Welcome />
            <AllTheBooks bookGenre={fantacy} />
            <AllTheBooks bookGenre={history} />
            <AllTheBooks bookGenre={horror} />
            <AllTheBooks bookGenre={romance} />
            <AllTheBooks bookGenre={scifi} />
         </main>
         <footer>
            <MyFooter />
         </footer>
      </div>
   );
}

export default App;
