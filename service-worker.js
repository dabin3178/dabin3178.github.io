/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dd7547380639875df0e6a5f0040a4bfd"
  },
  {
    "url": "assets/css/0.styles.344410ef.css",
    "revision": "5e99352c23a3735b4f7eeee837131d76"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77d623d1.js",
    "revision": "72fad40b96b550725717fb0a1a0529fd"
  },
  {
    "url": "assets/js/11.9f1ef6ea.js",
    "revision": "5ab10d77d89d80ea813d5fe1953e53ce"
  },
  {
    "url": "assets/js/12.6ac8b3e5.js",
    "revision": "943e73021b6af47ef0edac92a21ca74c"
  },
  {
    "url": "assets/js/13.4ad79116.js",
    "revision": "89cd187cb81b06225b83acb81fd5d26c"
  },
  {
    "url": "assets/js/14.7f1783f8.js",
    "revision": "b9721dd854517d08dd3e8800819cb5a8"
  },
  {
    "url": "assets/js/15.87f328b5.js",
    "revision": "f0613b2f7ee6ffec4dc0583f3854ec63"
  },
  {
    "url": "assets/js/16.635a1c7c.js",
    "revision": "424cb211ebc1e78c1bb14e31aa4b4e49"
  },
  {
    "url": "assets/js/17.bb606cf3.js",
    "revision": "45034371362bf072cfad6e47509f2a63"
  },
  {
    "url": "assets/js/18.56ae5e44.js",
    "revision": "2044a4ad8a4a79984c1bcc7db8fe4915"
  },
  {
    "url": "assets/js/2.229ffa8a.js",
    "revision": "b38832ed653b3836a5bbdf17e7a2e97e"
  },
  {
    "url": "assets/js/3.fdfad8be.js",
    "revision": "37ffb1d7d2041a62e84f3c189a5ee478"
  },
  {
    "url": "assets/js/4.169bf8bc.js",
    "revision": "3d812e0d0d9874b1627bbba7ecaf93c8"
  },
  {
    "url": "assets/js/5.a03455d7.js",
    "revision": "54cf5780d4873eac30849645832e50f7"
  },
  {
    "url": "assets/js/6.f4344879.js",
    "revision": "7e6f641756043f6033f1b1e01fccb6b1"
  },
  {
    "url": "assets/js/7.42838c95.js",
    "revision": "e36ad9285019cdf9b2ebdc16a74a0dae"
  },
  {
    "url": "assets/js/8.8c1a0e86.js",
    "revision": "7e24d868644552fcf44a3bb0bf1f29fa"
  },
  {
    "url": "assets/js/9.e8124ed9.js",
    "revision": "aa49ee63477331810b34af01567502d8"
  },
  {
    "url": "assets/js/app.6eff6e24.js",
    "revision": "a42321706aaa8619fcef6a7e0beb98b4"
  },
  {
    "url": "Backend/start.html",
    "revision": "abb9df2b4331e363c5890b4f65dedde0"
  },
  {
    "url": "config/index.html",
    "revision": "26986f532037f8e0176fc8c65bce868d"
  },
  {
    "url": "Data/hi.html",
    "revision": "0c7806499fb4c360bdd038aa3bac4d4b"
  },
  {
    "url": "guide/index.html",
    "revision": "b112218db4a506d5a7658688bd7634a2"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "0502e1b7464ee35b508241e9dc566858"
  },
  {
    "url": "images/maskable_icon_x128.png",
    "revision": "3efb27691294b081f6b5e3de552cb181"
  },
  {
    "url": "images/maskable_icon_x192.png",
    "revision": "ef8082f2f2b13ed00faeccb9e290cf0c"
  },
  {
    "url": "images/maskable_icon_x384.png",
    "revision": "6cb38020d6542cea43ecf44a3b6a3dd2"
  },
  {
    "url": "images/maskable_icon_x48.png",
    "revision": "d305a1b17751d6d8001aec0382660b4b"
  },
  {
    "url": "images/maskable_icon_x512.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "images/maskable_icon_x72.png",
    "revision": "660309aed4d8fdad541c46e28fd779f1"
  },
  {
    "url": "images/maskable_icon_x96.png",
    "revision": "1cc1731bb5da7da8631f4f59359677ad"
  },
  {
    "url": "images/maskable_icon.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "index.html",
    "revision": "76e4831826c3454614f65fba8966d6d9"
  },
  {
    "url": "intro.html",
    "revision": "d3de0661ed4ffbae73987df1ec711c71"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
