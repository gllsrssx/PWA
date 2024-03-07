# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

PWA
To make your app a Progressive Web App (PWA), you need to follow these steps:

Caching: You can use the service worker to cache the static files of your application. This includes JavaScript, CSS, and HTML files. You can do this in the serviceWorkerRegistration.js file. You should decide what to cache based on what's critical to your application's functionality and user experience. For example, you might want to cache essential UI elements, but not cache large media files to save storage space.

Webmanifest: Customize the webmanifest file located at public/manifest.json. This file controls how your app appears to the user and how it can be launched. You can specify things like the app's name, start URL, icons, and display type.

Meta and Link Tags: Update the meta and link tags in public/index.html to provide information about the application in a standard format, such as the character encoding, viewport settings, and links to stylesheets or favicons.

Firestore Persistence: If you're using Firestore, you can enable data persistence to make your data available offline. This is not something I can help with directly, but you can find more information by searching for "Firestore persistence".

Firebase Features: Firebase offers several features that can enhance your PWA, such as push notifications via Firebase Cloud Messaging and remote configuration with Firebase Remote Config. These features allow you to interact with your users in more ways and make changes to your app without modifying your code.

Documentation: Document your changes and explain why your app is now a PWA. Include information about what you've cached and why, the effect on user experience, the PWA features you've implemented, what you've included in the manifest, and the devices/browsers you've tested on.

Remember, the goal of a PWA is to improve the user experience, so always keep that in mind when making decisions.

###

The serviceWorkerRegistration.js file is responsible for registering a service worker, which is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.

In this file, the service worker is registered when the window loads if the environment is production and the browser supports service workers. The service worker file is located at ${process.env.PUBLIC_URL}/service-worker.js.

The registerValidSW(swUrl, config) function is responsible for registering the service worker and handling updates. When a new service worker is found, it will be installed in the background. Once installed, if there is an existing controller (meaning an older version of the service worker), a message is logged indicating that new content is available once all tabs for this page are closed. If there is no existing controller, a message is logged indicating that content is cached for offline use.

The checkValidServiceWorker(swUrl, config) function is used when the app is running on localhost. It checks if a service worker still exists or not. If it doesn't, it reloads the page. If it does, it proceeds as normal.

The unregister() function is used to unregister the service worker.

The service worker can be used to cache static files of your application, such as JavaScript, CSS, and HTML files, which can help your app load faster on subsequent visits and give it offline capabilities. However, it also means that developers (and users) will only see deployed updates on subsequent visits to a page, after all the existing tabs open on the page have been closed, since previously cached resources are updated in the background.

###

Here's a brief explanation of what the code does:

precacheAndRoute(self.__WB_MANIFEST); - This line precaches all of the assets generated by your build process. Their URLs are injected into the self.__WB_MANIFEST variable.

The registerRoute function is used to set up App Shell-style routing, so that all navigation requests are fulfilled with your index.html shell.

Another registerRoute function is used to cache image files (.png). It uses the StaleWhileRevalidate strategy, which means it will serve the cached version of the file, and in the background, it will fetch the updated file from the network and update the cache. This strategy is good for images because it makes your app fast for the user, and the images can be updated in the background.

The addEventListener('message', ...) is used to allow the web app to trigger skipWaiting via registration.waiting.postMessage({type: 'SKIP_WAITING'}). This means that when there's an update for the service worker, it will immediately take control of the page and not wait until the page is closed and reopened.

So, this service worker file is already set up for efficient caching and serving of your app's assets. If you want to cache additional types of files, you can add more registerRoute functions with the appropriate criteria and strategies.

###

To enable Firestore persistence, you can use the enablePersistence function from the Firestore library. This will allow your app to cache Firestore data locally, making it available even when the user is offline.

