"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[789],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),p=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(r),f=n,u=c["".concat(d,".").concat(f)]||c[f]||m[f]||i;return r?a.createElement(u,o(o({ref:e},s),{},{components:r})):a.createElement(u,o({ref:e},s))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2983:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"libraries",title:"Libraries Needed",sidebar_label:"Libraries Needed"},d=void 0,p={unversionedId:"setup/libraries",id:"setup/libraries",title:"Libraries Needed",description:"PyKey needs a number of libraries to be available on the board for it to run.",source:"@site/docs/setup/libraries.md",sourceDirName:"setup",slug:"/setup/libraries",permalink:"/docs/setup/libraries",editUrl:"https://github.com/jpconstantineau/pykey/tree/main/documentation/docs/setup/libraries.md",tags:[],version:"current",frontMatter:{id:"libraries",title:"Libraries Needed",sidebar_label:"Libraries Needed"},sidebar:"someSidebar",previous:{title:"Keyboard Loop",permalink:"/docs/firmware/keyboard_loop"},next:{title:"Compared",permalink:"/docs/encoderpad/compared"}},s=[],m={toc:s};function c(t){var e=t.components,r=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"PyKey needs a number of libraries to be available on the board for it to run."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Library/Module")),(0,i.kt)("th",{parentName:"tr",align:"left"},"Import (with link to docs)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Files/Folder needed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Default Modules")),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Saved Keymnap Definitions"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/en/latest/shared-bindings/os/index.html"},"import os")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GPIO Definition"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/en/latest/shared-bindings/board/index.html"},"import board")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GPIO Access"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/en/latest/shared-bindings/digitalio/index.html"},"import digitalio")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Key Matrix and Switches"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/en/latest/shared-bindings/keypad/index.html"},"import keypad")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Basic Sound/Buzzer"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/en/latest/shared-bindings/pwmio/index.html"},"import pwmio")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"PWM/Dimming LEDs"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/en/latest/shared-bindings/pwmio/index.html"},"import pwmio")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"RGB LEDs - color wheel"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/en/latest/shared-bindings/rainbowio/index.html"},"import rainbowio")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Rotary Encoders"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/en/latest/shared-bindings/rotaryio/index.html"},"import rotaryio")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Sleep/delay"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/en/latest/shared-bindings/time/index.html"},"import time")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"USB Human Interface Device Definition"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/en/latest/shared-bindings/usb_hid/index.html"},"import usb_hid")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.org/libraries"},(0,i.kt)("strong",{parentName:"a"},"Adafruit CircuitPython Library Bundle"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Keyboard USB HID"),(0,i.kt)("td",{parentName:"tr",align:"left"},"from ",(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/projects/hid/en/latest/api.html"},"adafruit_hid.keyboard")," import Keyboard"),(0,i.kt)("td",{parentName:"tr",align:"left"},"adafruit_hid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"RGB LEDs - Access"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://circuitpython.readthedocs.io/projects/neopixel/en/latest/api.html"},"import neopixel")),(0,i.kt)("td",{parentName:"tr",align:"left"},"neopixel.mpy")))),(0,i.kt)("p",null,"PyKey uses libraries from the ",(0,i.kt)("a",{parentName:"p",href:"https://circuitpython.org/libraries"},"Adafruit CircuitPython Library Bundle 7.x"),".\nThese are pre-compiled libraries in mpy format (a binary format representing the pre-compiled Python code)"),(0,i.kt)("p",null,"Installing Libraries is as simple as copying the necessary files into the lib folder of your CircuitPython device."))}c.isMDXComponent=!0}}]);