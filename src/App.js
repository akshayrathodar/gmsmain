import "./App.css";
import {HashRouter, Route, Switch} from "react-router-dom";
import GreetingPage from "./pages/GreetingPage";
import SharePage from "./pages/SharePage";
import PrintDataPage from "./pages/PrintDataPage";
import EmailSendPage from "./pages/EmailSendPage";
import NotFoundPage from "./pages/NotFoundPage";
import SuccessPage from "./pages/SuccessPage";

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={GreetingPage}/>
            <Route exact path="/share/:language/:imageId" component={SharePage}/>
            <Route exact path="/print" component={PrintDataPage}/>
            <Route exact path="/email" component={EmailSendPage}/>
            <Route exact path="/success" component={SuccessPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </HashRouter>
);

export default App;
