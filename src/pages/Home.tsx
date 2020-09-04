import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import logo from '../../src/images/nvklogo.png';
import UIContext from '../Context';

const Home: React.FC = () => {
  const { setShowTabs } = React.useContext(UIContext);

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
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
