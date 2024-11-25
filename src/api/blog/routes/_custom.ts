export default {
  router: [
    {
      method: "GET",
      path: "/blog/:slug",
      handler: "blog.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
