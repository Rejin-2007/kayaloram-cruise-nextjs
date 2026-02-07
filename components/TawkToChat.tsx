"use client";

import Script from "next/script";

export default function TawkToChat() {
  return (
    <>
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.Tawk_API = window.Tawk_API || {};
            window.Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script");
              s1.async = true;
              s1.src = "https://embed.tawk.to/5d3ac7a69b94cd38bbe96575/1h8mcqpl6";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              document.head.appendChild(s1);
            })();
          `,
        }}
      />
      <noscript>
        <a href="https://www.tawk.to" rel="nofollow noopener noreferrer">
          Live chat support
        </a>
      </noscript>
    </>
  );
}
