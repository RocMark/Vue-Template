module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_normalize.scss";
          @import "@/scss/_base.scss";
          @import "@/scss/_extend.scss";
        `,
      },
    },
  },
}
