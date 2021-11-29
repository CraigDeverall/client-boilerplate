module.exports = (api) => {
    api.cache(true);
    const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];
    const plugins = ['babel-plugin-styled-components', '@babel/plugin-transform-runtime'];
    return {
        presets, plugins
    }
}

