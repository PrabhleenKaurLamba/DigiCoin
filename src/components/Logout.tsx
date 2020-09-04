import React, { useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';
import UIContext from '../Context';

const Logout: React.FC = () => {

  const { setShowTabs } = React.useContext(UIContext);

  useEffect(() => {
    setShowTabs(false);

    return() => {
      setShowTabs(false);
    };
  });

  const clientId =
    '492079137209-bv0l9akeq2g0vpc12g163r5td71rcv1i.apps.googleusercontent.com';
  const onSuccess = () => {
    alert('Logout made successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
};

export default Logout;
