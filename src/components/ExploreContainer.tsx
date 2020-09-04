import React, { useEffect } from 'react';

import './ExploreContainer.css';
import logo from '../../src/images/nvklogo.png';
import customer from '../../src/images/customer.png';
import merchant from '../../src/images/merchant.png';
import { IonButton, IonIcon, IonContent, IonGrid, IonRow, IonCol, IonToolbar, IonTitle, IonImg} from '@ionic/react';
import UIContext from '../Context';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const { setShowTabs } = React.useContext(UIContext);

  useEffect(() => {
    setShowTabs(false);

    return() => {
      setShowTabs(false);
    };
  });


  return (
    <IonContent className="signin">
      <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="10" class="ion-text-center">
                <IonButton routerLink="/signm" color="two" expand="block" className="login">Merchant<IonImg class="cm" src={merchant} alt="Merchant"/></IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg class="logo" src={logo} alt="NVK Pay Logo"/>
            </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <IonCol size="10" class="ion-text-center">
                <IonButton routerLink="/sign" color="one" expand="block" className="login">Customer<IonImg class="cm" src={customer} alt="Customer"/></IonButton>
              </IonCol>
            </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default ExploreContainer;
