module.exports = function(api) {
 // api.cache.using(() => process.env.NODE_ENV);
  const isTest = api.env('test');
  return {
    plugins: [],
    presets: [
      [
        "@babel/env",
        {
          corejs: 3,
          modules:  isTest ? "commonjs" :  false,
          targets: {
            node: "current"
          },
          useBuiltIns: "usage"
        }
      ],
      "@babel/typescript"
    ]
  };
};
