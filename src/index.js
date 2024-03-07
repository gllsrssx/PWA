import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();

// prompt for installation
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  // You can show a UI element here to let the user know that the app can be installed
});

// Later, you can trigger the prompt when the user performs a certain action, like clicking anywhere on the site
// Here's an example:

document.addEventListener('click', (e) => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
        alert('Installed app...');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  }
});

//notification
// Make sure service workers are supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(function (registration) {
    // Check if the user has already granted permission
    if (Notification.permission === 'granted') {
      subscribeUserToPush(registration);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          subscribeUserToPush(registration);
        }
      });
    }
  });
}

function subscribeUserToPush(registration) {
  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array('YOUR_PUBLIC_VAPID_KEY_HERE')
  };

  return registration.pushManager.subscribe(subscribeOptions)
    .then(function (pushSubscription) {
      console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
      return pushSubscription;
    });
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Listen for the visibilitychange event
let lastNotificationTime = 0;
document.addEventListener('visibilitychange', function () {
  const now = Date.now();
  if (document.visibilityState === 'hidden' && now - lastNotificationTime > 5 * 60 * 1000) { // 5 minutes
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification('We miss you', {
        body: 'Come back to our app!',
        icon: '/path/to/icon.png'
      });
    });
    lastNotificationTime = now;
  }
});

// Geolocation
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // Use the user's location
    showLocalWeather(position.coords.latitude, position.coords.longitude);
  }, function (error) {
    console.error('Error obtaining geolocation', error);
  });
} else {
  console.log('Geolocation is not supported by your browser');
}

function showLocalWeather(latitude, longitude) {
  // Fetch weather data for the user's location and display it
  // This is just a placeholder, replace it with your actual implementation
  console.log(`Showing weather for ${latitude}, ${longitude}`);
}