export default {
  routes: [
    {
      method: "GET",
      path: "/blogs/:slug",
      handler: "blog.findOne",
    },
    {
      method: "GET",
      path: "/blogs/filter/:search",
      handler: "blog.customSearch",
    },
  ],
};
