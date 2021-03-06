import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
// notifications
import notifications from "@/pages/Notifications/View/notifications.vue";

// server setting
import handelserver from "@/pages/Setting/handelserver.vue";
import handelroutes from "@/pages/Setting/handelroutes.vue";
import style from "@/pages/Setting/style.vue";
import headerhandel from "@/pages/Setting/headerhandel.vue";
import footerhandel from "@/pages/Setting/footerhandel.vue";


// Products
import AllProducts from "@/pages/Product/View/AllProducts.vue";
import NewProduct from "@/pages/Product/View/NewProduct.vue";
import EditProduct from "@/pages/Product/View/EditProduct.vue";
// Stores
import AllStores from "@/pages/Store/View/AllStores.vue";
import NewStore from "@/pages/Store/View/NewStore.vue";
import EditStore from "@/pages/Store/View/EditStore.vue";
// Ctegories
import Categories from "@/pages/Categories/View/Categories.vue";
import NewCategory from "@/pages/Categories/View/NewCategory.vue";
import EditCategory from "@/pages/Categories/View/EditCategory.vue";
// Brands
import AllBrands from "@/pages/Brands/View/AllBrands.vue";
import NewBrand from "@/pages/Brands/View/NewBrand.vue";
import EditBrand from "@/pages/Brands/View/EditBrand.vue";
//section
import AllSections from "@/pages/Sections/View/AllSections.vue";
import NewSection from "@/pages/Sections/View/NewSection.vue";
import EditSection from "@/pages/Sections/View/EditSection.vue";
// Store Products
import StoreProducts from "@/pages/Product_Store/View/StoreProducts.vue";
import NewProductStor from "@/pages/Product_Store/View/NewProductStor.vue";
import EditProductStor from "@/pages/Product_Store/View/EditProductStor.vue";
//Doctors
import AllDoctors from "@/pages/Doctor/View/AllDoctors.vue";
import NewDoctors from "@/pages/Doctor/View/NewDoctors.vue";
import EditDoctors from "@/pages/Doctor/View/EditDoctors.vue";
//Restaurant
import AllRestaurant from "@/pages/Restaurant/View/restaurants/AllRestaurant.vue";
import NewRestaurant from "@/pages/Restaurant/View/restaurants/NewRestaurant.vue";
import EditRestaurant from "@/pages/Restaurant/View/restaurants/EditRestaurant.vue";
//Restaurant meals
import AllMeals from "@/pages/Restaurant/View/Meals/AllMeals.vue";
import NewMeals from "@/pages/Restaurant/View/Meals/NewMeals.vue";
import EditMeals from "@/pages/Restaurant/View/Meals/EditMeals.vue";
//Restaurant users
import AllUsers from "@/pages/Restaurant/View/Users/AllUsers.vue";
import NewUser from "@/pages/Restaurant/View/Users/NewUser.vue";
import EditUser from "@/pages/Restaurant/View/Users/EditUser.vue";
//Restauran Menus
import AllMenu from "@/pages/Restaurant/View/Menus/AllMenu.vue";
import NewMenu from "@/pages/Restaurant/View/Menus/NewMenu.vue";
import EditMenu from "@/pages/Restaurant/View/Menus/EditMenu.vue";
// Offer
import allOffers from "@/pages/Offers/View/allOffers.vue";
import NewOffer from "@/pages/Offers/View/NewOffer.vue";
import EditOffer from "@/pages/Offers/View/EditOffer.vue";
// custome feilds
import customefeilds from "@/pages/Custome/View/customefeilds.vue";
import NewCustome from "@/pages/Custome/View/NewCustome.vue";
import EditCutome from "@/pages/Custome/View/EditCutome.vue";
const routes = [
  {
    path: "/",
    redirect: "/admin/sign",
  },
  {
    path: "/admin/sign",
    name: "Sign",
    component: () => import("@/Sign/Sign.vue"),
  },
  // {
  //   path:"/",
  //   name:'Home',
  //   component:() => import("@/projectEdalili/views/Home.vue")
  // },
  // {
  //   path:"/signin",
  //   name:'SignIn',
  //   component:()=> import("@/Sign/views/SignIn.vue")
  // },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      // plathform setting
     //  notifications
     {
      path: "/admin/notifications/:id",
      name: "Notifications",
      component: notifications,
    },
      {
        path: "/admin/handelserver",
        name: "Handel server",
        component: handelserver,
      },
      {
        path: "/admin/handelroutes",
        name: "Handel routes",
        component: handelroutes,
      },
      {
        path: "/admin/style",
        name: "Style Plathform",
        component: style,
      },
      {
        path: "/admin/headerhandel",
        name: "Header Handel",
        component: headerhandel,
      },
      {
        path: "/admin/footerhandel",
        name: "Footer Handel  ",
        component: footerhandel,
      },
      
      
      // Products
      {
        path: "/admin/products",
        name: "Products",
        component: AllProducts,
      },

      {
        path: "product/create",
        name: "NewProduct",
        component: NewProduct,
      },

      {
        path: "product/update/:id",
        name: "EditProduct",
        component: EditProduct,
      },
      // Stores
      {
        path: "/admin/stores",
        name: "stores",
        component: AllStores,
      },
      {
        path: "store/create",
        name: "newStore",
        component: NewStore,
      },
      {
        path: "store/update/:id",
        name: "editStore",
        component: EditStore,
      },
      // Stores => Products
      {
        path: "store/:id/products",
        name: "storeProduct",
        component: StoreProducts,
      },
      {
        path: "product/create",
        name: "NewProductStore",
        component: NewProductStor,
      },
      {
        path: "product/update/:id_product",
        name: "EditProductStore",
        component: EditProductStor,
      },
      // Categories
      {
        path: "/admin/categories",
        name: "Categories",
        component: Categories,
      },
      {
        path: "/admin/category/create",
        name: "NewCategory",
        component: NewCategory,
      },
      {
        path: "category/update/:id",
        name: "EditCategory",
        component: EditCategory,
        params: true,
      },
      // Brands
      {
        path: "/admin/brands",
        name: "Brands",
        component: AllBrands,
      },
      {
        path: "/admin/brand/create",
        name: "newbrand",
        component: NewBrand,
      },
      {
        path: "brand/update/:id",
        name: "editbrand",
        component: EditBrand,
      },
      //sections
      {
        path: "/admin/sections",
        name: "section",
        component: AllSections,
      },
      {
        path: "/admin/section/create",
        name: "newsection",
        component: NewSection,
      },
      {
        path: "section/update/:id",
        name: "editsection",
        component: EditSection,
      },
      // Offers
      {
        path: "/admin/offers",
        name: "Offers",
        component: allOffers,
      },
      {
        path: "/admin/newOffer",
        name: "New Offer",
        component: NewOffer,
      },
      
      {
        path: "/admin/editOffer/:id",
        name: "Edit Offer",
        component: EditOffer,
      },
      

           // customefeilds
      {
        path: "/admin/customefeilds",
        name: "CustomeFeilds",
        component: customefeilds,
      },
      {
        path: "custome/create",
        name: "NewCustome",
        component: NewCustome,
      },
      {
        path: "custome/update/:id",
        name: "editcustome",
        component: EditCutome,
      },
      //
      // Doctors
      {
        path: "/admin/doctors",
        name: "Doctors",
        component: AllDoctors,
      },
      {
        path: "newdoctor",
        name: "newdoctor",
        component: NewDoctors,
      },
      {
        path: "editdoctors/:id",
        name: "editdoctors",
        component: EditDoctors,
      },
      //Restaurant
      {
        path: "/admin/restaurants",
        name: "Restaurant",
        component: AllRestaurant,
      },
      {
        path: "newrestaurant",
        name: "NewRestaurant",
        component: NewRestaurant,
      },
      {
        path: "editrestaurant",
        name: "EditRestaurant",
        component: EditRestaurant,
      },
      // Restaurant meals
      {
        path: "allmeals",
        name: "Meals",
        component: AllMeals,
      },
      {
        path: "newmeals",
        name: "NewMeals",
        component: NewMeals,
      },
      {
        path: "editmeals",
        name: "EditMeals",
        component: EditMeals,
      },
      //Restaurant user
      {
        path: "allusers",
        name: "Users",
        component: AllUsers,
      },
      {
        path: "newuser",
        name: "NewUser",
        component: NewUser,
      },
      {
        path: "edituser",
        name: "EditUser",
        component: EditUser,
      },
      //Restaurant Menu
      {
        path: "allmenus",
        name: "Menu",
        component: AllMenu,
      },
      {
        path: "newmenu",
        name: "NewMenu",
        component: NewMenu,
      },
      {
        path: "editmenu",
        name: "EditMenu",
        component: EditMenu,
      },
    ],
  },
];

export default routes;
