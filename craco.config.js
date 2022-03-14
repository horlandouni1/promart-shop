const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@style": path.resolve(__dirname, "src/styles"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@logos": path.resolve(__dirname, "src/assets/logos"),
      "@So_on": path.resolve(__dirname, "src/so_on"),
    },
  },
};
