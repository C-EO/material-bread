var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Ripple/Ripple.stories.js";var _default=(0,_storiesOf.storiesOf)('Components|Ripple',module).addParameters({jest:['Ripple']}).add('from click',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:13}},_react.default.createElement(_Header.default,{title:'Ripple from where it was clicked',__source:{fileName:_jsxFileName,lineNumber:14}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap'},__source:{fileName:_jsxFileName,lineNumber:15}},_react.default.createElement(_.Ripple,{rippleColor:'blue',style:{width:180,height:250,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'black',borderRadius:5},__source:{fileName:_jsxFileName,lineNumber:16}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:27}},"Click Me")),_react.default.createElement(_.Ripple,{style:{width:200,height:200,marginLeft:40},__source:{fileName:_jsxFileName,lineNumber:29}},_react.default.createElement(_.Card,{shadow:4,style:{width:200,height:200,justifyContent:'center',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:30}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:38}},"Click Me")))),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap',marginTop:40},__source:{fileName:_jsxFileName,lineNumber:42}},_react.default.createElement(_.Ripple,{rippleColor:'#E91E63',rippleContainerBorderRadius:100,style:{width:100,height:100,justifyContent:'center',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:43}},_react.default.createElement(_.Avatar,{type:"icon",content:"add",size:48,color:'#E91E63',contentColor:'white',__source:{fileName:_jsxFileName,lineNumber:52}})),_react.default.createElement(_.Ripple,{rippleColor:'#9C27B0',style:{width:300,height:200,marginLeft:40,justifyContent:'center',alignItems:'center'},rippleContainerBorderRadius:100,__source:{fileName:_jsxFileName,lineNumber:60}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:70}},"Massive Button"))));}).add('from center',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:76}},_react.default.createElement(_Header.default,{title:'Ripple form center',__source:{fileName:_jsxFileName,lineNumber:77}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap'},__source:{fileName:_jsxFileName,lineNumber:78}},_react.default.createElement(_.Ripple,{rippleColor:'blue',rippleCentered:true,style:{width:180,height:250,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'black',borderRadius:5},__source:{fileName:_jsxFileName,lineNumber:79}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:91}},"Click Me")),_react.default.createElement(_.Ripple,{rippleCentered:true,style:{width:200,height:200,marginLeft:40},__source:{fileName:_jsxFileName,lineNumber:93}},_react.default.createElement(_.Card,{shadow:4,style:{width:200,height:200,justifyContent:'center',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:96}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:104}},"Click Me")))));}).add('sequential',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:111}},_react.default.createElement(_Header.default,{title:'Sequential Ripple',__source:{fileName:_jsxFileName,lineNumber:112}}),_react.default.createElement(_reactNative.Text,{style:{marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:113}},"Try clicking quickly versus other demos"),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap'},__source:{fileName:_jsxFileName,lineNumber:116}},_react.default.createElement(_.Ripple,{rippleColor:'blue',rippleSequential:true,style:{width:180,height:250,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'black',borderRadius:5},__source:{fileName:_jsxFileName,lineNumber:117}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:129}},"Click Me")),_react.default.createElement(_.Ripple,{rippleCentered:true,rippleSequential:true,style:{width:200,height:200,marginLeft:40},__source:{fileName:_jsxFileName,lineNumber:131}},_react.default.createElement(_.Card,{shadow:4,style:{width:200,height:200,justifyContent:'center',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:135}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:143}},"Click Me")))));}).add('speed',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:150}},_react.default.createElement(_Header.default,{title:'Speed Ripple',__source:{fileName:_jsxFileName,lineNumber:151}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap'},__source:{fileName:_jsxFileName,lineNumber:153}},_react.default.createElement(_.Ripple,{rippleColor:'blue',rippleDuration:250,style:{width:180,height:250,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'black',borderRadius:5},__source:{fileName:_jsxFileName,lineNumber:154}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:166}},"Really fast")),_react.default.createElement(_.Ripple,{rippleCentered:true,rippleDuration:1000,style:{width:200,height:200,marginLeft:40},__source:{fileName:_jsxFileName,lineNumber:168}},_react.default.createElement(_.Card,{shadow:4,style:{width:200,height:200,justifyContent:'center',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:172}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:180}},"Really Slow")))));});exports.default=_default;