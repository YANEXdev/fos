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

/***/ 2818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Catalog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/UI/forCatalog/Product/styles.module.css
var styles_module = __webpack_require__(2975);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/UI/forCatalog/Product/index.tsx




function CatalogProduct_component({ fetching =false , data ={}  }) {
    function shuffle(array) {
        return array.sort(()=>Math.random() - 0.5);
    }
    function simpleColor() {
        let f = 255;
        let s = Math.random() * (255 - 125) + 125;
        let t = 125;
        let arr = shuffle([
            f,
            s,
            t
        ]);
        return arr;
    }
    const color = simpleColor();
    const router = (0,router_.useRouter)();
    if (fetching || !data.id) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).product,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).image_loader
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (styles_module_default()).title,
                                children: "Загрузка..."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (styles_module_default()).category,
                                children: "Загрузка..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "",
                        className: (styles_module_default()).toProduct_loader,
                        children: "Загрузка..."
                    })
                ]
            })
        });
    } else {
        const { id , title , price , image_url , category  } = data;
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: ()=>{
                    router.push("/store");
                },
                className: (styles_module_default()).product,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            background: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7)`
                        },
                        className: (styles_module_default()).image,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            loading: "lazy",
                            src: image_url,
                            alt: title,
                            style: {
                                filter: `drop-shadow(19px 28px 20px rgba(0, 0, 0, 0.4)`
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (styles_module_default()).title,
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (styles_module_default()).category,
                                children: category[1]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: (styles_module_default()).toProduct,
                        children: price
                    })
                ]
            })
        });
    }
}

// EXTERNAL MODULE: ./styles/global.module.css
var global_module = __webpack_require__(437);
var global_module_default = /*#__PURE__*/__webpack_require__.n(global_module);
// EXTERNAL MODULE: ./pages/catalog/styles.module.css
var catalog_styles_module = __webpack_require__(4688);
var catalog_styles_module_default = /*#__PURE__*/__webpack_require__.n(catalog_styles_module);
;// CONCATENATED MODULE: ./pages/catalog/index.tsx




function Catalog() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: `${(global_module_default()).main} ${(global_module_default()).container} ${(catalog_styles_module_default()).main}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: (catalog_styles_module_default()).filters,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (catalog_styles_module_default()).paramTitle,
                            children: "Тип"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (catalog_styles_module_default()).params,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (catalog_styles_module_default()).typeSelection,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Худи"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (catalog_styles_module_default()).typeSelection,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Футболки"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (catalog_styles_module_default()).typeSelection,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Брюки"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (catalog_styles_module_default()).typeSelection,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Шорты"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Носки"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: (catalog_styles_module_default()).catalog,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: (catalog_styles_module_default()).catalogTitle,
                                    children: "Худи"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            children: "Фильтры"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            name: "",
                                            id: "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    children: "Новизна"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    children: "Популярность"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    children: "Цена: по убыванию"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    children: "Цена: по возрастанию"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (catalog_styles_module_default()).productList,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CatalogProduct_component, {
                                    fetching: false,
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
                                /*#__PURE__*/ jsx_runtime_.jsx(CatalogProduct_component, {
                                    fetching: false,
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
                                /*#__PURE__*/ jsx_runtime_.jsx(CatalogProduct_component, {
                                    fetching: false,
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
                                /*#__PURE__*/ jsx_runtime_.jsx(CatalogProduct_component, {
                                    fetching: true,
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
                                /*#__PURE__*/ jsx_runtime_.jsx(CatalogProduct_component, {
                                    fetching: true,
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
                                /*#__PURE__*/ jsx_runtime_.jsx(CatalogProduct_component, {
                                    fetching: true,
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
                                /*#__PURE__*/ jsx_runtime_.jsx(CatalogProduct_component, {
                                    fetching: true,
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
                                /*#__PURE__*/ jsx_runtime_.jsx(CatalogProduct_component, {
                                    fetching: true,
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
                    ]
                })
            ]
        })
    });
}


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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(2818)));
module.exports = __webpack_exports__;

})();