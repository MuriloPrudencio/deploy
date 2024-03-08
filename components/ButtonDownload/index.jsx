import React from "react";
import { MobileButton, DesktopButton } from "./style";

const ButtonDownload = ({isMobile}) => {
  const handleClick = () => {
    const url = isMobile ? 'https://play.google.com/store/apps/details?id=com.opt.supremapoker&hl=pt_BR&gl=US&pli=1' : 'https://supremapoker.net/download/supremapoker.exe';
    window.location.href = url;

  }

  return (
    <div>
    {isMobile ? (
      <MobileButton src="/images/icons/playstore.png" onClick={handleClick} />
    ) : (
      <DesktopButton src="/images/icons/windows.png" onClick={handleClick}/>
    )}
  </div>
  )
};

export default ButtonDownload;