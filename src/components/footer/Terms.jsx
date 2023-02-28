import React from "react";

function Terms(props) {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#202020] bg-opacity-80 flex justify-center items-center text-left text-white">
      <div className="relative p-5 w-full max-w-2xl bg-[#2a2a2a] border border-black rounded-xl">
        <h1 className="text-base font-bold text-center text-[#ff4989]">
          Terms & Agreement
        </h1>
        <p className="text-xs">
          Welcome to Sean Jimwell Buclatin's portfolio website. By using this
          website, you agree to the following terms and conditions: <br />
          1. Intellectual Property: All content on this website, including but
          not limited to text, images, graphics, logos, videos, and audio, are
          owned by Sean Jimwell Buclatin and are protected by copyright laws.
          You may not reproduce, distribute, or use any content from this
          website without the prior written consent of Sean Jimwell Buclatin.{" "}
          <br />
          2. User Conduct: By using this website, you agree to conduct yourself
          in a respectful and lawful manner. You may not use this website to
          post any content that is offensive, defamatory, or illegal. <br />
          3. Disclaimer: Sean Jimwell Buclatin does not guarantee the accuracy,
          completeness, or timeliness of any content on this website. All
          content is provided "as is" and without warranties of any kind,
          whether express or implied. <br />
          4. Limitation of Liability: Sean Jimwell Buclatin will not be liable
          for any damages arising from the use or inability to use this website,
          including but not limited to direct, indirect, incidental,
          consequential, or punitive damages. <br />
          5. Changes to Terms and Agreement: Sean Jimwell Buclatin reserves the
          right to modify or update these terms and conditions at any time
          without prior notice. By continuing to use this website, you agree to
          be bound by the updated terms and conditions.
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

export default Terms;
