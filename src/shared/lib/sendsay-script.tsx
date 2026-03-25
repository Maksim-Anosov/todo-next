import Script from 'next/script'

export const SendsayScript = () => {
  return (
    <Script id="sendsay-sdk" strategy="afterInteractive">
      {`
        (function(a,b,c,d){
          var e=a.getElementsByTagName(b)[0],
              f=a.createElement(b);
          f.async=!0;
          f.src="https://image.sendsay.ru/app/js/sdk/sdk.min.js";
          f.id="sendsay-sdk-script";
          f.dataset.accountId=c;
          f.dataset.siteId=d;
          e.parentNode.insertBefore(f,e);
        })(document,"script","x_1674462300972634","pl42397");
      `}
    </Script>
  )
}