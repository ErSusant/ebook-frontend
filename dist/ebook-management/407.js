"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[407],{

/***/ 6407:
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/focus-key-manager-C1rAQJ5z.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FocusKeyManager)
/* harmony export */ });
/* harmony import */ var _list_key_manager_CyOIXo8P_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-key-manager-CyOIXo8P.mjs */ 3381);

class FocusKeyManager extends _list_key_manager_CyOIXo8P_mjs__WEBPACK_IMPORTED_MODULE_0__.L {
  _origin = 'program';
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
}

//# sourceMappingURL=focus-key-manager-C1rAQJ5z.mjs.map

/***/ }),

/***/ 7336:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/keycodes.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   ALT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   APOSTROPHE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aX),
/* harmony export */   AT_SIGN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a1),
/* harmony export */   B: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a2),
/* harmony export */   BACKSLASH: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a_),
/* harmony export */   BACKSPACE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   C: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a3),
/* harmony export */   CAPS_LOCK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a$),
/* harmony export */   COMMA: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   CONTEXT_MENU: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   CONTROL: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   D: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a4),
/* harmony export */   DASH: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aV),
/* harmony export */   DELETE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   DOWN_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   E: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a5),
/* harmony export */   EIGHT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   END: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   ENTER: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   EQUALS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aU),
/* harmony export */   ESCAPE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   F: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a6),
/* harmony export */   F1: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   F10: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   F11: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   F12: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   F2: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   F3: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   F4: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   F5: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   F6: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   F7: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   F8: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   F9: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   FF_EQUALS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   FF_MINUS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aL),
/* harmony export */   FF_MUTE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aP),
/* harmony export */   FF_SEMICOLON: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   FF_VOLUME_DOWN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aQ),
/* harmony export */   FF_VOLUME_UP: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aS),
/* harmony export */   FIRST_MEDIA: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aK),
/* harmony export */   FIVE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   FOUR: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   G: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a7),
/* harmony export */   H: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a8),
/* harmony export */   HOME: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   I: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a9),
/* harmony export */   INSERT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   J: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   K: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ab),
/* harmony export */   L: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ac),
/* harmony export */   LAST_MEDIA: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aR),
/* harmony export */   LEFT_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   M: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ad),
/* harmony export */   MAC_ENTER: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   MAC_META: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aq),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ar),
/* harmony export */   META: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   MUTE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aM),
/* harmony export */   N: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ae),
/* harmony export */   NINE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   NUMPAD_DIVIDE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aH),
/* harmony export */   NUMPAD_EIGHT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aB),
/* harmony export */   NUMPAD_FIVE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ay),
/* harmony export */   NUMPAD_FOUR: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ax),
/* harmony export */   NUMPAD_MINUS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aF),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aD),
/* harmony export */   NUMPAD_NINE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aC),
/* harmony export */   NUMPAD_ONE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.au),
/* harmony export */   NUMPAD_PERIOD: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aG),
/* harmony export */   NUMPAD_PLUS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aE),
/* harmony export */   NUMPAD_SEVEN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aA),
/* harmony export */   NUMPAD_SIX: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.az),
/* harmony export */   NUMPAD_THREE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aw),
/* harmony export */   NUMPAD_TWO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.av),
/* harmony export */   NUMPAD_ZERO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.at),
/* harmony export */   NUM_CENTER: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   NUM_LOCK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aI),
/* harmony export */   O: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.af),
/* harmony export */   ONE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aZ),
/* harmony export */   P: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ag),
/* harmony export */   PAGE_DOWN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   PAGE_UP: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   PAUSE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   PERIOD: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   PLUS_SIGN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   PRINT_SCREEN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   Q: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ah),
/* harmony export */   QUESTION_MARK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a0),
/* harmony export */   R: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ai),
/* harmony export */   RIGHT_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   S: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aj),
/* harmony export */   SCROLL_LOCK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aJ),
/* harmony export */   SEMICOLON: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aT),
/* harmony export */   SEVEN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   SHIFT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   SINGLE_QUOTE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.b0),
/* harmony export */   SIX: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   SLASH: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aW),
/* harmony export */   SPACE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   T: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ak),
/* harmony export */   TAB: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   THREE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   TILDE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aY),
/* harmony export */   TWO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   U: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.al),
/* harmony export */   UP_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   V: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.am),
/* harmony export */   VOLUME_DOWN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aN),
/* harmony export */   VOLUME_UP: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aO),
/* harmony export */   W: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.an),
/* harmony export */   X: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ao),
/* harmony export */   Y: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ap),
/* harmony export */   Z: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   ZERO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   hasModifierKey: () => (/* binding */ hasModifierKey)
/* harmony export */ });
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 7035);


/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

//# sourceMappingURL=keycodes.mjs.map

/***/ }),

/***/ 3381:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/list-key-manager-CyOIXo8P.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ListKeyManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var _typeahead_9ZW4Dtsf_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeahead-9ZW4Dtsf.mjs */ 2774);
/* harmony import */ var _keycodes_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keycodes.mjs */ 7336);
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 7035);






/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
class ListKeyManager {
  _items;
  _activeItemIndex = -1;
  _activeItem = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  _wrap = false;
  _typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
  _itemChangesSubscription;
  _vertical = true;
  _horizontal;
  _allowedModifierKeys = [];
  _homeAndEnd = false;
  _pageUpAndDown = {
    enabled: false,
    delta: 10
  };
  _effectRef;
  _typeahead;
  /**
   * Predicate function that can be used to check whether an item should be skipped
   * by the key manager. By default, disabled items are skipped.
   */
  _skipPredicateFn = item => item.disabled;
  constructor(_items, injector) {
    this._items = _items;
    // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).
    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe(newItems => this._itemsChanged(newItems.toArray()));
    } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(_items)) {
      if (!injector && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('ListKeyManager constructed with a signal must receive an injector');
      }
      this._effectRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => this._itemsChanged(_items()), {
        injector
      });
    }
  }
  /**
   * Stream that emits any time the TAB key is pressed, so components can react
   * when focus is shifted off of the list.
   */
  tabOut = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  /** Stream that emits whenever the active item of the list manager changes. */
  change = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const items = this._getItemsArray();
      if (items.length > 0 && items.some(item => typeof item.getLabel !== 'function')) {
        throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new _typeahead_9ZW4Dtsf_mjs__WEBPACK_IMPORTED_MODULE_3__.T(items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.setActiveItem(item);
    });
    return this;
  }
  /** Cancels the current typeahead sequence. */
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  /**
   * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
   * respectively when the Page-Up or Page-Down key is pressed.
   * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
   * @param delta Whether pressing the Home or End key activates the first/last item.
   */
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem();
    this.updateActiveItem(item);
    if (this._activeItem() !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.T:
        this.tabOut.next();
        return;
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.D:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.U:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.R:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.L:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.H:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.E:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.a:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.P:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || (0,_keycodes_mjs__WEBPACK_IMPORTED_MODULE_5__.hasModifierKey)(event, 'shiftKey')) {
          this._typeahead?.handleKey(event);
        }
        // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */
  get activeItem() {
    return this._activeItem();
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  /** Sets the active item to the first enabled item in the list. */
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */
  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */
  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    // Explicitly check for `null` and `undefined` because other falsy values are valid.
    this._activeItem.set(activeItem == null ? null : activeItem);
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  /** Returns the items as an array. */
  _getItemsArray() {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(this._items)) {
      return this._items();
    }
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
  }
  /** Callback for when the items have changed. */
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    const activeItem = this._activeItem();
    if (activeItem) {
      const newIndex = newItems.indexOf(activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex) {
        this._activeItemIndex = newIndex;
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
}

//# sourceMappingURL=list-key-manager-CyOIXo8P.mjs.map

/***/ }),

/***/ 2774:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/typeahead-9ZW4Dtsf.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Typeahead)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8141);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 152);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5964);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6354);
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 7035);



const DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
/**
 * Selects items based on keyboard inputs. Implements the typeahead functionality of
 * `role="listbox"` or `role="tree"` and other related roles.
 */
class Typeahead {
  _letterKeyStream = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  _items = [];
  _selectedItemIndex = -1;
  /** Buffer for the letters that the user has pressed */
  _pressedLetters = [];
  _skipPredicateFn;
  _selectedItem = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  selectedItem = this._selectedItem;
  constructor(initialItems, config) {
    const typeAheadInterval = typeof config?.debounceInterval === 'number' ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && initialItems.length && initialItems.some(item => typeof item.getLabel !== 'function')) {
      throw new Error('KeyManager items in typeahead mode must implement the `getLabel` method.');
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
    // otherwise fall back to resolving alphanumeric characters via the keyCode.
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_1__.A && keyCode <= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_1__.Z || keyCode >= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_1__.b && keyCode <= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_1__.N) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Resets the currently stored sequence of typed letters. */
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.
    this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(typeAheadInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => this._pressedLetters.join('').toLocaleUpperCase())).subscribe(inputString => {
      // Start at 1 because we want to start searching at the item immediately
      // following the current active item.
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
}

//# sourceMappingURL=typeahead-9ZW4Dtsf.mjs.map

/***/ })

}]);