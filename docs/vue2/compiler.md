## 编译器的定义
1. 在入口文件`src/platforms/web/entry-runtime-with-compiler.js`中，重新定义`$mount`方法
```js
import { compileToFunctions } from './compiler/index'

const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (){
  const options = this.$options
  if (!options.render) {
    let template = options.template
    if (template) {
      const { render, staticRenderFns } = compileToFunctions()
      options.render = render
      options.staticRenderFns = staticRenderFns
    }
  }
  return mount.call(this, el, hydrating)
}
```
2. 编译器`compileToFunctions`来自于`src/platforms/web//compiler/index.js`
```js
import { createCompiler } from 'compiler/index'
const { compile, compileToFunctions } = createCompiler(baseOptions)
```
3. `createCompiler`函数返回了编译器`compileToFunctions`，`createCompiler`定义于`src/compiler/index.js`

```js
import { createCompilerCreator } from './create-compiler'
export const createCompiler = createCompilerCreator(function baseCompile () {})
```
4. `createCompiler`函数是由`createCompilerCreator`函数创建，`createCompilerCreator`函数定义于`src/compiler/create-compiler.js`
```js
import { createCompileToFunctionFn } from './to-function'

export function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (template, options) {
      const compiled = baseCompile()
      return compiled
    }
    return {
      compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

```
总结：执行`createCompilerCreator`函数返回`createCompiler`，执行`createCompiler`返回`compileToFunctions`，`baseCompile`就是编译器的定义，位于`src/compiler/index.js`

## 编译器的执行流程
1. 编译模版生成`ast`
2. 优化`ast`
3. 根据`ast`生成代码
```js
function baseCompile (template, options) {
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}
```
## `ast`的生成
1. `parse`函数定义于`src/compiler/parser/index.js`
```js
/**
 * Convert HTML string to AST.
 */
export function parse (template, options) {
  let root
  parseHTML(template, {
    warn,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start (tag, attrs, unary, start, end) {},
    end (tag, start, end) {},
    chars (text: string, start: number, end: number) {},
    comment (text: string, start, end) {}
  })
  return root
}
```
2. `parse`函数内部调用了`parseHTML`，`parseHTML`定义于`src/compiler/parser/html-parser.js`
```js
export function parseHTML (html, options) {
  let index = 0
  let last
  while (html) {
    last = html

    if (html === last) {
      break
    }
  }
}
```
3. 编不下去了，硬啃`parseHTML`就完事儿了