import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);
let lang = window.localStorage.getItem("lang");
export const loadCategories = ({ commit }) => {
  axios
    .get(`/api/categories/getAll?lang=${lang}`)
    .then((res) => {
      console.warn("Categories :", res.data.Category);
      let Categories = res.data.Category;
      commit("SET_Categories", Categories);
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
      commit("SET_CategoryID", CategoryID);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};
export const editCategory = ({ commit }, CategoryID) => {
  let res = axios.put(
    `/api/categories/update/${CategoryID.id}?lang=${lang}`,
    CategoryID
  );
  let newCategory = res.data.Category;
  commit("Edit_Category", newCategory);
  return newCategory;
};
export const deleteCategory = ({ commit }, items) => {
  axios.put(
    `/api/categories/trash/${items.id}`,
    commit("Delete_Category", items.id)
  );
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
export const deleteSection = ({ commit }, items) => {
  axios.put(
    `/api/sections/trash/${items.id}`,
    commit("Delete_Section", items.id)
  );
};
export const loadBrands = ({ commit }) => {
  axios
    .get(`/api/brands/getAll?lang=${lang}`)
    .then((res) => {
      console.warn("Brands :", res.data.Brand.data);
      let Brands = res.data.Brand.data;
      commit("SET_Brands", Brands);
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
export const deleteBrand = ({ commit }, items) => {
  axios.put(`/api/brands/trash/${items.id}`, commit("Delete_Brand", items.id));
};
export const loadProducts = ({ commit }) => {
  axios
    .get(`/api/products/getAll?lang=${lang}`)
    .then((res) => {
      console.warn("Product :", res.data.Products.data);
      let Product = res.data.Products.data;
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
      console.warn("Custome :", res.data.Custom_fields.data);
      let Custome = res.data.Custom_fields.data;
      commit("SET_Custome", Custome);
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
};
