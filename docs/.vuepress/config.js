module.exports = {
  base: '/ui-element-demo/',
  title: 'xue-vue',
  description: '一个UI组件库',
  themeConfig: {
    // search: false,
    repo: '/sxfshdf/ui-element-demo',
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-start/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
        ]
      }
    ]
  },
}