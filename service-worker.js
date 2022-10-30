const m = [
  "/_app/immutable/start-8e4882fd.js",
  "/_app/immutable/components/pages/_layout.svelte-c8d86822.js",
  "/_app/immutable/assets/_layout-2dff82d5.css",
  "/_app/immutable/components/error.svelte-f2adf15e.js",
  "/_app/immutable/components/pages/_page.svelte-b5e05c1a.js",
  "/_app/immutable/assets/_page-032622b6.css",
  "/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/_app/immutable/chunks/singletons-a587dee3.js",
  "/_app/immutable/chunks/index-c78e2649.js",
  "/_app/immutable/chunks/index-b5ffb61b.js",
  "/_app/immutable/chunks/_layout-1daba58d.js",
  "/_app/immutable/chunks/0-2c99e7b8.js",
  "/_app/immutable/chunks/1-424115a0.js",
  "/_app/immutable/chunks/2-50e5c1ad.js"
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
], o = "1667152918723", a = self, i = `cache${o}`, p = m.concat(r), h = new Set(p);
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
    const n = await s.match(e);
    if (n)
      return n;
    throw t;
  }
}
a.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), t = s.protocol.startsWith("http"), n = s.hostname === self.location.hostname && s.port !== self.location.port, c = s.host === self.location.host && h.has(s.pathname), l = e.request.cache === "only-if-cached" && !c;
  t && !n && !l && e.respondWith(
    (async () => c && await caches.match(e.request) || u(e.request))()
  );
});
