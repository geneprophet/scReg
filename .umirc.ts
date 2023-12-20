import { defineConfig } from 'umi';

export default defineConfig({
  // nodeModulesTransform: {
  //    type: 'none',
  // },
  title: 'scReg',
  base: '/screg',
  outputPath: './dist/screg',
  publicPath: '/screg/',
  routes: [
    {
      path: '/:type/:taskid',
      component: '@/pages/index',
    },
  ],
  fastRefresh: {},
});
