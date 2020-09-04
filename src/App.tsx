import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonMenuToggle,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  card,
  wallet,
  helpCircle,
  logOut,
  list,
  arrowBackCircle,
} from 'ionicons/icons';

import Home from './pages/Home';
import Sign from './pages/Sign';
import Signm from './pages/Signm';
import Customer from './pages/Customer';
import Merchant from './pages/merchant';
import Wallet from './pages/Wallet';
import Filter from './pages/Filter';
import Logout from './components/Logout';
import Login from './components/Login';
import Loginm from './components/Loginm';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import UIContext from './Context';
import { IonRouter } from '@ionic/react-router/dist/types/ReactRouter/IonRouter';

const App: React.FC = () => {
  const { showTabs } = React.useContext(UIContext);

  let tabBarStyle = showTabs ? undefined : { display: 'none' };

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Redirect to="/home" />
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/sign" exact={true}>
            <Sign />
          </Route>
          <Route path="/logout" exact={true}>
            <Logout />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/loginm" exact={true}>
            <Loginm />
          </Route>
          <Route path="/signm" exact={true}>
            <Signm />
          </Route>
          <Route path="/customer" exact={true}>
            <Customer />
          </Route>
          <Route path="/wallet" exact={true}>
            <Wallet />
          </Route>
          <Route path="/merchant" exact={true}>
            <Merchant />
          </Route>
          <Route path="/filter" exact={true}>
            <Filter />
          </Route>
        </IonRouterOutlet>
        <IonMenu contentId="customer">
          <IonHeader>
            <IonToolbar>
              <IonTitle>NVK Pay</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink="/home" routerDirection="none">
                  <Logout />
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem button routerLink="/filter" routerDirection="none">
                  <IonIcon slot="start" icon={helpCircle} />
                  <IonLabel>Help</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonTabs>
          <IonRouterOutlet id="customer">
            <Redirect to="/home" />
            <Route path="/home" component={Home} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/sign" exact={true}>
              <Sign />
            </Route>
            <Route path="/customer" exact={true}>
              <Customer />
            </Route>
            <Route path="/wallet" exact={true}>
              <Wallet />
            </Route>
            <Route path="/filter" exact={true}>
              <Filter />
            </Route>
            <Route path="/logout" exact={true}>
              <Logout />
            </Route>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
            <Route path="/loginm" exact={true}>
              <Loginm />
            </Route>
            <Route path="/signm" exact={true}>
              <Signm />
            </Route>
            <Route path="/merchant" exact={true}>
              <Merchant />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" style={tabBarStyle}>
            <IonTabButton tab="a" href="/customer">
              <IonIcon icon={card} />
              <IonLabel>Scan</IonLabel>
            </IonTabButton>
            <IonTabButton tab="b" href="/wallet">
              <IonIcon icon={wallet} />
              <IonLabel>Wallet</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
