import React, { useEffect } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonImg, IonTabs, IonTabButton, IonTabBar, IonIcon, IonLabel, IonRouterOutlet, IonButtons, IonMenuButton } from '@ionic/react';
import logo from '../../src/images/nvklogo.png';
import Context from '../Context';
import './Customer.css';

const Wallet: React.FC = () => {
  
  const { setShowTabs } = React.useContext(Context);
  useEffect(() => {
    setShowTabs(true);

    return() => {
      setShowTabs(true);
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

          </IonContent>
        </IonPage>
    );
};

export default Wallet;