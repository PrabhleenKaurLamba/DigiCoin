import React, { useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonTabs,
  IonTabButton,
  IonTabBar,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonButtons,
  IonMenuButton,
  IonButton,
} from '@ionic/react';
import logo from '../../src/images/nvklogo.png';
import Context from '../Context';
import './Customer.css';

const Customer: React.FC = () => {
  const { setShowTabs } = React.useContext(Context);
  useEffect(() => {
    setShowTabs(true);

    return () => {
      setShowTabs(true);
    };
  });

  // let React = require('react');
  // let ReactDOM = require('react-dom');
  let Barcode = require('react-barcode');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">NVK Pay</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonImg slot="end" class="logo2" src={logo} alt="NVK Pay Logo" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Scan this barcode at the checkout to receive your change</h1>
        <Barcode class="barcode" value="6745 6787 1230"/>
      </IonContent>
    </IonPage>
  );
};

export default Customer;
