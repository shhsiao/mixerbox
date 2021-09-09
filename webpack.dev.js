import common from './webpack.common.js';
import { merge } from 'webpack-merge';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 4000,
    open: true,
    hot: true,
  },
});

