module.exports = [
"[project]/src/app/blog/[id]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogInnerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Data$2f$BloginnerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Data/BloginnerData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbarr$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar/Navbarr.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function BlogInnerPage({ params }) {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const blog = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Data$2f$BloginnerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((b)=>b.id === parseInt(id));
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo(0, 0);
        if (!heroRef.current) return;
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(heroRef.current.querySelectorAll('.hero-anim'), {
                y: 60,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1.1,
                ease: 'power4.out',
                stagger: 0.15,
                delay: 0.2
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(heroRef.current.querySelector('.hero-image'), {
                clipPath: 'inset(100% 0% 0% 0%)',
                scale: 1.05
            }, {
                clipPath: 'inset(0% 0% 0% 0%)',
                scale: 1,
                duration: 1.4,
                ease: 'power4.out',
                delay: 0.4
            });
        }, heroRef);
        return ()=>context.revert();
    }, [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contentRef.current) return;
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            const sections = contentRef.current.querySelectorAll('.section-anim');
            sections.forEach((section)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(section.querySelectorAll('.anim-el'), {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }, contentRef);
        return ()=>context.revert();
    }, [
        id
    ]);
    if (!blog) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col items-center justify-center px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs tracking-[4px] uppercase text-gray-500 mb-4",
                    children: "404 — Not Found"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[id]/page.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-black text-5xl md:text-7xl text-gray-900 mb-8",
                    children: "Blog not found"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[id]/page.jsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/#blog",
                    className: "px-6 py-3 border border-gray-900 text-sm font-bold tracking-[3px] uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300",
                    children: "← Back to Blogs"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[id]/page.jsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[id]/page.jsx",
            lineNumber: 83,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$Navbarr$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                visible: true
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[id]/page.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: heroRef,
                className: "px-6 md:px-16 lg:px-24 pt-28 md:pt-36 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#blog",
                        className: "hero-anim inline-flex items-center gap-2 text-xs font-bold tracking-[4px] uppercase text-gray-500 mb-10 hover:text-gray-900 transition-colors duration-200",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[id]/page.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-anim text-xs font-bold tracking-[5px] uppercase text-gray-400 mb-5",
                        children: "Article"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[id]/page.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "hero-anim font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-900 max-w-4xl mb-6",
                        children: blog.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[id]/page.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-anim text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed mb-12",
                        children: blog.subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[id]/page.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-image w-full overflow-hidden",
                        style: {
                            clipPath: 'inset(100% 0% 0% 0%)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: blog.image,
                            alt: blog.title,
                            className: "w-full max-h-[520px] object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/[id]/page.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[id]/page.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/[id]/page.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-200 mx-6 md:mx-16 lg:mx-24"
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[id]/page.jsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: contentRef,
                className: "px-6 md:px-16 lg:px-24 py-16 md:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto flex flex-col gap-16",
                    children: blog.sections.map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-anim flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "anim-el text-xs font-bold tracking-[4px] text-gray-400 uppercase",
                                    children: [
                                        "0",
                                        i + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/[id]/page.jsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "anim-el font-black text-xl md:text-2xl lg:text-3xl text-gray-900 leading-snug",
                                    children: section.heading
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[id]/page.jsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "anim-el w-12 h-0.5 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[id]/page.jsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "anim-el text-gray-600 text-base md:text-lg leading-relaxed",
                                    children: section.content
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[id]/page.jsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/blog/[id]/page.jsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[id]/page.jsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[id]/page.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-gray-200 mx-6 md:mx-16 lg:mx-24 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold tracking-[5px] uppercase text-gray-400 mb-2",
                                children: "Continue Reading"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[id]/page.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-black text-2xl md:text-3xl text-gray-900",
                                children: "Explore more articles"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[id]/page.jsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/[id]/page.jsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#blog",
                        className: "px-7 py-4 bg-gray-900 text-white text-xs font-bold tracking-[3px] uppercase hover:bg-gray-700 transition-colors duration-300",
                        children: "All Blogs →"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[id]/page.jsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/[id]/page.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/[id]/page.jsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Data/BloginnerData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const first = "/Image/webdev.jpg";
const a2 = "/Image/seo.jpg";
const a3 = "/Image/frontend.jpg";
const a4 = "/Image/marketing.jpg";
const a5 = "/Image/contentseo.jpg";
const a6 = "/Image/tech.jpg";
const brandingData = [
    {
        id: 1,
        image: first,
        title: "Top Website Development Trends Driving Business Growth in 2026",
        subtitle: "Explore the latest web development strategies, AI integrations, and SEO-focused techniques helping businesses dominate online markets in 2026.",
        sections: [
            {
                heading: "AI-Powered Websites Are Transforming User Experience",
                content: "Artificial intelligence is redefining modern website development. Businesses are now integrating AI-powered chatbots, personalized recommendations, predictive search, and automated customer support to improve engagement and conversions. Modern websites no longer function as static pages—they act as smart digital platforms capable of understanding user behavior in real time. AI-driven experiences increase customer satisfaction, improve retention, and help businesses generate higher revenue through personalized interactions. Companies investing in AI web technologies are seeing major improvements in lead generation, SEO rankings, and customer engagement across global markets."
            },
            {
                heading: "SEO-Focused Development Is More Important Than Ever",
                content: "Search engine optimization is now deeply connected with website development. Google prioritizes websites that deliver speed, mobile responsiveness, structured content, accessibility, and clean code architecture. Developers are focusing on Core Web Vitals, optimized metadata, semantic HTML, and fast-loading pages to improve search rankings. Businesses that combine technical SEO with high-quality content are achieving greater organic traffic and stronger online visibility. Modern development practices now ensure websites are optimized for both users and search engines from the very beginning."
            },
            {
                heading: "Performance Optimization Drives Higher Conversions",
                content: "Website speed directly impacts user retention and business growth. Studies show that users abandon websites that take longer than a few seconds to load. Developers are using advanced optimization techniques such as image compression, lazy loading, caching systems, and server-side rendering to deliver ultra-fast digital experiences. Faster websites improve customer trust, reduce bounce rates, and increase conversion opportunities. In competitive industries, performance optimization has become a critical ranking factor and an essential business strategy."
            },
            {
                heading: "Modern UI Design Builds Brand Authority",
                content: "Modern businesses are investing heavily in premium UI and UX design to establish trust and credibility online. Minimal layouts, dark mode interfaces, motion animations, glassmorphism, and immersive interactions are becoming key trends in web design. A visually attractive website improves user engagement and encourages visitors to spend more time exploring services or products. Strong visual branding combined with intuitive navigation creates memorable digital experiences that help businesses stand out in competitive online markets."
            }
        ]
    },
    {
        id: 2,
        image: a2,
        title: "How Modern Websites Improve SEO and Online Visibility",
        subtitle: "Learn how responsive design, fast performance, and strategic content development boost rankings and drive organic traffic.",
        sections: [
            {
                heading: "Responsive Design Improves Search Rankings",
                content: "Mobile-friendly websites are essential for modern SEO success. Search engines prioritize responsive websites that provide seamless experiences across smartphones, tablets, and desktops. Businesses with optimized responsive layouts achieve better rankings, higher engagement, and improved conversion rates. Responsive development ensures consistent branding and smooth navigation for users regardless of device size or screen resolution."
            },
            {
                heading: "Content Structure Helps Search Engines Understand Your Site",
                content: "Well-structured content improves website visibility and user experience. Developers and content creators are using optimized headings, keyword-rich paragraphs, internal linking, and schema markup to help search engines better understand website content. A strategic content structure increases indexing efficiency and improves the chances of appearing in featured search results. Businesses that regularly publish valuable and optimized content build long-term authority in their industry."
            },
            {
                heading: "Website Speed Impacts SEO Performance",
                content: "Google considers website performance a major ranking factor. Slow websites negatively affect user experience and reduce engagement metrics. Developers are implementing lightweight frameworks, optimized assets, and advanced hosting technologies to improve loading times. Fast websites create better browsing experiences and increase the likelihood of visitors completing desired actions such as purchases, signups, or inquiries."
            },
            {
                heading: "User Experience Increases Engagement and Retention",
                content: "User experience has become one of the strongest indicators of website success. Clean navigation, readable typography, intuitive layouts, and accessibility improvements encourage users to stay longer on websites. Businesses that prioritize user-centered design experience lower bounce rates and stronger customer trust. Great UX not only improves conversions but also contributes to better SEO performance through improved engagement metrics."
            }
        ]
    },
    {
        id: 3,
        image: a3,
        title: "Latest Frontend Development Technologies Businesses Are Using",
        subtitle: "Discover the modern frontend frameworks and technologies powering high-performance digital platforms worldwide.",
        sections: [
            {
                heading: "React and Next.js Continue to Dominate Development",
                content: "React and Next.js remain among the most popular technologies for building scalable and high-performance websites. Developers prefer these frameworks because they provide fast rendering, reusable components, SEO optimization, and excellent user experiences. Businesses are increasingly adopting Next.js for server-side rendering and improved search engine visibility, helping brands compete effectively in digital markets."
            },
            {
                heading: "TypeScript Is Becoming an Industry Standard",
                content: "TypeScript is rapidly replacing traditional JavaScript in modern web applications. Large-scale businesses prefer TypeScript because it improves code quality, scalability, and maintainability. Developers benefit from better error detection and cleaner project structures, leading to faster development cycles and fewer production issues. As projects grow more complex, TypeScript helps teams manage applications more efficiently."
            },
            {
                heading: "Tailwind CSS Speeds Up UI Development",
                content: "Tailwind CSS has become one of the most popular styling frameworks for modern frontend development. Developers use Tailwind to build responsive, clean, and customizable interfaces faster than traditional CSS approaches. Its utility-first methodology allows teams to create consistent designs while reducing unnecessary styling complexity. Businesses benefit from faster project delivery and modern visual experiences."
            },
            {
                heading: "Animation and Interactive Experiences Are Growing",
                content: "Interactive animations and immersive web experiences are becoming essential for modern websites. Technologies such as GSAP, Framer Motion, and WebGL allow developers to create visually engaging interactions that increase user attention and engagement. Businesses use animations strategically to improve storytelling, highlight products, and create premium digital experiences that strengthen brand identity."
            }
        ]
    },
    {
        id: 4,
        image: a4,
        title: "Why Businesses Need High-Performance Websites in 2026",
        subtitle: "Understand how fast, secure, and optimized websites help companies grow in competitive digital environments.",
        sections: [
            {
                heading: "Fast Websites Increase Customer Trust",
                content: "Website performance strongly influences customer perception. Slow-loading pages create frustration and reduce trust, while fast websites deliver smooth experiences that encourage users to engage confidently with a brand. Businesses investing in optimized infrastructure and frontend performance gain competitive advantages in customer satisfaction and retention."
            },
            {
                heading: "Security Is a Major Business Priority",
                content: "Cybersecurity is now a critical component of modern website development. Businesses are implementing SSL certificates, secure authentication systems, API protection, and advanced hosting security to protect user data. Secure websites improve customer confidence and help companies comply with privacy regulations and industry standards."
            },
            {
                heading: "Cloud Hosting Improves Scalability",
                content: "Cloud technologies allow businesses to scale websites efficiently during traffic spikes and business growth. Modern hosting platforms provide better reliability, faster performance, and automated backups, ensuring websites remain accessible and stable. Companies are increasingly migrating to cloud infrastructure for improved flexibility and long-term scalability."
            },
            {
                heading: "Accessibility Expands Audience Reach",
                content: "Accessible website design ensures digital platforms can be used by everyone, including users with disabilities. Businesses adopting accessibility standards improve usability, inclusivity, and legal compliance. Accessible websites also strengthen SEO performance and enhance overall user experience, helping brands reach broader audiences online."
            }
        ]
    },
    {
        id: 5,
        image: a5,
        title: "Content Marketing and SEO Strategies for Website Growth",
        subtitle: "Discover powerful content marketing techniques businesses use to grow traffic, authority, and customer engagement.",
        sections: [
            {
                heading: "High-Quality Content Builds Authority",
                content: "Content marketing remains one of the strongest digital growth strategies. Businesses publishing valuable blogs, guides, case studies, and educational resources establish authority within their industries. Search engines reward informative and relevant content with higher rankings, helping businesses attract long-term organic traffic."
            },
            {
                heading: "Keyword Research Drives Better Visibility",
                content: "Strategic keyword research helps businesses understand what users are searching for online. Developers and marketers optimize website content using relevant search terms to improve discoverability and attract targeted audiences. Proper keyword implementation increases search visibility without compromising readability or user experience."
            },
            {
                heading: "Internal Linking Improves Website Structure",
                content: "Internal linking helps users and search engines navigate websites more effectively. By connecting related pages and articles, businesses improve engagement and encourage visitors to explore additional content. Strong internal linking structures also distribute SEO value across websites, improving overall ranking performance."
            },
            {
                heading: "Consistent Publishing Supports Long-Term Growth",
                content: "Businesses that regularly update their websites with fresh content maintain stronger online visibility. Consistent publishing signals activity and relevance to search engines while giving audiences reasons to return. Long-term content strategies create sustainable traffic growth and improve overall digital brand presence."
            }
        ]
    },
    {
        id: 6,
        image: a6,
        title: "Future of Web Development and Digital Experiences",
        subtitle: "Explore emerging technologies and digital innovations shaping the future of websites and online business platforms.",
        sections: [
            {
                heading: "Voice Search Optimization Is Expanding",
                content: "As voice assistants become more common, businesses are optimizing websites for conversational search queries. Voice search SEO focuses on natural language, fast responses, and structured data to improve discoverability through smart devices. Companies adopting voice optimization early are positioning themselves for future digital growth."
            },
            {
                heading: "Progressive Web Apps Are Replacing Traditional Apps",
                content: "Progressive Web Apps combine the functionality of mobile apps with the accessibility of websites. PWAs provide offline access, fast performance, push notifications, and app-like experiences directly through browsers. Businesses are increasingly adopting PWAs to reduce development costs while delivering high-quality digital experiences."
            },
            {
                heading: "Headless CMS Improves Flexibility",
                content: "Headless CMS architecture is becoming a preferred solution for scalable content management. It allows developers to separate frontend presentation from backend content systems, enabling faster performance and greater flexibility across multiple platforms. Businesses benefit from easier content distribution and improved development efficiency."
            },
            {
                heading: "The Future Will Be AI-Driven and Personalized",
                content: "The future of web development is centered around personalization, automation, and intelligent experiences. AI-powered recommendations, predictive analytics, adaptive interfaces, and automated workflows will continue transforming how businesses interact with users online. Companies embracing these technologies will lead the next generation of digital innovation and customer engagement."
            }
        ]
    }
];
const __TURBOPACK__default__export__ = brandingData;
}),
"[project]/src/components/Navbar/Navbarr.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
;
const navLinks = [
    {
        name: 'Home',
        path: '/#home'
    },
    {
        name: 'Projects',
        path: '/#projects'
    },
    {
        name: 'Services',
        path: '/#services'
    },
    {
        name: 'Blogs',
        path: '/#blog'
    },
    {
        name: 'Contact',
        path: '/#contact'
    }
];
function Navbarr({ visible = true, scrolledUp = true }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const circleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hamburgerBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openMenu = ()=>{
        setIsOpen(true);
    };
    const closeMenu = (afterClose)=>{
        const circle = circleRef.current;
        const btn = hamburgerBtnRef.current;
        if (!circle || !btn) return;
        const btnRect = btn.getBoundingClientRect();
        const originX = btnRect.left + btnRect.width / 2;
        const originY = btnRect.top + btnRect.height / 2;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>{
                document.body.style.overflow = '';
                setIsOpen(false);
                afterClose?.();
            }
        }).to([
            navItemsRef.current.filter(Boolean),
            footerRef.current
        ], {
            y: 16,
            opacity: 0,
            duration: 0.25,
            ease: 'power2.in',
            stagger: 0.03
        }).to(circle, {
            clipPath: `circle(0% at ${originX}px ${originY}px)`,
            duration: 0.55,
            ease: 'power3.inOut'
        }, '-=0.1');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && circleRef.current && hamburgerBtnRef.current) {
            const btnRect = hamburgerBtnRef.current.getBoundingClientRect();
            const originX = btnRect.left + btnRect.width / 2;
            const originY = btnRect.top + btnRect.height / 2;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(circleRef.current, {
                clipPath: `circle(0% at ${originX}px ${originY}px)`
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                navItemsRef.current.filter(Boolean),
                footerRef.current
            ], {
                y: 24,
                opacity: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline().to(circleRef.current, {
                clipPath: `circle(150% at ${originX}px ${originY}px)`,
                duration: 0.7,
                ease: 'power3.inOut'
            }).to(navItemsRef.current.filter(Boolean), {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out',
                stagger: 0.07
            }, '-=0.25').to(footerRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: 'power3.out'
            }, '-=0.2');
        }
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return ()=>document.body.style.overflow = '';
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `w-full fixed top-0 left-0 z-[60] transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${scrolledUp ? 'bg-white text-black' : 'bg-transparent text-white'}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-4xl font-extrabold",
                            children: "DEV.SRC"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex flex-1 justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex space-x-12 font-semibold",
                            children: navLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.path,
                                        className: "nav-link",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                }, item.name, false, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://wa.me/9779864926196?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hidden md:inline-flex items-center gap-2 bg-black text-white pl-3 pr-2 py-2 rounded-full text-sm font-semibold transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "#25D366",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.56 3.74 1.5 5.27L2 22l4.96-1.3a9.85 9.85 0 0 0 5.08 1.39h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.83 14.07c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.13-.98-.31-1.69-.61-2.98-1.29-4.92-4.28-5.07-4.48-.15-.2-1.2-1.6-1.2-3.05 0-1.46.77-2.17 1.04-2.47.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.14-.3.29-.13.57.17.28.77 1.27 1.65 2.05 1.14 1.01 2.1 1.33 2.4 1.48.3.15.47.13.64-.05.17-.18.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.49.22.56.34.07.13.07.74-.18 1.44Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "12",
                                        height: "12",
                                        viewBox: "0 0 12 12",
                                        fill: "none",
                                        className: "bg-white rounded-full p-[2px] w-5 h-5",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M3 9L9 3M9 3H4M9 3V8",
                                            stroke: "black",
                                            strokeWidth: "1.3",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: hamburgerBtnRef,
                                onClick: openMenu,
                                "aria-label": "Open menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBars"], {
                                    className: "text-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://wa.me/9779864926196?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center gap-2 bg-black text-white pl-4 pr-2.5 py-2.5 rounded-full text-sm font-semibold transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "#25D366",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.56 3.74 1.5 5.27L2 22l4.96-1.3a9.85 9.85 0 0 0 5.08 1.39h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.83 14.07c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.13-.98-.31-1.69-.61-2.98-1.29-4.92-4.28-5.07-4.48-.15-.2-1.2-1.6-1.2-3.05 0-1.46.77-2.17 1.04-2.47.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.14-.3.29-.13.57.17.28.77 1.27 1.65 2.05 1.14 1.01 2.1 1.33 2.4 1.48.3.15.47.13.64-.05.17-.18.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.49.22.56.34.07.13.07.74-.18 1.44Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Let's Talk"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    className: "bg-white rounded-full p-[3px] w-6 h-6",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 9L9 3M9 3H4M9 3V8",
                                        stroke: "black",
                                        strokeWidth: "1.3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                        lineNumber: 160,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: circleRef,
                className: "fixed inset-0 z-50 w-screen h-screen overflow-hidden",
                style: {
                    backgroundColor: '#0b0f19',
                    clipPath: 'circle(0% at 100% 0%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: menuRef,
                    className: "relative w-full h-full flex flex-col px-8 py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-white text-4xl font-extrabold",
                                    "aria-label": "Home",
                                    children: "DEV.SRC"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeMenu,
                                    "aria-label": "Close menu",
                                    className: "w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {
                                        className: "text-xl text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col justify-center gap-4",
                            children: navLinks.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.path,
                                    ref: (el)=>navItemsRef.current[i] = el,
                                    onClick: (event)=>{
                                        event.preventDefault();
                                        closeMenu(()=>{
                                            if (window.location.pathname !== '/') {
                                                window.location.assign(item.path);
                                                return;
                                            }
                                            const target = document.getElementById(item.path.slice(2));
                                            window.history.pushState(null, '', item.path);
                                            target?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        });
                                    },
                                    className: "text-white text-3xl md:text-4xl font-extrabold uppercase tracking-wide w-fit hover:text-white/70 transition-colors",
                                    children: item.name
                                }, item.name, false, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 195,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: footerRef,
                            className: "pb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-1",
                                    children: "Say Hello"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:santoshchettri216@gmail.com",
                                    className: "text-white text-lg font-bold uppercase tracking-wide block mb-6 hover:text-white/70 transition-colors",
                                    children: "santoshchettri216@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://twitter.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": "Twitter",
                                            className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTwitter"], {
                                                className: "text-sm text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                                lineNumber: 238,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://instagram.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": "Instagram",
                                            className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                                className: "text-sm text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                                lineNumber: 247,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://linkedin.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": "LinkedIn",
                                            className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedinIn"], {
                                                className: "text-sm text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/Navbarr.jsx",
                lineNumber: 168,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar/Navbarr.jsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Navbarr;
}),
];

//# sourceMappingURL=src_1n1vbjs._.js.map