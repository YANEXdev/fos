(() => {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 2975:
/***/ ((module) => {

// Exports
module.exports = {
	"product": "styles_product__Q9pzH",
	"image": "styles_image__q_9aE",
	"image_loader": "styles_image_loader__ZL67k",
	"bg": "styles_bg__Tb5k5",
	"toProduct_loader": "styles_toProduct_loader__5dDnz",
	"toProduct": "styles_toProduct__IXzqm",
	"info": "styles_info__0JOw_",
	"title": "styles_title__Voynu",
	"category": "styles_category__85cGs"
};


/***/ }),

/***/ 4688:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "styles_main__zcoTf",
	"filters": "styles_filters__d99aM",
	"paramTitle": "styles_paramTitle__kSf0y",
	"catalog": "styles_catalog__a_rUb",
	"catalogTitle": "styles_catalogTitle__MmE_1",
	"productList": "styles_productList__3qdLi"
};


/***/ }),

/***/ 437:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "global_container__jOeyO",
	"main": "global_main__CoZNq"
};


/***/ }),

/***/ 6599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CatalogProduct_component)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2975);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function CatalogProduct_component({ fetching =false , data ={}  }) {
    function shuffle(array) {
        for(let i = array.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [
                array[j],
                array[i]
            ];
        }
        return array;
    }
    function simpleColor() {
        const min = 90;
        const f = 255;
        const s = min;
        const t = min + Math.random() * (230 - min);
        let arr = shuffle([
            f,
            s,
            t
        ]);
        arr = shuffle(arr);
        return arr;
    }
    const color = simpleColor();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    if (fetching || !data.id) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().product),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().image_loader)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: "Загрузка..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().category),
                                children: "Загрузка..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "",
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().toProduct_loader),
                        children: "Загрузка..."
                    })
                ]
            })
        });
    } else {
        const { id , title , price , image_url , category  } = data;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: ()=>{
                    router.push(`/product/${id}`);
                },
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().product),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            background: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7)`
                        },
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            loading: "lazy",
                            src: image_url,
                            alt: title,
                            style: {
                                filter: `drop-shadow(19px 28px 20px rgba(0, 0, 0, 0.4)`
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().category),
                                children: category[1]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().toProduct),
                        children: price
                    })
                ]
            })
        });
    }
}


/***/ }),

/***/ 5385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useFetchApi)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2082);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_base__WEBPACK_IMPORTED_MODULE_1__]);
_api_base__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useFetchApi() {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const Get = async (url)=>{
        try {
            setLoading(true);
            const { data  } = await (0,_api_base__WEBPACK_IMPORTED_MODULE_1__/* .Api */ .V)().Instance.get(url);
            setTimeout(()=>{
                setLoading(false);
                return data;
            }, 3000);
        } catch (err) {
            setLoading(false);
            throw new Error(err.response.data.message);
        }
    };
    return {
        Get,
        loading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2250:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Catalog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6599);
/* harmony import */ var _hook_fetch_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5385);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(437);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4688);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hook_fetch_hook__WEBPACK_IMPORTED_MODULE_4__]);
_hook_fetch_hook__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Catalog(props) {
    const catalogPage = props.seo.page.catalogPage;
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { Get , loading  } = (0,_hook_fetch_hook__WEBPACK_IMPORTED_MODULE_4__/* .useFetchApi */ .A)();
    const getProducts = async ()=>{
        try {
            const fetched = await Get("/product/getAll?get=0");
            setData(fetched);
            console.log(fetched);
        } catch (e) {}
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getProducts();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: catalogPage.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: `${(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_5___default().main)} ${(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_5___default().container)} ${(_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().main)}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().filters),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().paramTitle),
                                children: "Тип"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().params),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().typeSelection),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Худи"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().typeSelection),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Футболки"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().typeSelection),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Брюки"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().typeSelection),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: "Шорты"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: "Носки"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().catalog),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().catalogTitle),
                                        children: "Худи"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                children: "Фильтры"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "",
                                                id: "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        children: "Новизна"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        children: "Популярность"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        children: "Цена: по убыванию"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        children: "Цена: по возрастанию"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().productList),
                                children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            fetching: true
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            fetching: true
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            fetching: true
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            fetching: true
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            fetching: true
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: {
                                                id: 12,
                                                title: "Entry",
                                                price: "1299.00",
                                                image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png",
                                                category: [
                                                    "hoodies",
                                                    "Худи"
                                                ]
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: {
                                                id: 12,
                                                title: "Entry",
                                                price: "1299.00",
                                                image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png",
                                                category: [
                                                    "hoodies",
                                                    "Худи"
                                                ]
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: {
                                                id: 12,
                                                title: "Entry",
                                                price: "1299.00",
                                                image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png",
                                                category: [
                                                    "hoodies",
                                                    "Худи"
                                                ]
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: {
                                                id: 12,
                                                title: "Entry",
                                                price: "1299.00",
                                                image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png",
                                                category: [
                                                    "hoodies",
                                                    "Худи"
                                                ]
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: {
                                                id: 12,
                                                title: "Entry",
                                                price: "1299.00",
                                                image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png",
                                                category: [
                                                    "hoodies",
                                                    "Худи"
                                                ]
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: {
                                                id: 12,
                                                title: "Entry",
                                                price: "1299.00",
                                                image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png",
                                                category: [
                                                    "hoodies",
                                                    "Худи"
                                                ]
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: {
                                                id: 12,
                                                title: "Entry",
                                                price: "1299.00",
                                                image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png",
                                                category: [
                                                    "hoodies",
                                                    "Худи"
                                                ]
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: {
                                                id: 12,
                                                title: "Entry",
                                                price: "1299.00",
                                                image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png",
                                                category: [
                                                    "hoodies",
                                                    "Худи"
                                                ]
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_forCatalog_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: {
                                                id: 12,
                                                title: "Entry",
                                                price: "1299.00",
                                                image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png",
                                                category: [
                                                    "hoodies",
                                                    "Худи"
                                                ]
                                            }
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,82], () => (__webpack_exec__(2250)));
module.exports = __webpack_exports__;

})();