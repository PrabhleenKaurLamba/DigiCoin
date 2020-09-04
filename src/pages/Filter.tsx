import React, {useEffect} from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonBackButton,
} from '@ionic/react';
import UIContext from '../Context';

const Filter: React.FC = () => {
    const { setShowTabs } = React.useContext(UIContext);

    useEffect(() => {
      setShowTabs(false);
  
      return() => {
        setShowTabs(true);
      };
    });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref="/customer"/>
        </IonButtons>
          <IonTitle>Help</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>help page</h2>
      </IonContent>
    </IonPage>
  );
};

export default Filter;
