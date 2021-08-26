export const SET_Categories = (state, Categories) => {
  state.Categories = Categories;
};
export const SET_CategoryID = (state, CategoryID) => {
  state.CategoryID = CategoryID;
};
export const Edit_Category = (state, CategoryID) => {
  state.Categories.forEach((v) => {
    if (v.id == CategoryID.id) {
      v = CategoryID;
    }
  });
};
export const Delete_Category = (state, itemId) => {
  let Categories = state.Categories.filter((v) => v.id != itemId);
  state.Categories = Categories;
};
export const SET_Sections = (state, sections) => {
  state.sections = sections;
};
export const SET_SectionID = (state, SectionID) => {
  state.SectionID = SectionID;
};
export const Delete_Section = (state, itemsId) => {
  let sections = state.sections.filter((v) => v.id != itemsId);
  state.sections = sections;
};
export const SET_Brands = (state, Brands) => {
  state.Brands = Brands;
};
export const SET_BrandID = (state, BrandID) => {
  state.BrandID = BrandID;
};
export const Delete_Brand = (state, itemsId) => {
  let Brands = state.Brands.filter((v) => v.id != itemsId);
  state.Brands = Brands;
};
export const SET_Products = (state, Product) => {
  state.Product = Product;
};
export const SET_ProductID = (state, ProductID) => {
  state.ProductID = ProductID;
};
export const SET_Custome = (state, Custome) => {
  state.Custome = Custome;
};
//
