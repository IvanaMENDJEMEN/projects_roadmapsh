(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/App.jsx [app-client] (ecmascript, next/dynamic entry, async loader)": ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/_dbe526fb._.css",
    "included": [
      "[project]/src/App.css [app-client] (css)",
      "[project]/Components/Footer.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/src_App_css_e59ae46c._.single.css",
      "static/chunks/Components_Footer_css_e59ae46c._.single.css"
    ]
  },
  "static/chunks/node_modules_react-router_dist_development_chunk-C37GKA54_mjs_0fdfc51a._.js",
  "static/chunks/node_modules_react-icons_fa_index_mjs_d2e2d7f5._.js",
  "static/chunks/node_modules_react-icons_lib_74ccc930._.js",
  "static/chunks/_363b6032._.js",
  "static/chunks/src_App_jsx_6a7ea76a._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/App.jsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
}]);