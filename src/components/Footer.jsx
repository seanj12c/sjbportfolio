import React, { useState } from "react";
import Terms from "./footer/Terms";
import Privacy from "./footer/Privacy";
const Footer = () => {
  const [TermsPopup, setTermsPopup] = useState(false);
  const [PrivacyPopup, setPrivacyPopup] = useState(false);

  return (
    <div className="justify-between w-full h-[10vh] items-center p-4 text-center md:flex text-white bg-[#202020]">
      <div>
        <p className="text-xs lg:text-sm">
          Copyright © 2023 Sean Jimwell Buclatin. All rights reserved.
        </p>
      </div>
      <div className="flex justify-center gap-2">
        <button
          className="text-xs lg:text-sm"
          onClick={() => setTermsPopup(true)}
        >
          Terms & Agreements
        </button>
        <Terms trigger={TermsPopup} setTrigger={setTermsPopup} />
        <button
          className="text-xs lg:text-sm"
          onClick={() => setPrivacyPopup(true)}
        >
          Privacy Policy
        </button>
        <Privacy trigger={PrivacyPopup} setTrigger={setPrivacyPopup} />
      </div>
    </div>
  );
};

export default Footer;
