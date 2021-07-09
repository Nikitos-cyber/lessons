/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_scrollLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollLink */ \"./src/modules/scrollLink.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_visitPhoto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/visitPhoto */ \"./src/modules/visitPhoto.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_connect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/connect */ \"./src/modules/connect.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n'user strict';\n\n\n\n\n\n\n\n\n\n\n // Timer \n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('01 july 2022'); // Меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); //popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_scrollLink__WEBPACK_IMPORTED_MODULE_3__.default)(); //Табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__.default)(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_visitPhoto__WEBPACK_IMPORTED_MODULE_6__.default)(); //Калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_connect__WEBPACK_IMPORTED_MODULE_8__.default)(); // send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__.default)();\n\n//# sourceURL=webpack://prioject/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcSquare = document.querySelector('.calc-square'),\n      calcBlock = document.querySelector('.calc-block'),\n      calcType = calcBlock.querySelector('.calc-type'),\n      calcCount = calcBlock.querySelector('.calc-count'),\n      calcDay = calcBlock.querySelector('.calc-day'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('.calc-type, .calc-day , .calc-count , .calc-square')) {\n      countSum();\n    }\n  });\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('.calc-square, .calc-count, .calc-day')) {\n      target.value = target.value.replace(/\\D/, '');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://prioject/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/connect.js":
/*!********************************!*\
  !*** ./src/modules/connect.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar connect = function connect() {\n  var wrapConnect = document.getElementById('connect');\n  var phone = document.getElementById('form2-phone');\n  var name = document.getElementById('form2-name');\n  var email = document.getElementById('form2-email');\n  var message = document.getElementById('form2-message');\n  wrapConnect.addEventListener('input', function (event) {\n    var target = event.target; //   if(target.matches('#form2-name')){\n    //     let text = target.value;\n    //     target.value = text.replace(/[^а-я\\-\\' ']/,'');\n    // }\n    // if(target.matches('#form2-message')){\n    //     let text = target.value;\n    //     target.value = text.replace(/[^а-я\\-\\' ']/,'');\n    // }\n    //   if(target.matches('#form2-email')){\n    //     let text = target.value;\n    //      target.value = text.replace(/[^a-z#\\@\\-_\\.!`\\*']/i,' ');\n    // }\n    // if(target.matches('#form2-phone')){\n    //  let text = target.value;\n    //      target.value = text.replace(/\\D|\\(|\\)|\\-/i,'');\n    // }\n  });\n  email.addEventListener('blur', function (event) {\n    email.value = email.value.replace(/[' ']{2,}/gi, ' ');\n    email.value = email.value.replace(/^[-]+|^\\s|[-]+$|\\s$/gi, '');\n    email.value = email.value.replace(/[-]+/gi, '-');\n  });\n  message.addEventListener('blur', function (event) {\n    message.value = message.value.replace(/[' ']{2,}/gi, ' ');\n    message.value = message.value.replace(/^[-]+|^\\s|[-]+$|\\s$/gi, '');\n    message.value = message.value.replace(/[-]+/gi, '-');\n  });\n  name.addEventListener('blur', function (event) {\n    name.value = name.value.replace(/[' ']{2,}/gi, ' ');\n    name.value = name.value.replace(/^[-]+|^\\s|[-]+$|\\s$/gi, '');\n    name.value = name.value.replace(/[-]+/gi, '-');\n    var k = name.value.match(/\\B[а-я]+\\s*/gi);\n    var str = ''; // k.forEach((elem,i)=>{\n    //   let upper = elem.substr(0,1).toUpperCase();\n    //   let lower = elem.substr(1);\n    //   str = str + upper + lower + ' ';\n    // });\n    // name.value = str;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n\n//# sourceURL=webpack://prioject/./src/modules/connect.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.getElementById('timer-hours'),\n      timerMinuts = document.getElementById('timer-minutes'),\n      timerSeconds = document.getElementById('timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minuts = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n\n    function check() {\n      for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {\n        arr[_key] = arguments[_key];\n      }\n\n      arr.forEach(function (item, i, arr) {\n        var lenght = 0;\n        var val = item;\n\n        do {\n          lenght++;\n          val = val / 10;\n        } while (val >= 1);\n\n        if (lenght < 2) {\n          arr.splice(i, 1, '0' + item);\n        }\n      });\n      return arr[0];\n    }\n\n    seconds = check(seconds);\n    minuts = check(minuts);\n    hours = check(hours);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minuts: minuts,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining > 0) {\n      setInterval(function () {\n        timer = getTimeRemaining();\n        timerHours.textContent = timer.hours;\n        timerMinuts.textContent = timer.minuts;\n        timerSeconds.textContent = timer.seconds;\n      }, 1000);\n    } else {\n      timerHours.textContent = \"00\";\n      timerMinuts.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n    }\n  }\n\n  updateClock();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://prioject/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/scrollLink.js":
/*!***********************************!*\
  !*** ./src/modules/scrollLink.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollLink = function scrollLink(val) {\n  var linkScroll = document.querySelector('main>a'),\n      menu = document.querySelector('menu'),\n      menuItems = menu.querySelectorAll('ul>li'),\n      portfolio = document.querySelector('#portfolio'),\n      serviceBlock = document.querySelector('#service-block'),\n      calc = document.querySelector('#calc'),\n      command = document.querySelector('#command'),\n      connect = document.querySelector('#connect');\n  var doc = document.documentElement;\n  var scroll = 0;\n  console.log(scroll);\n  var i = 0;\n  var idAnimateScroll;\n\n  var animateScroll = function animateScroll(val) {\n    i += 7;\n    idAnimateScroll = setTimeout(animateScroll, 1, val);\n\n    if (i < val) {\n      doc.scrollTop = i;\n      console.log(i);\n    } else {\n      clearTimeout(idAnimateScroll);\n      i = 0;\n    }\n  };\n\n  linkScroll.addEventListener('click', function () {\n    idAnimateScroll = setTimeout(animateScroll, 1, 850);\n    scroll = doc.scrollTop;\n    i = scroll;\n  });\n  menuItems[0].addEventListener('click', function () {\n    idAnimateScroll = setTimeout(animateScroll, 1, serviceBlock.getBoundingClientRect().top);\n    scroll = doc.scrollTop;\n    i = scroll;\n  });\n  menuItems[1].addEventListener('click', function () {\n    idAnimateScroll = setTimeout(animateScroll, 1, portfolio.getBoundingClientRect().top);\n    scroll = doc.scrollTop;\n    i = scroll;\n  });\n  menuItems[2].addEventListener('click', function () {\n    idAnimateScroll = setTimeout(animateScroll, 1, calc.getBoundingClientRect().top);\n    scroll = doc.scrollTop;\n    i = scroll;\n  });\n  menuItems[3].addEventListener('click', function () {\n    idAnimateScroll = setTimeout(animateScroll, 1, command.getBoundingClientRect().top);\n    scroll = doc.scrollTop;\n    i = scroll;\n  });\n  menuItems[4].addEventListener('click', function () {\n    idAnimateScroll = setTimeout(animateScroll, 1, connect.getBoundingClientRect().top);\n    scroll = doc.scrollTop;\n    i = scroll;\n  });\n  console.log(linkScroll);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollLink);\n\n//# sourceURL=webpack://prioject/./src/modules/scrollLink.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то  пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var form = document.getElementById('form1');\n  var form2 = document.getElementById('form2');\n  var error = new Set();\n\n  var formCreate = function formCreate(form) {\n    var statusMessage = document.createElement('div');\n    statusMessage.style.cssText = 'font-size:2rem;';\n\n    var elementsForm = _toConsumableArray(form.elements).filter(function (item) {\n      return item.tagName.toLowerCase() === 'input';\n    });\n\n    var isValid = function isValid(elem) {\n      if (elem.value.trim() === '') {\n        return false;\n      }\n\n      if (elem.id === 'form2-message') {\n        return /^[а-я\\d\\' '\\,\\.\\?\\!]+$/i.test(elem.value);\n      }\n\n      if (elem.id === 'form1-name' || elem.id === 'form2-name') {\n        return /^[^\\w]+$/i.test(elem.value);\n      }\n\n      if (elem.type === 'email') {\n        console.log(elem.type);\n        return /^\\w+$/.test(elem.value);\n      }\n\n      if (elem.type === 'tel') {\n        return /^\\+?\\d+$/.test(elem.value);\n      }\n\n      return false;\n    };\n\n    var checkIt = function checkIt(event) {\n      var target = event.target;\n\n      if (isValid(target)) {\n        target.style.border = 'solid green';\n        error[\"delete\"](target);\n      } else {\n        target.style.border = 'solid red';\n        error.add(target);\n      }\n    };\n\n    elementsForm.forEach(function (item) {\n      item.addEventListener('change', checkIt);\n    });\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      form.append(statusMessage);\n      var formData = new FormData(form);\n      var body = {};\n\n      var _iterator = _createForOfIteratorHelper(formData.entries()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var val = _step.value;\n          body[val[0]] = val[1];\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      if (error.size === 0) {\n        statusMessage.textContent = loadMessage;\n        postData(body).then(function (response) {\n          if (response.status !== 200) {\n            throw new Error('status network not 200');\n          }\n\n          statusMessage.textContent = successMessage;\n        })[\"catch\"](function (error) {\n          statusMessage.textContent = errorMessage;\n          console.error(error);\n        });\n      }\n\n      var clearInput = function clearInput(form) {\n        var input = form.querySelectorAll('input');\n        input.forEach(function (elem) {\n          if (elem.value) {\n            console.log(elem.value);\n            elem.value = '';\n            elem.style.border = 'none';\n          }\n        });\n      };\n\n      clearInput(form);\n    });\n  };\n\n  formCreate(form);\n  formCreate(form2);\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'aplication/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://prioject/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      btn = document.querySelectorAll('.portfolio-btn'),\n      slider = document.querySelector('.portfolio-content'),\n      listDot = document.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      interval;\n  var dot;\n\n  var addDot = function addDot() {\n    dot = document.querySelectorAll('.dot');\n\n    if (dot.length < slide.length) {\n      listDot.insertAdjacentHTML('afterbegin', '<li class=\"dot\"></li>');\n      addDot();\n    }\n  };\n\n  addDot();\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  slider.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('#arrow-right , #arrow-left, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, i, arr) {\n        if (target === elem) {\n          currentSlide = i;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(dot, currentSlide, 'dot-active');\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n  });\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(dot, currentSlide, 'dot-active');\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://prioject/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContantains = function toggleTabContantains(index) {\n    tabContent.forEach(function (item, i) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    });\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContantains(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://prioject/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.menu'),\n      menu = document.querySelector('menu'),\n      closeBtn = document.querySelector('.close-btn'),\n      menuItems = menu.querySelectorAll('ul>li'),\n      activeMenu = document.querySelector('.active-menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target) {\n      while (target !== menuItems || target !== btnMenu || target !== closeBtn) {\n        if (menu.classList.contains('active-menu')) {\n          if (!target.classList.contains('active-menu')) {\n            handlerMenu();\n            return;\n          }\n        } else if (target.classList.contains('menu')) {\n          handlerMenu();\n          return;\n        } else if (target.tagName === 'HTML') {\n          return;\n        }\n\n        if (target.classList.contains('close-btn')) {\n          handlerMenu();\n          return;\n        }\n\n        if (target.tagName === 'main') {\n          if (target.tagName === 'LI') {\n            handlerMenu();\n            return;\n          }\n        }\n\n        target = target.parentNode;\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://prioject/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelector('.popup-content');\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  }); //Animate Popup\n\n  var i = 0;\n  var idAnimate;\n\n  var animatePopup = function animatePopup() {\n    idAnimate = requestAnimationFrame(animatePopup);\n    i++;\n\n    if (i < 100) {\n      popupContent.style.top = i + 'px';\n    } else {\n      cancelAnimationFrame(idAnimate);\n    }\n  };\n\n  popupBtn.forEach(function (element) {\n    element.addEventListener('click', function () {\n      popup.style.display = 'block';\n\n      if (document.documentElement.clientWidth > 768) {\n        idAnimate = requestAnimationFrame(animatePopup);\n        togglePopup();\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://prioject/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/visitPhoto.js":
/*!***********************************!*\
  !*** ./src/modules/visitPhoto.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar visitPhoto = function visitPhoto() {\n  var wrap = document.getElementById('command');\n  wrap.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('.command__photo')) {\n      target.dataset.imgOne = target.src;\n      target.src = target.dataset.img;\n    }\n  });\n  wrap.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('.command__photo')) {\n      target.src = target.dataset.imgOne;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visitPhoto);\n\n//# sourceURL=webpack://prioject/./src/modules/visitPhoto.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;