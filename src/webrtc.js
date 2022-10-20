/* check if webrtc work on this browser */

const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
let streaming = false;
// var yourvideo = document.querySelector('#yourvideo');
const theirVideo = document.querySelector('#othersvideo');
let yourConnection, othersConnection, theirConnection;

function checkBrowserWebrtcAll () {
  const $video = document.querySelector('#yourvideo');
  if (navigator.getUserMedia) {
    navigator.getUserMedia({
      audio: true,
      video: {
        mandatory: {
          minAspectRatio: 1.777,
          maxAspectRatio: 1.778
        },
        optional: [
          { maxWidth: 640 },
          { maxHeigth: 480 }
        ]
      }
    },
    stream => {
      streaming = true;

      if (hasRTCPeerConnection()) {
        startPeerConnection(stream);
      }

      $video.srcObject = stream;
      $video.muted = true;
      $video.onloadedmetadata = function (e) {
        $video.play();
      };
    },
    error => console.error(error)
    );
  }
}

function hasRTCPeerConnection () {
  window.RTCPeerConnection = window.RTCPeerConnection ||
        window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
  return !!window.RTCPeerConnection;
}

function startPeerConnection (stream) {
  const configuration = {
    // Uncomment this code to add custom iceServers
    // "iceServers": [{ "url": "stun:stun.1.google.com:19302" }]"
  };
  yourConnection = new RTCPeerConnection(configuration);
  theirConnection = new RTCPeerConnection(configuration);

  // Setup stream listening
  yourConnection.addStream(stream);
  /* depreciated ways
    theirConnection.onaddstream = function (e) {
    theirConnection.onaddtrack  = function (e) { */
  theirConnection.ontrack = function (e) {
    theirVideo.src = window.URL.createObjectURL(e.stream);

    console.log('theirConnection onaddstream...');
  };

  // Setup ice handling
  yourConnection.onicecandidate = function (event) {
    if (event.candidate) {
      theirConnection.addIceCandidate(new
      RTCIceCandidate(event.candidate));
    }
  };
  theirConnection.onicecandidate = function (event) {
    if (event.candidate) {
      yourConnection.addIceCandidate(new
      RTCIceCandidate(event.candidate));
    }
  };

  // Begin the offer
  yourConnection.createOffer(function (offer) {
    yourConnection.setLocalDescription(offer);
    theirConnection.setRemoteDescription(offer);

    theirConnection.createAnswer(function (offer) {
      theirConnection.setLocalDescription(offer);
      yourConnection.setRemoteDescription(offer);
    });
  });
  console.log('startPeerConnection...');
}

export { checkBrowserWebrtcAll };
