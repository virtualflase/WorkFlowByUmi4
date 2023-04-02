module.exports = {
  trailingComma: 'all',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
  printWidth: 120, // 超过最大值换行
  tabWidth: 4, // 缩进字节数
  useTabs: false, // 缩进不使用tab，使用空格
  semi: true, // 代码结尾的加分号
  singleQuote: true, // 使用单引号代替双引号
  'spaced-comment': 2, // 在注释中 // 或 /* 使用一致的空格
  proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  htmlWhitespaceSensitivity: 'ignore',
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  quoteProps: 'preserve' //对象的属性只有需要时才添加引号 <as-needed | consistent | preserve>
};
