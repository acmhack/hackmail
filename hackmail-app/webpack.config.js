import Dotenv from 'dotenv-webpack';

export const plugins = [
    new Dotenv(),
    "@babel/plugin-syntax-top-level-await"
];
export const experiments = {
    topLevelAwait: true
};