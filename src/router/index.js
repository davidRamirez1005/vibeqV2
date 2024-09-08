import { createRouter, createWebHistory } from "vue-router";
import MainDashboard from "../shared/layouts/maindashboard.vue";
import Landingpage from "../shared/layouts/landingpage.vue";
// import Errorpagesinfo from "../shared/layouts/errorpagesinfo.vue";
// import Messagesinformation from "../shared/layouts/messagesinformation.vue";

const routes = [
  {
    component: MainDashboard,
    children: [
      {
        path: `${import.meta.env.BASE_URL}/`,
        redirect: `${import.meta.env.BASE_URL}dashboard`,
        component: () => import("../components/dashboard/dashboard.vue"),
      },
      {
        path: `${import.meta.env.BASE_URL}/`,
        name: "Maindashboard",
        component: () => import("../components/dashboard/dashboard.vue"),
      },
      {
        path: `${import.meta.env.BASE_URL}dashboard`,
        name: "Dashboard",
        component: () => import("../components/dashboard/dashboard.vue"),
      },

      {
        path: `${import.meta.env.BASE_URL}Finanzas/informes`,
        name: "Informes",
        component: () =>
          import(
            "../components/cryptocurrencies/cryptodashboard/cryptodashboard.vue"
          ),
      },
      {
        path: `${import.meta.env.BASE_URL}Finanzas/registrar`,
        name: "Registrar",
        component: () =>
          import(
            "../components/cryptocurrencies/cryptodashboard/cryptodashboard.vue"
          ),
      },
      {
        path: `${import.meta.env.BASE_URL}Finanzas/calcualdora`,
        name: "Calculadora",
        component: () =>
          import(
            "../components/cryptocurrencies/cryptodashboard/cryptodashboard.vue"
          ),
      },
      {
        path: `${import.meta.env.BASE_URL}sitioWeb/crear`,
        name: "crearSitioWeb",
        component: () =>
          import(
            "../components/sitioweb/index.vue"
          ),
      },

      // {
      //   path: `${import.meta.env.BASE_URL}crypto/marketcap`,
      //   name: "Marketcap",
      //   component: () =>
      //     import("../components/cryptocurrencies/marketcap/Marketcap.vue"),
      // },
      // {
      //   path: `${import.meta.env.BASE_URL}crypto/buy-sell`,
      //   name: "buyandsell",
      //   component: () =>
      //     import("../components/cryptocurrencies/buy&sell/Buy&sell.vue"),
      // },
      // {
      //   path: `${import.meta.env.BASE_URL}crypto/currency-exchange`,
      //   name: "Currencyexchange",
      //   component: () =>
      //     import(
      //       "../components/cryptocurrencies/currencyexchange/Currencyexchange.vue"
      //     ),
      // },
      // {
      //   path: `${import.meta.env.BASE_URL}crypto/wallet`,
      //   name: "Wallet",
      //   component: () =>
      //     import("../components/cryptocurrencies/wallet/Wallet.vue"),
      // },
      // {
      //   path: `${import.meta.env.BASE_URL}crypto/transactions`,
      //   name: "Transactions",
      //   component: () =>
      //     import(
      //       "../components/cryptocurrencies/transactions/Transactions.vue"
      //     ),
      // },

      {
        path: `${import.meta.env.BASE_URL}/ecommerce/ecommercedashboard`,
        name: "Ecommercedashboard",
        component: () =>
          import("../components/e-commerce/dashboard/ecommercedashboard.vue"),
      },
      // {
      //   path: `${import.meta.env.BASE_URL}ecommerce/products-details`,
      //   name: "Productsdetails",
      //   component: () =>
      //     import("../components/e-commerce/productdetails/Productdetails.vue"),
      // },
      // {
      //   path: `${import.meta.env.BASE_URL}ecommerce/cart`,
      //   name: "Cart",
      //   component: () => import("../components/e-commerce/cart/Cart.vue"),
      // },

      // {
      //   path: `${import.meta.env.BASE_URL}ecommerce/wishlist`,
      //   name: "Wishlist",
      //   component: () =>
      //     import("../components/e-commerce/wishlist/wishlist.vue"),
      // },
      // {
      //   path: `${import.meta.env.BASE_URL}ecommerce/checkout`,
      //   name: "Checkout",
      //   component: () =>
      //     import("../components/e-commerce/checkout/Checkout.vue"),
      // },
      // {
      //   path: `${import.meta.env.BASE_URL}ecommerce/orders`,
      //   name: "Orders",
      //   component: () => import("../components/e-commerce/orders/Orders.vue"),
      // },
      {
        path: `${import.meta.env.BASE_URL}ecommerce/add-product`,
        name: "Addproducts",
        component: () =>
          import("../components/e-commerce/addproduct/addproduct.vue"),
      },
      {
        path: `${import.meta.env.BASE_URL}ecommerce/products`,
        name: "Products",
        component: () =>
          import("../components/e-commerce/products/products.vue"),
      },
      {
        path: `${import.meta.env.BASE_URL}gestor/ordenes`,
        name: "Ordenes",
        component: () =>
          import("../components/e-commerce/wishlist/wishlist.vue"),
      },
      {
        path: `${import.meta.env.BASE_URL}gestor/mensajes`,
        name: "Mensajes",
        component: () =>
          import("../components/advancedui/chat/chat.vue"),
      },
      {
        path: `${import.meta.env.BASE_URL}app/calendario`,
        name: "Calendario",
        component: () =>
          import("../components/advancedui/calendar/calendar.vue"),
      },
      {
        path: `${import.meta.env.BASE_URL}configuración`,
        name: "Configuración",
        component: () =>
          import("../components/pages/settings/settings.vue"),
      },
      {
        path: `${import.meta.env.BASE_URL}marketing/alerta`,
        name: "Enviar alerta",
        component: () =>
          import("../components/apps/mail/mailcompose/mailcompose.vue"),
      },

      // {
      //   path: `${import.meta.env.BASE_URL}ecommerce/account`,
      //   name: "Account",
      //   component: () => import("../components/e-commerce/account/Account.vue"),
      // },

      // {
      //   path: `${import.meta.env.BASE_URL}apps`,
      //   name: "Apps",
      //   children: [
      //     {
      //       path: "widgets",
      //       name: "Widgets",
      //       component: () => import("../components/apps/widgets/Widgets.vue"),
      //     },
      //     {
      //       path: "sweetalerts",
      //       component: () =>
      //         import("../components/apps/sweetalerts/Sweetalerts.vue"),
      //     },

      //     {
      //       path: "mail",
      //       name: "Mail",
      //       children: [
      //         {
      //           path: "mailinbox",
      //           component: () =>
      //             import("../components/apps/mail/mailinbox/Mailinbox.vue"),
      //         },
      //         {
      //           path: "viewmail",
      //           component: () =>
      //             import("../components/apps/mail/viewmail/Viewmail.vue"),
      //         },
      //         {
      //           path: "mailcompose",
      //           component: () =>
      //             import("../components/apps/mail/mailcompose/Mailcompose.vue"),
      //         },
      //       ],
      //     },
      //     // {
      //     //   path: "maps",
      //     //   name: "Maps",
      //     //   children: [
      //     //     {
      //     //       path: "openlayer",
      //     //       component: () =>
      //     //         import("../components/apps/maps/Openlayer/Maps.vue"),
      //     //     },
      //     //     {
      //     //       path: "leaflet",
      //     //       component: () =>
      //     //         import("../components/apps/maps/leaflet.vue"),
      //     //     },
      //     //     {
      //     //       path: "jsvector",
      //     //       component: () =>
      //     //         import("../components/apps/maps/jsvector.vue"),
      //     //     },
      //     //   ],
      //     // },
      //     {
      //       path: "tables",
      //       name: "Tables",
      //       children: [
      //         {
      //           path: "basic",
      //           component: () =>
      //             import("../components/apps/tables/basic/Basic.vue"),
      //         },
      //         {
      //           path: "datatable",
      //           component: () =>
      //             import("../components/apps/tables/datatable/Datatable.vue"),
      //         },
      //       ],
      //     },

      //     {
      //       path: "blog",
      //       name: "Blog",
      //       children: [
      //         {
      //           path: "blog-page",
      //           component: () =>
      //             import("../components/apps/blog/blogpage/Blogpage.vue"),
      //         },
      //         {
      //           path: "blog-details",
      //           component: () =>
      //             import("../components/apps/blog/blogdetails/Blogdetails.vue"),
      //         },
      //         {
      //           path: "blog-post",
      //           component: () =>
      //             import("../components/apps/blog/blogpost/Blogpost.vue"),
      //         },
      //       ],
      //     },

      //     {
      //       path: "filemanager",
      //       name: "FileManager",
      //       children: [
      //         {
      //           path: "filemanager",
      //           component: () =>
      //             import(
      //               "../components/apps/filemanager/filemanager/Filemanger.vue"
      //             ),
      //         },
      //         {
      //           path: "filemanagerlist",
      //           component: () =>
      //             import(
      //               "../components/apps/filemanager/filemanagerlist/Filemanagerlist.vue"
      //             ),
      //         },
      //         {
      //           path: "filedetails",
      //           component: () =>
      //             import(
      //               "../components/apps/filemanager/filedetails/Filedetails.vue"
      //             ),
      //         },
      //         {
      //           path: "fileattachments",
      //           component: () =>
      //             import(
      //               "../components/apps/filemanager/fileattachments/Fileattachments.vue"
      //             ),
      //         },
      //       ],
      //     },
      //     // icons
      //     {
      //       path: "icons",
      //       component: () =>
      //         import(
      //           "../components/apps/icons/icons.vue"
      //         ),
      //     },
      //   ],
      // },
      // // Elements
      // {
      //   path: `${import.meta.env.BASE_URL}elements`,
      //   name: "Elements",
      //   children: [
      //     {
      //       path: "accordion",
      //       component: () =>
      //         import("../components/elements/accordion/accordion.vue"),
      //     },
      //     {
      //       path: "alerts",
      //       component: () => import("../components/elements/alerts/alerts.vue"),
      //     },
      //     {
      //       path: "avatar",
      //       component: () => import("../components/elements/avatar/avatar.vue"),
      //     },
      //     {
      //       path: "breadcrumb",
      //       component: () =>
      //         import("../components/elements/breadcrumb/breadcrumb.vue"),
      //     },
      //     {
      //       path: "badge",
      //       component: () => import("../components/elements/badge/badge.vue"),
      //     },
      //     {
      //       path: "buttons",
      //       component: () =>
      //         import("../components/elements/buttons/buttons.vue"),
      //     },
      //     {
      //       path: "buttons-group",
      //       component: () =>
      //         import("../components/elements/buttons-group/buttons-group.vue"),
      //     },
      //     {
      //       path: "dropdown",
      //       component: () =>
      //         import("../components/elements/dropdown/dropdown.vue"),
      //     },
      //     {
      //       path: "images-figure",
      //       component: () =>
      //         import("../components/elements/images-figure/images-figure.vue"),
      //     },
      //     {
      //       path: "listgroup",
      //       component: () =>
      //         import("../components/elements/listgroup/listgroup.vue"),
      //     },
      //     {
      //       path: "object-fit",
      //       component: () =>
      //         import("../components/elements/object-fit/object-fit.vue"),
      //     },
      //     {
      //       path: "pagination",
      //       component: () =>
      //         import("../components/elements/pagination/pagination.vue"),
      //     },
      //     {
      //       path: "progress",
      //       component: () =>
      //         import("../components/elements/progress/progress.vue"),
      //     },
      //     {
      //       path: "spinners",
      //       component: () =>
      //         import("../components/elements/spinners/spinners.vue"),
      //     },
      //     {
      //       path: "typhography",
      //       component: () =>
      //         import("../components/elements/typhography/typhography.vue"),
      //     },
      //     {
      //       path: "tooltips",
      //       component: () =>
      //         import("../components/elements/tooltips/tooltips.vue"),
      //     },
      //     {
      //       path: "toast",
      //       component: () => import("../components/elements/toast/toast.vue"),
      //     },
      //     {
      //       path: "tags",
      //       component: () => import("../components/elements/tags/tags.vue"),
      //     },
      //     {
      //       path: "tabs",
      //       component: () => import("../components/elements/tabs/tabs.vue"),
      //     },
      //   ],
      // },

      // {
      //   path: `${import.meta.env.BASE_URL}advancedui`,
      //   name: "Advancedui",
      //   children: [
      //     {
      //       path: "carousel",
      //       component: () =>
      //         import("../components/advancedui/carousel/Carousel.vue"),
      //     },
      //     {
      //       path: "chat",
      //       component: () => import("../components/advancedui/chat/Chat.vue"),
      //     },
      //     {
      //       path: "cards",
      //       component: () => import("../components/advancedui/cards/Cards.vue"),
      //     },
      //     {
      //       path: "draggable-cards",
      //       component: () => import("../components/advancedui/draggable-cards/draggable-cards.vue"),
      //     },
          // {
          //   path: "calendar",
          //   component: () =>
          //     import("../components/advancedui/calendar/calendar.vue"),
          // },
      //     {
      //       path: "contacts",
      //       component: () =>
      //         import("../components/advancedui/contacts/Contacts.vue"),
      //     },
      //     {
      //       path: "modals",
      //       component: () =>
      //         import("../components/advancedui/modals/Modals.vue"),
      //     },
      //     {
      //       path: "Navbar",
      //       component: () =>
      //         import("../components/advancedui/navbar/navbar.vue"),
      //     },
      //     {
      //       path: "timeline",
      //       component: () =>
      //         import("../components/advancedui/timeline/Timeline.vue"),
      //     },
      //     {
      //       path: "offcanvas",
      //       component: () =>
      //         import("../components/advancedui/offcanvas/offcanvas.vue"),
      //     },
      //     {
      //       path: "placeholders",
      //       component: () =>
      //         import("../components/advancedui/placeholders/placeholders.vue"),
      //     },
      //     {
      //       path: "ratings",
      //       component: () =>
      //         import("../components/advancedui/ratings/Ratings.vue"),
      //     },
      //     {
      //       path: "search",
      //       component: () =>
      //         import("../components/advancedui/search/Search.vue"),
      //     },
      //     {
      //       path: "userlist",
      //       component: () =>
      //         import("../components/advancedui/userlist/Userlist.vue"),
      //     },
      //     {
      //       path: "notifications",
      //       component: () =>
      //         import(
      //           "../components/advancedui/notifications/Notifications.vue"
      //         ),
      //     },
      //     {
      //       path: "swiper-js",
      //       component: () =>
      //         import(
      //           "../components/advancedui/swiper-js/swiper-js.vue"
      //         ),
      //     },
      //   ],
      // },

      // {
      //   path: `${import.meta.env.BASE_URL}pages`,
      //   name: "pages",
      //   children: [
      //     {
      //       path: "profile",
      //       component: () => import("../components/pages/profile/Profile.vue"),
      //     },
      //     {
      //       path: "aboutus",
      //       component: () => import("../components/pages/aboutus/Aboutus.vue"),
      //     },
      //     {
      //       path: "settings",
      //       component: () =>
      //         import("../components/pages/settings/Settings.vue"),
      //     },
      //     {
      //       path: "invoice",
      //       component: () => import("../components/pages/invoice/Invoice.vue"),
      //     },
      //     {
      //       path: "pricing",
      //       component: () => import("../components/pages/pricing/Pricing.vue"),
      //     },
      //     {
      //       path: "gallery",
      //       component: () => import("../components/pages/gallery/Gallery.vue"),
      //     },
      //     {
      //       path: "notificationlist",
      //       component: () =>
      //         import(
      //           "../components/pages/notificationslist/Notificationlist.vue"
      //         ),
      //     },
      //     {
      //       path: "faqs",
      //       component: () => import("../components/pages/faqs/Faqs.vue"),
      //     },
      //     {
      //       path: "emptypage",
      //       component: () =>
      //         import("../components/pages/emptypage/Emptypage.vue"),
      //     },
      //   ],
      // },

      // {
      //   path: `${import.meta.env.BASE_URL}utilities`,
      //   name: "utilities",
      //   children: [
      //     {
      //       path: "breakpoints",
      //       component: () =>
      //         import("../components/utilities/breakpoints/breakpoints.vue"),
      //     },
      //     {
      //       path: "border",
      //       component: () =>
      //         import("../components/utilities/border/border.vue"),
      //     },
      //     {
      //       path: "display",
      //       component: () =>
      //         import("../components/utilities/display/display.vue"),
      //     },
      //     {
      //       path: "colors",
      //       component: () => import("../components/utilities/colors/colors.vue"),
      //     },
      //     {
      //       path: "flex",
      //       component: () => import("../components/utilities/flex/flex.vue"),
      //     },
      //     {
      //       path: "columns",
      //       component: () =>
      //         import("../components/utilities/columns/columns.vue"),
      //     },
      //     {
      //       path: "gutters",
      //       component: () =>
      //         import("../components/utilities/gutters/gutters.vue"),
      //     },
      //     {
      //       path: "helpers",
      //       component: () =>
      //         import("../components/utilities/helpers/helpers.vue"),
      //     },
      //     {
      //       path: "position",
      //       component: () =>
      //         import("../components/utilities/position/position.vue"),
      //     },
      //     {
      //       path: "more",
      //       component: () =>
      //         import("../components/utilities/more/more.vue"),
      //     },
      //   ],
      // },

      // {
      //   path: `${import.meta.env.BASE_URL}forms`,
      //   name: "forms",
      //   children: [
      //     {
      //       path: `form-elements`,
      //       name: "forms",
      //       children: [
      //         {
      //           path: "check-radios",
      //           component: () =>
      //             import("../components/forms/form-elements/checks-radios.vue"),
      //         },
      //         {
      //           path: "color-picker",
      //           component: () =>
      //             import("../components/forms/form-elements/color-picker.vue"),
      //         },
      //         {
      //           path: "date-time-picker",
      //           component: () =>
      //             import("../components/forms/form-elements/date-time-picker.vue"),
      //         },
      //         {
      //           path: "file-uploads",
      //           component: () =>
      //             import("../components/forms/form-elements/file-uploads.vue"),
      //         },
      //         {
      //           path: "form-select",
      //           component: () =>
      //             import("../components/forms/form-elements/form-select.vue"),
      //         },
      //         {
      //           path: "input-group",
      //           component: () =>
      //             import("../components/forms/form-elements/input-group.vue"),
      //         },
      //         {
      //           path: "input-masks",
      //           component: () =>
      //             import("../components/forms/form-elements/input-masks.vue"),
      //         },
      //         {
      //           path: "inputs",
      //           component: () =>
      //             import("../components/forms/form-elements/inputs.vue"),
      //         },
      //         {
      //           path: "range-slider",
      //           component: () =>
      //             import("../components/forms/form-elements/range-slider.vue"),
      //         },
      //       ]
      //     },
      //     {
      //       path: "floating-labels",
      //       component: () =>
      //         import("../components/forms/floating-labels.vue"),
      //     },
      //     {
      //       path: "formlayouts",
      //       component: () =>
      //         import("../components/forms/form-layouts.vue"),
      //     },

      //     {
      //       path: "validation",
      //       component: () =>
      //         import("../components/forms/validation.vue"),
      //     },
      //     {
      //       path: "formwizards",
      //       component: () =>
      //         import("../components/forms/form-wizard.vue"),
      //     },
      //     {
      //       path: "formeditors",
      //       component: () =>
      //         import("../components/forms/form-editor/vue3-editor.vue"),
      //     },
      //   ],
      // },

      // {
      //   path: `${import.meta.env.BASE_URL}Charts`,
      //   name: "Charts",
      //   children: [
      //     {
      //       path: "apexchart/area",
      //       component: () =>
      //         import("../components/charts/apex-charts/area.vue"),
      //     },
      //     {
      //       path: "apexchart/bar",
      //       component: () =>
      //         import("../components/charts/apex-charts/bar.vue"),
      //     },
      //     {
      //       path: "apexchart/boxplot",
      //       component: () =>
      //         import("../components/charts/apex-charts/boxplot.vue"),
      //     },
      //     {
      //       path: "apexchart/bubble",
      //       component: () =>
      //         import("../components/charts/apex-charts/bubble.vue"),
      //     },
      //     {
      //       path: "apexchart/candlestick",
      //       component: () =>
      //         import("../components/charts/apex-charts/candlestick.vue"),
      //     },
      //     {
      //       path: "apexchart/column",
      //       component: () =>
      //         import("../components/charts/apex-charts/column.vue"),
      //     },
      //     {
      //       path: "apexchart/heatmap",
      //       component: () =>
      //         import("../components/charts/apex-charts/heatmap.vue"),
      //     },
      //     {
      //       path: "apexchart/line",
      //       component: () =>
      //         import("../components/charts/apex-charts/line.vue"),
      //     },
      //     {
      //       path: "apexchart/mixed",
      //       component: () =>
      //         import("../components/charts/apex-charts/mixed.vue"),
      //     },
      //     {
      //       path: "apexchart/pie",
      //       component: () =>
      //         import("../components/charts/apex-charts/pie.vue"),
      //     },
      //     {
      //       path: "apexchart/polararea",
      //       component: () =>
      //         import("../components/charts/apex-charts/polararea.vue"),
      //     },
      //     {
      //       path: "apexchart/radar",
      //       component: () =>
      //         import("../components/charts/apex-charts/radar.vue"),
      //     },
      //     {
      //       path: "apexchart/radialbar",
      //       component: () =>
      //         import("../components/charts/apex-charts/radialbar.vue"),
      //     },
      //     {
      //       path: "apexchart/scatter",
      //       component: () =>
      //         import("../components/charts/apex-charts/scatter.vue"),
      //     },
      //     {
      //       path: "apexchart/treemap",
      //       component: () =>
      //         import("../components/charts/apex-charts/treemap.vue"),
      //     },
      //     {
      //       path: "chartjs",
      //       component: () => import("../components/charts/chartjs/Chartjs.vue"),
      //     },
      //     {
      //       path: "echart",
      //       component: () => import("../components/charts/echarts/Echarts.vue"),
      //     },
      //   ],
      // },
    ],
  },

  // Landingpage
  {
    path: `${import.meta.env.BASE_URL}landing-page`,
    component: Landingpage,
    children: [
      {
        path: "",
        name: "landingpage",
        component: () => import("../components/landingpage/landingpage.vue"),
      },
    ],
  },
  // // Errrorpage
  // {
  //   path: `${import.meta.env.BASE_URL}custompages`,
  //   component: Errorpagesinfo,
  //   children: [
  //     {
  //       path: "signin",
  //       component: () => import("../components/custompages/signin/Signin.vue"),
  //     },
  //     {
  //       path: "signup",
  //       component: () => import("../components/custompages/signup/Signup.vue"),
  //     },
  //     {
  //       path: "forgotpassword",
  //       component: () =>
  //         import("../components/custompages/forgotpassword/Forgotpassword.vue"),
  //     },
  //     {
  //       path: "resetpassword",
  //       component: () =>
  //         import("../components/custompages/resetpassword/Restpassword.vue"),
  //     },
  //     {
  //       path: "lockscreen",
  //       component: () =>
  //         import("../components/custompages/lockscreen/Lockscreen.vue"),
  //     },
  //     {
  //       path: "underconstruction",
  //       component: () =>
  //         import(
  //           "../components/custompages/underconstruction/Underconstruction.vue"
  //         ),
  //     },

  //     {
  //       path: "error404/",
  //       component: () =>
  //         import("../components/custompages/error404/Error404.vue"),
  //     },
  //     {
  //       path: "error500",
  //       component: () =>
  //         import("../components/custompages/error500/Error500.vue"),
  //     },
  //   ],
  // },
  // Messageinformations
  // {
  //   path: `${import.meta.env.BASE_URL}/pages`,
  //   component: Messagesinformation,
  //   children: [
  //     {
  //       path: "successmessage",
  //       component: () =>
  //         import("../components/pages/successsmessage/Successmessage.vue"),
  //     },
  //     {
  //       path: "dangermessage",
  //       component: () =>
  //         import("../components/pages/dangermessage/Dangermessage.vue"),
  //     },
  //     {
  //       path: "warningmessage",
  //       component: () =>
  //         import("../components/pages/warningmessage/Warningmessage.vue"),
  //     },
  //   ],
  // },

  //.....Errorpage.....
  {
    path: "/:pathMatch(.*)*",
    name: "404page",
    component: () => import("../components/custompages/error404/error404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
