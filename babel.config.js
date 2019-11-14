module.exports = function(api) {
 // api.cache.using(() => process.env.NODE_ENV);
  const isTest = api.env('test');
  return {
    plugins: [
      ["@babel/plugin-proposal-decorators", {legacy: true}],
    ],
    presets: [
      [
        "@babel/env",
        {
          debug: true,
          corejs: {
            version: 3, proposals: true,
          },
          modules:  isTest ? "commonjs" :  false,
          targets: {
            node: "11"
          },
          useBuiltIns: "usage"
        }
      ],
      "@babel/typescript"
    ]
  };
};
