module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Curso de Vue.js ADC',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Material de apoyo para el curso',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'og:image', content: 'https://imagesadc.s3.amazonaws.com/eventos/VueLaptop.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Vuejs Core',
        link: '/core/',
      },
      {
        text: 'Vue CLI',
        link: '/cli/',
      },
      {
        text: 'Vuex',
        link: '/vuex/',
      },
      {
        text: 'Recursos',
        link: '/config/'
      },
      {
        text: 'ADC',
        link: 'http://ascodecodigo.com/'
      }
    ],
    sidebar: {
      '/core/': [
        {
          title: 'Vue.js Core',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/vuex/': [
        {
          title: 'Vuex',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
