(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/data.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
const articlesInitiaux = [
    {
        id: 1,
        titre: "Apprendre React",
        categorie: "Technologie Web",
        auteur: "John Doe",
        date_publication: "2025-02-21",
        image: "/images/react_article.jpg",
        contenu: "React est une bibliothèque JavaScript pour construire des interfaces utilisateurs."
    },
    {
        id: 2,
        titre: "Comprendre les hooks",
        categorie: "Technologie Web",
        auteur: "Jane Smith",
        date_publication: "2025-05-01",
        image: "/images/linux_article.jpg",
        contenu: "Les hooks permettent d'utiliser le state et d'autres fonctionnalités de React sans classes."
    }
];
const __TURBOPACK__default__export__ = articlesInitiaux;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/context/ArticleContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/context/ArticleContext.tsx (ou .js)
__turbopack_context__.s({
    "ArticleProvider": ()=>ArticleProvider,
    "useArticles": ()=>useArticles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ArticleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const ArticleProvider = (param)=>{
    let { children } = param;
    _s();
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleProvider.useEffect": ()=>{
            const fetchdata = {
                "ArticleProvider.useEffect.fetchdata": ()=>{
                    const storedArticles = localStorage.getItem('articles') || [];
                    if (storedArticles && storedArticles.length > 0) {
                        setArticles(JSON.parse(storedArticles));
                    } else {
                        setArticles(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
                    }
                }
            }["ArticleProvider.useEffect.fetchdata"];
            fetchdata();
        }
    }["ArticleProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleProvider.useEffect": ()=>{
            // Sauvegarder les articles dans le localStorage à chaque mise à jour
            localStorage.setItem('articles', JSON.stringify(articles));
        }
    }["ArticleProvider.useEffect"], [
        articles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleContext.Provider, {
        value: {
            articles,
            setArticles
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/context/ArticleContext.js",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ArticleProvider, "LDSMaJNmQkCLkooupiv3eMc4dj4=");
_c = ArticleProvider;
const useArticles = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ArticleContext);
};
_s1(useArticles, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ArticleProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_2ddc09d0._.js.map