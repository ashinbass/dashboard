import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // 元件名稱必須是多字（kebab-case 或 PascalCase）的要求
    'vue/multi-word-component-names': 'off',
    // 禁止多個根元素
    'vue/no-multiple-template-root': 'off',
    // 禁止未定義的組件
    'vue/no-undef-components': 'off',
    'vue/no-undef-properties': 'off',
    // HTML 自閉合標籤
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',      // <img /> <br />
          normal: 'always',    // <div />
          component: 'always'  // <MyComponent />
        },
        svg: 'always',
        math: 'always'
      }
    ],
  }
})
