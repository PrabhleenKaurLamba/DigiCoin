import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonImg,
} from '@ionic/react';
import React, { useEffect } from 'react';
import Login from '../components/Login';
import logo from '../../src/images/nvklogo.png';
import './Sign.css';
import UIContext from '../Context';

const Sign: React.FC = () => {
  const { setShowTabs } = React.useContext(UIContext);
  useEffect(() => {
    setShowTabs(false);

    return () => {
      setShowTabs(false);
    };
  });

  return (
    <IonPage className="center">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg class="logo1" src={logo} alt="NVK Pay Logo" />
        <h1 className="middle">NVK Pay</h1>
        <h6 className="middle">Digitizing America's Piggy Bank</h6>
        <Login />
      </IonContent>
    </IonPage>
  );
};

export default Sign;
