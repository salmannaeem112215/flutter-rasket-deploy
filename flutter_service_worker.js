'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c78d76e46e3f72e3525c7c3bb9f7a5c6",
"assets/assets/brands/bitbucket.svg": "d9eac8ed375796c492dbc5be5b4922a3",
"assets/assets/brands/dropbox.svg": "329562e6b11684f7ab568e87d7339ab1",
"assets/assets/brands/github.svg": "6e9c33eb22c74613912a7d4a2a905e40",
"assets/assets/brands/dribbble.svg": "1496b1eeac205fb1c6bbfe5cb112cf0c",
"assets/assets/brands/slack.svg": "ecfb10bfb5d1c9d80b534b3762f9f460",
"assets/assets/svg/China.svg": "34d3566306e06f73e85020c9cf807127",
"assets/assets/svg/Canada.svg": "4dbac52090d79eaecbdd0133faac371e",
"assets/assets/svg/Russia.svg": "1bacc478a5992eafdaca646eb0fbf87a",
"assets/assets/svg/USA.svg": "0dd5416bc9c80b4e9f5eece4ec80457f",
"assets/assets/logo-sm.png": "1d6bd9931aa973b9c1f4508614bb0857",
"assets/assets/favicon.ico": "5c12985a988d2b8dbf2f2405f9b80151",
"assets/assets/other/cpu-bolt-line-duotone.svg": "dd3d25757a2c691baa0c2a388bdf6fd7",
"assets/assets/other/users_group_two.svg": "f39ccf8c306e2ff2a132fa8c93731cc3",
"assets/assets/other/black-hole-line-duotone.svg": "1e2916aa7b0fbfab6769b425e52071eb",
"assets/assets/other/layers.svg": "8626aa75862e10997f56c5397960e20a",
"assets/assets/other/crown-star-bold-duotone.svg": "487bce322b6077fd8dcff1a2e7314395",
"assets/assets/other/bold-duotone.svg": "4c95d9e148b2daf6fcebbbba8732272a",
"assets/assets/other/leaf.svg": "bcd6347266d7f6c7590b84add75600a0",
"assets/assets/other/cpu_bolt.svg": "0bb350fb95ded3c6226328ad64fb1bca",
"assets/assets/small/img-4.jpg": "ae89ec7a1bde68097488fe7840e966b1",
"assets/assets/small/img-8.jpg": "0ce1ebb1a5e7086fda8bcc892d21e264",
"assets/assets/small/img-6.jpg": "1b124f03548415ba0220d44bc74f5704",
"assets/assets/small/img-3.jpg": "81f5ceb44c0a64df37821f05420e3e16",
"assets/assets/small/img-2.jpg": "e6423975478fde1a9d06ba75aa4dd860",
"assets/assets/small/img-7.jpg": "d27709fbe05b7b47683f73fa8916c7c8",
"assets/assets/small/img-5.jpg": "50283f2dabbbdaa5ddc194c2460a9806",
"assets/assets/small/img-9.jpg": "dc18d89eacb608cc670bc8243ca05159",
"assets/assets/small/img-1.jpg": "3cb9658f9974abd52eb45ba62d152779",
"assets/assets/small/img-10.jpg": "8834dd80a678c259b28edfaf2116ddbb",
"assets/assets/logo-light.png": "3e1d77ac1700530188b372df574233f5",
"assets/assets/logo-dark-full.png": "cbcbfc354e8604b15218221b913c562c",
"assets/assets/404.svg": "7db51015122852641d14339ee645900f",
"assets/assets/app-calendar/stripe.png": "92fcbc1c0f1bc5a89a179fe23f92ba39",
"assets/assets/app-calendar/web-hooks.png": "910c14e1d5e8429294c031f593f8ca42",
"assets/assets/app-calendar/microsoft-team-conference.png": "09b5974b4336d856853858a6adb0b017",
"assets/assets/app-calendar/google-mail.png": "99447a6e04ca4ffcd07e26fa3d1c4956",
"assets/assets/app-calendar/zoom.png": "f9aff4bcd2507b59cf7538e2cff3752c",
"assets/assets/app-calendar/help-2.png": "eddac1e0ea0c53fb862c8c6f0edfc40f",
"assets/assets/app-calendar/help-6.png": "c7fd0ea85a3c74fe65892c261bba7d38",
"assets/assets/app-calendar/help-1.png": "613adbdafc59647ba21f91462659c201",
"assets/assets/app-calendar/help-3.png": "ccc4a67ecebe018c0a24af4a49dedb3c",
"assets/assets/app-calendar/google-analytics.png": "f04766d2787dd236c15a79ebdd337c59",
"assets/assets/app-calendar/google-chrome.png": "80f329ebb7a07e647223f0f12b83c489",
"assets/assets/app-calendar/intercom.png": "298963aa945d6ae00109b672d9f82351",
"assets/assets/app-calendar/sales-force.png": "d56109a79b2ffd9ade9169bc42d902d7",
"assets/assets/app-calendar/help-5.png": "25f631b3c81cf095c713bbd9ea594b8e",
"assets/assets/app-calendar/slack.png": "dc27cd0d51e644a7f6aa11a43c046c33",
"assets/assets/app-calendar/zapier.png": "2c1a6c7961cadda830a48c25043d8590",
"assets/assets/app-calendar/microsoft-outlook.png": "47958a9b292ad5b05ed0d98befd19f81",
"assets/assets/app-calendar/google-meet.png": "b8237aa3f098dbd66e3c3d08698c325d",
"assets/assets/app-calendar/help-4.png": "2dfdeafe465d03d49cf4da2f270b20a0",
"assets/assets/app-calendar/facebook.png": "b3eb0479ce0e2c777705009b2a6bc6f0",
"assets/assets/app-calendar/hubspot.png": "3f92cd8c8e5693e04810dc8da32d8105",
"assets/assets/users/avatar-11.jpg": "08dab29d85052b03eacea91134e66abb",
"assets/assets/users/avatar-8.jpg": "7bff11049be7f0f7a0d56d7275d0510f",
"assets/assets/users/dummy-avatar.jpg": "bab632b672fffd1648a7b914b31961c5",
"assets/assets/users/avatar-12.jpg": "6c10a2a5e527832ff6684936e9f0922c",
"assets/assets/users/avatar-1.jpg": "5e5d08e4c4ca2deda5b23d540660d7be",
"assets/assets/users/avatar-5.jpg": "f2ecea405ad1acaab14b2ca15f18cfe4",
"assets/assets/users/avatar-6.jpg": "c7b9532aef62d15c36993396da9baecf",
"assets/assets/users/chat.jpg": "2c2e24d87d9cce17b3eac59e40479674",
"assets/assets/users/avatar-4.jpg": "2eb4a6f81de8f0f0ae54a44503936c6b",
"assets/assets/users/avatar-7.jpg": "36cec4f1d41bff7c5985540dc29845c0",
"assets/assets/users/avatar-9.jpg": "951f7140cc862612e3414e13062c3917",
"assets/assets/users/avatar-3.jpg": "4c25ea06a02b88c5c4a03f9801977c21",
"assets/assets/users/avatar-2.jpg": "08312d93d8ef34b85781584007d41bca",
"assets/assets/users/avatar-10.jpg": "accaead552dc87a4d79a32bf342291ef",
"assets/assets/logo-dark.png": "01c2ae23d34dcc9ca612064868ffa8f7",
"assets/assets/logo-light-full.png": "18bafea952455e606cb6fff62fb7cd71",
"assets/assets/data/invoice_list.json": "a9c0513610bcef256b4a22e8b6fcf5e4",
"assets/assets/data/europe_map.json": "a60417bd4a4634670a81aeffc7992a7d",
"assets/assets/data/chat.json": "5a7ab6e682a2fb86dc549d8a53c25120",
"assets/assets/data/email.json": "5e594ac77c0bd4a96bf7686ec5fd833b",
"assets/assets/data/calendar_integration_data.json": "667f5b5f60876d358aeb335d6d6a7f2c",
"assets/assets/data/todo.json": "37f6ad319eeb2ff81a11cdd1b2724866",
"assets/assets/data/world_map.json": "991a3a9fc41238af03cc0b72190a6483",
"assets/assets/data/australia.json": "66ae1c9b7bb3ffaff1c96b9cbb69b226",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "73b60025be6dfca27d65f3c14b1087c8",
"assets/AssetManifest.json": "f9ca639d23edd631fa8a73ba60612ac5",
"assets/fonts/MaterialIcons-Regular.otf": "5d73e07f63ca7fa97aabaa09aa8e2f8a",
"assets/AssetManifest.bin.json": "4f55a61916c1355e047626f1a1b58cee",
"assets/NOTICES": "63f34edcf5009e23dcec98125feeddc4",
"assets/packages/flutter_boxicons/fonts/Boxicons.ttf": "20b1c3156a97064740efd925bba76770",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_lucide/lib/fonts/lucide.ttf": "cb80a73e7bc8eb017958443070db3b84",
"assets/packages/flutter_tabler_icons/assets/fonts/tabler-icons.ttf": "a92cc8a8bf911f0e59c1a27fc1b7baea",
"assets/packages/timezone/data/latest_all.tzf": "df0e82dd729bbaca78b2aa3fd4efd50d",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"img/splash.png": "cbcbfc354e8604b15218221b913c562c",
"version.json": "fb7270f091721ec24b8ab324ceb6ea16",
"manifest.json": "d99b7fa2a33c42a1f6e4e0b5a093cc7b",
"flutter_bootstrap.js": "1e476a1e044c80729da021516de37a5e",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"index.html": "2b7315773baf3052a5b00fa007b41ef7",
"/": "2b7315773baf3052a5b00fa007b41ef7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"_redirects": "6a02faf7ea2a9584134ffe15779a0e44",
"main.dart.js": "93aa876ca01c7aead484a3cd860bb5f7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
