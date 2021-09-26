import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);
const lang = window.localStorage.getItem("lang");
const page = window.localStorage.getItem("page");
export const loadCategories = ({ commit }) => {
  axios
    .get(`/api/categories/getAll?page=${page}&lang=${lang}`)
    .then((res) => {
      console.warn("Categories :", res.data.Category);
      let Categories = res.data.Category.data;
      let total_page = res.data.Category.last_page ;
      commit("SET_Categories", Categories);
      commit("SET_total_page", total_page);
     
      console.log("page :", page);
      console.log("total_page :", total_page);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};

export const loadCategory = ({ commit }, CategoryID) => {
  axios
    .get(`/api/categories/getById/${CategoryID}?lang=${lang}`)
    .then((res) => {
      console.warn("CategoryID :", res.data.Category);
      let CategoryID = res.data.Category;
   
      commit("SET_total_page", total_page);
      commit("SET_CategoryID", CategoryID);
      console.log("total_page :", total_page);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};

export const loadSections = ({ commit }) => {
  axios
    .get(`/api/sections/getAll?lang=${lang}`)
    .then((res) => {
      console.warn("Sections :", res.data.Section);
      let sections = res.data.Section;
      commit("SET_Sections", sections);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};
export const loadSection = ({ commit }, SectionID) => {
  axios
    .get(`/api/sections/getById/${SectionID}?lang=${lang}`)
    .then((res) => {
      console.warn("SectionID :", res.data.Section);
      let SectionID = res.data.Section;
      commit("SET_SectionID", SectionID);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};

export const loadBrands = ({ commit }) => {
  axios
    .get(`/api/brands/getAll?page=${page}&lang=${lang}`)
    .then((res) => {
      console.warn("Brands :", res.data.Brand);
      let Brands = res.data.Brand.data;
      let total_page = res.data.Brand.last_page ;
      commit("SET_total_page", total_page);
      commit("SET_Brands", Brands);
      console.log("page :", page);
      console.log("total_page :", total_page);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};
export const loadBrand = ({ commit }, BrandID) => {
  axios
    .get(`/api/brands/getById/${BrandID}?lang=${lang}`)
    .then((res) => {
      console.warn("BrandID :", res.data.Brand);
      let BrandID = res.data.Brand;
      commit("SET_BrandID", BrandID);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};

export const loadProducts = ({ commit }) => {
  axios
    .get(`/api/products/getAll?page=${page}&lang=${lang}`)
    .then((res) => {
      console.warn("Product :", res.data.Products.data);
      let Product = res.data.Products.data;
      let total_page = res.data.Products.last_page ;
      commit("SET_total_page", total_page);
      commit("SET_Products", Product);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};
export const loadProduct = ({ commit }, ProductID) => {
  axios
    .get(`/api/products/getById/${ProductID}?lang=${lang}`)
    .then((res) => {
      console.warn("productById :", res.data);
      let ProductID = res.data.product.data;
      commit("SET_ProductID", ProductID);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};
export const loadCustome = ({ commit }) => {
  axios
    .get(`/api/customfields/getAll?lang=${lang}`)
    .then((res) => {
      console.warn("Custome :", res.data.Custom_fields);
      let Custome = res.data.Custom_fields;
     
    
      commit("SET_Custome", Custome);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};
