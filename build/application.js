(() => { const __webpack_modules__ = { 17: () => { eval("// Connect to server\nvar socket = io.connect('https://192.168.1.8:8080/', {\n  path: \"/socket.io\"\n});\n\n// Ask channel name from user\nchannel = prompt(\"Enter signaling channel name:\");\nif (channel !== \"\") {\n  console.log('Trying to create or join channel: ', channel);\n  // Send 'create or join' to the server\n  socket.emit('create or join', channel);\n}\n\n// Handle 'created' message\nsocket.on('created', function (channel) {\n  console.log('channel ' + channel + ' has been created!');\n  console.log('This peer is the initiator...');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImNvbm5lY3QiLCJwYXRoIiwiY2hhbm5lbCIsInByb21wdCIsImNvbnNvbGUiLCJsb2ciLCJlbWl0Iiwib24iXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuaW5nd2VicnRjMC8uL3NyYy9jbGllbnR3c29ja2V0LmpzP2I0OGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29ubmVjdCB0byBzZXJ2ZXJcclxudmFyIHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHBzOi8vMTkyLjE2OC4xLjg6ODA4MC8nLCB7cGF0aDpcIi9zb2NrZXQuaW9cIn0pO1xyXG5cclxuLy8gQXNrIGNoYW5uZWwgbmFtZSBmcm9tIHVzZXJcclxuY2hhbm5lbCA9IHByb21wdChcIkVudGVyIHNpZ25hbGluZyBjaGFubmVsIG5hbWU6XCIpO1xyXG5pZiAoY2hhbm5lbCAhPT0gXCJcIikge1xyXG4gICAgY29uc29sZS5sb2coJ1RyeWluZyB0byBjcmVhdGUgb3Igam9pbiBjaGFubmVsOiAnLCBjaGFubmVsKTtcclxuICAgIC8vIFNlbmQgJ2NyZWF0ZSBvciBqb2luJyB0byB0aGUgc2VydmVyXHJcbiAgICBzb2NrZXQuZW1pdCgnY3JlYXRlIG9yIGpvaW4nLCBjaGFubmVsKTtcclxufVxyXG5cclxuLy8gSGFuZGxlICdjcmVhdGVkJyBtZXNzYWdlXHJcbnNvY2tldC5vbignY3JlYXRlZCcsIGZ1bmN0aW9uIChjaGFubmVsKXtcclxuICAgIGNvbnNvbGUubG9nKCdjaGFubmVsICcgKyBjaGFubmVsICsgJyBoYXMgYmVlbiBjcmVhdGVkIScpO1xyXG4gICAgY29uc29sZS5sb2coJ1RoaXMgcGVlciBpcyB0aGUgaW5pdGlhdG9yLi4uJyk7ICAgXHJcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLDJCQUEyQixFQUFFO0VBQUNDLElBQUksRUFBQztBQUFZLENBQUMsQ0FBQzs7QUFFekU7QUFDQUMsT0FBTyxHQUFHQyxNQUFNLENBQUMsK0JBQStCLENBQUM7QUFDakQsSUFBSUQsT0FBTyxLQUFLLEVBQUUsRUFBRTtFQUNoQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0NBQW9DLEVBQUVILE9BQU8sQ0FBQztFQUMxRDtFQUNBSixNQUFNLENBQUNRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRUosT0FBTyxDQUFDO0FBQzFDOztBQUVBO0FBQ0FKLE1BQU0sQ0FBQ1MsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVTCxPQUFPLEVBQUM7RUFDbkNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsR0FBR0gsT0FBTyxHQUFHLG9CQUFvQixDQUFDO0VBQ3hERSxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztBQUNoRCxDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///17\n"); }, 633: (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => { 'use strict'; eval("\n// EXTERNAL MODULE: ./src/clientwsocket.js\nvar clientwsocket = __webpack_require__(17);\n;// CONCATENATED MODULE: ./src/webrtc.js\n/* check if webrtc work on this browser */\n\nvar video = document.querySelector('video'),\n  canvas = document.querySelector('canvas'),\n  streaming = false;\n//var yourvideo = document.querySelector('#yourvideo');\nvar theirVideo = document.querySelector('#othersvideo');\nvar yourConnection, othersConnection, theirConnection;\nfunction checkBrowserWebrtcAll() {\n  var $video = document.querySelector('#yourvideo');\n  if (navigator.getUserMedia) {\n    navigator.getUserMedia({\n      audio: true,\n      video: {\n        mandatory: {\n          minAspectRatio: 1.777,\n          maxAspectRatio: 1.778\n        },\n        optional: [{\n          maxWidth: 640\n        }, {\n          maxHeigth: 480\n        }]\n      }\n    }, function (stream) {\n      streaming = true;\n      if (hasRTCPeerConnection()) {\n        startPeerConnection(stream);\n      }\n      $video.srcObject = stream;\n      $video.muted = true;\n      $video.onloadedmetadata = function (e) {\n        $video.play();\n      };\n    }, function (error) {\n      return console.error(error);\n    });\n  }\n}\nfunction hasRTCPeerConnection() {\n  window.RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;\n  return !!window.RTCPeerConnection;\n}\nfunction startPeerConnection(stream) {\n  var configuration = {\n    // Uncomment this code to add custom iceServers\n    //\"iceServers\": [{ \"url\": \"stun:stun.1.google.com:19302\" }]\"\n  };\n  yourConnection = new RTCPeerConnection(configuration);\n  theirConnection = new RTCPeerConnection(configuration);\n\n  // Setup stream listening\n  yourConnection.addStream(stream);\n  /* depreciated ways\r\n  theirConnection.onaddstream = function (e) {\r\n  theirConnection.onaddtrack  = function (e) {*/\n  theirConnection.ontrack = function (e) {\n    theirVideo.src = window.URL.createObjectURL(e.stream);\n    console.log('theirConnection onaddstream...');\n  };\n\n  // Setup ice handling\n  yourConnection.onicecandidate = function (event) {\n    if (event.candidate) {\n      theirConnection.addIceCandidate(new RTCIceCandidate(event.candidate));\n    }\n  };\n  theirConnection.onicecandidate = function (event) {\n    if (event.candidate) {\n      yourConnection.addIceCandidate(new RTCIceCandidate(event.candidate));\n    }\n  };\n\n  // Begin the offer\n  yourConnection.createOffer(function (offer) {\n    yourConnection.setLocalDescription(offer);\n    theirConnection.setRemoteDescription(offer);\n    theirConnection.createAnswer(function (offer) {\n      theirConnection.setLocalDescription(offer);\n      yourConnection.setRemoteDescription(offer);\n    });\n  });\n  console.log('startPeerConnection...');\n}\n;\n\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\n\ncheckBrowserWebrtcAll();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjMzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7QUM1RkE7QUFDQTtBQUNBO0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuaW5nd2VicnRjMC8uL3NyYy93ZWJydGMuanM/ZjY3MSIsIndlYnBhY2s6Ly9sZWFybmluZ3dlYnJ0YzAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjaGVjayBpZiB3ZWJydGMgd29yayBvbiB0aGlzIGJyb3dzZXIgKi9cclxuXHJcblxyXG52YXIgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpLFxyXG5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKSxcclxuc3RyZWFtaW5nID0gZmFsc2U7XHJcbi8vdmFyIHlvdXJ2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5b3VydmlkZW8nKTtcclxudmFyIHRoZWlyVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3RoZXJzdmlkZW8nKTtcclxudmFyIHlvdXJDb25uZWN0aW9uLCBvdGhlcnNDb25uZWN0aW9uLCB0aGVpckNvbm5lY3Rpb247XHJcblxyXG5cclxuZnVuY3Rpb24gY2hlY2tCcm93c2VyV2VicnRjQWxsKCkge1xyXG4gICAgY29uc3QgJHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3lvdXJ2aWRlbycpO1xyXG4gICAgaWYgKG5hdmlnYXRvci5nZXRVc2VyTWVkaWEpIHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUsIHZpZGVvOiB7bWFuZGF0b3J5OiB7XHJcbiAgICAgICAgICAgIG1pbkFzcGVjdFJhdGlvOiAxLjc3NyxcclxuICAgICAgICAgICAgbWF4QXNwZWN0UmF0aW86IDEuNzc4XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbmFsOiBbXHJcbiAgICAgICAgICAgICAgICB7IG1heFdpZHRoOiA2NDAgfSxcclxuICAgICAgICAgICAgICAgIHsgbWF4SGVpZ3RoOiA0ODAgfVxyXG4gICAgICAgICAgICAgICAgXX0gfSxcclxuICAgICAgICAgICAgc3RyZWFtID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdHJlYW1pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNSVENQZWVyQ29ubmVjdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQZWVyQ29ubmVjdGlvbihzdHJlYW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgICAgICAgICAkdmlkZW8ubXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgJHZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICR2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1JUQ1BlZXJDb25uZWN0aW9uKCkge1xyXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uIHx8XHJcbiAgICAgICAgd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uIHx8IHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbjtcclxuICAgIHJldHVybiAhIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRQZWVyQ29ubmVjdGlvbihzdHJlYW0pIHtcclxuICAgIHZhciBjb25maWd1cmF0aW9uID0ge1xyXG4gICAgICAgIC8vIFVuY29tbWVudCB0aGlzIGNvZGUgdG8gYWRkIGN1c3RvbSBpY2VTZXJ2ZXJzXHJcbiAgICAgICAgLy9cImljZVNlcnZlcnNcIjogW3sgXCJ1cmxcIjogXCJzdHVuOnN0dW4uMS5nb29nbGUuY29tOjE5MzAyXCIgfV1cIlxyXG4gICAgfTtcclxuICAgIHlvdXJDb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgdGhlaXJDb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIC8vIFNldHVwIHN0cmVhbSBsaXN0ZW5pbmdcclxuICAgIHlvdXJDb25uZWN0aW9uLmFkZFN0cmVhbShzdHJlYW0pO1xyXG4gICAgLyogZGVwcmVjaWF0ZWQgd2F5c1xyXG4gICAgdGhlaXJDb25uZWN0aW9uLm9uYWRkc3RyZWFtID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHRoZWlyQ29ubmVjdGlvbi5vbmFkZHRyYWNrICA9IGZ1bmN0aW9uIChlKSB7Ki9cclxuICAgIHRoZWlyQ29ubmVjdGlvbi5vbnRyYWNrICA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhlaXJWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChlLnN0cmVhbSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGVpckNvbm5lY3Rpb24gb25hZGRzdHJlYW0uLi4nKTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAvLyBTZXR1cCBpY2UgaGFuZGxpbmdcclxuICAgIHlvdXJDb25uZWN0aW9uLm9uaWNlY2FuZGlkYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGVpckNvbm5lY3Rpb24uYWRkSWNlQ2FuZGlkYXRlKG5ld1xyXG4gICAgICAgICAgICAgICAgUlRDSWNlQ2FuZGlkYXRlKGV2ZW50LmNhbmRpZGF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGVpckNvbm5lY3Rpb24ub25pY2VjYW5kaWRhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgICAgIHlvdXJDb25uZWN0aW9uLmFkZEljZUNhbmRpZGF0ZShuZXdcclxuICAgICAgICAgICAgICAgIFJUQ0ljZUNhbmRpZGF0ZShldmVudC5jYW5kaWRhdGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmVnaW4gdGhlIG9mZmVyXHJcbiAgICB5b3VyQ29ubmVjdGlvbi5jcmVhdGVPZmZlcihmdW5jdGlvbiAob2ZmZXIpIHtcclxuICAgICAgICB5b3VyQ29ubmVjdGlvbi5zZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyKTtcclxuICAgICAgICB0aGVpckNvbm5lY3Rpb24uc2V0UmVtb3RlRGVzY3JpcHRpb24ob2ZmZXIpO1xyXG5cclxuICAgICAgICB0aGVpckNvbm5lY3Rpb24uY3JlYXRlQW5zd2VyKGZ1bmN0aW9uIChvZmZlcikge1xyXG4gICAgICAgICAgICB0aGVpckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihvZmZlcik7XHJcbiAgICAgICAgICAgIHlvdXJDb25uZWN0aW9uLnNldFJlbW90ZURlc2NyaXB0aW9uKG9mZmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXJ0UGVlckNvbm5lY3Rpb24uLi4nKTtcclxufTtcclxuXHJcbmV4cG9ydCB7Y2hlY2tCcm93c2VyV2VicnRjQWxsfSIsImltcG9ydCBjbGllbnR3c29ja2V0IGZyb20gJy4vY2xpZW50d3NvY2tldC5qcydcbmltcG9ydCBhcHBsaWNhdGlvbiBmcm9tICcuL2FwcGxpY2F0aW9uLnNjc3MnXG5pbXBvcnQge3NheUhlbGxvfSBmcm9tICcuL2dyZWV0aW5nZXM2LmpzJ1xuXG5pbXBvcnQge2NoZWNrQnJvd3NlcldlYnJ0Y0FsbCB9IGZyb20gJy4vd2VicnRjLmpzJ1xuXG5jaGVja0Jyb3dzZXJXZWJydGNBbGwoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///633\n"); } }; const __webpack_module_cache__ = {}; function __webpack_require__ (n) { const c = __webpack_module_cache__[n]; if (void 0 !== c) return c.exports; const e = __webpack_module_cache__[n] = { exports: {} }; return __webpack_modules__[n](e, e.exports, __webpack_require__), e.exports; } const __webpack_exports__ = __webpack_require__(633); })();
