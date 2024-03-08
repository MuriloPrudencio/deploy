import React from "react";
import { SkinDesignShare, SkinDesignShareFB, SkinDesignShareTW, SkinDesignShareTele, SkinDesignShareWhat } from "./styled";


const ShareButtons = ({ url }) => (
  <SkinDesignShare>
    <SkinDesignShareFB
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer"
    />

    <SkinDesignShareTW
      data-text={`Aniversário Suprema 5 anos`}
      data-url={url}
      href="http://twitter.com/share"
      rel="nofollow"
      target="_blank"
    />

    <SkinDesignShareTele
      href={`https://telegram.me/compartilhar?text=Confira%20esta%20imagem!&url=${url}`}
      rel="nofollow"
      target="_blank"
    />

    <SkinDesignShareWhat
      href={`https://api.whatsapp.com/send?text=Aniversario%20Suprema%205%20anos%20${url}`}
      rel="nofollow"
      target="_blank"
    />
  </SkinDesignShare>
  );
  

  export default ShareButtons;