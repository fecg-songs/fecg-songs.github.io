const m = [
  "/_app/immutable/start-6034029e.js",
  "/_app/immutable/components/pages/_layout.svelte-086cc7c6.js",
  "/_app/immutable/assets/_layout-740aa6d6.css",
  "/_app/immutable/components/error.svelte-a0b2a9e6.js",
  "/_app/immutable/components/pages/_page.svelte-f1883a8e.js",
  "/_app/immutable/assets/_page-a98aea3b.css",
  "/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/_app/immutable/chunks/singletons-5cf433ce.js",
  "/_app/immutable/chunks/index-b079c000.js",
  "/_app/immutable/chunks/index-d5b5cf13.js",
  "/_app/immutable/chunks/_layout-1daba58d.js",
  "/_app/immutable/chunks/0-dc86ca0b.js",
  "/_app/immutable/chunks/1-b8fb3e05.js",
  "/_app/immutable/chunks/2-555d4845.js"
], r = [
  "/.nojekyll",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/browserconfig.xml",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/favicon.png",
  "/index.css",
  "/mstile-144x144.png",
  "/mstile-150x150.png",
  "/mstile-310x150.png",
  "/mstile-310x310.png",
  "/mstile-70x70.png",
  "/robots.txt",
  "/safari-pinned-tab.svg",
  "/site.webmanifest",
  "/songs.json"
], o = "1667363207555", a = self, i = `cache${o}`, p = m.concat(r), h = new Set(p);
a.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(i).then((s) => s.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== i && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function u(e) {
  const s = await caches.open(`offline${o}`);
  try {
    const t = await fetch(e);
    return s.put(e, t.clone()), t;
  } catch (t) {
    const c = await s.match(e);
    if (c)
      return c;
    throw t;
  }
}
a.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), t = s.protocol.startsWith("http"), c = s.hostname === self.location.hostname && s.port !== self.location.port, n = s.host === self.location.host && h.has(s.pathname), l = e.request.cache === "only-if-cached" && !n;
  t && !c && !l && e.respondWith(
    (async () => n && await caches.match(e.request) || u(e.request))()
  );
});
