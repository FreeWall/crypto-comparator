// @ts-check

/**
 * @param {string} stage
 * @returns {import('next').NextConfig}
 */
module.exports = function next(stage) {
  return {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      config.experiments.topLevelAwait = true;
      return config;
    },
  };
};
