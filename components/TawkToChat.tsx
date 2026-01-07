"use client";

import Script from "next/script";

export default function TawkToChat() {
    return (
        <Script
            src="https://embed.tawk.to/68d1133164b9ae19220be6d9/1j5ob5uua"
            strategy="afterInteractive"
            crossOrigin="anonymous"
        />
    );
}
