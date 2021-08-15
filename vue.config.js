module.exports = {
  // publicPath: process.env.PUBLIC_URL || "/",
  publicPath:
    process.env.NODE_ENV === "production" ? "/FrontEndDashboard/" : "/",
};
