"use strict";(self.webpackChunktallyarbiter_docs=self.webpackChunktallyarbiter_docs||[]).push([[102],{1354:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>c});var s=i(4848),a=i(8453);const l={sidebar_position:3},r="Remote Tally Viewing (Listener Clients)",n={id:"usage/sections/listener-clients",title:"Remote Tally Viewing (Listener Clients)",description:'In addition to the multiple output action types that can be used to trigger any number of remote devices for a tally state, Tally Arbiter also supports "listener clients": devices and software that open websocket connections to the Tally Arbiter server and can receive data in real time to utilize tally information.',source:"@site/docs/usage/sections/listener-clients.md",sourceDirName:"usage/sections",slug:"/usage/sections/listener-clients",permalink:"/TallyArbiter/docs/usage/sections/listener-clients",draft:!1,unlisted:!1,editUrl:"https://github.com/josephdadams/TallyArbiter/edit/master/docs/docs/usage/sections/listener-clients.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sources",permalink:"/TallyArbiter/docs/usage/sections/sources"},next:{title:"TSL 3.1 Protocol Conversion",permalink:"/TallyArbiter/docs/usage/sections/tsl"}},o={},c=[{value:"Using a web page for tally output",id:"using-a-web-page-for-tally-output",level:2},{value:"Viewing all tally data",id:"viewing-all-tally-data",level:2},{value:"Using an M5StickC for tally output",id:"using-an-m5stickc-for-tally-output",level:2},{value:"Using an ESP32 board with NeoPixel LEDs",id:"using-an-esp32-board-with-neopixel-leds",level:2},{value:"Using an M5 Atom Matrix for tally output",id:"using-an-m5-atom-matrix-for-tally-output",level:2},{value:"Using a blink(1) for tally output",id:"using-a-blink1-for-tally-output",level:2},{value:"Using a Pimoroni Blinkt! for tally output",id:"using-a-pimoroni-blinkt-for-tally-output",level:2},{value:"Using a Relay for contact-closure systems",id:"using-a-relay-for-contact-closure-systems",level:2},{value:"Using a GPO output",id:"using-a-gpo-output",level:2},{value:"Arduino ESP8266 with Neopixel",id:"arduino-esp8266-with-neopixel",level:2},{value:"TTGO_T Displays",id:"ttgo_t-displays",level:2},{value:"VMix Tally Emulation",id:"vmix-tally-emulation",level:2},{value:"Tally over NDI",id:"tally-over-ndi",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"remote-tally-viewing-listener-clients",children:"Remote Tally Viewing (Listener Clients)"}),"\n",(0,s.jsx)(t.p,{children:'In addition to the multiple output action types that can be used to trigger any number of remote devices for a tally state, Tally Arbiter also supports "listener clients": devices and software that open websocket connections to the Tally Arbiter server and can receive data in real time to utilize tally information.'}),"\n",(0,s.jsx)(t.p,{children:'All connected listener clients are tracked and listed in the Settings page. You can "flash" a particular listener by clicking the Flash button next to it in the list. This is useful if you need to get the operator\'s attention or determine which listener is which. You can also reassign the listener to receive tally information of another Device at any time using the Tally Arbiter interface.'}),"\n",(0,s.jsx)(t.h2,{id:"using-a-web-page-for-tally-output",children:"Using a web page for tally output"}),"\n",(0,s.jsxs)(t.p,{children:["Navigate to ",(0,s.jsx)(t.code,{children:"/tally"})," on the Tally Arbiter server in your browser and select a Device from the list. As long as the page remains connected to the system, it will display tally data (Preview, Program, Preview+Program, Clear) in real time. Web clients can also send/receive messages with the Producer, like a chat room."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["You can also go to ",(0,s.jsx)(t.code,{children:"/#/tally/9fe2efd9a"})," (replace ",(0,s.jsx)(t.code,{children:"9fe2efd9a"})," with your actual DeviceId) and auto load the page to that Device without having to choose it from the list."]})}),"\n",(0,s.jsxs)(t.p,{children:["If you include ",(0,s.jsx)(t.code,{children:"?chat=false"})," to the request, you can turn off the Messaging/Chat functions."]}),"\n",(0,s.jsx)(t.h2,{id:"viewing-all-tally-data",children:"Viewing all tally data"}),"\n",(0,s.jsxs)(t.p,{children:["Navigate to ",(0,s.jsx)(t.code,{children:"/producer"})," on the Tally Arbiter server in your browser to view all Devices and their current states. This information is also available in the Settings GUI but is displayed in a minimal fashion here for in-service viewing. Messages can be sent and received to supported clients.\n",(0,s.jsxs)(t.strong,{children:["This page is restricted by a username and password. The default username is ",(0,s.jsx)(t.code,{children:"producer"})," and the default password is ",(0,s.jsx)(t.code,{children:"12345"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"using-an-m5stickc-for-tally-output",children:"Using an M5StickC for tally output"}),"\n",(0,s.jsxs)(t.p,{children:["Tally Arbiter can send tally data to an M5StickC Arduino Finger Computer. A remote script is available here, ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/tree/master/listener_clients/m5stickc-listener",children:"Tally Arbiter M5StickC Listener"}),". For installation and use instructions, please check out that repository's ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/blob/master/listener_clients/m5stickc-listener/README.md",children:"readme"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"using-an-esp32-board-with-neopixel-leds",children:"Using an ESP32 board with NeoPixel LEDs"}),"\n",(0,s.jsxs)(t.p,{children:["You can use Tally Arbiter with generic ESP32 boards as well with this separate script: ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/tree/master/listener_clients/esp32-neopixel-listener",children:"Tally Arbiter ESP32 Listener"}),". For installation and instructions, please check out that repository's ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/blob/master/listener_clients/esp32-neopixel-listener/README.md",children:"readme"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"using-an-m5-atom-matrix-for-tally-output",children:"Using an M5 Atom Matrix for tally output"}),"\n",(0,s.jsxs)(t.p,{children:["Tally Arbiter can send tally data to an M5 Atom Matrix. A remote script is available in the separate repository, ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/tree/master/listener_clients/M5AtomMatrix-listener",children:"Tally Arbiter M5 Atom Matrix Listener"}),". For installation and use instructions, please check out that repository's ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/blob/master/listener_clients/M5AtomMatrix-listener/README.md",children:"readme"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"using-a-blink1-for-tally-output",children:"Using a blink(1) for tally output"}),"\n",(0,s.jsxs)(t.p,{children:["Tally Arbiter supports the use of a USB blink(1) device as a tally light. A remote listening script is available in the separate repository, ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/tree/master/listener_clients/blink1-listener",children:"Tally Arbiter Blink1 Listener"}),". For installation and use instructions, please check out that repository's ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/blob/master/listener_clients/blink1-listener/README.md",children:"readme"}),". It is compatible with and was designed to run on a Raspberry Pi Zero, making this an inexpensive option for ",(0,s.jsx)(t.em,{children:"wireless"})," tally output. However, it can be run on any OS/device that supports Python such as MacOS or Windows, which can be helpful if you want to use this with graphics or video playback operators, for example."]}),"\n",(0,s.jsx)(t.h2,{id:"using-a-pimoroni-blinkt-for-tally-output",children:"Using a Pimoroni Blinkt! for tally output"}),"\n",(0,s.jsxs)(t.p,{children:["Tally Arbiter supports the use of Pimoroni Blinkt! lights connected to a Raspberry Pi via the GPIO pins. A remote listening script is available in the separate repository, ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/tree/master/listener_clients/pimoroni-blinkt-listener",children:"Tally Arbiter Pimoroni Blinkt! Listener"}),". For installation and use instructions, please check out that repository's ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/blob/master/listener_clients/pimoroni-blinkt-listener/README.md",children:"readme"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"using-a-relay-for-contact-closure-systems",children:"Using a Relay for contact-closure systems"}),"\n",(0,s.jsxs)(t.p,{children:["Many Camera CCUs and other devices support incoming tally via contact closure. A remote listening script that can trigger USB relays is available with the separate repository, ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/tree/master/listener_clients/relay-listener",children:"Tally Arbiter Relay Listener"}),". For installation and use instructions, please check out that repository's ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/blob/master/listener_clients/relay-listener/README.md",children:"readme"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"using-a-gpo-output",children:"Using a GPO output"}),"\n",(0,s.jsxs)(t.p,{children:["Lots of equipment support the use of GPIO (General Purpose In/Out) pins to interact. This could be for logic control, turning on LEDs, etc. A remote listening script that can run on a Raspberry Pi is available with the separate repository, ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/tree/master/listener_clients/gpo-listener",children:"Tally Arbiter GPO Listener"}),". For installation and use instructions, please check out that repository's ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/blob/master/listener_clients/gpo-listener/README.md",children:"readme"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"arduino-esp8266-with-neopixel",children:"Arduino ESP8266 with Neopixel"}),"\n",(0,s.jsxs)(t.p,{children:["Use AdaFruit NeoPixel LED strips connected to an Arduino. Check out ",(0,s.jsx)(t.a,{href:"http://github.com/noahcallaway/",children:"NoahCallaway"}),"'s repository for more information: ",(0,s.jsx)(t.a,{href:"https://github.com/NoahCallaway/TallyArbiter-arduino-neopixel",children:"https://github.com/NoahCallaway/TallyArbiter-arduino-neopixel"})]}),"\n",(0,s.jsx)(t.h2,{id:"ttgo_t-displays",children:"TTGO_T Displays"}),"\n",(0,s.jsxs)(t.p,{children:["Tally Arbiter can send tally data to an TTGO_T Display. A remote script is available in the separate repository, ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/tree/master/listener_clients/TTGO_T-listener",children:"Tally Arbiter TTGO_T Listener"}),". For installation and use instructions, please check out that repository's ",(0,s.jsx)(t.a,{href:"https://github.com/josephdadams/TallyArbiter/blob/master/listener_clients/TTGO_T-listener/README.md",children:"readme"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"vmix-tally-emulation",children:"VMix Tally Emulation"}),"\n",(0,s.jsxs)(t.p,{children:["Tally Arbiter will also emulate a VMix server, which means you can use any compatible VMix tally client to view tally as well, such as the ",(0,s.jsx)(t.a,{href:"https://github.com/guido-visser/vMix-M5Stick-Tally-Light",children:"VMix M5Stick Tally Light"})," project by Guido Visser. Follow the instructions on that repository to set up your M5Stick device, and specify Tally Arbiter as your VMix server."]}),"\n",(0,s.jsx)(t.h2,{id:"tally-over-ndi",children:"Tally over NDI"}),"\n",(0,s.jsxs)(t.p,{children:["Tally Arbiter can send out TSL 3.1 data via the ",(0,s.jsx)(t.code,{children:"TSL 3.1 Clients"})," section. Paired with the ",(0,s.jsx)(t.a,{href:"https://github.com/iliessens/TSL-NDI-tally",children:"TSL NDI tally"})," software by ",(0,s.jsx)(t.a,{href:"https://github.com/iliessens",children:"iliessens"}),", you can send live tally data to your NDI devices."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>n});var s=i(6540);const a={},l=s.createContext(a);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);