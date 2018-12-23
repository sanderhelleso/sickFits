webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./components/Signup.js":
/*!******************************!*\
  !*** ./components/Signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "C:\\wamp\\www\\sickFits\\frontend\\components\\Signup.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {\n        signup(email: $email, name: $name, password: $password) {\n            id\n            email\n            name\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Signup =
/*#__PURE__*/
function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      email: '',
      name: '',
      password: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: SIGNUP_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, function (signup, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
          method: "POST",
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            signup();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, "Sign Up for An Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "Email", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          value: _this2.state.email,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "Name", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "name",
          placeholder: "name",
          value: _this2.state.name,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "Password", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          value: _this2.state.password,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "Sign Up!")));
      });
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./node_modules/graphql/execution/execute.mjs":
false,

/***/ "./node_modules/graphql/execution/index.mjs":
false,

/***/ "./node_modules/graphql/execution/values.mjs":
false,

/***/ "./node_modules/graphql/graphql.mjs":
false,

/***/ "./node_modules/graphql/index.mjs":
false,

/***/ "./node_modules/graphql/jsutils/defineToJSON.mjs":
false,

/***/ "./node_modules/graphql/jsutils/find.mjs":
false,

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isFinite.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isInteger.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isInvalid.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isNullish.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isPromise.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/memoize3.mjs":
false,

/***/ "./node_modules/graphql/jsutils/objectValues.mjs":
false,

/***/ "./node_modules/graphql/jsutils/orList.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseForObject.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseReduce.mjs":
false,

/***/ "./node_modules/graphql/jsutils/quotedOrList.mjs":
false,

/***/ "./node_modules/graphql/jsutils/suggestionList.mjs":
false,

/***/ "./node_modules/graphql/language/index.mjs":
false,

/***/ "./node_modules/graphql/language/predicates.mjs":
false,

/***/ "./node_modules/graphql/subscription/index.mjs":
false,

/***/ "./node_modules/graphql/subscription/mapAsyncIterator.mjs":
false,

/***/ "./node_modules/graphql/subscription/subscribe.mjs":
false,

/***/ "./node_modules/graphql/type/definition.mjs":
false,

/***/ "./node_modules/graphql/type/directives.mjs":
false,

/***/ "./node_modules/graphql/type/index.mjs":
false,

/***/ "./node_modules/graphql/type/introspection.mjs":
false,

/***/ "./node_modules/graphql/type/scalars.mjs":
false,

/***/ "./node_modules/graphql/type/schema.mjs":
false,

/***/ "./node_modules/graphql/type/validate.mjs":
false,

/***/ "./node_modules/graphql/utilities/TypeInfo.mjs":
false,

/***/ "./node_modules/graphql/utilities/assertValidName.mjs":
false,

/***/ "./node_modules/graphql/utilities/astFromValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildASTSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildClientSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/coerceValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/concatAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/extendSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/findBreakingChanges.mjs":
false,

/***/ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationRootType.mjs":
false,

/***/ "./node_modules/graphql/utilities/index.mjs":
false,

/***/ "./node_modules/graphql/utilities/introspectionFromSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/introspectionQuery.mjs":
false,

/***/ "./node_modules/graphql/utilities/isValidJSValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/isValidLiteralValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/schemaPrinter.mjs":
false,

/***/ "./node_modules/graphql/utilities/separateOperations.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeComparators.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
false,

/***/ "./node_modules/graphql/validation/ValidationContext.mjs":
false,

/***/ "./node_modules/graphql/validation/index.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ExecutableDefinitions.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FieldsOnCorrectType.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypes.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownArgumentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownDirectives.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownFragmentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownTypeNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneAnonymousOperation.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneSchemaDefinition.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoFragmentCycles.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUndefinedVariables.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedFragments.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedVariables.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ProvidedRequiredArguments.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ScalarLeafs.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/SingleFieldSubscriptions.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueArgumentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocation.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueFragmentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueInputFieldNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueOperationNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueVariableNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ValuesOfCorrectType.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesAreInputTypes.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesInAllowedPosition.mjs":
false,

/***/ "./node_modules/graphql/validation/specifiedRules.mjs":
false,

/***/ "./node_modules/graphql/validation/validate.mjs":
false,

/***/ "./node_modules/iterall/index.mjs":
false

})
//# sourceMappingURL=signup.js.1379ff6f541e4f8381db.hot-update.js.map