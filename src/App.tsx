import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import { useState } from "react";
import Home from "./pages/Home";
import Device from "./pages/Device";
import Setting from "./pages/Setting";
import Login from "./pages/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const [hasLogin, setHasLogin] = useState(!!localStorage.getItem("token"));
  console.log(hasLogin, "hasLogin");

  return (
    <IonApp>
      <IonReactRouter>
        {hasLogin ? (
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/device">
                <Device />
              </Route>
              <Route exact path="/setting">
                <Setting />
              </Route>
              <Route exact path="/login">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon aria-hidden="true" icon={triangle} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="device" href="/device">
                <IonIcon aria-hidden="true" icon={ellipse} />
                <IonLabel>Device</IonLabel>
              </IonTabButton>
              <IonTabButton tab="setting" href="/setting">
                <IonIcon aria-hidden="true" icon={square} />
                <IonLabel>Setting</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        ) : (
          <IonRouterOutlet>
            <Route exact path="/login">
              <Login
                onSuccess={() => {
                  setHasLogin(true);
                }}
              />
            </Route>
            <Redirect to="/login" />
          </IonRouterOutlet>
        )}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
