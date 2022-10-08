const r = [
  "/_app/immutable/start-c1d22671.js",
  "/_app/immutable/components/pages/_layout.svelte-be3ff5a0.js",
  "/_app/immutable/assets/_layout-3793f0d9.css",
  "/_app/immutable/components/error.svelte-a51f7e5a.js",
  "/_app/immutable/components/pages/_page.svelte-70d4afcc.js",
  "/_app/immutable/assets/_page-032622b6.css",
  "/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/_app/immutable/chunks/singletons-c1ca07f7.js",
  "/_app/immutable/chunks/index-3c1f63a2.js",
  "/_app/immutable/chunks/index-440be7a1.js",
  "/_app/immutable/chunks/_layout-1daba58d.js",
  "/_app/immutable/chunks/0-5bd5820a.js",
  "/_app/immutable/chunks/1-1226a91c.js",
  "/_app/immutable/chunks/2-ef74fb87.js"
], m = [
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
  "/songs.json",
  "/version.txt"
], o = "1665252484126", a = self, i = `cache${o}`, p = r.concat(m), h = new Set(p);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(i).then((e) => e.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const t of e)
        t !== i && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function u(s) {
  const e = await caches.open(`offline${o}`);
  try {
    const t = await fetch(s);
    return e.put(s, t.clone()), t;
  } catch (t) {
    const c = await e.match(s);
    if (c)
      return c;
    throw t;
  }
}
a.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && h.has(e.pathname), l = s.request.cache === "only-if-cached" && !n;
  t && !c && !l && s.respondWith(
    (async () => n && await caches.match(s.request) || u(s.request))()
  );
});
