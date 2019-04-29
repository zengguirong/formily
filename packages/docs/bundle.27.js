(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{280:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}},86:function(e,t,n){"use strict";var a=n(221),r=(n(222),n(223)),o=(n(224),function(e){var t={exports:{}};e(t,t.exports);var n=t.exports.__esModule&&t.exports.default||t.exports;return"function"==typeof n?n:function(){return a.createElement("div",{},"Code snippet should export a component!")}}(function(e,t){var a=n(280),r=n(10);t.__esModule=!0,t.default=function(){return c.default.createElement("div",null,c.default.createElement(i.default,{actions:l,effects:function(e){e("onFieldChange","aa").subscribe(function(e){var t=e.value;l.setFieldState("bb",function(e){e.value=t})})},onSubmit:function(){return alert("submited")}},c.default.createElement(i.Field,{name:"aa",type:"string"}),c.default.createElement(i.Field,{name:"bb",type:"text"})),c.default.createElement("button",{onClick:function(){l.submit()}},"提交表单"))};var o=r(n(9)),c=r(n(0)),i=(r(n(2)),a(n(128)));(0,i.registerFormField)("string",(0,i.connect)()(function(e){return c.default.createElement("input",(0,o.default)({},e,{value:e.value||""}))})),(0,i.registerFormField)("text",(0,i.connect)()(function(e){return c.default.createElement("div",null,e.value||"")}));var l=(0,i.createFormActions)()})),c=function(){return a.createElement(a.Fragment,{},a.createElement("h1",{id:"createformactions",className:"react-demo-h1"},"createFormActions"),a.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),a.createElement("p",{className:"react-demo-p"},"声明表单 Actions，用于跨组件通讯，使用该方法创建的所有actions都存在调用时机限制，要求Form初始化完成之后才能调用，所以只能用在异步事件里调用"),a.createElement("h2",{id:"类型描述",className:"react-demo-h2"},"类型描述"),a.createElement(r,{code:"type createFormActions() : {\n    setFormState(callback : (state : formState)=>void) : Promise, //设置表单状态，目前只支持设置formState.values\n    getFormState(callback : (state : formState)=>any)), //获取表单状态\n    setFieldState(name : String,callback : (state : fieldState)=>void) : Promise, //设置表单字段状态，目前支持设置fieldState的所有属性\n    getFieldState(name : String[,callback : (state : fieldState)=>any)]) : any,//获取表单字段状态,callback为可选参数\n    reset() : void,//重置表单\n    submit() : Promise,//提交表单\n    validate() : Promise,//校验表单\n    getSchema(name : String) : Object //获取表单Schema\n}\n",justCode:!0,lang:"typescript"}),a.createElement("h2",{id:"formstate",className:"react-demo-h2"},"formState"),a.createElement("p",{className:"react-demo-p"},"用于描述整个表单状态的模型对象"),a.createElement(r,{code:"type formState {\n    values            : Object, //表单数据\n    valid             : Boolean, //是否合法\n    invalid           : Boolean, //是否不合法\n    errors            : Array<String>, //错误提示集合\n    pristine          : Boolean, //是否是原始态\n    dirty             : Boolean //是否存在变化\n}\n",justCode:!0,lang:"typescript"}),a.createElement("h2",{id:"fieldstate",className:"react-demo-h2"},"fieldState"),a.createElement("p",{className:"react-demo-p"},"用于描述表单字段状态的模型对象"),a.createElement(r,{code:"type fieldState {\n    value            : Any,//字段值\n    valid            : Boolean,//字段是否合法\n    invalid          : Boolean,//字段是否非法\n    visible          : Boolean,//字段显示状态\n    editable         : Boolean,//字段是否可编辑\n    loading          : Boolean,//字段加载状态\n    errors           : Array<String>,//字段错误消息集合\n    pristine         : Boolean,//字段是否处于原始态\n    initialValue     : Any,//字段初始值\n    name             : String,//字段路径\n    path,            : Array<String>//字段路径，数组形式\n    props            : Object,//字段附加属性\n    rules            : Array<Object | Function | String>//字段校验规则\n}\n",justCode:!0,lang:"typescript"}),a.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),a.createElement(r,{code:"import { createFormActions } from '@uform/react'\n",justCode:!0,lang:"javascript"}),a.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),a.createElement(r,{code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport SchemaForm, {\n  Field,\n  registerFormField,\n  connect,\n  createFormActions\n} from '@uform/react'\n\nregisterFormField(\n  'string',\n  connect()(props => <input {...props} value={props.value || ''} />)\n)\n\nregisterFormField(\n  'text',\n  connect()(props => <div>{props.value || ''}</div>)\n)\n\nconst actions = createFormActions()\n\nReactDOM.render(\n  <div>\n    <SchemaForm actions={actions} effects={($)=>{\n      $('onFieldChange','aa').subscribe(({value})=>{\n        actions.setFieldState('bb',state=>{\n          state.value = value\n        })\n      })\n    }} onSubmit={()=>alert('submited')}>\n      <Field name=\"aa\" type=\"string\" />\n      <Field name=\"bb\" type=\"text\"/>\n    </SchemaForm>\n    <button\n      onClick={() => {\n        actions.submit()\n      }}\n    >\n      提交表单\n    </button>\n  </div>,\n  document.getElementById('root')\n)\n",justCode:!1,lang:"jsx"},a.createElement(o,{})))};c.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=c}}]);
//# sourceMappingURL=bundle.27.js.map