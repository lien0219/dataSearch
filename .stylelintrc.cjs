module.exports = {
  extends: [
    'stylelint-config-standard', 
    'stylelint-config-html/vue',
    'stylelint-config-standard-scss', 
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
    'stylelint-config-prettier', 
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    'value-keyword-case': null, 
    'no-descending-specificity': null, 
    'function-url-quotes': 'always', 
    'no-empty-source': null, 
    'selector-class-pattern': null, 
    'property-no-unknown': null, 
    'block-opening-brace-space-before': 'always', 
    'value-no-vendor-prefix': null, 
    'property-no-vendor-prefix': null, 
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
}
