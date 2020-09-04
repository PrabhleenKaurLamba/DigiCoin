import React, { useEffect } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonImg, IonTabs, IonTabButton, IonTabBar, IonIcon, IonLabel, IonRouterOutlet, IonButtons, IonMenuButton } from '@ionic/react';
import logo from '../../src/images/nvklogo.png';
import Context from '../Context';
import './Customer.css';

const Merchant: React.FC = () => {
  const { setShowTabs } = React.useContext(Context);

  useEffect(() => {
    setShowTabs(false);

    return() => {
      setShowTabs(false);
    };
  });

    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
              <IonTitle className="ion-text-center">NVK Pay</IonTitle>
              <IonButtons slot="start">
                <IonMenuButton/>
              </IonButtons>
              <IonImg slot="end" class="logo2" src={logo} alt="NVK Pay Logo"/>
          </IonToolbar>
        </IonHeader>
          <IonContent>
            <h1>Merchant page...</h1>
          </IonContent>
        </IonPage>
    );
};

export default Merchant;