"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnglishText =
/*#__PURE__*/
function () {
  function EnglishText(text) {
    _classCallCheck(this, EnglishText);

    this.text = text;
    this.a = ".-";
    this.b = "-...";
    this.c = "-.-.";
    this.d = "-..";
    this.e = ".";
    this.f = "..-.";
    this.g = "--.";
    this.h = "....";
    this.i = "..";
    this.j = ".---";
    this.k = "-.-";
    this.l = ".-..";
    this.m = "--";
    this.n = "-.";
    this.o = "---";
    this.p = ".--.";
    this.q = "--.-";
    this.r = ".-.";
    this.s = "...";
    this.t = "-";
    this.u = "..-";
    this.v = "...-";
    this.w = ".--";
    this.x = "-..-";
    this.y = "-.--";
    this.z = "--..";
    this.fullStop = ".-.-.-";
  }

  _createClass(EnglishText, [{
    key: "getMorseTranslation",
    value: function getMorseTranslation() {
      var _this = this;

      var englishTextArr = this.text.split(' ');
      var morseTextArr = englishTextArr.map(function (englishWord) {
        var morseWord = [];

        for (var i = 0; i < englishWord.length; i++) {
          var letter = englishWord.charAt(i);

          if (letter === ".") {
            morseWord.push(_this.fullStop);
          } else {
            morseWord.push(_this[letter]);
          }
        }

        return morseWord.join(' ');
      });
      return morseTextArr.join(' / ');
    }
  }]);

  return EnglishText;
}();

var MorseText =
/*#__PURE__*/
function (_EnglishText) {
  _inherits(MorseText, _EnglishText);

  function MorseText(text) {
    _classCallCheck(this, MorseText);

    return _possibleConstructorReturn(this, _getPrototypeOf(MorseText).call(this, text));
  }

  _createClass(MorseText, [{
    key: "getEnglishTranslation",
    value: function getEnglishTranslation() {
      var _this2 = this;

      var morseWordsArr = this.text.split(' / ');
      var englishWordsArr = morseWordsArr.map(function (morseWord) {
        var morseLetters = morseWord.split(' ');
        var englishLetters = morseLetters.map(function (morseLetter) {
          if (morseLetter === ".-.-.-") {
            return ".";
          } else {
            return Object.keys(_this2).find(function (englishLetter) {
              return _this2[englishLetter] === morseLetter;
            });
          }
        });
        return englishLetters.join('');
      });
      return englishWordsArr.join(" ");
    }
  }]);

  return MorseText;
}(EnglishText);

document.addEventListener('DOMContentLoaded', function () {
  var englishText = document.querySelector("#english-text");
  var morseText = document.querySelector("#morse-text");
  englishText.addEventListener("keyup", function (event) {
    var englishSentence = new EnglishText("".concat(englishText.value));
    morseText.value = englishSentence.getMorseTranslation();
  });
  morseText.addEventListener("keyup", function (event) {
    var morseSentence = new MorseText("".concat(morseText.value));
    englishText.value = morseSentence.getEnglishTranslation();
  });
});