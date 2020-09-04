var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Ripple=_interopRequireDefault(require("../../Ripple/Ripple"));var _CardContent=_interopRequireDefault(require("./CardContent.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Card/CardContent/CardContent.js";var CardContent=function(_Component){(0,_inherits2.default)(CardContent,_Component);function CardContent(){(0,_classCallCheck2.default)(this,CardContent);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(CardContent).apply(this,arguments));}(0,_createClass2.default)(CardContent,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,style=_this$props.style,onPress=_this$props.onPress,rippleProps=_this$props.rippleProps;if(onPress){return _react.default.createElement(_Ripple.default,(0,_extends2.default)({style:[{padding:40},style],onPress:onPress},rippleProps,{__source:{fileName:_jsxFileName,lineNumber:20}}),children);}return _react.default.createElement(_reactNative.View,{style:[_CardContent.default.contentContainer,style],__source:{fileName:_jsxFileName,lineNumber:29}},children);}}]);return CardContent;}(_react.Component);(0,_defineProperty2.default)(CardContent,"propTypes",{children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),rippleProps:_propTypes.default.object,onPress:_propTypes.default.func});var _default=(0,_withTheme.default)(CardContent);exports.default=_default;