import React, { useEffect, useState } from 'react';
import { IonHeader } from '@ionic/react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import UIContext from '../Context';

const Googlelogin: React.FC = () => {
  const { setShowTabs } = React.useContext(UIContext);

  useEffect(() => {
    setShowTabs(false);

    return () => {
      setShowTabs(false);
    };
  });

  const hist = useHistory();
  const clientId =
    '492079137209-bv0l9akeq2g0vpc12g163r5td71rcv1i.apps.googleusercontent.com';
  const onSuccess = (res: any) => {
    console.log('Success Invoked');
    console.log('[Login Success] current user:', res.profileObj);
    if (res != null) {
      hist.push('/customer');
    }
  };
  const onFailure = (res: any) => {
    console.log('[Login Failed] res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
      />
    </div>
  );
};

export default Googlelogin;
