import React from "react";

function Privacy(props) {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#202020] bg-opacity-80 flex justify-center items-center text-left text-white">
      <div className="relative p-5 w-full max-w-2xl bg-[#2a2a2a] border border-black rounded-xl">
        <h1 className="text-base font-bold text-center text-[#ff4989]">
          Privacy Policy
        </h1>
        <p className="text-xs">
          1. Personal Information: We may collect personal information that you
          provide to me voluntarily, such as your name, email address, and other
          contact information. We will only use this information for the purpose
          for which it was provided. <br />
          2. Usage Data: We may also collect non-personal information about how
          visitors use our website, such as their IP address, browser type, and
          operating system. We use this information to improve our website and
          provide a better user experience. <br />
          3. Cookies: Our website may use cookies to collect information about
          your preferences and browsing behavior. You can choose to disable
          cookies in your browser settings, but this may affect your ability to
          use certain features of our website. <br />
          4. Disclosure of Information: We will not disclose your personal
          information to third parties, except as required by law or with your
          consent. <br />
          5. Security: We take reasonable measures to protect your personal
          information from unauthorized access, use, or disclosure. However, no
          method of transmission over the internet or electronic storage is 100%
          secure. <br />
          By using our website, you consent to our collection, use, and
          disclosure of your personal information as described in this Privacy
          Policy. If you have any questions or concerns about our Privacy
          Policy, please contact me at buclatinseanjimwell@gmail.com.
        </p>
        <button
          className="absolute bottom-0 left-0 right-0 text-[#ff4989]"
          onClick={() => props.setTrigger(false)}
        >
          I Understand
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Privacy;
