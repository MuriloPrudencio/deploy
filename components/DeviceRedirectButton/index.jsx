import React from "react";
import { Button } from "./style";
import { withNamespaces } from 'react-i18next';

function DeviceRedirectButton  ({t}) {
  const getRedirectLink = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.match(/Android/i)) {
      return "https://supremapoker.net/download/suprema_v123.apk";
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
      return "https://apps.apple.com/br/app/suprema-poker/id1583176410";
    } else {
      return "https://supremapoker.net/download/supremapoker.exe";
    };
  };
  const redirectToLink = () => {
    const link = getRedirectLink();
    window.location.href = link;
  };

  return <Button onClick={redirectToLink}>{t(`Baixe o app agora`)}</Button>;
};

export default withNamespaces()(DeviceRedirectButton);
