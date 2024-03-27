(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/file-saver/dist/FileSaver.min.js
  var require_FileSaver_min = __commonJS({
    "node_modules/file-saver/dist/FileSaver.min.js"(exports, module) {
      (function(a, b) {
        if ("function" == typeof define && define.amd)
          define([], b);
        else if ("undefined" != typeof exports)
          b();
        else {
          b(), a.FileSaver = { exports: {} }.exports;
        }
      })(exports, function() {
        "use strict";
        function b(a2, b2) {
          return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
        }
        function c(a2, b2, c2) {
          var d2 = new XMLHttpRequest();
          d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
            g(d2.response, b2, c2);
          }, d2.onerror = function() {
            console.error("could not download file");
          }, d2.send();
        }
        function d(a2) {
          var b2 = new XMLHttpRequest();
          b2.open("HEAD", a2, false);
          try {
            b2.send();
          } catch (a3) {
          }
          return 200 <= b2.status && 299 >= b2.status;
        }
        function e(a2) {
          try {
            a2.dispatchEvent(new MouseEvent("click"));
          } catch (c2) {
            var b2 = document.createEvent("MouseEvents");
            b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
          }
        }
        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
        } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
          var i = f.URL || f.webkitURL, j = document.createElement("a");
          g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
            i.revokeObjectURL(j.href);
          }, 4e4), setTimeout(function() {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
          if (g2 = g2 || f2.name || "download", "string" != typeof f2)
            navigator.msSaveOrOpenBlob(b(f2, h), g2);
          else if (d(f2))
            c(f2, g2, h);
          else {
            var i = document.createElement("a");
            i.href = f2, i.target = "_blank", setTimeout(function() {
              e(i);
            });
          }
        } : function(b2, d2, e2, g2) {
          if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2)
            return c(b2, d2, e2);
          var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader();
            k.onloadend = function() {
              var a2 = k.result;
              a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
            }, k.readAsDataURL(b2);
          } else {
            var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
            g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
              l.revokeObjectURL(m);
            }, 4e4);
          }
        });
        f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
      });
    }
  });

  // node_modules/html2canvas/dist/html2canvas.js
  var require_html2canvas = __commonJS({
    "node_modules/html2canvas/dist/html2canvas.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.html2canvas = factory());
      })(exports, function() {
        "use strict";
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        function __extends(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var __assign = function() {
          __assign = Object.assign || function __assign2(t) {
            for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
              s = arguments[i2];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e2) {
                reject(e2);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e2) {
                reject(e2);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }
        function __generator(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f2, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f2)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e2) {
                op = [6, e2];
                y = 0;
              } finally {
                f2 = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        }
        function __spreadArray(to, from, pack2) {
          if (pack2 || arguments.length === 2)
            for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
              if (ar || !(i2 in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i2);
                ar[i2] = from[i2];
              }
            }
          return to.concat(ar || from);
        }
        var Bounds = (
          /** @class */
          function() {
            function Bounds2(left, top, width, height) {
              this.left = left;
              this.top = top;
              this.width = width;
              this.height = height;
            }
            Bounds2.prototype.add = function(x, y, w, h) {
              return new Bounds2(this.left + x, this.top + y, this.width + w, this.height + h);
            };
            Bounds2.fromClientRect = function(context, clientRect) {
              return new Bounds2(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
            };
            Bounds2.fromDOMRectList = function(context, domRectList) {
              var domRect = Array.from(domRectList).find(function(rect) {
                return rect.width !== 0;
              });
              return domRect ? new Bounds2(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) : Bounds2.EMPTY;
            };
            Bounds2.EMPTY = new Bounds2(0, 0, 0, 0);
            return Bounds2;
          }()
        );
        var parseBounds = function(context, node) {
          return Bounds.fromClientRect(context, node.getBoundingClientRect());
        };
        var parseDocumentSize = function(document2) {
          var body = document2.body;
          var documentElement = document2.documentElement;
          if (!body || !documentElement) {
            throw new Error("Unable to get document size");
          }
          var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
          var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
          return new Bounds(0, 0, width, height);
        };
        var toCodePoints$1 = function(str) {
          var codePoints = [];
          var i2 = 0;
          var length = str.length;
          while (i2 < length) {
            var value = str.charCodeAt(i2++);
            if (value >= 55296 && value <= 56319 && i2 < length) {
              var extra = str.charCodeAt(i2++);
              if ((extra & 64512) === 56320) {
                codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                codePoints.push(value);
                i2--;
              }
            } else {
              codePoints.push(value);
            }
          }
          return codePoints;
        };
        var fromCodePoint$1 = function() {
          var codePoints = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
          }
          if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
          }
          var length = codePoints.length;
          if (!length) {
            return "";
          }
          var codeUnits = [];
          var index = -1;
          var result = "";
          while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
            }
            if (index + 1 === length || codeUnits.length > 16384) {
              result += String.fromCharCode.apply(String, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        var chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$2 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
          lookup$2[chars$2.charCodeAt(i$2)] = i$2;
        }
        var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$1$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
          lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
        }
        var decode$1 = function(base642) {
          var bufferLength = base642.length * 0.75, len = base642.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
          if (base642[base642.length - 1] === "=") {
            bufferLength--;
            if (base642[base642.length - 2] === "=") {
              bufferLength--;
            }
          }
          var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
          var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
          for (i2 = 0; i2 < len; i2 += 4) {
            encoded1 = lookup$1$1[base642.charCodeAt(i2)];
            encoded2 = lookup$1$1[base642.charCodeAt(i2 + 1)];
            encoded3 = lookup$1$1[base642.charCodeAt(i2 + 2)];
            encoded4 = lookup$1$1[base642.charCodeAt(i2 + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }
          return buffer;
        };
        var polyUint16Array$1 = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 2) {
            bytes.push(buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var polyUint32Array$1 = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 4) {
            bytes.push(buffer[i2 + 3] << 24 | buffer[i2 + 2] << 16 | buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var UTRIE2_SHIFT_2$1 = 5;
        var UTRIE2_SHIFT_1$1 = 6 + 5;
        var UTRIE2_INDEX_SHIFT$1 = 2;
        var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
        var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 65536 >> UTRIE2_SHIFT_2$1;
        var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
        var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 1024 >> UTRIE2_SHIFT_2$1;
        var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 2048 >> 6;
        var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 65536 >> UTRIE2_SHIFT_1$1;
        var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
        var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
        var slice16$1 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };
        var slice32$1 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };
        var createTrieFromBase64$1 = function(base642, _byteLength) {
          var buffer = decode$1(base642);
          var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
          var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
          var headerLength = 24;
          var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
          var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
          return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie$1 = (
          /** @class */
          function() {
            function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
              this.initialValue = initialValue;
              this.errorValue = errorValue;
              this.highStart = highStart;
              this.highValueIndex = highValueIndex;
              this.index = index;
              this.data = data;
            }
            Trie2.prototype.get = function(codePoint) {
              var ix;
              if (codePoint >= 0) {
                if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
                  ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                  ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                  return this.data[ix];
                }
                if (codePoint <= 65535) {
                  ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 55296 >> UTRIE2_SHIFT_2$1)];
                  ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                  return this.data[ix];
                }
                if (codePoint < this.highStart) {
                  ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                  ix = this.index[ix];
                  ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
                  ix = this.index[ix];
                  ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                  return this.data[ix];
                }
                if (codePoint <= 1114111) {
                  return this.data[this.highValueIndex];
                }
              }
              return this.errorValue;
            };
            return Trie2;
          }()
        );
        var chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$3 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
          lookup$3[chars$3.charCodeAt(i$3)] = i$3;
        }
        var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==";
        var LETTER_NUMBER_MODIFIER = 50;
        var BK = 1;
        var CR$1 = 2;
        var LF$1 = 3;
        var CM = 4;
        var NL = 5;
        var WJ = 7;
        var ZW = 8;
        var GL = 9;
        var SP = 10;
        var ZWJ$1 = 11;
        var B2 = 12;
        var BA = 13;
        var BB = 14;
        var HY = 15;
        var CB = 16;
        var CL = 17;
        var CP = 18;
        var EX = 19;
        var IN = 20;
        var NS = 21;
        var OP = 22;
        var QU = 23;
        var IS = 24;
        var NU = 25;
        var PO = 26;
        var PR = 27;
        var SY = 28;
        var AI = 29;
        var AL = 30;
        var CJ = 31;
        var EB = 32;
        var EM = 33;
        var H2 = 34;
        var H3 = 35;
        var HL = 36;
        var ID = 37;
        var JL = 38;
        var JV = 39;
        var JT = 40;
        var RI$1 = 41;
        var SA = 42;
        var XX = 43;
        var ea_OP = [9001, 65288];
        var BREAK_MANDATORY = "!";
        var BREAK_NOT_ALLOWED$1 = "\xD7";
        var BREAK_ALLOWED$1 = "\xF7";
        var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
        var ALPHABETICS = [AL, HL];
        var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
        var SPACE$1 = [SP, ZW];
        var PREFIX_POSTFIX = [PR, PO];
        var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
        var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
        var HYPHEN = [HY, BA];
        var codePointsToCharacterClasses = function(codePoints, lineBreak2) {
          if (lineBreak2 === void 0) {
            lineBreak2 = "strict";
          }
          var types = [];
          var indices = [];
          var categories = [];
          codePoints.forEach(function(codePoint, index) {
            var classType = UnicodeTrie$1.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
              categories.push(true);
              classType -= LETTER_NUMBER_MODIFIER;
            } else {
              categories.push(false);
            }
            if (["normal", "auto", "loose"].indexOf(lineBreak2) !== -1) {
              if ([8208, 8211, 12316, 12448].indexOf(codePoint) !== -1) {
                indices.push(index);
                return types.push(CB);
              }
            }
            if (classType === CM || classType === ZWJ$1) {
              if (index === 0) {
                indices.push(index);
                return types.push(AL);
              }
              var prev = types[index - 1];
              if (LINE_BREAKS.indexOf(prev) === -1) {
                indices.push(indices[index - 1]);
                return types.push(prev);
              }
              indices.push(index);
              return types.push(AL);
            }
            indices.push(index);
            if (classType === CJ) {
              return types.push(lineBreak2 === "strict" ? NS : ID);
            }
            if (classType === SA) {
              return types.push(AL);
            }
            if (classType === AI) {
              return types.push(AL);
            }
            if (classType === XX) {
              if (codePoint >= 131072 && codePoint <= 196605 || codePoint >= 196608 && codePoint <= 262141) {
                return types.push(ID);
              } else {
                return types.push(AL);
              }
            }
            types.push(classType);
          });
          return [indices, types, categories];
        };
        var isAdjacentWithSpaceIgnored = function(a2, b, currentIndex, classTypes) {
          var current = classTypes[currentIndex];
          if (Array.isArray(a2) ? a2.indexOf(current) !== -1 : a2 === current) {
            var i2 = currentIndex;
            while (i2 <= classTypes.length) {
              i2++;
              var next = classTypes[i2];
              if (next === b) {
                return true;
              }
              if (next !== SP) {
                break;
              }
            }
          }
          if (current === SP) {
            var i2 = currentIndex;
            while (i2 > 0) {
              i2--;
              var prev = classTypes[i2];
              if (Array.isArray(a2) ? a2.indexOf(prev) !== -1 : a2 === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                  n++;
                  var next = classTypes[n];
                  if (next === b) {
                    return true;
                  }
                  if (next !== SP) {
                    break;
                  }
                }
              }
              if (prev !== SP) {
                break;
              }
            }
          }
          return false;
        };
        var previousNonSpaceClassType = function(currentIndex, classTypes) {
          var i2 = currentIndex;
          while (i2 >= 0) {
            var type = classTypes[i2];
            if (type === SP) {
              i2--;
            } else {
              return type;
            }
          }
          return 0;
        };
        var _lineBreakAtIndex = function(codePoints, classTypes, indicies, index, forbiddenBreaks) {
          if (indicies[index] === 0) {
            return BREAK_NOT_ALLOWED$1;
          }
          var currentIndex = index - 1;
          if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
            return BREAK_NOT_ALLOWED$1;
          }
          var beforeIndex = currentIndex - 1;
          var afterIndex = currentIndex + 1;
          var current = classTypes[currentIndex];
          var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
          var next = classTypes[afterIndex];
          if (current === CR$1 && next === LF$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
            return BREAK_MANDATORY;
          }
          if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (SPACE$1.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
            return BREAK_ALLOWED$1;
          }
          if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === WJ || next === WJ) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === GL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === SP) {
            return BREAK_ALLOWED$1;
          }
          if (current === QU || next === QU) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (next === CB || current === CB) {
            return BREAK_ALLOWED$1;
          }
          if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (before === HL && HYPHEN.indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === SY && next === HL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (next === IN) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (
            // (PR | PO) × ( OP | HY )? NU
            [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || // ( OP | HY ) × NU
            [OP, HY].indexOf(current) !== -1 && next === NU || // NU ×	(NU | SY | IS)
            current === NU && [NU, SY, IS].indexOf(next) !== -1
          ) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
            var prevIndex = currentIndex;
            while (prevIndex >= 0) {
              var type = classTypes[prevIndex];
              if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
              } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
              } else {
                break;
              }
            }
          }
          if ([PR, PO].indexOf(next) !== -1) {
            var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
            while (prevIndex >= 0) {
              var type = classTypes[prevIndex];
              if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
              } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
              } else {
                break;
              }
            }
          }
          if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === RI$1 && next === RI$1) {
            var i2 = indicies[currentIndex];
            var count = 1;
            while (i2 > 0) {
              i2--;
              if (classTypes[i2] === RI$1) {
                count++;
              } else {
                break;
              }
            }
            if (count % 2 !== 0) {
              return BREAK_NOT_ALLOWED$1;
            }
          }
          if (current === EB && next === EM) {
            return BREAK_NOT_ALLOWED$1;
          }
          return BREAK_ALLOWED$1;
        };
        var cssFormattedClasses = function(codePoints, options) {
          if (!options) {
            options = { lineBreak: "normal", wordBreak: "normal" };
          }
          var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
          if (options.wordBreak === "break-all" || options.wordBreak === "break-word") {
            classTypes = classTypes.map(function(type) {
              return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
            });
          }
          var forbiddenBreakpoints = options.wordBreak === "keep-all" ? isLetterNumber.map(function(letterNumber, i2) {
            return letterNumber && codePoints[i2] >= 19968 && codePoints[i2] <= 40959;
          }) : void 0;
          return [indicies, classTypes, forbiddenBreakpoints];
        };
        var Break = (
          /** @class */
          function() {
            function Break2(codePoints, lineBreak2, start, end) {
              this.codePoints = codePoints;
              this.required = lineBreak2 === BREAK_MANDATORY;
              this.start = start;
              this.end = end;
            }
            Break2.prototype.slice = function() {
              return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
            };
            return Break2;
          }()
        );
        var LineBreaker = function(str, options) {
          var codePoints = toCodePoints$1(str);
          var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
          var length = codePoints.length;
          var lastEnd = 0;
          var nextIndex = 0;
          return {
            next: function() {
              if (nextIndex >= length) {
                return { done: true, value: null };
              }
              var lineBreak2 = BREAK_NOT_ALLOWED$1;
              while (nextIndex < length && (lineBreak2 = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {
              }
              if (lineBreak2 !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                var value = new Break(codePoints, lineBreak2, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value, done: false };
              }
              return { done: true, value: null };
            }
          };
        };
        var FLAG_UNRESTRICTED = 1 << 0;
        var FLAG_ID = 1 << 1;
        var FLAG_INTEGER = 1 << 2;
        var FLAG_NUMBER = 1 << 3;
        var LINE_FEED = 10;
        var SOLIDUS = 47;
        var REVERSE_SOLIDUS = 92;
        var CHARACTER_TABULATION = 9;
        var SPACE = 32;
        var QUOTATION_MARK = 34;
        var EQUALS_SIGN = 61;
        var NUMBER_SIGN = 35;
        var DOLLAR_SIGN = 36;
        var PERCENTAGE_SIGN = 37;
        var APOSTROPHE = 39;
        var LEFT_PARENTHESIS = 40;
        var RIGHT_PARENTHESIS = 41;
        var LOW_LINE = 95;
        var HYPHEN_MINUS = 45;
        var EXCLAMATION_MARK = 33;
        var LESS_THAN_SIGN = 60;
        var GREATER_THAN_SIGN = 62;
        var COMMERCIAL_AT = 64;
        var LEFT_SQUARE_BRACKET = 91;
        var RIGHT_SQUARE_BRACKET = 93;
        var CIRCUMFLEX_ACCENT = 61;
        var LEFT_CURLY_BRACKET = 123;
        var QUESTION_MARK = 63;
        var RIGHT_CURLY_BRACKET = 125;
        var VERTICAL_LINE = 124;
        var TILDE = 126;
        var CONTROL = 128;
        var REPLACEMENT_CHARACTER = 65533;
        var ASTERISK = 42;
        var PLUS_SIGN = 43;
        var COMMA = 44;
        var COLON = 58;
        var SEMICOLON = 59;
        var FULL_STOP = 46;
        var NULL = 0;
        var BACKSPACE = 8;
        var LINE_TABULATION = 11;
        var SHIFT_OUT = 14;
        var INFORMATION_SEPARATOR_ONE = 31;
        var DELETE = 127;
        var EOF = -1;
        var ZERO = 48;
        var a = 97;
        var e = 101;
        var f = 102;
        var u = 117;
        var z = 122;
        var A = 65;
        var E = 69;
        var F = 70;
        var U = 85;
        var Z = 90;
        var isDigit = function(codePoint) {
          return codePoint >= ZERO && codePoint <= 57;
        };
        var isSurrogateCodePoint = function(codePoint) {
          return codePoint >= 55296 && codePoint <= 57343;
        };
        var isHex = function(codePoint) {
          return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
        };
        var isLowerCaseLetter = function(codePoint) {
          return codePoint >= a && codePoint <= z;
        };
        var isUpperCaseLetter = function(codePoint) {
          return codePoint >= A && codePoint <= Z;
        };
        var isLetter = function(codePoint) {
          return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
        };
        var isNonASCIICodePoint = function(codePoint) {
          return codePoint >= CONTROL;
        };
        var isWhiteSpace = function(codePoint) {
          return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
        };
        var isNameStartCodePoint = function(codePoint) {
          return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
        };
        var isNameCodePoint = function(codePoint) {
          return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
        };
        var isNonPrintableCodePoint = function(codePoint) {
          return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
        };
        var isValidEscape = function(c1, c2) {
          if (c1 !== REVERSE_SOLIDUS) {
            return false;
          }
          return c2 !== LINE_FEED;
        };
        var isIdentifierStart = function(c1, c2, c3) {
          if (c1 === HYPHEN_MINUS) {
            return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
          } else if (isNameStartCodePoint(c1)) {
            return true;
          } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
            return true;
          }
          return false;
        };
        var isNumberStart = function(c1, c2, c3) {
          if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
            if (isDigit(c2)) {
              return true;
            }
            return c2 === FULL_STOP && isDigit(c3);
          }
          if (c1 === FULL_STOP) {
            return isDigit(c2);
          }
          return isDigit(c1);
        };
        var stringToNumber = function(codePoints) {
          var c = 0;
          var sign = 1;
          if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
              sign = -1;
            }
            c++;
          }
          var integers = [];
          while (isDigit(codePoints[c])) {
            integers.push(codePoints[c++]);
          }
          var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
          if (codePoints[c] === FULL_STOP) {
            c++;
          }
          var fraction = [];
          while (isDigit(codePoints[c])) {
            fraction.push(codePoints[c++]);
          }
          var fracd = fraction.length;
          var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
          if (codePoints[c] === E || codePoints[c] === e) {
            c++;
          }
          var expsign = 1;
          if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
              expsign = -1;
            }
            c++;
          }
          var exponent = [];
          while (isDigit(codePoints[c])) {
            exponent.push(codePoints[c++]);
          }
          var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
          return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
        };
        var LEFT_PARENTHESIS_TOKEN = {
          type: 2
          /* LEFT_PARENTHESIS_TOKEN */
        };
        var RIGHT_PARENTHESIS_TOKEN = {
          type: 3
          /* RIGHT_PARENTHESIS_TOKEN */
        };
        var COMMA_TOKEN = {
          type: 4
          /* COMMA_TOKEN */
        };
        var SUFFIX_MATCH_TOKEN = {
          type: 13
          /* SUFFIX_MATCH_TOKEN */
        };
        var PREFIX_MATCH_TOKEN = {
          type: 8
          /* PREFIX_MATCH_TOKEN */
        };
        var COLUMN_TOKEN = {
          type: 21
          /* COLUMN_TOKEN */
        };
        var DASH_MATCH_TOKEN = {
          type: 9
          /* DASH_MATCH_TOKEN */
        };
        var INCLUDE_MATCH_TOKEN = {
          type: 10
          /* INCLUDE_MATCH_TOKEN */
        };
        var LEFT_CURLY_BRACKET_TOKEN = {
          type: 11
          /* LEFT_CURLY_BRACKET_TOKEN */
        };
        var RIGHT_CURLY_BRACKET_TOKEN = {
          type: 12
          /* RIGHT_CURLY_BRACKET_TOKEN */
        };
        var SUBSTRING_MATCH_TOKEN = {
          type: 14
          /* SUBSTRING_MATCH_TOKEN */
        };
        var BAD_URL_TOKEN = {
          type: 23
          /* BAD_URL_TOKEN */
        };
        var BAD_STRING_TOKEN = {
          type: 1
          /* BAD_STRING_TOKEN */
        };
        var CDO_TOKEN = {
          type: 25
          /* CDO_TOKEN */
        };
        var CDC_TOKEN = {
          type: 24
          /* CDC_TOKEN */
        };
        var COLON_TOKEN = {
          type: 26
          /* COLON_TOKEN */
        };
        var SEMICOLON_TOKEN = {
          type: 27
          /* SEMICOLON_TOKEN */
        };
        var LEFT_SQUARE_BRACKET_TOKEN = {
          type: 28
          /* LEFT_SQUARE_BRACKET_TOKEN */
        };
        var RIGHT_SQUARE_BRACKET_TOKEN = {
          type: 29
          /* RIGHT_SQUARE_BRACKET_TOKEN */
        };
        var WHITESPACE_TOKEN = {
          type: 31
          /* WHITESPACE_TOKEN */
        };
        var EOF_TOKEN = {
          type: 32
          /* EOF_TOKEN */
        };
        var Tokenizer = (
          /** @class */
          function() {
            function Tokenizer2() {
              this._value = [];
            }
            Tokenizer2.prototype.write = function(chunk) {
              this._value = this._value.concat(toCodePoints$1(chunk));
            };
            Tokenizer2.prototype.read = function() {
              var tokens = [];
              var token = this.consumeToken();
              while (token !== EOF_TOKEN) {
                tokens.push(token);
                token = this.consumeToken();
              }
              return tokens;
            };
            Tokenizer2.prototype.consumeToken = function() {
              var codePoint = this.consumeCodePoint();
              switch (codePoint) {
                case QUOTATION_MARK:
                  return this.consumeStringToken(QUOTATION_MARK);
                case NUMBER_SIGN:
                  var c1 = this.peekCodePoint(0);
                  var c2 = this.peekCodePoint(1);
                  var c3 = this.peekCodePoint(2);
                  if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                    var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                    var value = this.consumeName();
                    return { type: 5, value, flags };
                  }
                  break;
                case DOLLAR_SIGN:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return SUFFIX_MATCH_TOKEN;
                  }
                  break;
                case APOSTROPHE:
                  return this.consumeStringToken(APOSTROPHE);
                case LEFT_PARENTHESIS:
                  return LEFT_PARENTHESIS_TOKEN;
                case RIGHT_PARENTHESIS:
                  return RIGHT_PARENTHESIS_TOKEN;
                case ASTERISK:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return SUBSTRING_MATCH_TOKEN;
                  }
                  break;
                case PLUS_SIGN:
                  if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                  }
                  break;
                case COMMA:
                  return COMMA_TOKEN;
                case HYPHEN_MINUS:
                  var e1 = codePoint;
                  var e2 = this.peekCodePoint(0);
                  var e3 = this.peekCodePoint(1);
                  if (isNumberStart(e1, e2, e3)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                  }
                  if (isIdentifierStart(e1, e2, e3)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                  }
                  if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                    this.consumeCodePoint();
                    this.consumeCodePoint();
                    return CDC_TOKEN;
                  }
                  break;
                case FULL_STOP:
                  if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                  }
                  break;
                case SOLIDUS:
                  if (this.peekCodePoint(0) === ASTERISK) {
                    this.consumeCodePoint();
                    while (true) {
                      var c = this.consumeCodePoint();
                      if (c === ASTERISK) {
                        c = this.consumeCodePoint();
                        if (c === SOLIDUS) {
                          return this.consumeToken();
                        }
                      }
                      if (c === EOF) {
                        return this.consumeToken();
                      }
                    }
                  }
                  break;
                case COLON:
                  return COLON_TOKEN;
                case SEMICOLON:
                  return SEMICOLON_TOKEN;
                case LESS_THAN_SIGN:
                  if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
                    this.consumeCodePoint();
                    this.consumeCodePoint();
                    return CDO_TOKEN;
                  }
                  break;
                case COMMERCIAL_AT:
                  var a1 = this.peekCodePoint(0);
                  var a2 = this.peekCodePoint(1);
                  var a3 = this.peekCodePoint(2);
                  if (isIdentifierStart(a1, a2, a3)) {
                    var value = this.consumeName();
                    return { type: 7, value };
                  }
                  break;
                case LEFT_SQUARE_BRACKET:
                  return LEFT_SQUARE_BRACKET_TOKEN;
                case REVERSE_SOLIDUS:
                  if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                  }
                  break;
                case RIGHT_SQUARE_BRACKET:
                  return RIGHT_SQUARE_BRACKET_TOKEN;
                case CIRCUMFLEX_ACCENT:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return PREFIX_MATCH_TOKEN;
                  }
                  break;
                case LEFT_CURLY_BRACKET:
                  return LEFT_CURLY_BRACKET_TOKEN;
                case RIGHT_CURLY_BRACKET:
                  return RIGHT_CURLY_BRACKET_TOKEN;
                case u:
                case U:
                  var u1 = this.peekCodePoint(0);
                  var u2 = this.peekCodePoint(1);
                  if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                    this.consumeCodePoint();
                    this.consumeUnicodeRangeToken();
                  }
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeIdentLikeToken();
                case VERTICAL_LINE:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return DASH_MATCH_TOKEN;
                  }
                  if (this.peekCodePoint(0) === VERTICAL_LINE) {
                    this.consumeCodePoint();
                    return COLUMN_TOKEN;
                  }
                  break;
                case TILDE:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return INCLUDE_MATCH_TOKEN;
                  }
                  break;
                case EOF:
                  return EOF_TOKEN;
              }
              if (isWhiteSpace(codePoint)) {
                this.consumeWhiteSpace();
                return WHITESPACE_TOKEN;
              }
              if (isDigit(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeNumericToken();
              }
              if (isNameStartCodePoint(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeIdentLikeToken();
              }
              return { type: 6, value: fromCodePoint$1(codePoint) };
            };
            Tokenizer2.prototype.consumeCodePoint = function() {
              var value = this._value.shift();
              return typeof value === "undefined" ? -1 : value;
            };
            Tokenizer2.prototype.reconsumeCodePoint = function(codePoint) {
              this._value.unshift(codePoint);
            };
            Tokenizer2.prototype.peekCodePoint = function(delta) {
              if (delta >= this._value.length) {
                return -1;
              }
              return this._value[delta];
            };
            Tokenizer2.prototype.consumeUnicodeRangeToken = function() {
              var digits = [];
              var codePoint = this.consumeCodePoint();
              while (isHex(codePoint) && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
              }
              var questionMarks = false;
              while (codePoint === QUESTION_MARK && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
                questionMarks = true;
              }
              if (questionMarks) {
                var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
                  return digit === QUESTION_MARK ? ZERO : digit;
                })), 16);
                var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
                  return digit === QUESTION_MARK ? F : digit;
                })), 16);
                return { type: 30, start: start_1, end };
              }
              var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
              if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
                this.consumeCodePoint();
                codePoint = this.consumeCodePoint();
                var endDigits = [];
                while (isHex(codePoint) && endDigits.length < 6) {
                  endDigits.push(codePoint);
                  codePoint = this.consumeCodePoint();
                }
                var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
                return { type: 30, start, end };
              } else {
                return { type: 30, start, end: start };
              }
            };
            Tokenizer2.prototype.consumeIdentLikeToken = function() {
              var value = this.consumeName();
              if (value.toLowerCase() === "url" && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return this.consumeUrlToken();
              } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return { type: 19, value };
              }
              return { type: 20, value };
            };
            Tokenizer2.prototype.consumeUrlToken = function() {
              var value = [];
              this.consumeWhiteSpace();
              if (this.peekCodePoint(0) === EOF) {
                return { type: 22, value: "" };
              }
              var next = this.peekCodePoint(0);
              if (next === APOSTROPHE || next === QUOTATION_MARK) {
                var stringToken = this.consumeStringToken(this.consumeCodePoint());
                if (stringToken.type === 0) {
                  this.consumeWhiteSpace();
                  if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return { type: 22, value: stringToken.value };
                  }
                }
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
              }
              while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                  return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
                } else if (isWhiteSpace(codePoint)) {
                  this.consumeWhiteSpace();
                  if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
                  }
                  this.consumeBadUrlRemnants();
                  return BAD_URL_TOKEN;
                } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
                  this.consumeBadUrlRemnants();
                  return BAD_URL_TOKEN;
                } else if (codePoint === REVERSE_SOLIDUS) {
                  if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    value.push(this.consumeEscapedCodePoint());
                  } else {
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                  }
                } else {
                  value.push(codePoint);
                }
              }
            };
            Tokenizer2.prototype.consumeWhiteSpace = function() {
              while (isWhiteSpace(this.peekCodePoint(0))) {
                this.consumeCodePoint();
              }
            };
            Tokenizer2.prototype.consumeBadUrlRemnants = function() {
              while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                  return;
                }
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                  this.consumeEscapedCodePoint();
                }
              }
            };
            Tokenizer2.prototype.consumeStringSlice = function(count) {
              var SLICE_STACK_SIZE = 5e4;
              var value = "";
              while (count > 0) {
                var amount = Math.min(SLICE_STACK_SIZE, count);
                value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
                count -= amount;
              }
              this._value.shift();
              return value;
            };
            Tokenizer2.prototype.consumeStringToken = function(endingCodePoint) {
              var value = "";
              var i2 = 0;
              do {
                var codePoint = this._value[i2];
                if (codePoint === EOF || codePoint === void 0 || codePoint === endingCodePoint) {
                  value += this.consumeStringSlice(i2);
                  return { type: 0, value };
                }
                if (codePoint === LINE_FEED) {
                  this._value.splice(0, i2);
                  return BAD_STRING_TOKEN;
                }
                if (codePoint === REVERSE_SOLIDUS) {
                  var next = this._value[i2 + 1];
                  if (next !== EOF && next !== void 0) {
                    if (next === LINE_FEED) {
                      value += this.consumeStringSlice(i2);
                      i2 = -1;
                      this._value.shift();
                    } else if (isValidEscape(codePoint, next)) {
                      value += this.consumeStringSlice(i2);
                      value += fromCodePoint$1(this.consumeEscapedCodePoint());
                      i2 = -1;
                    }
                  }
                }
                i2++;
              } while (true);
            };
            Tokenizer2.prototype.consumeNumber = function() {
              var repr = [];
              var type = FLAG_INTEGER;
              var c1 = this.peekCodePoint(0);
              if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
                repr.push(this.consumeCodePoint());
              }
              while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
              }
              c1 = this.peekCodePoint(0);
              var c2 = this.peekCodePoint(1);
              if (c1 === FULL_STOP && isDigit(c2)) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                  repr.push(this.consumeCodePoint());
                }
              }
              c1 = this.peekCodePoint(0);
              c2 = this.peekCodePoint(1);
              var c3 = this.peekCodePoint(2);
              if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                  repr.push(this.consumeCodePoint());
                }
              }
              return [stringToNumber(repr), type];
            };
            Tokenizer2.prototype.consumeNumericToken = function() {
              var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
              var c1 = this.peekCodePoint(0);
              var c2 = this.peekCodePoint(1);
              var c3 = this.peekCodePoint(2);
              if (isIdentifierStart(c1, c2, c3)) {
                var unit = this.consumeName();
                return { type: 15, number, flags, unit };
              }
              if (c1 === PERCENTAGE_SIGN) {
                this.consumeCodePoint();
                return { type: 16, number, flags };
              }
              return { type: 17, number, flags };
            };
            Tokenizer2.prototype.consumeEscapedCodePoint = function() {
              var codePoint = this.consumeCodePoint();
              if (isHex(codePoint)) {
                var hex = fromCodePoint$1(codePoint);
                while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                  hex += fromCodePoint$1(this.consumeCodePoint());
                }
                if (isWhiteSpace(this.peekCodePoint(0))) {
                  this.consumeCodePoint();
                }
                var hexCodePoint = parseInt(hex, 16);
                if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 1114111) {
                  return REPLACEMENT_CHARACTER;
                }
                return hexCodePoint;
              }
              if (codePoint === EOF) {
                return REPLACEMENT_CHARACTER;
              }
              return codePoint;
            };
            Tokenizer2.prototype.consumeName = function() {
              var result = "";
              while (true) {
                var codePoint = this.consumeCodePoint();
                if (isNameCodePoint(codePoint)) {
                  result += fromCodePoint$1(codePoint);
                } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                  result += fromCodePoint$1(this.consumeEscapedCodePoint());
                } else {
                  this.reconsumeCodePoint(codePoint);
                  return result;
                }
              }
            };
            return Tokenizer2;
          }()
        );
        var Parser = (
          /** @class */
          function() {
            function Parser2(tokens) {
              this._tokens = tokens;
            }
            Parser2.create = function(value) {
              var tokenizer = new Tokenizer();
              tokenizer.write(value);
              return new Parser2(tokenizer.read());
            };
            Parser2.parseValue = function(value) {
              return Parser2.create(value).parseComponentValue();
            };
            Parser2.parseValues = function(value) {
              return Parser2.create(value).parseComponentValues();
            };
            Parser2.prototype.parseComponentValue = function() {
              var token = this.consumeToken();
              while (token.type === 31) {
                token = this.consumeToken();
              }
              if (token.type === 32) {
                throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
              }
              this.reconsumeToken(token);
              var value = this.consumeComponentValue();
              do {
                token = this.consumeToken();
              } while (token.type === 31);
              if (token.type === 32) {
                return value;
              }
              throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
            };
            Parser2.prototype.parseComponentValues = function() {
              var values = [];
              while (true) {
                var value = this.consumeComponentValue();
                if (value.type === 32) {
                  return values;
                }
                values.push(value);
                values.push();
              }
            };
            Parser2.prototype.consumeComponentValue = function() {
              var token = this.consumeToken();
              switch (token.type) {
                case 11:
                case 28:
                case 2:
                  return this.consumeSimpleBlock(token.type);
                case 19:
                  return this.consumeFunction(token);
              }
              return token;
            };
            Parser2.prototype.consumeSimpleBlock = function(type) {
              var block = { type, values: [] };
              var token = this.consumeToken();
              while (true) {
                if (token.type === 32 || isEndingTokenFor(token, type)) {
                  return block;
                }
                this.reconsumeToken(token);
                block.values.push(this.consumeComponentValue());
                token = this.consumeToken();
              }
            };
            Parser2.prototype.consumeFunction = function(functionToken) {
              var cssFunction = {
                name: functionToken.value,
                values: [],
                type: 18
                /* FUNCTION */
              };
              while (true) {
                var token = this.consumeToken();
                if (token.type === 32 || token.type === 3) {
                  return cssFunction;
                }
                this.reconsumeToken(token);
                cssFunction.values.push(this.consumeComponentValue());
              }
            };
            Parser2.prototype.consumeToken = function() {
              var token = this._tokens.shift();
              return typeof token === "undefined" ? EOF_TOKEN : token;
            };
            Parser2.prototype.reconsumeToken = function(token) {
              this._tokens.unshift(token);
            };
            return Parser2;
          }()
        );
        var isDimensionToken = function(token) {
          return token.type === 15;
        };
        var isNumberToken = function(token) {
          return token.type === 17;
        };
        var isIdentToken = function(token) {
          return token.type === 20;
        };
        var isStringToken = function(token) {
          return token.type === 0;
        };
        var isIdentWithValue = function(token, value) {
          return isIdentToken(token) && token.value === value;
        };
        var nonWhiteSpace = function(token) {
          return token.type !== 31;
        };
        var nonFunctionArgSeparator = function(token) {
          return token.type !== 31 && token.type !== 4;
        };
        var parseFunctionArgs = function(tokens) {
          var args = [];
          var arg = [];
          tokens.forEach(function(token) {
            if (token.type === 4) {
              if (arg.length === 0) {
                throw new Error("Error parsing function args, zero tokens for arg");
              }
              args.push(arg);
              arg = [];
              return;
            }
            if (token.type !== 31) {
              arg.push(token);
            }
          });
          if (arg.length) {
            args.push(arg);
          }
          return args;
        };
        var isEndingTokenFor = function(token, type) {
          if (type === 11 && token.type === 12) {
            return true;
          }
          if (type === 28 && token.type === 29) {
            return true;
          }
          return type === 2 && token.type === 3;
        };
        var isLength = function(token) {
          return token.type === 17 || token.type === 15;
        };
        var isLengthPercentage = function(token) {
          return token.type === 16 || isLength(token);
        };
        var parseLengthPercentageTuple = function(tokens) {
          return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
        };
        var ZERO_LENGTH = {
          type: 17,
          number: 0,
          flags: FLAG_INTEGER
        };
        var FIFTY_PERCENT = {
          type: 16,
          number: 50,
          flags: FLAG_INTEGER
        };
        var HUNDRED_PERCENT = {
          type: 16,
          number: 100,
          flags: FLAG_INTEGER
        };
        var getAbsoluteValueForTuple = function(tuple, width, height) {
          var x = tuple[0], y = tuple[1];
          return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== "undefined" ? y : x, height)];
        };
        var getAbsoluteValue = function(token, parent) {
          if (token.type === 16) {
            return token.number / 100 * parent;
          }
          if (isDimensionToken(token)) {
            switch (token.unit) {
              case "rem":
              case "em":
                return 16 * token.number;
              case "px":
              default:
                return token.number;
            }
          }
          return token.number;
        };
        var DEG = "deg";
        var GRAD = "grad";
        var RAD = "rad";
        var TURN = "turn";
        var angle = {
          name: "angle",
          parse: function(_context, value) {
            if (value.type === 15) {
              switch (value.unit) {
                case DEG:
                  return Math.PI * value.number / 180;
                case GRAD:
                  return Math.PI / 200 * value.number;
                case RAD:
                  return value.number;
                case TURN:
                  return Math.PI * 2 * value.number;
              }
            }
            throw new Error("Unsupported angle type");
          }
        };
        var isAngle = function(value) {
          if (value.type === 15) {
            if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
              return true;
            }
          }
          return false;
        };
        var parseNamedSide = function(tokens) {
          var sideOrCorner = tokens.filter(isIdentToken).map(function(ident) {
            return ident.value;
          }).join(" ");
          switch (sideOrCorner) {
            case "to bottom right":
            case "to right bottom":
            case "left top":
            case "top left":
              return [ZERO_LENGTH, ZERO_LENGTH];
            case "to top":
            case "bottom":
              return deg(0);
            case "to bottom left":
            case "to left bottom":
            case "right top":
            case "top right":
              return [ZERO_LENGTH, HUNDRED_PERCENT];
            case "to right":
            case "left":
              return deg(90);
            case "to top left":
            case "to left top":
            case "right bottom":
            case "bottom right":
              return [HUNDRED_PERCENT, HUNDRED_PERCENT];
            case "to bottom":
            case "top":
              return deg(180);
            case "to top right":
            case "to right top":
            case "left bottom":
            case "bottom left":
              return [HUNDRED_PERCENT, ZERO_LENGTH];
            case "to left":
            case "right":
              return deg(270);
          }
          return 0;
        };
        var deg = function(deg2) {
          return Math.PI * deg2 / 180;
        };
        var color$1 = {
          name: "color",
          parse: function(context, value) {
            if (value.type === 18) {
              var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
              if (typeof colorFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported color function "' + value.name + '"');
              }
              return colorFunction(context, value.values);
            }
            if (value.type === 5) {
              if (value.value.length === 3) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
              }
              if (value.value.length === 4) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                var a2 = value.value.substring(3, 4);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a2 + a2, 16) / 255);
              }
              if (value.value.length === 6) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
              }
              if (value.value.length === 8) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                var a2 = value.value.substring(6, 8);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a2, 16) / 255);
              }
            }
            if (value.type === 20) {
              var namedColor = COLORS[value.value.toUpperCase()];
              if (typeof namedColor !== "undefined") {
                return namedColor;
              }
            }
            return COLORS.TRANSPARENT;
          }
        };
        var isTransparent = function(color2) {
          return (255 & color2) === 0;
        };
        var asString = function(color2) {
          var alpha = 255 & color2;
          var blue = 255 & color2 >> 8;
          var green = 255 & color2 >> 16;
          var red = 255 & color2 >> 24;
          return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
        };
        var pack = function(r, g, b, a2) {
          return (r << 24 | g << 16 | b << 8 | Math.round(a2 * 255) << 0) >>> 0;
        };
        var getTokenColorValue = function(token, i2) {
          if (token.type === 17) {
            return token.number;
          }
          if (token.type === 16) {
            var max = i2 === 3 ? 1 : 255;
            return i2 === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
          }
          return 0;
        };
        var rgb = function(_context, args) {
          var tokens = args.filter(nonFunctionArgSeparator);
          if (tokens.length === 3) {
            var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
            return pack(r, g, b, 1);
          }
          if (tokens.length === 4) {
            var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a2 = _b[3];
            return pack(r, g, b, a2);
          }
          return 0;
        };
        function hue2rgb(t1, t2, hue) {
          if (hue < 0) {
            hue += 1;
          }
          if (hue >= 1) {
            hue -= 1;
          }
          if (hue < 1 / 6) {
            return (t2 - t1) * hue * 6 + t1;
          } else if (hue < 1 / 2) {
            return t2;
          } else if (hue < 2 / 3) {
            return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
          } else {
            return t1;
          }
        }
        var hsl = function(context, args) {
          var tokens = args.filter(nonFunctionArgSeparator);
          var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
          var h = (hue.type === 17 ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
          var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
          var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
          var a2 = typeof alpha !== "undefined" && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
          if (s === 0) {
            return pack(l * 255, l * 255, l * 255, 1);
          }
          var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          var t1 = l * 2 - t2;
          var r = hue2rgb(t1, t2, h + 1 / 3);
          var g = hue2rgb(t1, t2, h);
          var b = hue2rgb(t1, t2, h - 1 / 3);
          return pack(r * 255, g * 255, b * 255, a2);
        };
        var SUPPORTED_COLOR_FUNCTIONS = {
          hsl,
          hsla: hsl,
          rgb,
          rgba: rgb
        };
        var parseColor = function(context, value) {
          return color$1.parse(context, Parser.create(value).parseComponentValue());
        };
        var COLORS = {
          ALICEBLUE: 4042850303,
          ANTIQUEWHITE: 4209760255,
          AQUA: 16777215,
          AQUAMARINE: 2147472639,
          AZURE: 4043309055,
          BEIGE: 4126530815,
          BISQUE: 4293182719,
          BLACK: 255,
          BLANCHEDALMOND: 4293643775,
          BLUE: 65535,
          BLUEVIOLET: 2318131967,
          BROWN: 2771004159,
          BURLYWOOD: 3736635391,
          CADETBLUE: 1604231423,
          CHARTREUSE: 2147418367,
          CHOCOLATE: 3530104575,
          CORAL: 4286533887,
          CORNFLOWERBLUE: 1687547391,
          CORNSILK: 4294499583,
          CRIMSON: 3692313855,
          CYAN: 16777215,
          DARKBLUE: 35839,
          DARKCYAN: 9145343,
          DARKGOLDENROD: 3095837695,
          DARKGRAY: 2846468607,
          DARKGREEN: 6553855,
          DARKGREY: 2846468607,
          DARKKHAKI: 3182914559,
          DARKMAGENTA: 2332068863,
          DARKOLIVEGREEN: 1433087999,
          DARKORANGE: 4287365375,
          DARKORCHID: 2570243327,
          DARKRED: 2332033279,
          DARKSALMON: 3918953215,
          DARKSEAGREEN: 2411499519,
          DARKSLATEBLUE: 1211993087,
          DARKSLATEGRAY: 793726975,
          DARKSLATEGREY: 793726975,
          DARKTURQUOISE: 13554175,
          DARKVIOLET: 2483082239,
          DEEPPINK: 4279538687,
          DEEPSKYBLUE: 12582911,
          DIMGRAY: 1768516095,
          DIMGREY: 1768516095,
          DODGERBLUE: 512819199,
          FIREBRICK: 2988581631,
          FLORALWHITE: 4294635775,
          FORESTGREEN: 579543807,
          FUCHSIA: 4278255615,
          GAINSBORO: 3705462015,
          GHOSTWHITE: 4177068031,
          GOLD: 4292280575,
          GOLDENROD: 3668254975,
          GRAY: 2155905279,
          GREEN: 8388863,
          GREENYELLOW: 2919182335,
          GREY: 2155905279,
          HONEYDEW: 4043305215,
          HOTPINK: 4285117695,
          INDIANRED: 3445382399,
          INDIGO: 1258324735,
          IVORY: 4294963455,
          KHAKI: 4041641215,
          LAVENDER: 3873897215,
          LAVENDERBLUSH: 4293981695,
          LAWNGREEN: 2096890111,
          LEMONCHIFFON: 4294626815,
          LIGHTBLUE: 2916673279,
          LIGHTCORAL: 4034953471,
          LIGHTCYAN: 3774873599,
          LIGHTGOLDENRODYELLOW: 4210742015,
          LIGHTGRAY: 3553874943,
          LIGHTGREEN: 2431553791,
          LIGHTGREY: 3553874943,
          LIGHTPINK: 4290167295,
          LIGHTSALMON: 4288707327,
          LIGHTSEAGREEN: 548580095,
          LIGHTSKYBLUE: 2278488831,
          LIGHTSLATEGRAY: 2005441023,
          LIGHTSLATEGREY: 2005441023,
          LIGHTSTEELBLUE: 2965692159,
          LIGHTYELLOW: 4294959359,
          LIME: 16711935,
          LIMEGREEN: 852308735,
          LINEN: 4210091775,
          MAGENTA: 4278255615,
          MAROON: 2147483903,
          MEDIUMAQUAMARINE: 1724754687,
          MEDIUMBLUE: 52735,
          MEDIUMORCHID: 3126187007,
          MEDIUMPURPLE: 2473647103,
          MEDIUMSEAGREEN: 1018393087,
          MEDIUMSLATEBLUE: 2070474495,
          MEDIUMSPRINGGREEN: 16423679,
          MEDIUMTURQUOISE: 1221709055,
          MEDIUMVIOLETRED: 3340076543,
          MIDNIGHTBLUE: 421097727,
          MINTCREAM: 4127193855,
          MISTYROSE: 4293190143,
          MOCCASIN: 4293178879,
          NAVAJOWHITE: 4292783615,
          NAVY: 33023,
          OLDLACE: 4260751103,
          OLIVE: 2155872511,
          OLIVEDRAB: 1804477439,
          ORANGE: 4289003775,
          ORANGERED: 4282712319,
          ORCHID: 3664828159,
          PALEGOLDENROD: 4008225535,
          PALEGREEN: 2566625535,
          PALETURQUOISE: 2951671551,
          PALEVIOLETRED: 3681588223,
          PAPAYAWHIP: 4293907967,
          PEACHPUFF: 4292524543,
          PERU: 3448061951,
          PINK: 4290825215,
          PLUM: 3718307327,
          POWDERBLUE: 2967529215,
          PURPLE: 2147516671,
          REBECCAPURPLE: 1714657791,
          RED: 4278190335,
          ROSYBROWN: 3163525119,
          ROYALBLUE: 1097458175,
          SADDLEBROWN: 2336560127,
          SALMON: 4202722047,
          SANDYBROWN: 4104413439,
          SEAGREEN: 780883967,
          SEASHELL: 4294307583,
          SIENNA: 2689740287,
          SILVER: 3233857791,
          SKYBLUE: 2278484991,
          SLATEBLUE: 1784335871,
          SLATEGRAY: 1887473919,
          SLATEGREY: 1887473919,
          SNOW: 4294638335,
          SPRINGGREEN: 16744447,
          STEELBLUE: 1182971135,
          TAN: 3535047935,
          TEAL: 8421631,
          THISTLE: 3636451583,
          TOMATO: 4284696575,
          TRANSPARENT: 0,
          TURQUOISE: 1088475391,
          VIOLET: 4001558271,
          WHEAT: 4125012991,
          WHITE: 4294967295,
          WHITESMOKE: 4126537215,
          YELLOW: 4294902015,
          YELLOWGREEN: 2597139199
        };
        var backgroundClip = {
          name: "background-clip",
          initialValue: "border-box",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.map(function(token) {
              if (isIdentToken(token)) {
                switch (token.value) {
                  case "padding-box":
                    return 1;
                  case "content-box":
                    return 2;
                }
              }
              return 0;
            });
          }
        };
        var backgroundColor = {
          name: "background-color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var parseColorStop = function(context, args) {
          var color2 = color$1.parse(context, args[0]);
          var stop = args[1];
          return stop && isLengthPercentage(stop) ? { color: color2, stop } : { color: color2, stop: null };
        };
        var processColorStops = function(stops, lineLength) {
          var first = stops[0];
          var last = stops[stops.length - 1];
          if (first.stop === null) {
            first.stop = ZERO_LENGTH;
          }
          if (last.stop === null) {
            last.stop = HUNDRED_PERCENT;
          }
          var processStops = [];
          var previous = 0;
          for (var i2 = 0; i2 < stops.length; i2++) {
            var stop_1 = stops[i2].stop;
            if (stop_1 !== null) {
              var absoluteValue = getAbsoluteValue(stop_1, lineLength);
              if (absoluteValue > previous) {
                processStops.push(absoluteValue);
              } else {
                processStops.push(previous);
              }
              previous = absoluteValue;
            } else {
              processStops.push(null);
            }
          }
          var gapBegin = null;
          for (var i2 = 0; i2 < processStops.length; i2++) {
            var stop_2 = processStops[i2];
            if (stop_2 === null) {
              if (gapBegin === null) {
                gapBegin = i2;
              }
            } else if (gapBegin !== null) {
              var gapLength = i2 - gapBegin;
              var beforeGap = processStops[gapBegin - 1];
              var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
              for (var g = 1; g <= gapLength; g++) {
                processStops[gapBegin + g - 1] = gapValue * g;
              }
              gapBegin = null;
            }
          }
          return stops.map(function(_a, i3) {
            var color2 = _a.color;
            return { color: color2, stop: Math.max(Math.min(1, processStops[i3] / lineLength), 0) };
          });
        };
        var getAngleFromCorner = function(corner, width, height) {
          var centerX = width / 2;
          var centerY = height / 2;
          var x = getAbsoluteValue(corner[0], width) - centerX;
          var y = centerY - getAbsoluteValue(corner[1], height);
          return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
        };
        var calculateGradientDirection = function(angle2, width, height) {
          var radian = typeof angle2 === "number" ? angle2 : getAngleFromCorner(angle2, width, height);
          var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
          var halfWidth = width / 2;
          var halfHeight = height / 2;
          var halfLineLength = lineLength / 2;
          var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
          var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
          return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
        };
        var distance = function(a2, b) {
          return Math.sqrt(a2 * a2 + b * b);
        };
        var findCorner = function(width, height, x, y, closest) {
          var corners = [
            [0, 0],
            [0, height],
            [width, 0],
            [width, height]
          ];
          return corners.reduce(function(stat, corner) {
            var cx = corner[0], cy = corner[1];
            var d = distance(x - cx, y - cy);
            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
              return {
                optimumCorner: corner,
                optimumDistance: d
              };
            }
            return stat;
          }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
          }).optimumCorner;
        };
        var calculateRadius = function(gradient, x, y, width, height) {
          var rx = 0;
          var ry = 0;
          switch (gradient.size) {
            case 0:
              if (gradient.shape === 0) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
              } else if (gradient.shape === 1) {
                rx = Math.min(Math.abs(x), Math.abs(x - width));
                ry = Math.min(Math.abs(y), Math.abs(y - height));
              }
              break;
            case 2:
              if (gradient.shape === 0) {
                rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
              } else if (gradient.shape === 1) {
                var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
              }
              break;
            case 1:
              if (gradient.shape === 0) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
              } else if (gradient.shape === 1) {
                rx = Math.max(Math.abs(x), Math.abs(x - width));
                ry = Math.max(Math.abs(y), Math.abs(y - height));
              }
              break;
            case 3:
              if (gradient.shape === 0) {
                rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
              } else if (gradient.shape === 1) {
                var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
              }
              break;
          }
          if (Array.isArray(gradient.size)) {
            rx = getAbsoluteValue(gradient.size[0], width);
            ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
          }
          return [rx, ry];
        };
        var linearGradient = function(context, tokens) {
          var angle$1 = deg(180);
          var stops = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            if (i2 === 0) {
              var firstToken = arg[0];
              if (firstToken.type === 20 && firstToken.value === "to") {
                angle$1 = parseNamedSide(arg);
                return;
              } else if (isAngle(firstToken)) {
                angle$1 = angle.parse(context, firstToken);
                return;
              }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
          });
          return {
            angle: angle$1,
            stops,
            type: 1
            /* LINEAR_GRADIENT */
          };
        };
        var prefixLinearGradient = function(context, tokens) {
          var angle$1 = deg(180);
          var stops = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            if (i2 === 0) {
              var firstToken = arg[0];
              if (firstToken.type === 20 && ["top", "left", "right", "bottom"].indexOf(firstToken.value) !== -1) {
                angle$1 = parseNamedSide(arg);
                return;
              } else if (isAngle(firstToken)) {
                angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                return;
              }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
          });
          return {
            angle: angle$1,
            stops,
            type: 1
            /* LINEAR_GRADIENT */
          };
        };
        var webkitGradient = function(context, tokens) {
          var angle2 = deg(180);
          var stops = [];
          var type = 1;
          var shape = 0;
          var size = 3;
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var firstToken = arg[0];
            if (i2 === 0) {
              if (isIdentToken(firstToken) && firstToken.value === "linear") {
                type = 1;
                return;
              } else if (isIdentToken(firstToken) && firstToken.value === "radial") {
                type = 2;
                return;
              }
            }
            if (firstToken.type === 18) {
              if (firstToken.name === "from") {
                var color2 = color$1.parse(context, firstToken.values[0]);
                stops.push({ stop: ZERO_LENGTH, color: color2 });
              } else if (firstToken.name === "to") {
                var color2 = color$1.parse(context, firstToken.values[0]);
                stops.push({ stop: HUNDRED_PERCENT, color: color2 });
              } else if (firstToken.name === "color-stop") {
                var values = firstToken.values.filter(nonFunctionArgSeparator);
                if (values.length === 2) {
                  var color2 = color$1.parse(context, values[1]);
                  var stop_1 = values[0];
                  if (isNumberToken(stop_1)) {
                    stops.push({
                      stop: { type: 16, number: stop_1.number * 100, flags: stop_1.flags },
                      color: color2
                    });
                  }
                }
              }
            }
          });
          return type === 1 ? {
            angle: (angle2 + deg(180)) % deg(360),
            stops,
            type
          } : { size, shape, stops, position: position2, type };
        };
        var CLOSEST_SIDE = "closest-side";
        var FARTHEST_SIDE = "farthest-side";
        var CLOSEST_CORNER = "closest-corner";
        var FARTHEST_CORNER = "farthest-corner";
        var CIRCLE = "circle";
        var ELLIPSE = "ellipse";
        var COVER = "cover";
        var CONTAIN = "contain";
        var radialGradient = function(context, tokens) {
          var shape = 0;
          var size = 3;
          var stops = [];
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var isColorStop = true;
            if (i2 === 0) {
              var isAtPosition_1 = false;
              isColorStop = arg.reduce(function(acc, token) {
                if (isAtPosition_1) {
                  if (isIdentToken(token)) {
                    switch (token.value) {
                      case "center":
                        position2.push(FIFTY_PERCENT);
                        return acc;
                      case "top":
                      case "left":
                        position2.push(ZERO_LENGTH);
                        return acc;
                      case "right":
                      case "bottom":
                        position2.push(HUNDRED_PERCENT);
                        return acc;
                    }
                  } else if (isLengthPercentage(token) || isLength(token)) {
                    position2.push(token);
                  }
                } else if (isIdentToken(token)) {
                  switch (token.value) {
                    case CIRCLE:
                      shape = 0;
                      return false;
                    case ELLIPSE:
                      shape = 1;
                      return false;
                    case "at":
                      isAtPosition_1 = true;
                      return false;
                    case CLOSEST_SIDE:
                      size = 0;
                      return false;
                    case COVER:
                    case FARTHEST_SIDE:
                      size = 1;
                      return false;
                    case CONTAIN:
                    case CLOSEST_CORNER:
                      size = 2;
                      return false;
                    case FARTHEST_CORNER:
                      size = 3;
                      return false;
                  }
                } else if (isLength(token) || isLengthPercentage(token)) {
                  if (!Array.isArray(size)) {
                    size = [];
                  }
                  size.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            }
            if (isColorStop) {
              var colorStop = parseColorStop(context, arg);
              stops.push(colorStop);
            }
          });
          return {
            size,
            shape,
            stops,
            position: position2,
            type: 2
            /* RADIAL_GRADIENT */
          };
        };
        var prefixRadialGradient = function(context, tokens) {
          var shape = 0;
          var size = 3;
          var stops = [];
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var isColorStop = true;
            if (i2 === 0) {
              isColorStop = arg.reduce(function(acc, token) {
                if (isIdentToken(token)) {
                  switch (token.value) {
                    case "center":
                      position2.push(FIFTY_PERCENT);
                      return false;
                    case "top":
                    case "left":
                      position2.push(ZERO_LENGTH);
                      return false;
                    case "right":
                    case "bottom":
                      position2.push(HUNDRED_PERCENT);
                      return false;
                  }
                } else if (isLengthPercentage(token) || isLength(token)) {
                  position2.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            } else if (i2 === 1) {
              isColorStop = arg.reduce(function(acc, token) {
                if (isIdentToken(token)) {
                  switch (token.value) {
                    case CIRCLE:
                      shape = 0;
                      return false;
                    case ELLIPSE:
                      shape = 1;
                      return false;
                    case CONTAIN:
                    case CLOSEST_SIDE:
                      size = 0;
                      return false;
                    case FARTHEST_SIDE:
                      size = 1;
                      return false;
                    case CLOSEST_CORNER:
                      size = 2;
                      return false;
                    case COVER:
                    case FARTHEST_CORNER:
                      size = 3;
                      return false;
                  }
                } else if (isLength(token) || isLengthPercentage(token)) {
                  if (!Array.isArray(size)) {
                    size = [];
                  }
                  size.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            }
            if (isColorStop) {
              var colorStop = parseColorStop(context, arg);
              stops.push(colorStop);
            }
          });
          return {
            size,
            shape,
            stops,
            position: position2,
            type: 2
            /* RADIAL_GRADIENT */
          };
        };
        var isLinearGradient = function(background) {
          return background.type === 1;
        };
        var isRadialGradient = function(background) {
          return background.type === 2;
        };
        var image = {
          name: "image",
          parse: function(context, value) {
            if (value.type === 22) {
              var image_1 = {
                url: value.value,
                type: 0
                /* URL */
              };
              context.cache.addImage(value.value);
              return image_1;
            }
            if (value.type === 18) {
              var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
              if (typeof imageFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported image function "' + value.name + '"');
              }
              return imageFunction(context, value.values);
            }
            throw new Error("Unsupported image type " + value.type);
          }
        };
        function isSupportedImage(value) {
          return !(value.type === 20 && value.value === "none") && (value.type !== 18 || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
        }
        var SUPPORTED_IMAGE_FUNCTIONS = {
          "linear-gradient": linearGradient,
          "-moz-linear-gradient": prefixLinearGradient,
          "-ms-linear-gradient": prefixLinearGradient,
          "-o-linear-gradient": prefixLinearGradient,
          "-webkit-linear-gradient": prefixLinearGradient,
          "radial-gradient": radialGradient,
          "-moz-radial-gradient": prefixRadialGradient,
          "-ms-radial-gradient": prefixRadialGradient,
          "-o-radial-gradient": prefixRadialGradient,
          "-webkit-radial-gradient": prefixRadialGradient,
          "-webkit-gradient": webkitGradient
        };
        var backgroundImage = {
          name: "background-image",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return [];
            }
            return tokens.filter(function(value) {
              return nonFunctionArgSeparator(value) && isSupportedImage(value);
            }).map(function(value) {
              return image.parse(context, value);
            });
          }
        };
        var backgroundOrigin = {
          name: "background-origin",
          initialValue: "border-box",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.map(function(token) {
              if (isIdentToken(token)) {
                switch (token.value) {
                  case "padding-box":
                    return 1;
                  case "content-box":
                    return 2;
                }
              }
              return 0;
            });
          }
        };
        var backgroundPosition = {
          name: "background-position",
          initialValue: "0% 0%",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isLengthPercentage);
            }).map(parseLengthPercentageTuple);
          }
        };
        var backgroundRepeat = {
          name: "background-repeat",
          initialValue: "repeat",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isIdentToken).map(function(token) {
                return token.value;
              }).join(" ");
            }).map(parseBackgroundRepeat);
          }
        };
        var parseBackgroundRepeat = function(value) {
          switch (value) {
            case "no-repeat":
              return 1;
            case "repeat-x":
            case "repeat no-repeat":
              return 2;
            case "repeat-y":
            case "no-repeat repeat":
              return 3;
            case "repeat":
            default:
              return 0;
          }
        };
        var BACKGROUND_SIZE;
        (function(BACKGROUND_SIZE2) {
          BACKGROUND_SIZE2["AUTO"] = "auto";
          BACKGROUND_SIZE2["CONTAIN"] = "contain";
          BACKGROUND_SIZE2["COVER"] = "cover";
        })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
        var backgroundSize = {
          name: "background-size",
          initialValue: "0",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isBackgroundSizeInfoToken);
            });
          }
        };
        var isBackgroundSizeInfoToken = function(value) {
          return isIdentToken(value) || isLengthPercentage(value);
        };
        var borderColorForSide = function(side) {
          return {
            name: "border-" + side + "-color",
            initialValue: "transparent",
            prefix: false,
            type: 3,
            format: "color"
          };
        };
        var borderTopColor = borderColorForSide("top");
        var borderRightColor = borderColorForSide("right");
        var borderBottomColor = borderColorForSide("bottom");
        var borderLeftColor = borderColorForSide("left");
        var borderRadiusForSide = function(side) {
          return {
            name: "border-radius-" + side,
            initialValue: "0 0",
            prefix: false,
            type: 1,
            parse: function(_context, tokens) {
              return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
            }
          };
        };
        var borderTopLeftRadius = borderRadiusForSide("top-left");
        var borderTopRightRadius = borderRadiusForSide("top-right");
        var borderBottomRightRadius = borderRadiusForSide("bottom-right");
        var borderBottomLeftRadius = borderRadiusForSide("bottom-left");
        var borderStyleForSide = function(side) {
          return {
            name: "border-" + side + "-style",
            initialValue: "solid",
            prefix: false,
            type: 2,
            parse: function(_context, style) {
              switch (style) {
                case "none":
                  return 0;
                case "dashed":
                  return 2;
                case "dotted":
                  return 3;
                case "double":
                  return 4;
              }
              return 1;
            }
          };
        };
        var borderTopStyle = borderStyleForSide("top");
        var borderRightStyle = borderStyleForSide("right");
        var borderBottomStyle = borderStyleForSide("bottom");
        var borderLeftStyle = borderStyleForSide("left");
        var borderWidthForSide = function(side) {
          return {
            name: "border-" + side + "-width",
            initialValue: "0",
            type: 0,
            prefix: false,
            parse: function(_context, token) {
              if (isDimensionToken(token)) {
                return token.number;
              }
              return 0;
            }
          };
        };
        var borderTopWidth = borderWidthForSide("top");
        var borderRightWidth = borderWidthForSide("right");
        var borderBottomWidth = borderWidthForSide("bottom");
        var borderLeftWidth = borderWidthForSide("left");
        var color = {
          name: "color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var direction = {
          name: "direction",
          initialValue: "ltr",
          prefix: false,
          type: 2,
          parse: function(_context, direction2) {
            switch (direction2) {
              case "rtl":
                return 1;
              case "ltr":
              default:
                return 0;
            }
          }
        };
        var display = {
          name: "display",
          initialValue: "inline-block",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).reduce(
              function(bit, token) {
                return bit | parseDisplayValue(token.value);
              },
              0
              /* NONE */
            );
          }
        };
        var parseDisplayValue = function(display2) {
          switch (display2) {
            case "block":
            case "-webkit-box":
              return 2;
            case "inline":
              return 4;
            case "run-in":
              return 8;
            case "flow":
              return 16;
            case "flow-root":
              return 32;
            case "table":
              return 64;
            case "flex":
            case "-webkit-flex":
              return 128;
            case "grid":
            case "-ms-grid":
              return 256;
            case "ruby":
              return 512;
            case "subgrid":
              return 1024;
            case "list-item":
              return 2048;
            case "table-row-group":
              return 4096;
            case "table-header-group":
              return 8192;
            case "table-footer-group":
              return 16384;
            case "table-row":
              return 32768;
            case "table-cell":
              return 65536;
            case "table-column-group":
              return 131072;
            case "table-column":
              return 262144;
            case "table-caption":
              return 524288;
            case "ruby-base":
              return 1048576;
            case "ruby-text":
              return 2097152;
            case "ruby-base-container":
              return 4194304;
            case "ruby-text-container":
              return 8388608;
            case "contents":
              return 16777216;
            case "inline-block":
              return 33554432;
            case "inline-list-item":
              return 67108864;
            case "inline-table":
              return 134217728;
            case "inline-flex":
              return 268435456;
            case "inline-grid":
              return 536870912;
          }
          return 0;
        };
        var float = {
          name: "float",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, float2) {
            switch (float2) {
              case "left":
                return 1;
              case "right":
                return 2;
              case "inline-start":
                return 3;
              case "inline-end":
                return 4;
            }
            return 0;
          }
        };
        var letterSpacing = {
          name: "letter-spacing",
          initialValue: "0",
          prefix: false,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20 && token.value === "normal") {
              return 0;
            }
            if (token.type === 17) {
              return token.number;
            }
            if (token.type === 15) {
              return token.number;
            }
            return 0;
          }
        };
        var LINE_BREAK;
        (function(LINE_BREAK2) {
          LINE_BREAK2["NORMAL"] = "normal";
          LINE_BREAK2["STRICT"] = "strict";
        })(LINE_BREAK || (LINE_BREAK = {}));
        var lineBreak = {
          name: "line-break",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, lineBreak2) {
            switch (lineBreak2) {
              case "strict":
                return LINE_BREAK.STRICT;
              case "normal":
              default:
                return LINE_BREAK.NORMAL;
            }
          }
        };
        var lineHeight = {
          name: "line-height",
          initialValue: "normal",
          prefix: false,
          type: 4
          /* TOKEN_VALUE */
        };
        var computeLineHeight = function(token, fontSize2) {
          if (isIdentToken(token) && token.value === "normal") {
            return 1.2 * fontSize2;
          } else if (token.type === 17) {
            return fontSize2 * token.number;
          } else if (isLengthPercentage(token)) {
            return getAbsoluteValue(token, fontSize2);
          }
          return fontSize2;
        };
        var listStyleImage = {
          name: "list-style-image",
          initialValue: "none",
          type: 0,
          prefix: false,
          parse: function(context, token) {
            if (token.type === 20 && token.value === "none") {
              return null;
            }
            return image.parse(context, token);
          }
        };
        var listStylePosition = {
          name: "list-style-position",
          initialValue: "outside",
          prefix: false,
          type: 2,
          parse: function(_context, position2) {
            switch (position2) {
              case "inside":
                return 0;
              case "outside":
              default:
                return 1;
            }
          }
        };
        var listStyleType = {
          name: "list-style-type",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, type) {
            switch (type) {
              case "disc":
                return 0;
              case "circle":
                return 1;
              case "square":
                return 2;
              case "decimal":
                return 3;
              case "cjk-decimal":
                return 4;
              case "decimal-leading-zero":
                return 5;
              case "lower-roman":
                return 6;
              case "upper-roman":
                return 7;
              case "lower-greek":
                return 8;
              case "lower-alpha":
                return 9;
              case "upper-alpha":
                return 10;
              case "arabic-indic":
                return 11;
              case "armenian":
                return 12;
              case "bengali":
                return 13;
              case "cambodian":
                return 14;
              case "cjk-earthly-branch":
                return 15;
              case "cjk-heavenly-stem":
                return 16;
              case "cjk-ideographic":
                return 17;
              case "devanagari":
                return 18;
              case "ethiopic-numeric":
                return 19;
              case "georgian":
                return 20;
              case "gujarati":
                return 21;
              case "gurmukhi":
                return 22;
              case "hebrew":
                return 22;
              case "hiragana":
                return 23;
              case "hiragana-iroha":
                return 24;
              case "japanese-formal":
                return 25;
              case "japanese-informal":
                return 26;
              case "kannada":
                return 27;
              case "katakana":
                return 28;
              case "katakana-iroha":
                return 29;
              case "khmer":
                return 30;
              case "korean-hangul-formal":
                return 31;
              case "korean-hanja-formal":
                return 32;
              case "korean-hanja-informal":
                return 33;
              case "lao":
                return 34;
              case "lower-armenian":
                return 35;
              case "malayalam":
                return 36;
              case "mongolian":
                return 37;
              case "myanmar":
                return 38;
              case "oriya":
                return 39;
              case "persian":
                return 40;
              case "simp-chinese-formal":
                return 41;
              case "simp-chinese-informal":
                return 42;
              case "tamil":
                return 43;
              case "telugu":
                return 44;
              case "thai":
                return 45;
              case "tibetan":
                return 46;
              case "trad-chinese-formal":
                return 47;
              case "trad-chinese-informal":
                return 48;
              case "upper-armenian":
                return 49;
              case "disclosure-open":
                return 50;
              case "disclosure-closed":
                return 51;
              case "none":
              default:
                return -1;
            }
          }
        };
        var marginForSide = function(side) {
          return {
            name: "margin-" + side,
            initialValue: "0",
            prefix: false,
            type: 4
            /* TOKEN_VALUE */
          };
        };
        var marginTop = marginForSide("top");
        var marginRight = marginForSide("right");
        var marginBottom = marginForSide("bottom");
        var marginLeft = marginForSide("left");
        var overflow = {
          name: "overflow",
          initialValue: "visible",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(overflow2) {
              switch (overflow2.value) {
                case "hidden":
                  return 1;
                case "scroll":
                  return 2;
                case "clip":
                  return 3;
                case "auto":
                  return 4;
                case "visible":
                default:
                  return 0;
              }
            });
          }
        };
        var overflowWrap = {
          name: "overflow-wrap",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, overflow2) {
            switch (overflow2) {
              case "break-word":
                return "break-word";
              case "normal":
              default:
                return "normal";
            }
          }
        };
        var paddingForSide = function(side) {
          return {
            name: "padding-" + side,
            initialValue: "0",
            prefix: false,
            type: 3,
            format: "length-percentage"
          };
        };
        var paddingTop = paddingForSide("top");
        var paddingRight = paddingForSide("right");
        var paddingBottom = paddingForSide("bottom");
        var paddingLeft = paddingForSide("left");
        var textAlign = {
          name: "text-align",
          initialValue: "left",
          prefix: false,
          type: 2,
          parse: function(_context, textAlign2) {
            switch (textAlign2) {
              case "right":
                return 2;
              case "center":
              case "justify":
                return 1;
              case "left":
              default:
                return 0;
            }
          }
        };
        var position = {
          name: "position",
          initialValue: "static",
          prefix: false,
          type: 2,
          parse: function(_context, position2) {
            switch (position2) {
              case "relative":
                return 1;
              case "absolute":
                return 2;
              case "fixed":
                return 3;
              case "sticky":
                return 4;
            }
            return 0;
          }
        };
        var textShadow = {
          name: "text-shadow",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
              return [];
            }
            return parseFunctionArgs(tokens).map(function(values) {
              var shadow = {
                color: COLORS.TRANSPARENT,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH
              };
              var c = 0;
              for (var i2 = 0; i2 < values.length; i2++) {
                var token = values[i2];
                if (isLength(token)) {
                  if (c === 0) {
                    shadow.offsetX = token;
                  } else if (c === 1) {
                    shadow.offsetY = token;
                  } else {
                    shadow.blur = token;
                  }
                  c++;
                } else {
                  shadow.color = color$1.parse(context, token);
                }
              }
              return shadow;
            });
          }
        };
        var textTransform = {
          name: "text-transform",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, textTransform2) {
            switch (textTransform2) {
              case "uppercase":
                return 2;
              case "lowercase":
                return 1;
              case "capitalize":
                return 3;
            }
            return 0;
          }
        };
        var transform$1 = {
          name: "transform",
          initialValue: "none",
          prefix: true,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20 && token.value === "none") {
              return null;
            }
            if (token.type === 18) {
              var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
              if (typeof transformFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported transform function "' + token.name + '"');
              }
              return transformFunction(token.values);
            }
            return null;
          }
        };
        var matrix = function(args) {
          var values = args.filter(function(arg) {
            return arg.type === 17;
          }).map(function(arg) {
            return arg.number;
          });
          return values.length === 6 ? values : null;
        };
        var matrix3d = function(args) {
          var values = args.filter(function(arg) {
            return arg.type === 17;
          }).map(function(arg) {
            return arg.number;
          });
          var a1 = values[0], b1 = values[1];
          values[2];
          values[3];
          var a2 = values[4], b2 = values[5];
          values[6];
          values[7];
          values[8];
          values[9];
          values[10];
          values[11];
          var a4 = values[12], b4 = values[13];
          values[14];
          values[15];
          return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
        };
        var SUPPORTED_TRANSFORM_FUNCTIONS = {
          matrix,
          matrix3d
        };
        var DEFAULT_VALUE = {
          type: 16,
          number: 50,
          flags: FLAG_INTEGER
        };
        var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
        var transformOrigin = {
          name: "transform-origin",
          initialValue: "50% 50%",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            var origins = tokens.filter(isLengthPercentage);
            if (origins.length !== 2) {
              return DEFAULT;
            }
            return [origins[0], origins[1]];
          }
        };
        var visibility = {
          name: "visible",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, visibility2) {
            switch (visibility2) {
              case "hidden":
                return 1;
              case "collapse":
                return 2;
              case "visible":
              default:
                return 0;
            }
          }
        };
        var WORD_BREAK;
        (function(WORD_BREAK2) {
          WORD_BREAK2["NORMAL"] = "normal";
          WORD_BREAK2["BREAK_ALL"] = "break-all";
          WORD_BREAK2["KEEP_ALL"] = "keep-all";
        })(WORD_BREAK || (WORD_BREAK = {}));
        var wordBreak = {
          name: "word-break",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, wordBreak2) {
            switch (wordBreak2) {
              case "break-all":
                return WORD_BREAK.BREAK_ALL;
              case "keep-all":
                return WORD_BREAK.KEEP_ALL;
              case "normal":
              default:
                return WORD_BREAK.NORMAL;
            }
          }
        };
        var zIndex = {
          name: "z-index",
          initialValue: "auto",
          prefix: false,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20) {
              return { auto: true, order: 0 };
            }
            if (isNumberToken(token)) {
              return { auto: false, order: token.number };
            }
            throw new Error("Invalid z-index number parsed");
          }
        };
        var time = {
          name: "time",
          parse: function(_context, value) {
            if (value.type === 15) {
              switch (value.unit.toLowerCase()) {
                case "s":
                  return 1e3 * value.number;
                case "ms":
                  return value.number;
              }
            }
            throw new Error("Unsupported time type");
          }
        };
        var opacity = {
          name: "opacity",
          initialValue: "1",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isNumberToken(token)) {
              return token.number;
            }
            return 1;
          }
        };
        var textDecorationColor = {
          name: "text-decoration-color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var textDecorationLine = {
          name: "text-decoration-line",
          initialValue: "none",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(token) {
              switch (token.value) {
                case "underline":
                  return 1;
                case "overline":
                  return 2;
                case "line-through":
                  return 3;
                case "none":
                  return 4;
              }
              return 0;
            }).filter(function(line) {
              return line !== 0;
            });
          }
        };
        var fontFamily = {
          name: "font-family",
          initialValue: "",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            var accumulator = [];
            var results = [];
            tokens.forEach(function(token) {
              switch (token.type) {
                case 20:
                case 0:
                  accumulator.push(token.value);
                  break;
                case 17:
                  accumulator.push(token.number.toString());
                  break;
                case 4:
                  results.push(accumulator.join(" "));
                  accumulator.length = 0;
                  break;
              }
            });
            if (accumulator.length) {
              results.push(accumulator.join(" "));
            }
            return results.map(function(result) {
              return result.indexOf(" ") === -1 ? result : "'" + result + "'";
            });
          }
        };
        var fontSize = {
          name: "font-size",
          initialValue: "0",
          prefix: false,
          type: 3,
          format: "length"
        };
        var fontWeight = {
          name: "font-weight",
          initialValue: "normal",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isNumberToken(token)) {
              return token.number;
            }
            if (isIdentToken(token)) {
              switch (token.value) {
                case "bold":
                  return 700;
                case "normal":
                default:
                  return 400;
              }
            }
            return 400;
          }
        };
        var fontVariant = {
          name: "font-variant",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(token) {
              return token.value;
            });
          }
        };
        var fontStyle = {
          name: "font-style",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, overflow2) {
            switch (overflow2) {
              case "oblique":
                return "oblique";
              case "italic":
                return "italic";
              case "normal":
              default:
                return "normal";
            }
          }
        };
        var contains = function(bit, value) {
          return (bit & value) !== 0;
        };
        var content = {
          name: "content",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return [];
            }
            return tokens;
          }
        };
        var counterIncrement = {
          name: "counter-increment",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return null;
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return null;
            }
            var increments = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i2 = 0; i2 < filtered.length; i2++) {
              var counter = filtered[i2];
              var next = filtered[i2 + 1];
              if (counter.type === 20) {
                var increment = next && isNumberToken(next) ? next.number : 1;
                increments.push({ counter: counter.value, increment });
              }
            }
            return increments;
          }
        };
        var counterReset = {
          name: "counter-reset",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var resets = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i2 = 0; i2 < filtered.length; i2++) {
              var counter = filtered[i2];
              var next = filtered[i2 + 1];
              if (isIdentToken(counter) && counter.value !== "none") {
                var reset = next && isNumberToken(next) ? next.number : 0;
                resets.push({ counter: counter.value, reset });
              }
            }
            return resets;
          }
        };
        var duration = {
          name: "duration",
          initialValue: "0s",
          prefix: false,
          type: 1,
          parse: function(context, tokens) {
            return tokens.filter(isDimensionToken).map(function(token) {
              return time.parse(context, token);
            });
          }
        };
        var quotes = {
          name: "quotes",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return null;
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return null;
            }
            var quotes2 = [];
            var filtered = tokens.filter(isStringToken);
            if (filtered.length % 2 !== 0) {
              return null;
            }
            for (var i2 = 0; i2 < filtered.length; i2 += 2) {
              var open_1 = filtered[i2].value;
              var close_1 = filtered[i2 + 1].value;
              quotes2.push({ open: open_1, close: close_1 });
            }
            return quotes2;
          }
        };
        var getQuote = function(quotes2, depth, open2) {
          if (!quotes2) {
            return "";
          }
          var quote = quotes2[Math.min(depth, quotes2.length - 1)];
          if (!quote) {
            return "";
          }
          return open2 ? quote.open : quote.close;
        };
        var boxShadow = {
          name: "box-shadow",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
              return [];
            }
            return parseFunctionArgs(tokens).map(function(values) {
              var shadow = {
                color: 255,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH,
                spread: ZERO_LENGTH,
                inset: false
              };
              var c = 0;
              for (var i2 = 0; i2 < values.length; i2++) {
                var token = values[i2];
                if (isIdentWithValue(token, "inset")) {
                  shadow.inset = true;
                } else if (isLength(token)) {
                  if (c === 0) {
                    shadow.offsetX = token;
                  } else if (c === 1) {
                    shadow.offsetY = token;
                  } else if (c === 2) {
                    shadow.blur = token;
                  } else {
                    shadow.spread = token;
                  }
                  c++;
                } else {
                  shadow.color = color$1.parse(context, token);
                }
              }
              return shadow;
            });
          }
        };
        var paintOrder = {
          name: "paint-order",
          initialValue: "normal",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            var DEFAULT_VALUE2 = [
              0,
              1,
              2
              /* MARKERS */
            ];
            var layers = [];
            tokens.filter(isIdentToken).forEach(function(token) {
              switch (token.value) {
                case "stroke":
                  layers.push(
                    1
                    /* STROKE */
                  );
                  break;
                case "fill":
                  layers.push(
                    0
                    /* FILL */
                  );
                  break;
                case "markers":
                  layers.push(
                    2
                    /* MARKERS */
                  );
                  break;
              }
            });
            DEFAULT_VALUE2.forEach(function(value) {
              if (layers.indexOf(value) === -1) {
                layers.push(value);
              }
            });
            return layers;
          }
        };
        var webkitTextStrokeColor = {
          name: "-webkit-text-stroke-color",
          initialValue: "currentcolor",
          prefix: false,
          type: 3,
          format: "color"
        };
        var webkitTextStrokeWidth = {
          name: "-webkit-text-stroke-width",
          initialValue: "0",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isDimensionToken(token)) {
              return token.number;
            }
            return 0;
          }
        };
        var CSSParsedDeclaration = (
          /** @class */
          function() {
            function CSSParsedDeclaration2(context, declaration) {
              var _a, _b;
              this.animationDuration = parse(context, duration, declaration.animationDuration);
              this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
              this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
              this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
              this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
              this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
              this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
              this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
              this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
              this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
              this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
              this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
              this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
              this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
              this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
              this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
              this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
              this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
              this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
              this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
              this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
              this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
              this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
              this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
              this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
              this.color = parse(context, color, declaration.color);
              this.direction = parse(context, direction, declaration.direction);
              this.display = parse(context, display, declaration.display);
              this.float = parse(context, float, declaration.cssFloat);
              this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
              this.fontSize = parse(context, fontSize, declaration.fontSize);
              this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
              this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
              this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
              this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
              this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
              this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
              this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
              this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
              this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
              this.marginTop = parse(context, marginTop, declaration.marginTop);
              this.marginRight = parse(context, marginRight, declaration.marginRight);
              this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
              this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
              this.opacity = parse(context, opacity, declaration.opacity);
              var overflowTuple = parse(context, overflow, declaration.overflow);
              this.overflowX = overflowTuple[0];
              this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
              this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
              this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
              this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
              this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
              this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
              this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
              this.position = parse(context, position, declaration.position);
              this.textAlign = parse(context, textAlign, declaration.textAlign);
              this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
              this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
              this.textShadow = parse(context, textShadow, declaration.textShadow);
              this.textTransform = parse(context, textTransform, declaration.textTransform);
              this.transform = parse(context, transform$1, declaration.transform);
              this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
              this.visibility = parse(context, visibility, declaration.visibility);
              this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
              this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
              this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
              this.zIndex = parse(context, zIndex, declaration.zIndex);
            }
            CSSParsedDeclaration2.prototype.isVisible = function() {
              return this.display > 0 && this.opacity > 0 && this.visibility === 0;
            };
            CSSParsedDeclaration2.prototype.isTransparent = function() {
              return isTransparent(this.backgroundColor);
            };
            CSSParsedDeclaration2.prototype.isTransformed = function() {
              return this.transform !== null;
            };
            CSSParsedDeclaration2.prototype.isPositioned = function() {
              return this.position !== 0;
            };
            CSSParsedDeclaration2.prototype.isPositionedWithZIndex = function() {
              return this.isPositioned() && !this.zIndex.auto;
            };
            CSSParsedDeclaration2.prototype.isFloating = function() {
              return this.float !== 0;
            };
            CSSParsedDeclaration2.prototype.isInlineLevel = function() {
              return contains(
                this.display,
                4
                /* INLINE */
              ) || contains(
                this.display,
                33554432
                /* INLINE_BLOCK */
              ) || contains(
                this.display,
                268435456
                /* INLINE_FLEX */
              ) || contains(
                this.display,
                536870912
                /* INLINE_GRID */
              ) || contains(
                this.display,
                67108864
                /* INLINE_LIST_ITEM */
              ) || contains(
                this.display,
                134217728
                /* INLINE_TABLE */
              );
            };
            return CSSParsedDeclaration2;
          }()
        );
        var CSSParsedPseudoDeclaration = (
          /** @class */
          /* @__PURE__ */ function() {
            function CSSParsedPseudoDeclaration2(context, declaration) {
              this.content = parse(context, content, declaration.content);
              this.quotes = parse(context, quotes, declaration.quotes);
            }
            return CSSParsedPseudoDeclaration2;
          }()
        );
        var CSSParsedCounterDeclaration = (
          /** @class */
          /* @__PURE__ */ function() {
            function CSSParsedCounterDeclaration2(context, declaration) {
              this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
              this.counterReset = parse(context, counterReset, declaration.counterReset);
            }
            return CSSParsedCounterDeclaration2;
          }()
        );
        var parse = function(context, descriptor, style) {
          var tokenizer = new Tokenizer();
          var value = style !== null && typeof style !== "undefined" ? style.toString() : descriptor.initialValue;
          tokenizer.write(value);
          var parser = new Parser(tokenizer.read());
          switch (descriptor.type) {
            case 2:
              var token = parser.parseComponentValue();
              return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
            case 0:
              return descriptor.parse(context, parser.parseComponentValue());
            case 1:
              return descriptor.parse(context, parser.parseComponentValues());
            case 4:
              return parser.parseComponentValue();
            case 3:
              switch (descriptor.format) {
                case "angle":
                  return angle.parse(context, parser.parseComponentValue());
                case "color":
                  return color$1.parse(context, parser.parseComponentValue());
                case "image":
                  return image.parse(context, parser.parseComponentValue());
                case "length":
                  var length_1 = parser.parseComponentValue();
                  return isLength(length_1) ? length_1 : ZERO_LENGTH;
                case "length-percentage":
                  var value_1 = parser.parseComponentValue();
                  return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                case "time":
                  return time.parse(context, parser.parseComponentValue());
              }
              break;
          }
        };
        var elementDebuggerAttribute = "data-html2canvas-debug";
        var getElementDebugType = function(element) {
          var attribute = element.getAttribute(elementDebuggerAttribute);
          switch (attribute) {
            case "all":
              return 1;
            case "clone":
              return 2;
            case "parse":
              return 3;
            case "render":
              return 4;
            default:
              return 0;
          }
        };
        var isDebugging = function(element, type) {
          var elementType = getElementDebugType(element);
          return elementType === 1 || type === elementType;
        };
        var ElementContainer = (
          /** @class */
          /* @__PURE__ */ function() {
            function ElementContainer2(context, element) {
              this.context = context;
              this.textNodes = [];
              this.elements = [];
              this.flags = 0;
              if (isDebugging(
                element,
                3
                /* PARSE */
              )) {
                debugger;
              }
              this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
              if (isHTMLElementNode(element)) {
                if (this.styles.animationDuration.some(function(duration2) {
                  return duration2 > 0;
                })) {
                  element.style.animationDuration = "0s";
                }
                if (this.styles.transform !== null) {
                  element.style.transform = "none";
                }
              }
              this.bounds = parseBounds(this.context, element);
              if (isDebugging(
                element,
                4
                /* RENDER */
              )) {
                this.flags |= 16;
              }
            }
            return ElementContainer2;
          }()
        );
        var base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=";
        var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
          lookup$1[chars$1.charCodeAt(i$1)] = i$1;
        }
        var decode = function(base642) {
          var bufferLength = base642.length * 0.75, len = base642.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
          if (base642[base642.length - 1] === "=") {
            bufferLength--;
            if (base642[base642.length - 2] === "=") {
              bufferLength--;
            }
          }
          var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
          var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
          for (i2 = 0; i2 < len; i2 += 4) {
            encoded1 = lookup$1[base642.charCodeAt(i2)];
            encoded2 = lookup$1[base642.charCodeAt(i2 + 1)];
            encoded3 = lookup$1[base642.charCodeAt(i2 + 2)];
            encoded4 = lookup$1[base642.charCodeAt(i2 + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }
          return buffer;
        };
        var polyUint16Array = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 2) {
            bytes.push(buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var polyUint32Array = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 4) {
            bytes.push(buffer[i2 + 3] << 24 | buffer[i2 + 2] << 16 | buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var UTRIE2_SHIFT_2 = 5;
        var UTRIE2_SHIFT_1 = 6 + 5;
        var UTRIE2_INDEX_SHIFT = 2;
        var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
        var UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> UTRIE2_SHIFT_2;
        var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
        var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> UTRIE2_SHIFT_2;
        var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 2048 >> 6;
        var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> UTRIE2_SHIFT_1;
        var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
        var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
        var slice16 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };
        var slice32 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };
        var createTrieFromBase64 = function(base642, _byteLength) {
          var buffer = decode(base642);
          var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
          var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
          var headerLength = 24;
          var index = slice16(view16, headerLength / 2, view32[4] / 2);
          var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
          return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie = (
          /** @class */
          function() {
            function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
              this.initialValue = initialValue;
              this.errorValue = errorValue;
              this.highStart = highStart;
              this.highValueIndex = highValueIndex;
              this.index = index;
              this.data = data;
            }
            Trie2.prototype.get = function(codePoint) {
              var ix;
              if (codePoint >= 0) {
                if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
                  ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                  ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                  return this.data[ix];
                }
                if (codePoint <= 65535) {
                  ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 55296 >> UTRIE2_SHIFT_2)];
                  ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                  return this.data[ix];
                }
                if (codePoint < this.highStart) {
                  ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                  ix = this.index[ix];
                  ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                  ix = this.index[ix];
                  ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                  return this.data[ix];
                }
                if (codePoint <= 1114111) {
                  return this.data[this.highValueIndex];
                }
              }
              return this.errorValue;
            };
            return Trie2;
          }()
        );
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i = 0; i < chars.length; i++) {
          lookup[chars.charCodeAt(i)] = i;
        }
        var Prepend = 1;
        var CR = 2;
        var LF = 3;
        var Control = 4;
        var Extend = 5;
        var SpacingMark = 7;
        var L = 8;
        var V = 9;
        var T = 10;
        var LV = 11;
        var LVT = 12;
        var ZWJ = 13;
        var Extended_Pictographic = 14;
        var RI = 15;
        var toCodePoints = function(str) {
          var codePoints = [];
          var i2 = 0;
          var length = str.length;
          while (i2 < length) {
            var value = str.charCodeAt(i2++);
            if (value >= 55296 && value <= 56319 && i2 < length) {
              var extra = str.charCodeAt(i2++);
              if ((extra & 64512) === 56320) {
                codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                codePoints.push(value);
                i2--;
              }
            } else {
              codePoints.push(value);
            }
          }
          return codePoints;
        };
        var fromCodePoint = function() {
          var codePoints = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
          }
          if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
          }
          var length = codePoints.length;
          if (!length) {
            return "";
          }
          var codeUnits = [];
          var index = -1;
          var result = "";
          while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
            }
            if (index + 1 === length || codeUnits.length > 16384) {
              result += String.fromCharCode.apply(String, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        var UnicodeTrie = createTrieFromBase64(base64);
        var BREAK_NOT_ALLOWED = "\xD7";
        var BREAK_ALLOWED = "\xF7";
        var codePointToClass = function(codePoint) {
          return UnicodeTrie.get(codePoint);
        };
        var _graphemeBreakAtIndex = function(_codePoints, classTypes, index) {
          var prevIndex = index - 2;
          var prev = classTypes[prevIndex];
          var current = classTypes[index - 1];
          var next = classTypes[index];
          if (current === CR && next === LF) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === CR || current === LF || current === Control) {
            return BREAK_ALLOWED;
          }
          if (next === CR || next === LF || next === Control) {
            return BREAK_ALLOWED;
          }
          if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
          }
          if ((current === LV || current === V) && (next === V || next === T)) {
            return BREAK_NOT_ALLOWED;
          }
          if ((current === LVT || current === T) && next === T) {
            return BREAK_NOT_ALLOWED;
          }
          if (next === ZWJ || next === Extend) {
            return BREAK_NOT_ALLOWED;
          }
          if (next === SpacingMark) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === Prepend) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === ZWJ && next === Extended_Pictographic) {
            while (prev === Extend) {
              prev = classTypes[--prevIndex];
            }
            if (prev === Extended_Pictographic) {
              return BREAK_NOT_ALLOWED;
            }
          }
          if (current === RI && next === RI) {
            var countRI = 0;
            while (prev === RI) {
              countRI++;
              prev = classTypes[--prevIndex];
            }
            if (countRI % 2 === 0) {
              return BREAK_NOT_ALLOWED;
            }
          }
          return BREAK_ALLOWED;
        };
        var GraphemeBreaker = function(str) {
          var codePoints = toCodePoints(str);
          var length = codePoints.length;
          var index = 0;
          var lastEnd = 0;
          var classTypes = codePoints.map(codePointToClass);
          return {
            next: function() {
              if (index >= length) {
                return { done: true, value: null };
              }
              var graphemeBreak = BREAK_NOT_ALLOWED;
              while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {
              }
              if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                lastEnd = index;
                return { value, done: false };
              }
              return { done: true, value: null };
            }
          };
        };
        var splitGraphemes = function(str) {
          var breaker = GraphemeBreaker(str);
          var graphemes = [];
          var bk;
          while (!(bk = breaker.next()).done) {
            if (bk.value) {
              graphemes.push(bk.value.slice());
            }
          }
          return graphemes;
        };
        var testRangeBounds = function(document2) {
          var TEST_HEIGHT = 123;
          if (document2.createRange) {
            var range = document2.createRange();
            if (range.getBoundingClientRect) {
              var testElement = document2.createElement("boundtest");
              testElement.style.height = TEST_HEIGHT + "px";
              testElement.style.display = "block";
              document2.body.appendChild(testElement);
              range.selectNode(testElement);
              var rangeBounds = range.getBoundingClientRect();
              var rangeHeight = Math.round(rangeBounds.height);
              document2.body.removeChild(testElement);
              if (rangeHeight === TEST_HEIGHT) {
                return true;
              }
            }
          }
          return false;
        };
        var testIOSLineBreak = function(document2) {
          var testElement = document2.createElement("boundtest");
          testElement.style.width = "50px";
          testElement.style.display = "block";
          testElement.style.fontSize = "12px";
          testElement.style.letterSpacing = "0px";
          testElement.style.wordSpacing = "0px";
          document2.body.appendChild(testElement);
          var range = document2.createRange();
          testElement.innerHTML = typeof "".repeat === "function" ? "&#128104;".repeat(10) : "";
          var node = testElement.firstChild;
          var textList = toCodePoints$1(node.data).map(function(i2) {
            return fromCodePoint$1(i2);
          });
          var offset = 0;
          var prev = {};
          var supports = textList.every(function(text, i2) {
            range.setStart(node, offset);
            range.setEnd(node, offset + text.length);
            var rect = range.getBoundingClientRect();
            offset += text.length;
            var boundAhead = rect.x > prev.x || rect.y > prev.y;
            prev = rect;
            if (i2 === 0) {
              return true;
            }
            return boundAhead;
          });
          document2.body.removeChild(testElement);
          return supports;
        };
        var testCORS = function() {
          return typeof new Image().crossOrigin !== "undefined";
        };
        var testResponseType = function() {
          return typeof new XMLHttpRequest().responseType === "string";
        };
        var testSVG = function(document2) {
          var img = new Image();
          var canvas = document2.createElement("canvas");
          var ctx = canvas.getContext("2d");
          if (!ctx) {
            return false;
          }
          img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
          try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
          } catch (e2) {
            return false;
          }
          return true;
        };
        var isGreenPixel = function(data) {
          return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
        };
        var testForeignObject = function(document2) {
          var canvas = document2.createElement("canvas");
          var size = 100;
          canvas.width = size;
          canvas.height = size;
          var ctx = canvas.getContext("2d");
          if (!ctx) {
            return Promise.reject(false);
          }
          ctx.fillStyle = "rgb(0, 255, 0)";
          ctx.fillRect(0, 0, size, size);
          var img = new Image();
          var greenImageSrc = canvas.toDataURL();
          img.src = greenImageSrc;
          var svg = createForeignObjectSVG(size, size, 0, 0, img);
          ctx.fillStyle = "red";
          ctx.fillRect(0, 0, size, size);
          return loadSerializedSVG$1(svg).then(function(img2) {
            ctx.drawImage(img2, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = "red";
            ctx.fillRect(0, 0, size, size);
            var node = document2.createElement("div");
            node.style.backgroundImage = "url(" + greenImageSrc + ")";
            node.style.height = size + "px";
            return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
          }).then(function(img2) {
            ctx.drawImage(img2, 0, 0);
            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
          }).catch(function() {
            return false;
          });
        };
        var createForeignObjectSVG = function(width, height, x, y, node) {
          var xmlns = "http://www.w3.org/2000/svg";
          var svg = document.createElementNS(xmlns, "svg");
          var foreignObject = document.createElementNS(xmlns, "foreignObject");
          svg.setAttributeNS(null, "width", width.toString());
          svg.setAttributeNS(null, "height", height.toString());
          foreignObject.setAttributeNS(null, "width", "100%");
          foreignObject.setAttributeNS(null, "height", "100%");
          foreignObject.setAttributeNS(null, "x", x.toString());
          foreignObject.setAttributeNS(null, "y", y.toString());
          foreignObject.setAttributeNS(null, "externalResourcesRequired", "true");
          svg.appendChild(foreignObject);
          foreignObject.appendChild(node);
          return svg;
        };
        var loadSerializedSVG$1 = function(svg) {
          return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
              return resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
          });
        };
        var FEATURES = {
          get SUPPORT_RANGE_BOUNDS() {
            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", { value });
            return value;
          },
          get SUPPORT_WORD_BREAKING() {
            var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", { value });
            return value;
          },
          get SUPPORT_SVG_DRAWING() {
            var value = testSVG(document);
            Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", { value });
            return value;
          },
          get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var value = typeof Array.from === "function" && typeof window.fetch === "function" ? testForeignObject(document) : Promise.resolve(false);
            Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", { value });
            return value;
          },
          get SUPPORT_CORS_IMAGES() {
            var value = testCORS();
            Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", { value });
            return value;
          },
          get SUPPORT_RESPONSE_TYPE() {
            var value = testResponseType();
            Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", { value });
            return value;
          },
          get SUPPORT_CORS_XHR() {
            var value = "withCredentials" in new XMLHttpRequest();
            Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", { value });
            return value;
          },
          get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
            var value = !!(typeof Intl !== "undefined" && Intl.Segmenter);
            Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value });
            return value;
          }
        };
        var TextBounds = (
          /** @class */
          /* @__PURE__ */ function() {
            function TextBounds2(text, bounds) {
              this.text = text;
              this.bounds = bounds;
            }
            return TextBounds2;
          }()
        );
        var parseTextBounds = function(context, value, styles, node) {
          var textList = breakText(value, styles);
          var textBounds = [];
          var offset = 0;
          textList.forEach(function(text) {
            if (styles.textDecorationLine.length || text.trim().length > 0) {
              if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                var clientRects = createRange(node, offset, text.length).getClientRects();
                if (clientRects.length > 1) {
                  var subSegments = segmentGraphemes(text);
                  var subOffset_1 = 0;
                  subSegments.forEach(function(subSegment) {
                    textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                    subOffset_1 += subSegment.length;
                  });
                } else {
                  textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                }
              } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                node = replacementNode;
              }
            } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
              node = node.splitText(text.length);
            }
            offset += text.length;
          });
          return textBounds;
        };
        var getWrapperBounds = function(context, node) {
          var ownerDocument = node.ownerDocument;
          if (ownerDocument) {
            var wrapper = ownerDocument.createElement("html2canvaswrapper");
            wrapper.appendChild(node.cloneNode(true));
            var parentNode = node.parentNode;
            if (parentNode) {
              parentNode.replaceChild(wrapper, node);
              var bounds = parseBounds(context, wrapper);
              if (wrapper.firstChild) {
                parentNode.replaceChild(wrapper.firstChild, wrapper);
              }
              return bounds;
            }
          }
          return Bounds.EMPTY;
        };
        var createRange = function(node, offset, length) {
          var ownerDocument = node.ownerDocument;
          if (!ownerDocument) {
            throw new Error("Node has no owner document");
          }
          var range = ownerDocument.createRange();
          range.setStart(node, offset);
          range.setEnd(node, offset + length);
          return range;
        };
        var segmentGraphemes = function(value) {
          if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            var segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
            return Array.from(segmenter.segment(value)).map(function(segment) {
              return segment.segment;
            });
          }
          return splitGraphemes(value);
        };
        var segmentWords = function(value, styles) {
          if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            var segmenter = new Intl.Segmenter(void 0, {
              granularity: "word"
            });
            return Array.from(segmenter.segment(value)).map(function(segment) {
              return segment.segment;
            });
          }
          return breakWords(value, styles);
        };
        var breakText = function(value, styles) {
          return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
        };
        var wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241];
        var breakWords = function(str, styles) {
          var breaker = LineBreaker(str, {
            lineBreak: styles.lineBreak,
            wordBreak: styles.overflowWrap === "break-word" ? "break-word" : styles.wordBreak
          });
          var words = [];
          var bk;
          var _loop_1 = function() {
            if (bk.value) {
              var value = bk.value.slice();
              var codePoints = toCodePoints$1(value);
              var word_1 = "";
              codePoints.forEach(function(codePoint) {
                if (wordSeparators.indexOf(codePoint) === -1) {
                  word_1 += fromCodePoint$1(codePoint);
                } else {
                  if (word_1.length) {
                    words.push(word_1);
                  }
                  words.push(fromCodePoint$1(codePoint));
                  word_1 = "";
                }
              });
              if (word_1.length) {
                words.push(word_1);
              }
            }
          };
          while (!(bk = breaker.next()).done) {
            _loop_1();
          }
          return words;
        };
        var TextContainer = (
          /** @class */
          /* @__PURE__ */ function() {
            function TextContainer2(context, node, styles) {
              this.text = transform(node.data, styles.textTransform);
              this.textBounds = parseTextBounds(context, this.text, styles, node);
            }
            return TextContainer2;
          }()
        );
        var transform = function(text, transform2) {
          switch (transform2) {
            case 1:
              return text.toLowerCase();
            case 3:
              return text.replace(CAPITALIZE, capitalize);
            case 2:
              return text.toUpperCase();
            default:
              return text;
          }
        };
        var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
        var capitalize = function(m, p1, p2) {
          if (m.length > 0) {
            return p1 + p2.toUpperCase();
          }
          return m;
        };
        var ImageElementContainer = (
          /** @class */
          function(_super) {
            __extends(ImageElementContainer2, _super);
            function ImageElementContainer2(context, img) {
              var _this = _super.call(this, context, img) || this;
              _this.src = img.currentSrc || img.src;
              _this.intrinsicWidth = img.naturalWidth;
              _this.intrinsicHeight = img.naturalHeight;
              _this.context.cache.addImage(_this.src);
              return _this;
            }
            return ImageElementContainer2;
          }(ElementContainer)
        );
        var CanvasElementContainer = (
          /** @class */
          function(_super) {
            __extends(CanvasElementContainer2, _super);
            function CanvasElementContainer2(context, canvas) {
              var _this = _super.call(this, context, canvas) || this;
              _this.canvas = canvas;
              _this.intrinsicWidth = canvas.width;
              _this.intrinsicHeight = canvas.height;
              return _this;
            }
            return CanvasElementContainer2;
          }(ElementContainer)
        );
        var SVGElementContainer = (
          /** @class */
          function(_super) {
            __extends(SVGElementContainer2, _super);
            function SVGElementContainer2(context, img) {
              var _this = _super.call(this, context, img) || this;
              var s = new XMLSerializer();
              var bounds = parseBounds(context, img);
              img.setAttribute("width", bounds.width + "px");
              img.setAttribute("height", bounds.height + "px");
              _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
              _this.intrinsicWidth = img.width.baseVal.value;
              _this.intrinsicHeight = img.height.baseVal.value;
              _this.context.cache.addImage(_this.svg);
              return _this;
            }
            return SVGElementContainer2;
          }(ElementContainer)
        );
        var LIElementContainer = (
          /** @class */
          function(_super) {
            __extends(LIElementContainer2, _super);
            function LIElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              _this.value = element.value;
              return _this;
            }
            return LIElementContainer2;
          }(ElementContainer)
        );
        var OLElementContainer = (
          /** @class */
          function(_super) {
            __extends(OLElementContainer2, _super);
            function OLElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              _this.start = element.start;
              _this.reversed = typeof element.reversed === "boolean" && element.reversed === true;
              return _this;
            }
            return OLElementContainer2;
          }(ElementContainer)
        );
        var CHECKBOX_BORDER_RADIUS = [
          {
            type: 15,
            flags: 0,
            unit: "px",
            number: 3
          }
        ];
        var RADIO_BORDER_RADIUS = [
          {
            type: 16,
            flags: 0,
            number: 50
          }
        ];
        var reformatInputBounds = function(bounds) {
          if (bounds.width > bounds.height) {
            return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
          } else if (bounds.width < bounds.height) {
            return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
          }
          return bounds;
        };
        var getInputValue = function(node) {
          var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("\u2022") : node.value;
          return value.length === 0 ? node.placeholder || "" : value;
        };
        var CHECKBOX = "checkbox";
        var RADIO = "radio";
        var PASSWORD = "password";
        var INPUT_COLOR = 707406591;
        var InputElementContainer = (
          /** @class */
          function(_super) {
            __extends(InputElementContainer2, _super);
            function InputElementContainer2(context, input) {
              var _this = _super.call(this, context, input) || this;
              _this.type = input.type.toLowerCase();
              _this.checked = input.checked;
              _this.value = getInputValue(input);
              if (_this.type === CHECKBOX || _this.type === RADIO) {
                _this.styles.backgroundColor = 3739148031;
                _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 2779096575;
                _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
                _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1;
                _this.styles.backgroundClip = [
                  0
                  /* BORDER_BOX */
                ];
                _this.styles.backgroundOrigin = [
                  0
                  /* BORDER_BOX */
                ];
                _this.bounds = reformatInputBounds(_this.bounds);
              }
              switch (_this.type) {
                case CHECKBOX:
                  _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
                  break;
                case RADIO:
                  _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
                  break;
              }
              return _this;
            }
            return InputElementContainer2;
          }(ElementContainer)
        );
        var SelectElementContainer = (
          /** @class */
          function(_super) {
            __extends(SelectElementContainer2, _super);
            function SelectElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              var option = element.options[element.selectedIndex || 0];
              _this.value = option ? option.text || "" : "";
              return _this;
            }
            return SelectElementContainer2;
          }(ElementContainer)
        );
        var TextareaElementContainer = (
          /** @class */
          function(_super) {
            __extends(TextareaElementContainer2, _super);
            function TextareaElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              _this.value = element.value;
              return _this;
            }
            return TextareaElementContainer2;
          }(ElementContainer)
        );
        var IFrameElementContainer = (
          /** @class */
          function(_super) {
            __extends(IFrameElementContainer2, _super);
            function IFrameElementContainer2(context, iframe) {
              var _this = _super.call(this, context, iframe) || this;
              _this.src = iframe.src;
              _this.width = parseInt(iframe.width, 10) || 0;
              _this.height = parseInt(iframe.height, 10) || 0;
              _this.backgroundColor = _this.styles.backgroundColor;
              try {
                if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
                  _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
                  var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
                  var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
                  _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
                }
              } catch (e2) {
              }
              return _this;
            }
            return IFrameElementContainer2;
          }(ElementContainer)
        );
        var LIST_OWNERS = ["OL", "UL", "MENU"];
        var parseNodeTree = function(context, node, parent, root) {
          for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
            nextNode = childNode.nextSibling;
            if (isTextNode(childNode) && childNode.data.trim().length > 0) {
              parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
            } else if (isElementNode(childNode)) {
              if (isSlotElement(childNode) && childNode.assignedNodes) {
                childNode.assignedNodes().forEach(function(childNode2) {
                  return parseNodeTree(context, childNode2, parent, root);
                });
              } else {
                var container = createContainer(context, childNode);
                if (container.styles.isVisible()) {
                  if (createsRealStackingContext(childNode, container, root)) {
                    container.flags |= 4;
                  } else if (createsStackingContext(container.styles)) {
                    container.flags |= 2;
                  }
                  if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                    container.flags |= 8;
                  }
                  parent.elements.push(container);
                  childNode.slot;
                  if (childNode.shadowRoot) {
                    parseNodeTree(context, childNode.shadowRoot, container, root);
                  } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
                    parseNodeTree(context, childNode, container, root);
                  }
                }
              }
            }
          }
        };
        var createContainer = function(context, element) {
          if (isImageElement(element)) {
            return new ImageElementContainer(context, element);
          }
          if (isCanvasElement(element)) {
            return new CanvasElementContainer(context, element);
          }
          if (isSVGElement(element)) {
            return new SVGElementContainer(context, element);
          }
          if (isLIElement(element)) {
            return new LIElementContainer(context, element);
          }
          if (isOLElement(element)) {
            return new OLElementContainer(context, element);
          }
          if (isInputElement(element)) {
            return new InputElementContainer(context, element);
          }
          if (isSelectElement(element)) {
            return new SelectElementContainer(context, element);
          }
          if (isTextareaElement(element)) {
            return new TextareaElementContainer(context, element);
          }
          if (isIFrameElement(element)) {
            return new IFrameElementContainer(context, element);
          }
          return new ElementContainer(context, element);
        };
        var parseTree = function(context, element) {
          var container = createContainer(context, element);
          container.flags |= 4;
          parseNodeTree(context, element, container, container);
          return container;
        };
        var createsRealStackingContext = function(node, container, root) {
          return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
        };
        var createsStackingContext = function(styles) {
          return styles.isPositioned() || styles.isFloating();
        };
        var isTextNode = function(node) {
          return node.nodeType === Node.TEXT_NODE;
        };
        var isElementNode = function(node) {
          return node.nodeType === Node.ELEMENT_NODE;
        };
        var isHTMLElementNode = function(node) {
          return isElementNode(node) && typeof node.style !== "undefined" && !isSVGElementNode(node);
        };
        var isSVGElementNode = function(element) {
          return typeof element.className === "object";
        };
        var isLIElement = function(node) {
          return node.tagName === "LI";
        };
        var isOLElement = function(node) {
          return node.tagName === "OL";
        };
        var isInputElement = function(node) {
          return node.tagName === "INPUT";
        };
        var isHTMLElement = function(node) {
          return node.tagName === "HTML";
        };
        var isSVGElement = function(node) {
          return node.tagName === "svg";
        };
        var isBodyElement = function(node) {
          return node.tagName === "BODY";
        };
        var isCanvasElement = function(node) {
          return node.tagName === "CANVAS";
        };
        var isVideoElement = function(node) {
          return node.tagName === "VIDEO";
        };
        var isImageElement = function(node) {
          return node.tagName === "IMG";
        };
        var isIFrameElement = function(node) {
          return node.tagName === "IFRAME";
        };
        var isStyleElement = function(node) {
          return node.tagName === "STYLE";
        };
        var isScriptElement = function(node) {
          return node.tagName === "SCRIPT";
        };
        var isTextareaElement = function(node) {
          return node.tagName === "TEXTAREA";
        };
        var isSelectElement = function(node) {
          return node.tagName === "SELECT";
        };
        var isSlotElement = function(node) {
          return node.tagName === "SLOT";
        };
        var isCustomElement = function(node) {
          return node.tagName.indexOf("-") > 0;
        };
        var CounterState = (
          /** @class */
          function() {
            function CounterState2() {
              this.counters = {};
            }
            CounterState2.prototype.getCounterValue = function(name) {
              var counter = this.counters[name];
              if (counter && counter.length) {
                return counter[counter.length - 1];
              }
              return 1;
            };
            CounterState2.prototype.getCounterValues = function(name) {
              var counter = this.counters[name];
              return counter ? counter : [];
            };
            CounterState2.prototype.pop = function(counters) {
              var _this = this;
              counters.forEach(function(counter) {
                return _this.counters[counter].pop();
              });
            };
            CounterState2.prototype.parse = function(style) {
              var _this = this;
              var counterIncrement2 = style.counterIncrement;
              var counterReset2 = style.counterReset;
              var canReset = true;
              if (counterIncrement2 !== null) {
                counterIncrement2.forEach(function(entry) {
                  var counter = _this.counters[entry.counter];
                  if (counter && entry.increment !== 0) {
                    canReset = false;
                    if (!counter.length) {
                      counter.push(1);
                    }
                    counter[Math.max(0, counter.length - 1)] += entry.increment;
                  }
                });
              }
              var counterNames = [];
              if (canReset) {
                counterReset2.forEach(function(entry) {
                  var counter = _this.counters[entry.counter];
                  counterNames.push(entry.counter);
                  if (!counter) {
                    counter = _this.counters[entry.counter] = [];
                  }
                  counter.push(entry.reset);
                });
              }
              return counterNames;
            };
            return CounterState2;
          }()
        );
        var ROMAN_UPPER = {
          integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
          values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        };
        var ARMENIAN = {
          integers: [
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u0554",
            "\u0553",
            "\u0552",
            "\u0551",
            "\u0550",
            "\u054F",
            "\u054E",
            "\u054D",
            "\u054C",
            "\u054B",
            "\u054A",
            "\u0549",
            "\u0548",
            "\u0547",
            "\u0546",
            "\u0545",
            "\u0544",
            "\u0543",
            "\u0542",
            "\u0541",
            "\u0540",
            "\u053F",
            "\u053E",
            "\u053D",
            "\u053C",
            "\u053B",
            "\u053A",
            "\u0539",
            "\u0538",
            "\u0537",
            "\u0536",
            "\u0535",
            "\u0534",
            "\u0533",
            "\u0532",
            "\u0531"
          ]
        };
        var HEBREW = {
          integers: [
            1e4,
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            19,
            18,
            17,
            16,
            15,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u05D9\u05F3",
            "\u05D8\u05F3",
            "\u05D7\u05F3",
            "\u05D6\u05F3",
            "\u05D5\u05F3",
            "\u05D4\u05F3",
            "\u05D3\u05F3",
            "\u05D2\u05F3",
            "\u05D1\u05F3",
            "\u05D0\u05F3",
            "\u05EA",
            "\u05E9",
            "\u05E8",
            "\u05E7",
            "\u05E6",
            "\u05E4",
            "\u05E2",
            "\u05E1",
            "\u05E0",
            "\u05DE",
            "\u05DC",
            "\u05DB",
            "\u05D9\u05D8",
            "\u05D9\u05D7",
            "\u05D9\u05D6",
            "\u05D8\u05D6",
            "\u05D8\u05D5",
            "\u05D9",
            "\u05D8",
            "\u05D7",
            "\u05D6",
            "\u05D5",
            "\u05D4",
            "\u05D3",
            "\u05D2",
            "\u05D1",
            "\u05D0"
          ]
        };
        var GEORGIAN = {
          integers: [
            1e4,
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u10F5",
            "\u10F0",
            "\u10EF",
            "\u10F4",
            "\u10EE",
            "\u10ED",
            "\u10EC",
            "\u10EB",
            "\u10EA",
            "\u10E9",
            "\u10E8",
            "\u10E7",
            "\u10E6",
            "\u10E5",
            "\u10E4",
            "\u10F3",
            "\u10E2",
            "\u10E1",
            "\u10E0",
            "\u10DF",
            "\u10DE",
            "\u10DD",
            "\u10F2",
            "\u10DC",
            "\u10DB",
            "\u10DA",
            "\u10D9",
            "\u10D8",
            "\u10D7",
            "\u10F1",
            "\u10D6",
            "\u10D5",
            "\u10D4",
            "\u10D3",
            "\u10D2",
            "\u10D1",
            "\u10D0"
          ]
        };
        var createAdditiveCounter = function(value, min, max, symbols, fallback, suffix) {
          if (value < min || value > max) {
            return createCounterText(value, fallback, suffix.length > 0);
          }
          return symbols.integers.reduce(function(string, integer, index) {
            while (value >= integer) {
              value -= integer;
              string += symbols.values[index];
            }
            return string;
          }, "") + suffix;
        };
        var createCounterStyleWithSymbolResolver = function(value, codePointRangeLength, isNumeric, resolver) {
          var string = "";
          do {
            if (!isNumeric) {
              value--;
            }
            string = resolver(value) + string;
            value /= codePointRangeLength;
          } while (value * codePointRangeLength >= codePointRangeLength);
          return string;
        };
        var createCounterStyleFromRange = function(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
          var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
          return (value < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
            return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
          }) + suffix);
        };
        var createCounterStyleFromSymbols = function(value, symbols, suffix) {
          if (suffix === void 0) {
            suffix = ". ";
          }
          var codePointRangeLength = symbols.length;
          return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
            return symbols[Math.floor(codePoint % codePointRangeLength)];
          }) + suffix;
        };
        var CJK_ZEROS = 1 << 0;
        var CJK_TEN_COEFFICIENTS = 1 << 1;
        var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
        var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
        var createCJKCounter = function(value, numbers, multipliers, negativeSign, suffix, flags) {
          if (value < -9999 || value > 9999) {
            return createCounterText(value, 4, suffix.length > 0);
          }
          var tmp = Math.abs(value);
          var string = suffix;
          if (tmp === 0) {
            return numbers[0] + string;
          }
          for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
            var coefficient = tmp % 10;
            if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== "") {
              string = numbers[coefficient] + string;
            } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
              string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : "") + string;
            } else if (coefficient === 1 && digit > 0) {
              string = multipliers[digit - 1] + string;
            }
            tmp = Math.floor(tmp / 10);
          }
          return (value < 0 ? negativeSign : "") + string;
        };
        var CHINESE_INFORMAL_MULTIPLIERS = "\u5341\u767E\u5343\u842C";
        var CHINESE_FORMAL_MULTIPLIERS = "\u62FE\u4F70\u4EDF\u842C";
        var JAPANESE_NEGATIVE = "\u30DE\u30A4\u30CA\u30B9";
        var KOREAN_NEGATIVE = "\uB9C8\uC774\uB108\uC2A4";
        var createCounterText = function(value, type, appendSuffix) {
          var defaultSuffix = appendSuffix ? ". " : "";
          var cjkSuffix = appendSuffix ? "\u3001" : "";
          var koreanSuffix = appendSuffix ? ", " : "";
          var spaceSuffix = appendSuffix ? " " : "";
          switch (type) {
            case 0:
              return "\u2022" + spaceSuffix;
            case 1:
              return "\u25E6" + spaceSuffix;
            case 2:
              return "\u25FE" + spaceSuffix;
            case 5:
              var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
              return string.length < 4 ? "0" + string : string;
            case 4:
              return createCounterStyleFromSymbols(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", cjkSuffix);
            case 6:
              return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix).toLowerCase();
            case 7:
              return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix);
            case 8:
              return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            case 9:
              return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            case 10:
              return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            case 11:
              return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            case 12:
            case 49:
              return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix);
            case 35:
              return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix).toLowerCase();
            case 13:
              return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case 14:
            case 30:
              return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            case 15:
              return createCounterStyleFromSymbols(value, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", cjkSuffix);
            case 16:
              return createCounterStyleFromSymbols(value, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", cjkSuffix);
            case 17:
            case 48:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 47:
              return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 42:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 41:
              return createCJKCounter(value, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 26:
              return createCJKCounter(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, 0);
            case 25:
              return createCJKCounter(value, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 31:
              return createCJKCounter(value, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 33:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", KOREAN_NEGATIVE, koreanSuffix, 0);
            case 32:
              return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 18:
              return createCounterStyleFromRange(value, 2406, 2415, true, defaultSuffix);
            case 20:
              return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3, defaultSuffix);
            case 21:
              return createCounterStyleFromRange(value, 2790, 2799, true, defaultSuffix);
            case 22:
              return createCounterStyleFromRange(value, 2662, 2671, true, defaultSuffix);
            case 22:
              return createAdditiveCounter(value, 1, 10999, HEBREW, 3, defaultSuffix);
            case 23:
              return createCounterStyleFromSymbols(value, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
            case 24:
              return createCounterStyleFromSymbols(value, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
            case 27:
              return createCounterStyleFromRange(value, 3302, 3311, true, defaultSuffix);
            case 28:
              return createCounterStyleFromSymbols(value, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", cjkSuffix);
            case 29:
              return createCounterStyleFromSymbols(value, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", cjkSuffix);
            case 34:
              return createCounterStyleFromRange(value, 3792, 3801, true, defaultSuffix);
            case 37:
              return createCounterStyleFromRange(value, 6160, 6169, true, defaultSuffix);
            case 38:
              return createCounterStyleFromRange(value, 4160, 4169, true, defaultSuffix);
            case 39:
              return createCounterStyleFromRange(value, 2918, 2927, true, defaultSuffix);
            case 40:
              return createCounterStyleFromRange(value, 1776, 1785, true, defaultSuffix);
            case 43:
              return createCounterStyleFromRange(value, 3046, 3055, true, defaultSuffix);
            case 44:
              return createCounterStyleFromRange(value, 3174, 3183, true, defaultSuffix);
            case 45:
              return createCounterStyleFromRange(value, 3664, 3673, true, defaultSuffix);
            case 46:
              return createCounterStyleFromRange(value, 3872, 3881, true, defaultSuffix);
            case 3:
            default:
              return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
          }
        };
        var IGNORE_ATTRIBUTE = "data-html2canvas-ignore";
        var DocumentCloner = (
          /** @class */
          function() {
            function DocumentCloner2(context, element, options) {
              this.context = context;
              this.options = options;
              this.scrolledElements = [];
              this.referenceElement = element;
              this.counters = new CounterState();
              this.quoteDepth = 0;
              if (!element.ownerDocument) {
                throw new Error("Cloned element does not have an owner document");
              }
              this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
            }
            DocumentCloner2.prototype.toIFrame = function(ownerDocument, windowSize) {
              var _this = this;
              var iframe = createIFrameContainer(ownerDocument, windowSize);
              if (!iframe.contentWindow) {
                return Promise.reject("Unable to find iframe window");
              }
              var scrollX = ownerDocument.defaultView.pageXOffset;
              var scrollY = ownerDocument.defaultView.pageYOffset;
              var cloneWindow = iframe.contentWindow;
              var documentClone = cloneWindow.document;
              var iframeLoad = iframeLoader(iframe).then(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var onclone, referenceElement;
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        this.scrolledElements.forEach(restoreNodeScroll);
                        if (cloneWindow) {
                          cloneWindow.scrollTo(windowSize.left, windowSize.top);
                          if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                            this.context.logger.warn("Unable to restore scroll position for cloned document");
                            this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                          }
                        }
                        onclone = this.options.onclone;
                        referenceElement = this.clonedReferenceElement;
                        if (typeof referenceElement === "undefined") {
                          return [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                        }
                        if (!(documentClone.fonts && documentClone.fonts.ready))
                          return [3, 2];
                        return [4, documentClone.fonts.ready];
                      case 1:
                        _a.sent();
                        _a.label = 2;
                      case 2:
                        if (!/(AppleWebKit)/g.test(navigator.userAgent))
                          return [3, 4];
                        return [4, imagesReady(documentClone)];
                      case 3:
                        _a.sent();
                        _a.label = 4;
                      case 4:
                        if (typeof onclone === "function") {
                          return [2, Promise.resolve().then(function() {
                            return onclone(documentClone, referenceElement);
                          }).then(function() {
                            return iframe;
                          })];
                        }
                        return [2, iframe];
                    }
                  });
                });
              });
              documentClone.open();
              documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
              restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
              documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
              documentClone.close();
              return iframeLoad;
            };
            DocumentCloner2.prototype.createElementClone = function(node) {
              if (isDebugging(
                node,
                2
                /* CLONE */
              )) {
                debugger;
              }
              if (isCanvasElement(node)) {
                return this.createCanvasClone(node);
              }
              if (isVideoElement(node)) {
                return this.createVideoClone(node);
              }
              if (isStyleElement(node)) {
                return this.createStyleClone(node);
              }
              var clone = node.cloneNode(false);
              if (isImageElement(clone)) {
                if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                  clone.src = node.currentSrc;
                  clone.srcset = "";
                }
                if (clone.loading === "lazy") {
                  clone.loading = "eager";
                }
              }
              if (isCustomElement(clone)) {
                return this.createCustomElementClone(clone);
              }
              return clone;
            };
            DocumentCloner2.prototype.createCustomElementClone = function(node) {
              var clone = document.createElement("html2canvascustomelement");
              copyCSSStyles(node.style, clone);
              return clone;
            };
            DocumentCloner2.prototype.createStyleClone = function(node) {
              try {
                var sheet = node.sheet;
                if (sheet && sheet.cssRules) {
                  var css = [].slice.call(sheet.cssRules, 0).reduce(function(css2, rule) {
                    if (rule && typeof rule.cssText === "string") {
                      return css2 + rule.cssText;
                    }
                    return css2;
                  }, "");
                  var style = node.cloneNode(false);
                  style.textContent = css;
                  return style;
                }
              } catch (e2) {
                this.context.logger.error("Unable to access cssRules property", e2);
                if (e2.name !== "SecurityError") {
                  throw e2;
                }
              }
              return node.cloneNode(false);
            };
            DocumentCloner2.prototype.createCanvasClone = function(canvas) {
              var _a;
              if (this.options.inlineImages && canvas.ownerDocument) {
                var img = canvas.ownerDocument.createElement("img");
                try {
                  img.src = canvas.toDataURL();
                  return img;
                } catch (e2) {
                  this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
                }
              }
              var clonedCanvas = canvas.cloneNode(false);
              try {
                clonedCanvas.width = canvas.width;
                clonedCanvas.height = canvas.height;
                var ctx = canvas.getContext("2d");
                var clonedCtx = clonedCanvas.getContext("2d");
                if (clonedCtx) {
                  if (!this.options.allowTaint && ctx) {
                    clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                  } else {
                    var gl = (_a = canvas.getContext("webgl2")) !== null && _a !== void 0 ? _a : canvas.getContext("webgl");
                    if (gl) {
                      var attribs = gl.getContextAttributes();
                      if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                        this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", canvas);
                      }
                    }
                    clonedCtx.drawImage(canvas, 0, 0);
                  }
                }
                return clonedCanvas;
              } catch (e2) {
                this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
              }
              return clonedCanvas;
            };
            DocumentCloner2.prototype.createVideoClone = function(video) {
              var canvas = video.ownerDocument.createElement("canvas");
              canvas.width = video.offsetWidth;
              canvas.height = video.offsetHeight;
              var ctx = canvas.getContext("2d");
              try {
                if (ctx) {
                  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                  if (!this.options.allowTaint) {
                    ctx.getImageData(0, 0, canvas.width, canvas.height);
                  }
                }
                return canvas;
              } catch (e2) {
                this.context.logger.info("Unable to clone video as it is tainted", video);
              }
              var blankCanvas = video.ownerDocument.createElement("canvas");
              blankCanvas.width = video.offsetWidth;
              blankCanvas.height = video.offsetHeight;
              return blankCanvas;
            };
            DocumentCloner2.prototype.appendChildNode = function(clone, child, copyStyles) {
              if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== "function" || !this.options.ignoreElements(child))) {
                if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                  clone.appendChild(this.cloneNode(child, copyStyles));
                }
              }
            };
            DocumentCloner2.prototype.cloneChildNodes = function(node, clone, copyStyles) {
              var _this = this;
              for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
                if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === "function") {
                  var assignedNodes = child.assignedNodes();
                  if (assignedNodes.length) {
                    assignedNodes.forEach(function(assignedNode) {
                      return _this.appendChildNode(clone, assignedNode, copyStyles);
                    });
                  }
                } else {
                  this.appendChildNode(clone, child, copyStyles);
                }
              }
            };
            DocumentCloner2.prototype.cloneNode = function(node, copyStyles) {
              if (isTextNode(node)) {
                return document.createTextNode(node.data);
              }
              if (!node.ownerDocument) {
                return node.cloneNode(false);
              }
              var window2 = node.ownerDocument.defaultView;
              if (window2 && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
                var clone = this.createElementClone(node);
                clone.style.transitionProperty = "none";
                var style = window2.getComputedStyle(node);
                var styleBefore = window2.getComputedStyle(node, ":before");
                var styleAfter = window2.getComputedStyle(node, ":after");
                if (this.referenceElement === node && isHTMLElementNode(clone)) {
                  this.clonedReferenceElement = clone;
                }
                if (isBodyElement(clone)) {
                  createPseudoHideStyles(clone);
                }
                var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
                var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
                if (isCustomElement(node)) {
                  copyStyles = true;
                }
                if (!isVideoElement(node)) {
                  this.cloneChildNodes(node, clone, copyStyles);
                }
                if (before) {
                  clone.insertBefore(before, clone.firstChild);
                }
                var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
                if (after) {
                  clone.appendChild(after);
                }
                this.counters.pop(counters);
                if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node) || copyStyles) {
                  copyCSSStyles(style, clone);
                }
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                  this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) {
                  clone.value = node.value;
                }
                return clone;
              }
              return node.cloneNode(false);
            };
            DocumentCloner2.prototype.resolvePseudoContent = function(node, clone, style, pseudoElt) {
              var _this = this;
              if (!style) {
                return;
              }
              var value = style.content;
              var document2 = clone.ownerDocument;
              if (!document2 || !value || value === "none" || value === "-moz-alt-content" || style.display === "none") {
                return;
              }
              this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
              var declaration = new CSSParsedPseudoDeclaration(this.context, style);
              var anonymousReplacedElement = document2.createElement("html2canvaspseudoelement");
              copyCSSStyles(style, anonymousReplacedElement);
              declaration.content.forEach(function(token) {
                if (token.type === 0) {
                  anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
                } else if (token.type === 22) {
                  var img = document2.createElement("img");
                  img.src = token.value;
                  img.style.opacity = "1";
                  anonymousReplacedElement.appendChild(img);
                } else if (token.type === 18) {
                  if (token.name === "attr") {
                    var attr = token.values.filter(isIdentToken);
                    if (attr.length) {
                      anonymousReplacedElement.appendChild(document2.createTextNode(node.getAttribute(attr[0].value) || ""));
                    }
                  } else if (token.name === "counter") {
                    var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
                    if (counter && isIdentToken(counter)) {
                      var counterState = _this.counters.getCounterValue(counter.value);
                      var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
                      anonymousReplacedElement.appendChild(document2.createTextNode(createCounterText(counterState, counterType, false)));
                    }
                  } else if (token.name === "counters") {
                    var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
                    if (counter && isIdentToken(counter)) {
                      var counterStates = _this.counters.getCounterValues(counter.value);
                      var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
                      var separator = delim && delim.type === 0 ? delim.value : "";
                      var text = counterStates.map(function(value2) {
                        return createCounterText(value2, counterType_1, false);
                      }).join(separator);
                      anonymousReplacedElement.appendChild(document2.createTextNode(text));
                    }
                  } else
                    ;
                } else if (token.type === 20) {
                  switch (token.value) {
                    case "open-quote":
                      anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                      break;
                    case "close-quote":
                      anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                      break;
                    default:
                      anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
                  }
                }
              });
              anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
              var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
              if (isSVGElementNode(clone)) {
                clone.className.baseValue += newClassName;
              } else {
                clone.className += newClassName;
              }
              return anonymousReplacedElement;
            };
            DocumentCloner2.destroy = function(container) {
              if (container.parentNode) {
                container.parentNode.removeChild(container);
                return true;
              }
              return false;
            };
            return DocumentCloner2;
          }()
        );
        var PseudoElementType;
        (function(PseudoElementType2) {
          PseudoElementType2[PseudoElementType2["BEFORE"] = 0] = "BEFORE";
          PseudoElementType2[PseudoElementType2["AFTER"] = 1] = "AFTER";
        })(PseudoElementType || (PseudoElementType = {}));
        var createIFrameContainer = function(ownerDocument, bounds) {
          var cloneIframeContainer = ownerDocument.createElement("iframe");
          cloneIframeContainer.className = "html2canvas-container";
          cloneIframeContainer.style.visibility = "hidden";
          cloneIframeContainer.style.position = "fixed";
          cloneIframeContainer.style.left = "-10000px";
          cloneIframeContainer.style.top = "0px";
          cloneIframeContainer.style.border = "0";
          cloneIframeContainer.width = bounds.width.toString();
          cloneIframeContainer.height = bounds.height.toString();
          cloneIframeContainer.scrolling = "no";
          cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, "true");
          ownerDocument.body.appendChild(cloneIframeContainer);
          return cloneIframeContainer;
        };
        var imageReady = function(img) {
          return new Promise(function(resolve) {
            if (img.complete) {
              resolve();
              return;
            }
            if (!img.src) {
              resolve();
              return;
            }
            img.onload = resolve;
            img.onerror = resolve;
          });
        };
        var imagesReady = function(document2) {
          return Promise.all([].slice.call(document2.images, 0).map(imageReady));
        };
        var iframeLoader = function(iframe) {
          return new Promise(function(resolve, reject) {
            var cloneWindow = iframe.contentWindow;
            if (!cloneWindow) {
              return reject("No window assigned for iframe");
            }
            var documentClone = cloneWindow.document;
            cloneWindow.onload = iframe.onload = function() {
              cloneWindow.onload = iframe.onload = null;
              var interval = setInterval(function() {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === "complete") {
                  clearInterval(interval);
                  resolve(iframe);
                }
              }, 50);
            };
          });
        };
        var ignoredStyleProperties = [
          "all",
          "d",
          "content"
          // Safari shows pseudoelements if content is set
        ];
        var copyCSSStyles = function(style, target) {
          for (var i2 = style.length - 1; i2 >= 0; i2--) {
            var property = style.item(i2);
            if (ignoredStyleProperties.indexOf(property) === -1) {
              target.style.setProperty(property, style.getPropertyValue(property));
            }
          }
          return target;
        };
        var serializeDoctype = function(doctype) {
          var str = "";
          if (doctype) {
            str += "<!DOCTYPE ";
            if (doctype.name) {
              str += doctype.name;
            }
            if (doctype.internalSubset) {
              str += doctype.internalSubset;
            }
            if (doctype.publicId) {
              str += '"' + doctype.publicId + '"';
            }
            if (doctype.systemId) {
              str += '"' + doctype.systemId + '"';
            }
            str += ">";
          }
          return str;
        };
        var restoreOwnerScroll = function(ownerDocument, x, y) {
          if (ownerDocument && ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
            ownerDocument.defaultView.scrollTo(x, y);
          }
        };
        var restoreNodeScroll = function(_a) {
          var element = _a[0], x = _a[1], y = _a[2];
          element.scrollLeft = x;
          element.scrollTop = y;
        };
        var PSEUDO_BEFORE = ":before";
        var PSEUDO_AFTER = ":after";
        var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
        var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";
        var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';
        var createPseudoHideStyles = function(body) {
          createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
        };
        var createStyles = function(body, styles) {
          var document2 = body.ownerDocument;
          if (document2) {
            var style = document2.createElement("style");
            style.textContent = styles;
            body.appendChild(style);
          }
        };
        var CacheStorage = (
          /** @class */
          function() {
            function CacheStorage2() {
            }
            CacheStorage2.getOrigin = function(url) {
              var link = CacheStorage2._link;
              if (!link) {
                return "about:blank";
              }
              link.href = url;
              link.href = link.href;
              return link.protocol + link.hostname + link.port;
            };
            CacheStorage2.isSameOrigin = function(src) {
              return CacheStorage2.getOrigin(src) === CacheStorage2._origin;
            };
            CacheStorage2.setContext = function(window2) {
              CacheStorage2._link = window2.document.createElement("a");
              CacheStorage2._origin = CacheStorage2.getOrigin(window2.location.href);
            };
            CacheStorage2._origin = "about:blank";
            return CacheStorage2;
          }()
        );
        var Cache = (
          /** @class */
          function() {
            function Cache2(context, _options) {
              this.context = context;
              this._options = _options;
              this._cache = {};
            }
            Cache2.prototype.addImage = function(src) {
              var result = Promise.resolve();
              if (this.has(src)) {
                return result;
              }
              if (isBlobImage(src) || isRenderable(src)) {
                (this._cache[src] = this.loadImage(src)).catch(function() {
                });
                return result;
              }
              return result;
            };
            Cache2.prototype.match = function(src) {
              return this._cache[src];
            };
            Cache2.prototype.loadImage = function(key) {
              return __awaiter(this, void 0, void 0, function() {
                var isSameOrigin, useCORS, useProxy, src;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      isSameOrigin = CacheStorage.isSameOrigin(key);
                      useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                      useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === "string" && FEATURES.SUPPORT_CORS_XHR && !useCORS;
                      if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) {
                        return [
                          2
                          /*return*/
                        ];
                      }
                      src = key;
                      if (!useProxy)
                        return [3, 2];
                      return [4, this.proxy(src)];
                    case 1:
                      src = _a.sent();
                      _a.label = 2;
                    case 2:
                      this.context.logger.debug("Added image " + key.substring(0, 256));
                      return [4, new Promise(function(resolve, reject) {
                        var img = new Image();
                        img.onload = function() {
                          return resolve(img);
                        };
                        img.onerror = reject;
                        if (isInlineBase64Image(src) || useCORS) {
                          img.crossOrigin = "anonymous";
                        }
                        img.src = src;
                        if (img.complete === true) {
                          setTimeout(function() {
                            return resolve(img);
                          }, 500);
                        }
                        if (_this._options.imageTimeout > 0) {
                          setTimeout(function() {
                            return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                          }, _this._options.imageTimeout);
                        }
                      })];
                    case 3:
                      return [2, _a.sent()];
                  }
                });
              });
            };
            Cache2.prototype.has = function(key) {
              return typeof this._cache[key] !== "undefined";
            };
            Cache2.prototype.keys = function() {
              return Promise.resolve(Object.keys(this._cache));
            };
            Cache2.prototype.proxy = function(src) {
              var _this = this;
              var proxy = this._options.proxy;
              if (!proxy) {
                throw new Error("No proxy defined");
              }
              var key = src.substring(0, 256);
              return new Promise(function(resolve, reject) {
                var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? "blob" : "text";
                var xhr = new XMLHttpRequest();
                xhr.onload = function() {
                  if (xhr.status === 200) {
                    if (responseType === "text") {
                      resolve(xhr.response);
                    } else {
                      var reader_1 = new FileReader();
                      reader_1.addEventListener("load", function() {
                        return resolve(reader_1.result);
                      }, false);
                      reader_1.addEventListener("error", function(e2) {
                        return reject(e2);
                      }, false);
                      reader_1.readAsDataURL(xhr.response);
                    }
                  } else {
                    reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                  }
                };
                xhr.onerror = reject;
                var queryString = proxy.indexOf("?") > -1 ? "&" : "?";
                xhr.open("GET", "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
                if (responseType !== "text" && xhr instanceof XMLHttpRequest) {
                  xhr.responseType = responseType;
                }
                if (_this._options.imageTimeout) {
                  var timeout_1 = _this._options.imageTimeout;
                  xhr.timeout = timeout_1;
                  xhr.ontimeout = function() {
                    return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
                  };
                }
                xhr.send();
              });
            };
            return Cache2;
          }()
        );
        var INLINE_SVG = /^data:image\/svg\+xml/i;
        var INLINE_BASE64 = /^data:image\/.*;base64,/i;
        var INLINE_IMG = /^data:image\/.*/i;
        var isRenderable = function(src) {
          return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
        };
        var isInlineImage = function(src) {
          return INLINE_IMG.test(src);
        };
        var isInlineBase64Image = function(src) {
          return INLINE_BASE64.test(src);
        };
        var isBlobImage = function(src) {
          return src.substr(0, 4) === "blob";
        };
        var isSVG = function(src) {
          return src.substr(-3).toLowerCase() === "svg" || INLINE_SVG.test(src);
        };
        var Vector = (
          /** @class */
          function() {
            function Vector2(x, y) {
              this.type = 0;
              this.x = x;
              this.y = y;
            }
            Vector2.prototype.add = function(deltaX, deltaY) {
              return new Vector2(this.x + deltaX, this.y + deltaY);
            };
            return Vector2;
          }()
        );
        var lerp = function(a2, b, t) {
          return new Vector(a2.x + (b.x - a2.x) * t, a2.y + (b.y - a2.y) * t);
        };
        var BezierCurve = (
          /** @class */
          function() {
            function BezierCurve2(start, startControl, endControl, end) {
              this.type = 1;
              this.start = start;
              this.startControl = startControl;
              this.endControl = endControl;
              this.end = end;
            }
            BezierCurve2.prototype.subdivide = function(t, firstHalf) {
              var ab = lerp(this.start, this.startControl, t);
              var bc = lerp(this.startControl, this.endControl, t);
              var cd = lerp(this.endControl, this.end, t);
              var abbc = lerp(ab, bc, t);
              var bccd = lerp(bc, cd, t);
              var dest = lerp(abbc, bccd, t);
              return firstHalf ? new BezierCurve2(this.start, ab, abbc, dest) : new BezierCurve2(dest, bccd, cd, this.end);
            };
            BezierCurve2.prototype.add = function(deltaX, deltaY) {
              return new BezierCurve2(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
            };
            BezierCurve2.prototype.reverse = function() {
              return new BezierCurve2(this.end, this.endControl, this.startControl, this.start);
            };
            return BezierCurve2;
          }()
        );
        var isBezierCurve = function(path) {
          return path.type === 1;
        };
        var BoundCurves = (
          /** @class */
          /* @__PURE__ */ function() {
            function BoundCurves2(element) {
              var styles = element.styles;
              var bounds = element.bounds;
              var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
              var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
              var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
              var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
              var factors = [];
              factors.push((tlh + trh) / bounds.width);
              factors.push((blh + brh) / bounds.width);
              factors.push((tlv + blv) / bounds.height);
              factors.push((trv + brv) / bounds.height);
              var maxFactor = Math.max.apply(Math, factors);
              if (maxFactor > 1) {
                tlh /= maxFactor;
                tlv /= maxFactor;
                trh /= maxFactor;
                trv /= maxFactor;
                brh /= maxFactor;
                brv /= maxFactor;
                blh /= maxFactor;
                blv /= maxFactor;
              }
              var topWidth = bounds.width - trh;
              var rightHeight = bounds.height - brv;
              var bottomWidth = bounds.width - brh;
              var leftHeight = bounds.height - blv;
              var borderTopWidth2 = styles.borderTopWidth;
              var borderRightWidth2 = styles.borderRightWidth;
              var borderBottomWidth2 = styles.borderBottomWidth;
              var borderLeftWidth2 = styles.borderLeftWidth;
              var paddingTop2 = getAbsoluteValue(styles.paddingTop, element.bounds.width);
              var paddingRight2 = getAbsoluteValue(styles.paddingRight, element.bounds.width);
              var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
              var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
              this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3, tlh - borderLeftWidth2 / 3, tlv - borderTopWidth2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3);
              this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 3, trh - borderRightWidth2 / 3, trv - borderTopWidth2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + borderTopWidth2 / 3);
              this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 3, brv - borderBottomWidth2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
              this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 / 3, blv - borderBottomWidth2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
              this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3, tlh - borderLeftWidth2 * 2 / 3, tlv - borderTopWidth2 * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
              this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 * 2 / 3, trh - borderRightWidth2 * 2 / 3, trv - borderTopWidth2 * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
              this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 * 2 / 3, brv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
              this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 * 2 / 3, blv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
              this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2, tlh - borderLeftWidth2 / 2, tlv - borderTopWidth2 / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2);
              this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 2, trh - borderRightWidth2 / 2, trv - borderTopWidth2 / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + borderTopWidth2 / 2);
              this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 2, brv - borderBottomWidth2 / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
              this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + leftHeight, blh - borderLeftWidth2 / 2, blv - borderBottomWidth2 / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
              this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
              this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
              this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
              this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
              this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2, Math.max(0, tlh - borderLeftWidth2), Math.max(0, tlv - borderTopWidth2), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2);
              this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth2), bounds.top + borderTopWidth2, topWidth > bounds.width + borderRightWidth2 ? 0 : Math.max(0, trh - borderRightWidth2), Math.max(0, trv - borderTopWidth2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + borderTopWidth2);
              this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth2), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth2), Math.max(0, brh - borderRightWidth2), Math.max(0, brv - borderBottomWidth2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + bounds.height - borderBottomWidth2);
              this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth2), Math.max(0, blh - borderLeftWidth2), Math.max(0, blv - borderBottomWidth2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + bounds.height - borderBottomWidth2);
              this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2, Math.max(0, tlh - (borderLeftWidth2 + paddingLeft2)), Math.max(0, tlv - (borderTopWidth2 + paddingTop2)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2);
              this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth2 + paddingLeft2), bounds.top + borderTopWidth2 + paddingTop2, topWidth > bounds.width + borderLeftWidth2 + paddingLeft2 ? 0 : trh - borderLeftWidth2 + paddingLeft2, trv - (borderTopWidth2 + paddingTop2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + borderTopWidth2 + paddingTop2);
              this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth2 + paddingLeft2)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth2 + paddingTop2), Math.max(0, brh - (borderRightWidth2 + paddingRight2)), brv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
              this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth2 + paddingLeft2)), blv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
            }
            return BoundCurves2;
          }()
        );
        var CORNER;
        (function(CORNER2) {
          CORNER2[CORNER2["TOP_LEFT"] = 0] = "TOP_LEFT";
          CORNER2[CORNER2["TOP_RIGHT"] = 1] = "TOP_RIGHT";
          CORNER2[CORNER2["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
          CORNER2[CORNER2["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
        })(CORNER || (CORNER = {}));
        var getCurvePoints = function(x, y, r1, r2, position2) {
          var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
          var ox = r1 * kappa;
          var oy = r2 * kappa;
          var xm = x + r1;
          var ym = y + r2;
          switch (position2) {
            case CORNER.TOP_LEFT:
              return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
            case CORNER.TOP_RIGHT:
              return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
            case CORNER.BOTTOM_RIGHT:
              return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
            case CORNER.BOTTOM_LEFT:
            default:
              return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
          }
        };
        var calculateBorderBoxPath = function(curves) {
          return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
        };
        var calculateContentBoxPath = function(curves) {
          return [
            curves.topLeftContentBox,
            curves.topRightContentBox,
            curves.bottomRightContentBox,
            curves.bottomLeftContentBox
          ];
        };
        var calculatePaddingBoxPath = function(curves) {
          return [
            curves.topLeftPaddingBox,
            curves.topRightPaddingBox,
            curves.bottomRightPaddingBox,
            curves.bottomLeftPaddingBox
          ];
        };
        var TransformEffect = (
          /** @class */
          /* @__PURE__ */ function() {
            function TransformEffect2(offsetX, offsetY, matrix2) {
              this.offsetX = offsetX;
              this.offsetY = offsetY;
              this.matrix = matrix2;
              this.type = 0;
              this.target = 2 | 4;
            }
            return TransformEffect2;
          }()
        );
        var ClipEffect = (
          /** @class */
          /* @__PURE__ */ function() {
            function ClipEffect2(path, target) {
              this.path = path;
              this.target = target;
              this.type = 1;
            }
            return ClipEffect2;
          }()
        );
        var OpacityEffect = (
          /** @class */
          /* @__PURE__ */ function() {
            function OpacityEffect2(opacity2) {
              this.opacity = opacity2;
              this.type = 2;
              this.target = 2 | 4;
            }
            return OpacityEffect2;
          }()
        );
        var isTransformEffect = function(effect) {
          return effect.type === 0;
        };
        var isClipEffect = function(effect) {
          return effect.type === 1;
        };
        var isOpacityEffect = function(effect) {
          return effect.type === 2;
        };
        var equalPath = function(a2, b) {
          if (a2.length === b.length) {
            return a2.some(function(v, i2) {
              return v === b[i2];
            });
          }
          return false;
        };
        var transformPath = function(path, deltaX, deltaY, deltaW, deltaH) {
          return path.map(function(point, index) {
            switch (index) {
              case 0:
                return point.add(deltaX, deltaY);
              case 1:
                return point.add(deltaX + deltaW, deltaY);
              case 2:
                return point.add(deltaX + deltaW, deltaY + deltaH);
              case 3:
                return point.add(deltaX, deltaY + deltaH);
            }
            return point;
          });
        };
        var StackingContext = (
          /** @class */
          /* @__PURE__ */ function() {
            function StackingContext2(container) {
              this.element = container;
              this.inlineLevel = [];
              this.nonInlineLevel = [];
              this.negativeZIndex = [];
              this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
              this.positiveZIndex = [];
              this.nonPositionedFloats = [];
              this.nonPositionedInlineLevel = [];
            }
            return StackingContext2;
          }()
        );
        var ElementPaint = (
          /** @class */
          function() {
            function ElementPaint2(container, parent) {
              this.container = container;
              this.parent = parent;
              this.effects = [];
              this.curves = new BoundCurves(this.container);
              if (this.container.styles.opacity < 1) {
                this.effects.push(new OpacityEffect(this.container.styles.opacity));
              }
              if (this.container.styles.transform !== null) {
                var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
                var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
                var matrix2 = this.container.styles.transform;
                this.effects.push(new TransformEffect(offsetX, offsetY, matrix2));
              }
              if (this.container.styles.overflowX !== 0) {
                var borderBox = calculateBorderBoxPath(this.curves);
                var paddingBox2 = calculatePaddingBoxPath(this.curves);
                if (equalPath(borderBox, paddingBox2)) {
                  this.effects.push(new ClipEffect(
                    borderBox,
                    2 | 4
                    /* CONTENT */
                  ));
                } else {
                  this.effects.push(new ClipEffect(
                    borderBox,
                    2
                    /* BACKGROUND_BORDERS */
                  ));
                  this.effects.push(new ClipEffect(
                    paddingBox2,
                    4
                    /* CONTENT */
                  ));
                }
              }
            }
            ElementPaint2.prototype.getEffects = function(target) {
              var inFlow = [
                2,
                3
                /* FIXED */
              ].indexOf(this.container.styles.position) === -1;
              var parent = this.parent;
              var effects = this.effects.slice(0);
              while (parent) {
                var croplessEffects = parent.effects.filter(function(effect) {
                  return !isClipEffect(effect);
                });
                if (inFlow || parent.container.styles.position !== 0 || !parent.parent) {
                  effects.unshift.apply(effects, croplessEffects);
                  inFlow = [
                    2,
                    3
                    /* FIXED */
                  ].indexOf(parent.container.styles.position) === -1;
                  if (parent.container.styles.overflowX !== 0) {
                    var borderBox = calculateBorderBoxPath(parent.curves);
                    var paddingBox2 = calculatePaddingBoxPath(parent.curves);
                    if (!equalPath(borderBox, paddingBox2)) {
                      effects.unshift(new ClipEffect(
                        paddingBox2,
                        2 | 4
                        /* CONTENT */
                      ));
                    }
                  }
                } else {
                  effects.unshift.apply(effects, croplessEffects);
                }
                parent = parent.parent;
              }
              return effects.filter(function(effect) {
                return contains(effect.target, target);
              });
            };
            return ElementPaint2;
          }()
        );
        var parseStackTree = function(parent, stackingContext, realStackingContext, listItems) {
          parent.container.elements.forEach(function(child) {
            var treatAsRealStackingContext = contains(
              child.flags,
              4
              /* CREATES_REAL_STACKING_CONTEXT */
            );
            var createsStackingContext2 = contains(
              child.flags,
              2
              /* CREATES_STACKING_CONTEXT */
            );
            var paintContainer = new ElementPaint(child, parent);
            if (contains(
              child.styles.display,
              2048
              /* LIST_ITEM */
            )) {
              listItems.push(paintContainer);
            }
            var listOwnerItems = contains(
              child.flags,
              8
              /* IS_LIST_OWNER */
            ) ? [] : listItems;
            if (treatAsRealStackingContext || createsStackingContext2) {
              var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
              var stack = new StackingContext(paintContainer);
              if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                var order_1 = child.styles.zIndex.order;
                if (order_1 < 0) {
                  var index_1 = 0;
                  parentStack.negativeZIndex.some(function(current, i2) {
                    if (order_1 > current.element.container.styles.zIndex.order) {
                      index_1 = i2;
                      return false;
                    } else if (index_1 > 0) {
                      return true;
                    }
                    return false;
                  });
                  parentStack.negativeZIndex.splice(index_1, 0, stack);
                } else if (order_1 > 0) {
                  var index_2 = 0;
                  parentStack.positiveZIndex.some(function(current, i2) {
                    if (order_1 >= current.element.container.styles.zIndex.order) {
                      index_2 = i2 + 1;
                      return false;
                    } else if (index_2 > 0) {
                      return true;
                    }
                    return false;
                  });
                  parentStack.positiveZIndex.splice(index_2, 0, stack);
                } else {
                  parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                }
              } else {
                if (child.styles.isFloating()) {
                  parentStack.nonPositionedFloats.push(stack);
                } else {
                  parentStack.nonPositionedInlineLevel.push(stack);
                }
              }
              parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
            } else {
              if (child.styles.isInlineLevel()) {
                stackingContext.inlineLevel.push(paintContainer);
              } else {
                stackingContext.nonInlineLevel.push(paintContainer);
              }
              parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
            }
            if (contains(
              child.flags,
              8
              /* IS_LIST_OWNER */
            )) {
              processListItems(child, listOwnerItems);
            }
          });
        };
        var processListItems = function(owner, elements) {
          var numbering = owner instanceof OLElementContainer ? owner.start : 1;
          var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
          for (var i2 = 0; i2 < elements.length; i2++) {
            var item = elements[i2];
            if (item.container instanceof LIElementContainer && typeof item.container.value === "number" && item.container.value !== 0) {
              numbering = item.container.value;
            }
            item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
            numbering += reversed ? -1 : 1;
          }
        };
        var parseStackingContexts = function(container) {
          var paintContainer = new ElementPaint(container, null);
          var root = new StackingContext(paintContainer);
          var listItems = [];
          parseStackTree(paintContainer, root, root, listItems);
          processListItems(paintContainer.container, listItems);
          return root;
        };
        var parsePathForBorder = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
          }
        };
        var parsePathForBorderDoubleOuter = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
          }
        };
        var parsePathForBorderDoubleInner = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
          }
        };
        var parsePathForBorderStroke = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
            case 1:
              return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
            case 2:
              return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
            case 3:
            default:
              return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
          }
        };
        var createStrokePathFromCurves = function(outer1, outer2) {
          var path = [];
          if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
          } else {
            path.push(outer1);
          }
          if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
          } else {
            path.push(outer2);
          }
          return path;
        };
        var createPathFromCurves = function(outer1, inner1, outer2, inner2) {
          var path = [];
          if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
          } else {
            path.push(outer1);
          }
          if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
          } else {
            path.push(outer2);
          }
          if (isBezierCurve(inner2)) {
            path.push(inner2.subdivide(0.5, true).reverse());
          } else {
            path.push(inner2);
          }
          if (isBezierCurve(inner1)) {
            path.push(inner1.subdivide(0.5, false).reverse());
          } else {
            path.push(inner1);
          }
          return path;
        };
        var paddingBox = function(element) {
          var bounds = element.bounds;
          var styles = element.styles;
          return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
        };
        var contentBox = function(element) {
          var styles = element.styles;
          var bounds = element.bounds;
          var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, bounds.width);
          var paddingRight2 = getAbsoluteValue(styles.paddingRight, bounds.width);
          var paddingTop2 = getAbsoluteValue(styles.paddingTop, bounds.width);
          var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, bounds.width);
          return bounds.add(paddingLeft2 + styles.borderLeftWidth, paddingTop2 + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft2 + paddingRight2), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop2 + paddingBottom2));
        };
        var calculateBackgroundPositioningArea = function(backgroundOrigin2, element) {
          if (backgroundOrigin2 === 0) {
            return element.bounds;
          }
          if (backgroundOrigin2 === 2) {
            return contentBox(element);
          }
          return paddingBox(element);
        };
        var calculateBackgroundPaintingArea = function(backgroundClip2, element) {
          if (backgroundClip2 === 0) {
            return element.bounds;
          }
          if (backgroundClip2 === 2) {
            return contentBox(element);
          }
          return paddingBox(element);
        };
        var calculateBackgroundRendering = function(container, index, intrinsicSize) {
          var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
          var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
          var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
          var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
          var position2 = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
          var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position2, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
          var offsetX = Math.round(backgroundPositioningArea.left + position2[0]);
          var offsetY = Math.round(backgroundPositioningArea.top + position2[1]);
          return [path, offsetX, offsetY, sizeWidth, sizeHeight];
        };
        var isAuto = function(token) {
          return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
        };
        var hasIntrinsicValue = function(value) {
          return typeof value === "number";
        };
        var calculateBackgroundSize = function(size, _a, bounds) {
          var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
          var first = size[0], second = size[1];
          if (!first) {
            return [0, 0];
          }
          if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
            return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
          }
          var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
          if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
            if (hasIntrinsicValue(intrinsicProportion)) {
              var targetRatio = bounds.width / bounds.height;
              return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
            }
            return [bounds.width, bounds.height];
          }
          var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
          var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
          var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
          if (isAuto(first) && (!second || isAuto(second))) {
            if (hasIntrinsicWidth && hasIntrinsicHeight) {
              return [intrinsicWidth, intrinsicHeight];
            }
            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
              return [bounds.width, bounds.height];
            }
            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
              var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
              var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
              return [width_1, height_1];
            }
            var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
            var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
            return [width_2, height_2];
          }
          if (hasIntrinsicProportion) {
            var width_3 = 0;
            var height_3 = 0;
            if (isLengthPercentage(first)) {
              width_3 = getAbsoluteValue(first, bounds.width);
            } else if (isLengthPercentage(second)) {
              height_3 = getAbsoluteValue(second, bounds.height);
            }
            if (isAuto(first)) {
              width_3 = height_3 * intrinsicProportion;
            } else if (!second || isAuto(second)) {
              height_3 = width_3 / intrinsicProportion;
            }
            return [width_3, height_3];
          }
          var width = null;
          var height = null;
          if (isLengthPercentage(first)) {
            width = getAbsoluteValue(first, bounds.width);
          } else if (second && isLengthPercentage(second)) {
            height = getAbsoluteValue(second, bounds.height);
          }
          if (width !== null && (!second || isAuto(second))) {
            height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
          }
          if (height !== null && isAuto(first)) {
            width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
          }
          if (width !== null && height !== null) {
            return [width, height];
          }
          throw new Error("Unable to calculate background-size for element");
        };
        var getBackgroundValueForIndex = function(values, index) {
          var value = values[index];
          if (typeof value === "undefined") {
            return values[0];
          }
          return value;
        };
        var calculateBackgroundRepeatPath = function(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
          var x = _a[0], y = _a[1];
          var width = _b[0], height = _b[1];
          switch (repeat) {
            case 2:
              return [
                new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
              ];
            case 3:
              return [
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
              ];
            case 1:
              return [
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
              ];
            default:
              return [
                new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
              ];
          }
        };
        var SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        var SAMPLE_TEXT = "Hidden Text";
        var FontMetrics = (
          /** @class */
          function() {
            function FontMetrics2(document2) {
              this._data = {};
              this._document = document2;
            }
            FontMetrics2.prototype.parseMetrics = function(fontFamily2, fontSize2) {
              var container = this._document.createElement("div");
              var img = this._document.createElement("img");
              var span = this._document.createElement("span");
              var body = this._document.body;
              container.style.visibility = "hidden";
              container.style.fontFamily = fontFamily2;
              container.style.fontSize = fontSize2;
              container.style.margin = "0";
              container.style.padding = "0";
              container.style.whiteSpace = "nowrap";
              body.appendChild(container);
              img.src = SMALL_IMAGE;
              img.width = 1;
              img.height = 1;
              img.style.margin = "0";
              img.style.padding = "0";
              img.style.verticalAlign = "baseline";
              span.style.fontFamily = fontFamily2;
              span.style.fontSize = fontSize2;
              span.style.margin = "0";
              span.style.padding = "0";
              span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
              container.appendChild(span);
              container.appendChild(img);
              var baseline = img.offsetTop - span.offsetTop + 2;
              container.removeChild(span);
              container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
              container.style.lineHeight = "normal";
              img.style.verticalAlign = "super";
              var middle = img.offsetTop - container.offsetTop + 2;
              body.removeChild(container);
              return { baseline, middle };
            };
            FontMetrics2.prototype.getMetrics = function(fontFamily2, fontSize2) {
              var key = fontFamily2 + " " + fontSize2;
              if (typeof this._data[key] === "undefined") {
                this._data[key] = this.parseMetrics(fontFamily2, fontSize2);
              }
              return this._data[key];
            };
            return FontMetrics2;
          }()
        );
        var Renderer = (
          /** @class */
          /* @__PURE__ */ function() {
            function Renderer2(context, options) {
              this.context = context;
              this.options = options;
            }
            return Renderer2;
          }()
        );
        var MASK_OFFSET = 1e4;
        var CanvasRenderer = (
          /** @class */
          function(_super) {
            __extends(CanvasRenderer2, _super);
            function CanvasRenderer2(context, options) {
              var _this = _super.call(this, context, options) || this;
              _this._activeEffects = [];
              _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
              _this.ctx = _this.canvas.getContext("2d");
              if (!options.canvas) {
                _this.canvas.width = Math.floor(options.width * options.scale);
                _this.canvas.height = Math.floor(options.height * options.scale);
                _this.canvas.style.width = options.width + "px";
                _this.canvas.style.height = options.height + "px";
              }
              _this.fontMetrics = new FontMetrics(document);
              _this.ctx.scale(_this.options.scale, _this.options.scale);
              _this.ctx.translate(-options.x, -options.y);
              _this.ctx.textBaseline = "bottom";
              _this._activeEffects = [];
              _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
              return _this;
            }
            CanvasRenderer2.prototype.applyEffects = function(effects) {
              var _this = this;
              while (this._activeEffects.length) {
                this.popEffect();
              }
              effects.forEach(function(effect) {
                return _this.applyEffect(effect);
              });
            };
            CanvasRenderer2.prototype.applyEffect = function(effect) {
              this.ctx.save();
              if (isOpacityEffect(effect)) {
                this.ctx.globalAlpha = effect.opacity;
              }
              if (isTransformEffect(effect)) {
                this.ctx.translate(effect.offsetX, effect.offsetY);
                this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
                this.ctx.translate(-effect.offsetX, -effect.offsetY);
              }
              if (isClipEffect(effect)) {
                this.path(effect.path);
                this.ctx.clip();
              }
              this._activeEffects.push(effect);
            };
            CanvasRenderer2.prototype.popEffect = function() {
              this._activeEffects.pop();
              this.ctx.restore();
            };
            CanvasRenderer2.prototype.renderStack = function(stack) {
              return __awaiter(this, void 0, void 0, function() {
                var styles;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      styles = stack.element.container.styles;
                      if (!styles.isVisible())
                        return [3, 2];
                      return [4, this.renderStackContent(stack)];
                    case 1:
                      _a.sent();
                      _a.label = 2;
                    case 2:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderNode = function(paint) {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (contains(
                        paint.container.flags,
                        16
                        /* DEBUG_RENDER */
                      )) {
                        debugger;
                      }
                      if (!paint.container.styles.isVisible())
                        return [3, 3];
                      return [4, this.renderNodeBackgroundAndBorders(paint)];
                    case 1:
                      _a.sent();
                      return [4, this.renderNodeContent(paint)];
                    case 2:
                      _a.sent();
                      _a.label = 3;
                    case 3:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderTextWithLetterSpacing = function(text, letterSpacing2, baseline) {
              var _this = this;
              if (letterSpacing2 === 0) {
                this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
              } else {
                var letters = segmentGraphemes(text.text);
                letters.reduce(function(left, letter) {
                  _this.ctx.fillText(letter, left, text.bounds.top + baseline);
                  return left + _this.ctx.measureText(letter).width;
                }, text.bounds.left);
              }
            };
            CanvasRenderer2.prototype.createFontStyle = function(styles) {
              var fontVariant2 = styles.fontVariant.filter(function(variant) {
                return variant === "normal" || variant === "small-caps";
              }).join("");
              var fontFamily2 = fixIOSSystemFonts(styles.fontFamily).join(", ");
              var fontSize2 = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
              return [
                [styles.fontStyle, fontVariant2, styles.fontWeight, fontSize2, fontFamily2].join(" "),
                fontFamily2,
                fontSize2
              ];
            };
            CanvasRenderer2.prototype.renderTextNode = function(text, styles) {
              return __awaiter(this, void 0, void 0, function() {
                var _a, font, fontFamily2, fontSize2, _b, baseline, middle, paintOrder2;
                var _this = this;
                return __generator(this, function(_c) {
                  _a = this.createFontStyle(styles), font = _a[0], fontFamily2 = _a[1], fontSize2 = _a[2];
                  this.ctx.font = font;
                  this.ctx.direction = styles.direction === 1 ? "rtl" : "ltr";
                  this.ctx.textAlign = "left";
                  this.ctx.textBaseline = "alphabetic";
                  _b = this.fontMetrics.getMetrics(fontFamily2, fontSize2), baseline = _b.baseline, middle = _b.middle;
                  paintOrder2 = styles.paintOrder;
                  text.textBounds.forEach(function(text2) {
                    paintOrder2.forEach(function(paintOrderLayer) {
                      switch (paintOrderLayer) {
                        case 0:
                          _this.ctx.fillStyle = asString(styles.color);
                          _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                          var textShadows = styles.textShadow;
                          if (textShadows.length && text2.text.trim().length) {
                            textShadows.slice(0).reverse().forEach(function(textShadow2) {
                              _this.ctx.shadowColor = asString(textShadow2.color);
                              _this.ctx.shadowOffsetX = textShadow2.offsetX.number * _this.options.scale;
                              _this.ctx.shadowOffsetY = textShadow2.offsetY.number * _this.options.scale;
                              _this.ctx.shadowBlur = textShadow2.blur.number;
                              _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                            });
                            _this.ctx.shadowColor = "";
                            _this.ctx.shadowOffsetX = 0;
                            _this.ctx.shadowOffsetY = 0;
                            _this.ctx.shadowBlur = 0;
                          }
                          if (styles.textDecorationLine.length) {
                            _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                            styles.textDecorationLine.forEach(function(textDecorationLine2) {
                              switch (textDecorationLine2) {
                                case 1:
                                  _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top + baseline), text2.bounds.width, 1);
                                  break;
                                case 2:
                                  _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top), text2.bounds.width, 1);
                                  break;
                                case 3:
                                  _this.ctx.fillRect(text2.bounds.left, Math.ceil(text2.bounds.top + middle), text2.bounds.width, 1);
                                  break;
                              }
                            });
                          }
                          break;
                        case 1:
                          if (styles.webkitTextStrokeWidth && text2.text.trim().length) {
                            _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                            _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                            _this.ctx.lineJoin = !!window.chrome ? "miter" : "round";
                            _this.ctx.strokeText(text2.text, text2.bounds.left, text2.bounds.top + baseline);
                          }
                          _this.ctx.strokeStyle = "";
                          _this.ctx.lineWidth = 0;
                          _this.ctx.lineJoin = "miter";
                          break;
                      }
                    });
                  });
                  return [
                    2
                    /*return*/
                  ];
                });
              });
            };
            CanvasRenderer2.prototype.renderReplacedElement = function(container, curves, image2) {
              if (image2 && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
                var box = contentBox(container);
                var path = calculatePaddingBoxPath(curves);
                this.path(path);
                this.ctx.save();
                this.ctx.clip();
                this.ctx.drawImage(image2, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
                this.ctx.restore();
              }
            };
            CanvasRenderer2.prototype.renderNodeContent = function(paint) {
              return __awaiter(this, void 0, void 0, function() {
                var container, curves, styles, _i, _a, child, image2, image2, iframeRenderer, canvas, size, _b, fontFamily2, fontSize2, baseline, bounds, x, textBounds, img, image2, url, fontFamily2, bounds;
                return __generator(this, function(_c) {
                  switch (_c.label) {
                    case 0:
                      this.applyEffects(paint.getEffects(
                        4
                        /* CONTENT */
                      ));
                      container = paint.container;
                      curves = paint.curves;
                      styles = container.styles;
                      _i = 0, _a = container.textNodes;
                      _c.label = 1;
                    case 1:
                      if (!(_i < _a.length))
                        return [3, 4];
                      child = _a[_i];
                      return [4, this.renderTextNode(child, styles)];
                    case 2:
                      _c.sent();
                      _c.label = 3;
                    case 3:
                      _i++;
                      return [3, 1];
                    case 4:
                      if (!(container instanceof ImageElementContainer))
                        return [3, 8];
                      _c.label = 5;
                    case 5:
                      _c.trys.push([5, 7, , 8]);
                      return [4, this.context.cache.match(container.src)];
                    case 6:
                      image2 = _c.sent();
                      this.renderReplacedElement(container, curves, image2);
                      return [3, 8];
                    case 7:
                      _c.sent();
                      this.context.logger.error("Error loading image " + container.src);
                      return [3, 8];
                    case 8:
                      if (container instanceof CanvasElementContainer) {
                        this.renderReplacedElement(container, curves, container.canvas);
                      }
                      if (!(container instanceof SVGElementContainer))
                        return [3, 12];
                      _c.label = 9;
                    case 9:
                      _c.trys.push([9, 11, , 12]);
                      return [4, this.context.cache.match(container.svg)];
                    case 10:
                      image2 = _c.sent();
                      this.renderReplacedElement(container, curves, image2);
                      return [3, 12];
                    case 11:
                      _c.sent();
                      this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                      return [3, 12];
                    case 12:
                      if (!(container instanceof IFrameElementContainer && container.tree))
                        return [3, 14];
                      iframeRenderer = new CanvasRenderer2(this.context, {
                        scale: this.options.scale,
                        backgroundColor: container.backgroundColor,
                        x: 0,
                        y: 0,
                        width: container.width,
                        height: container.height
                      });
                      return [4, iframeRenderer.render(container.tree)];
                    case 13:
                      canvas = _c.sent();
                      if (container.width && container.height) {
                        this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                      }
                      _c.label = 14;
                    case 14:
                      if (container instanceof InputElementContainer) {
                        size = Math.min(container.bounds.width, container.bounds.height);
                        if (container.type === CHECKBOX) {
                          if (container.checked) {
                            this.ctx.save();
                            this.path([
                              new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                              new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                              new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                              new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                              new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                              new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                              new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                            ]);
                            this.ctx.fillStyle = asString(INPUT_COLOR);
                            this.ctx.fill();
                            this.ctx.restore();
                          }
                        } else if (container.type === RADIO) {
                          if (container.checked) {
                            this.ctx.save();
                            this.ctx.beginPath();
                            this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                            this.ctx.fillStyle = asString(INPUT_COLOR);
                            this.ctx.fill();
                            this.ctx.restore();
                          }
                        }
                      }
                      if (isTextInputElement(container) && container.value.length) {
                        _b = this.createFontStyle(styles), fontFamily2 = _b[0], fontSize2 = _b[1];
                        baseline = this.fontMetrics.getMetrics(fontFamily2, fontSize2).baseline;
                        this.ctx.font = fontFamily2;
                        this.ctx.fillStyle = asString(styles.color);
                        this.ctx.textBaseline = "alphabetic";
                        this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                        bounds = contentBox(container);
                        x = 0;
                        switch (container.styles.textAlign) {
                          case 1:
                            x += bounds.width / 2;
                            break;
                          case 2:
                            x += bounds.width;
                            break;
                        }
                        textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                        this.ctx.save();
                        this.path([
                          new Vector(bounds.left, bounds.top),
                          new Vector(bounds.left + bounds.width, bounds.top),
                          new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                          new Vector(bounds.left, bounds.top + bounds.height)
                        ]);
                        this.ctx.clip();
                        this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                        this.ctx.restore();
                        this.ctx.textBaseline = "alphabetic";
                        this.ctx.textAlign = "left";
                      }
                      if (!contains(
                        container.styles.display,
                        2048
                        /* LIST_ITEM */
                      ))
                        return [3, 20];
                      if (!(container.styles.listStyleImage !== null))
                        return [3, 19];
                      img = container.styles.listStyleImage;
                      if (!(img.type === 0))
                        return [3, 18];
                      image2 = void 0;
                      url = img.url;
                      _c.label = 15;
                    case 15:
                      _c.trys.push([15, 17, , 18]);
                      return [4, this.context.cache.match(url)];
                    case 16:
                      image2 = _c.sent();
                      this.ctx.drawImage(image2, container.bounds.left - (image2.width + 10), container.bounds.top);
                      return [3, 18];
                    case 17:
                      _c.sent();
                      this.context.logger.error("Error loading list-style-image " + url);
                      return [3, 18];
                    case 18:
                      return [3, 20];
                    case 19:
                      if (paint.listValue && container.styles.listStyleType !== -1) {
                        fontFamily2 = this.createFontStyle(styles)[0];
                        this.ctx.font = fontFamily2;
                        this.ctx.fillStyle = asString(styles.color);
                        this.ctx.textBaseline = "middle";
                        this.ctx.textAlign = "right";
                        bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                        this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                        this.ctx.textBaseline = "bottom";
                        this.ctx.textAlign = "left";
                      }
                      _c.label = 20;
                    case 20:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderStackContent = function(stack) {
              return __awaiter(this, void 0, void 0, function() {
                var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
                return __generator(this, function(_p) {
                  switch (_p.label) {
                    case 0:
                      if (contains(
                        stack.element.container.flags,
                        16
                        /* DEBUG_RENDER */
                      )) {
                        debugger;
                      }
                      return [4, this.renderNodeBackgroundAndBorders(stack.element)];
                    case 1:
                      _p.sent();
                      _i = 0, _a = stack.negativeZIndex;
                      _p.label = 2;
                    case 2:
                      if (!(_i < _a.length))
                        return [3, 5];
                      child = _a[_i];
                      return [4, this.renderStack(child)];
                    case 3:
                      _p.sent();
                      _p.label = 4;
                    case 4:
                      _i++;
                      return [3, 2];
                    case 5:
                      return [4, this.renderNodeContent(stack.element)];
                    case 6:
                      _p.sent();
                      _b = 0, _c = stack.nonInlineLevel;
                      _p.label = 7;
                    case 7:
                      if (!(_b < _c.length))
                        return [3, 10];
                      child = _c[_b];
                      return [4, this.renderNode(child)];
                    case 8:
                      _p.sent();
                      _p.label = 9;
                    case 9:
                      _b++;
                      return [3, 7];
                    case 10:
                      _d = 0, _e = stack.nonPositionedFloats;
                      _p.label = 11;
                    case 11:
                      if (!(_d < _e.length))
                        return [3, 14];
                      child = _e[_d];
                      return [4, this.renderStack(child)];
                    case 12:
                      _p.sent();
                      _p.label = 13;
                    case 13:
                      _d++;
                      return [3, 11];
                    case 14:
                      _f = 0, _g = stack.nonPositionedInlineLevel;
                      _p.label = 15;
                    case 15:
                      if (!(_f < _g.length))
                        return [3, 18];
                      child = _g[_f];
                      return [4, this.renderStack(child)];
                    case 16:
                      _p.sent();
                      _p.label = 17;
                    case 17:
                      _f++;
                      return [3, 15];
                    case 18:
                      _h = 0, _j = stack.inlineLevel;
                      _p.label = 19;
                    case 19:
                      if (!(_h < _j.length))
                        return [3, 22];
                      child = _j[_h];
                      return [4, this.renderNode(child)];
                    case 20:
                      _p.sent();
                      _p.label = 21;
                    case 21:
                      _h++;
                      return [3, 19];
                    case 22:
                      _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                      _p.label = 23;
                    case 23:
                      if (!(_k < _l.length))
                        return [3, 26];
                      child = _l[_k];
                      return [4, this.renderStack(child)];
                    case 24:
                      _p.sent();
                      _p.label = 25;
                    case 25:
                      _k++;
                      return [3, 23];
                    case 26:
                      _m = 0, _o = stack.positiveZIndex;
                      _p.label = 27;
                    case 27:
                      if (!(_m < _o.length))
                        return [3, 30];
                      child = _o[_m];
                      return [4, this.renderStack(child)];
                    case 28:
                      _p.sent();
                      _p.label = 29;
                    case 29:
                      _m++;
                      return [3, 27];
                    case 30:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.mask = function(paths) {
              this.ctx.beginPath();
              this.ctx.moveTo(0, 0);
              this.ctx.lineTo(this.canvas.width, 0);
              this.ctx.lineTo(this.canvas.width, this.canvas.height);
              this.ctx.lineTo(0, this.canvas.height);
              this.ctx.lineTo(0, 0);
              this.formatPath(paths.slice(0).reverse());
              this.ctx.closePath();
            };
            CanvasRenderer2.prototype.path = function(paths) {
              this.ctx.beginPath();
              this.formatPath(paths);
              this.ctx.closePath();
            };
            CanvasRenderer2.prototype.formatPath = function(paths) {
              var _this = this;
              paths.forEach(function(point, index) {
                var start = isBezierCurve(point) ? point.start : point;
                if (index === 0) {
                  _this.ctx.moveTo(start.x, start.y);
                } else {
                  _this.ctx.lineTo(start.x, start.y);
                }
                if (isBezierCurve(point)) {
                  _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                }
              });
            };
            CanvasRenderer2.prototype.renderRepeat = function(path, pattern, offsetX, offsetY) {
              this.path(path);
              this.ctx.fillStyle = pattern;
              this.ctx.translate(offsetX, offsetY);
              this.ctx.fill();
              this.ctx.translate(-offsetX, -offsetY);
            };
            CanvasRenderer2.prototype.resizeImage = function(image2, width, height) {
              var _a;
              if (image2.width === width && image2.height === height) {
                return image2;
              }
              var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
              var canvas = ownerDocument.createElement("canvas");
              canvas.width = Math.max(1, width);
              canvas.height = Math.max(1, height);
              var ctx = canvas.getContext("2d");
              ctx.drawImage(image2, 0, 0, image2.width, image2.height, 0, 0, width, height);
              return canvas;
            };
            CanvasRenderer2.prototype.renderBackgroundImage = function(container) {
              return __awaiter(this, void 0, void 0, function() {
                var index, _loop_1, this_1, _i, _a, backgroundImage2;
                return __generator(this, function(_b) {
                  switch (_b.label) {
                    case 0:
                      index = container.styles.backgroundImage.length - 1;
                      _loop_1 = function(backgroundImage3) {
                        var image2, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position2, x, y, _g, rx, ry, radialGradient_1, midX, midY, f2, invF;
                        return __generator(this, function(_h) {
                          switch (_h.label) {
                            case 0:
                              if (!(backgroundImage3.type === 0))
                                return [3, 5];
                              image2 = void 0;
                              url = backgroundImage3.url;
                              _h.label = 1;
                            case 1:
                              _h.trys.push([1, 3, , 4]);
                              return [4, this_1.context.cache.match(url)];
                            case 2:
                              image2 = _h.sent();
                              return [3, 4];
                            case 3:
                              _h.sent();
                              this_1.context.logger.error("Error loading background-image " + url);
                              return [3, 4];
                            case 4:
                              if (image2) {
                                _c = calculateBackgroundRendering(container, index, [
                                  image2.width,
                                  image2.height,
                                  image2.width / image2.height
                                ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                                pattern = this_1.ctx.createPattern(this_1.resizeImage(image2, width, height), "repeat");
                                this_1.renderRepeat(path, pattern, x, y);
                              }
                              return [3, 6];
                            case 5:
                              if (isLinearGradient(backgroundImage3)) {
                                _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                                _e = calculateGradientDirection(backgroundImage3.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                                canvas = document.createElement("canvas");
                                canvas.width = width;
                                canvas.height = height;
                                ctx = canvas.getContext("2d");
                                gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                processColorStops(backgroundImage3.stops, lineLength).forEach(function(colorStop) {
                                  return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                });
                                ctx.fillStyle = gradient_1;
                                ctx.fillRect(0, 0, width, height);
                                if (width > 0 && height > 0) {
                                  pattern = this_1.ctx.createPattern(canvas, "repeat");
                                  this_1.renderRepeat(path, pattern, x, y);
                                }
                              } else if (isRadialGradient(backgroundImage3)) {
                                _f = calculateBackgroundRendering(container, index, [
                                  null,
                                  null,
                                  null
                                ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                                position2 = backgroundImage3.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage3.position;
                                x = getAbsoluteValue(position2[0], width);
                                y = getAbsoluteValue(position2[position2.length - 1], height);
                                _g = calculateRadius(backgroundImage3, x, y, width, height), rx = _g[0], ry = _g[1];
                                if (rx > 0 && ry > 0) {
                                  radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                  processColorStops(backgroundImage3.stops, rx * 2).forEach(function(colorStop) {
                                    return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                  });
                                  this_1.path(path);
                                  this_1.ctx.fillStyle = radialGradient_1;
                                  if (rx !== ry) {
                                    midX = container.bounds.left + 0.5 * container.bounds.width;
                                    midY = container.bounds.top + 0.5 * container.bounds.height;
                                    f2 = ry / rx;
                                    invF = 1 / f2;
                                    this_1.ctx.save();
                                    this_1.ctx.translate(midX, midY);
                                    this_1.ctx.transform(1, 0, 0, f2, 0, 0);
                                    this_1.ctx.translate(-midX, -midY);
                                    this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                    this_1.ctx.restore();
                                  } else {
                                    this_1.ctx.fill();
                                  }
                                }
                              }
                              _h.label = 6;
                            case 6:
                              index--;
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      };
                      this_1 = this;
                      _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                      _b.label = 1;
                    case 1:
                      if (!(_i < _a.length))
                        return [3, 4];
                      backgroundImage2 = _a[_i];
                      return [5, _loop_1(backgroundImage2)];
                    case 2:
                      _b.sent();
                      _b.label = 3;
                    case 3:
                      _i++;
                      return [3, 1];
                    case 4:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderSolidBorder = function(color2, side, curvePoints) {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  this.path(parsePathForBorder(curvePoints, side));
                  this.ctx.fillStyle = asString(color2);
                  this.ctx.fill();
                  return [
                    2
                    /*return*/
                  ];
                });
              });
            };
            CanvasRenderer2.prototype.renderDoubleBorder = function(color2, width, side, curvePoints) {
              return __awaiter(this, void 0, void 0, function() {
                var outerPaths, innerPaths;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (!(width < 3))
                        return [3, 2];
                      return [4, this.renderSolidBorder(color2, side, curvePoints)];
                    case 1:
                      _a.sent();
                      return [
                        2
                        /*return*/
                      ];
                    case 2:
                      outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                      this.path(outerPaths);
                      this.ctx.fillStyle = asString(color2);
                      this.ctx.fill();
                      innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                      this.path(innerPaths);
                      this.ctx.fill();
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderNodeBackgroundAndBorders = function(paint) {
              return __awaiter(this, void 0, void 0, function() {
                var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      this.applyEffects(paint.getEffects(
                        2
                        /* BACKGROUND_BORDERS */
                      ));
                      styles = paint.container.styles;
                      hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                      borders = [
                        { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
                        { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
                        { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
                        { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
                      ];
                      backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                      if (!(hasBackground || styles.boxShadow.length))
                        return [3, 2];
                      this.ctx.save();
                      this.path(backgroundPaintingArea);
                      this.ctx.clip();
                      if (!isTransparent(styles.backgroundColor)) {
                        this.ctx.fillStyle = asString(styles.backgroundColor);
                        this.ctx.fill();
                      }
                      return [4, this.renderBackgroundImage(paint.container)];
                    case 1:
                      _a.sent();
                      this.ctx.restore();
                      styles.boxShadow.slice(0).reverse().forEach(function(shadow) {
                        _this.ctx.save();
                        var borderBoxArea = calculateBorderBoxPath(paint.curves);
                        var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                        var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                        if (shadow.inset) {
                          _this.path(borderBoxArea);
                          _this.ctx.clip();
                          _this.mask(shadowPaintingArea);
                        } else {
                          _this.mask(borderBoxArea);
                          _this.ctx.clip();
                          _this.path(shadowPaintingArea);
                        }
                        _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                        _this.ctx.shadowOffsetY = shadow.offsetY.number;
                        _this.ctx.shadowColor = asString(shadow.color);
                        _this.ctx.shadowBlur = shadow.blur.number;
                        _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : "rgba(0,0,0,1)";
                        _this.ctx.fill();
                        _this.ctx.restore();
                      });
                      _a.label = 2;
                    case 2:
                      side = 0;
                      _i = 0, borders_1 = borders;
                      _a.label = 3;
                    case 3:
                      if (!(_i < borders_1.length))
                        return [3, 13];
                      border = borders_1[_i];
                      if (!(border.style !== 0 && !isTransparent(border.color) && border.width > 0))
                        return [3, 11];
                      if (!(border.style === 2))
                        return [3, 5];
                      return [4, this.renderDashedDottedBorder(
                        border.color,
                        border.width,
                        side,
                        paint.curves,
                        2
                        /* DASHED */
                      )];
                    case 4:
                      _a.sent();
                      return [3, 11];
                    case 5:
                      if (!(border.style === 3))
                        return [3, 7];
                      return [4, this.renderDashedDottedBorder(
                        border.color,
                        border.width,
                        side,
                        paint.curves,
                        3
                        /* DOTTED */
                      )];
                    case 6:
                      _a.sent();
                      return [3, 11];
                    case 7:
                      if (!(border.style === 4))
                        return [3, 9];
                      return [4, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
                    case 8:
                      _a.sent();
                      return [3, 11];
                    case 9:
                      return [4, this.renderSolidBorder(border.color, side, paint.curves)];
                    case 10:
                      _a.sent();
                      _a.label = 11;
                    case 11:
                      side++;
                      _a.label = 12;
                    case 12:
                      _i++;
                      return [3, 3];
                    case 13:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderDashedDottedBorder = function(color2, width, side, curvePoints, style) {
              return __awaiter(this, void 0, void 0, function() {
                var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
                return __generator(this, function(_a) {
                  this.ctx.save();
                  strokePaths = parsePathForBorderStroke(curvePoints, side);
                  boxPaths = parsePathForBorder(curvePoints, side);
                  if (style === 2) {
                    this.path(boxPaths);
                    this.ctx.clip();
                  }
                  if (isBezierCurve(boxPaths[0])) {
                    startX = boxPaths[0].start.x;
                    startY = boxPaths[0].start.y;
                  } else {
                    startX = boxPaths[0].x;
                    startY = boxPaths[0].y;
                  }
                  if (isBezierCurve(boxPaths[1])) {
                    endX = boxPaths[1].end.x;
                    endY = boxPaths[1].end.y;
                  } else {
                    endX = boxPaths[1].x;
                    endY = boxPaths[1].y;
                  }
                  if (side === 0 || side === 2) {
                    length = Math.abs(startX - endX);
                  } else {
                    length = Math.abs(startY - endY);
                  }
                  this.ctx.beginPath();
                  if (style === 3) {
                    this.formatPath(strokePaths);
                  } else {
                    this.formatPath(boxPaths.slice(0, 2));
                  }
                  dashLength = width < 3 ? width * 3 : width * 2;
                  spaceLength = width < 3 ? width * 2 : width;
                  if (style === 3) {
                    dashLength = width;
                    spaceLength = width;
                  }
                  useLineDash = true;
                  if (length <= dashLength * 2) {
                    useLineDash = false;
                  } else if (length <= dashLength * 2 + spaceLength) {
                    multiplier = length / (2 * dashLength + spaceLength);
                    dashLength *= multiplier;
                    spaceLength *= multiplier;
                  } else {
                    numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                    minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                    maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                    spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
                  }
                  if (useLineDash) {
                    if (style === 3) {
                      this.ctx.setLineDash([0, dashLength + spaceLength]);
                    } else {
                      this.ctx.setLineDash([dashLength, spaceLength]);
                    }
                  }
                  if (style === 3) {
                    this.ctx.lineCap = "round";
                    this.ctx.lineWidth = width;
                  } else {
                    this.ctx.lineWidth = width * 2 + 1.1;
                  }
                  this.ctx.strokeStyle = asString(color2);
                  this.ctx.stroke();
                  this.ctx.setLineDash([]);
                  if (style === 2) {
                    if (isBezierCurve(boxPaths[0])) {
                      path1 = boxPaths[3];
                      path2 = boxPaths[0];
                      this.ctx.beginPath();
                      this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                      this.ctx.stroke();
                    }
                    if (isBezierCurve(boxPaths[1])) {
                      path1 = boxPaths[1];
                      path2 = boxPaths[2];
                      this.ctx.beginPath();
                      this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                      this.ctx.stroke();
                    }
                  }
                  this.ctx.restore();
                  return [
                    2
                    /*return*/
                  ];
                });
              });
            };
            CanvasRenderer2.prototype.render = function(element) {
              return __awaiter(this, void 0, void 0, function() {
                var stack;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (this.options.backgroundColor) {
                        this.ctx.fillStyle = asString(this.options.backgroundColor);
                        this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                      }
                      stack = parseStackingContexts(element);
                      return [4, this.renderStack(stack)];
                    case 1:
                      _a.sent();
                      this.applyEffects([]);
                      return [2, this.canvas];
                  }
                });
              });
            };
            return CanvasRenderer2;
          }(Renderer)
        );
        var isTextInputElement = function(container) {
          if (container instanceof TextareaElementContainer) {
            return true;
          } else if (container instanceof SelectElementContainer) {
            return true;
          } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
            return true;
          }
          return false;
        };
        var calculateBackgroundCurvedPaintingArea = function(clip, curves) {
          switch (clip) {
            case 0:
              return calculateBorderBoxPath(curves);
            case 2:
              return calculateContentBoxPath(curves);
            case 1:
            default:
              return calculatePaddingBoxPath(curves);
          }
        };
        var canvasTextAlign = function(textAlign2) {
          switch (textAlign2) {
            case 1:
              return "center";
            case 2:
              return "right";
            case 0:
            default:
              return "left";
          }
        };
        var iOSBrokenFonts = ["-apple-system", "system-ui"];
        var fixIOSSystemFonts = function(fontFamilies) {
          return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function(fontFamily2) {
            return iOSBrokenFonts.indexOf(fontFamily2) === -1;
          }) : fontFamilies;
        };
        var ForeignObjectRenderer = (
          /** @class */
          function(_super) {
            __extends(ForeignObjectRenderer2, _super);
            function ForeignObjectRenderer2(context, options) {
              var _this = _super.call(this, context, options) || this;
              _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
              _this.ctx = _this.canvas.getContext("2d");
              _this.options = options;
              _this.canvas.width = Math.floor(options.width * options.scale);
              _this.canvas.height = Math.floor(options.height * options.scale);
              _this.canvas.style.width = options.width + "px";
              _this.canvas.style.height = options.height + "px";
              _this.ctx.scale(_this.options.scale, _this.options.scale);
              _this.ctx.translate(-options.x, -options.y);
              _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
              return _this;
            }
            ForeignObjectRenderer2.prototype.render = function(element) {
              return __awaiter(this, void 0, void 0, function() {
                var svg, img;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                      return [4, loadSerializedSVG(svg)];
                    case 1:
                      img = _a.sent();
                      if (this.options.backgroundColor) {
                        this.ctx.fillStyle = asString(this.options.backgroundColor);
                        this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                      }
                      this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                      return [2, this.canvas];
                  }
                });
              });
            };
            return ForeignObjectRenderer2;
          }(Renderer)
        );
        var loadSerializedSVG = function(svg) {
          return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
              resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
          });
        };
        var Logger = (
          /** @class */
          function() {
            function Logger2(_a) {
              var id = _a.id, enabled = _a.enabled;
              this.id = id;
              this.enabled = enabled;
              this.start = Date.now();
            }
            Logger2.prototype.debug = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.debug === "function") {
                  console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                } else {
                  this.info.apply(this, args);
                }
              }
            };
            Logger2.prototype.getTime = function() {
              return Date.now() - this.start;
            };
            Logger2.prototype.info = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.info === "function") {
                  console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
              }
            };
            Logger2.prototype.warn = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.warn === "function") {
                  console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                } else {
                  this.info.apply(this, args);
                }
              }
            };
            Logger2.prototype.error = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.error === "function") {
                  console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                } else {
                  this.info.apply(this, args);
                }
              }
            };
            Logger2.instances = {};
            return Logger2;
          }()
        );
        var Context = (
          /** @class */
          function() {
            function Context2(options, windowBounds) {
              var _a;
              this.windowBounds = windowBounds;
              this.instanceName = "#" + Context2.instanceCount++;
              this.logger = new Logger({ id: this.instanceName, enabled: options.logging });
              this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
            }
            Context2.instanceCount = 1;
            return Context2;
          }()
        );
        var html2canvas2 = function(element, options) {
          if (options === void 0) {
            options = {};
          }
          return renderElement(element, options);
        };
        if (typeof window !== "undefined") {
          CacheStorage.setContext(window);
        }
        var renderElement = function(element, opts) {
          return __awaiter(void 0, void 0, void 0, function() {
            var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor2, renderOptions, canvas, renderer, root, renderer;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            return __generator(this, function(_u) {
              switch (_u.label) {
                case 0:
                  if (!element || typeof element !== "object") {
                    return [2, Promise.reject("Invalid element provided as first argument")];
                  }
                  ownerDocument = element.ownerDocument;
                  if (!ownerDocument) {
                    throw new Error("Element is not attached to a Document");
                  }
                  defaultView = ownerDocument.defaultView;
                  if (!defaultView) {
                    throw new Error("Document is not attached to a Window");
                  }
                  resourceOptions = {
                    allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                    imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15e3,
                    proxy: opts.proxy,
                    useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                  };
                  contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
                  windowOptions = {
                    windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                    windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                    scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                    scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                  };
                  windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                  context = new Context(contextOptions, windowBounds);
                  foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                  cloneOptions = {
                    allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                    onclone: opts.onclone,
                    ignoreElements: opts.ignoreElements,
                    inlineImages: foreignObjectRendering,
                    copyStyles: foreignObjectRendering
                  };
                  context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                  documentCloner = new DocumentCloner(context, element, cloneOptions);
                  clonedElement = documentCloner.clonedReferenceElement;
                  if (!clonedElement) {
                    return [2, Promise.reject("Unable to find element in cloned iframe")];
                  }
                  return [4, documentCloner.toIFrame(ownerDocument, windowBounds)];
                case 1:
                  container = _u.sent();
                  _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                  backgroundColor2 = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                  renderOptions = {
                    canvas: opts.canvas,
                    backgroundColor: backgroundColor2,
                    scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                    x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                    y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                    width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                    height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                  };
                  if (!foreignObjectRendering)
                    return [3, 3];
                  context.logger.debug("Document cloned, using foreign object rendering");
                  renderer = new ForeignObjectRenderer(context, renderOptions);
                  return [4, renderer.render(clonedElement)];
                case 2:
                  canvas = _u.sent();
                  return [3, 5];
                case 3:
                  context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                  context.logger.debug("Starting DOM parsing");
                  root = parseTree(context, clonedElement);
                  if (backgroundColor2 === root.styles.backgroundColor) {
                    root.styles.backgroundColor = COLORS.TRANSPARENT;
                  }
                  context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                  renderer = new CanvasRenderer(context, renderOptions);
                  return [4, renderer.render(root)];
                case 4:
                  canvas = _u.sent();
                  _u.label = 5;
                case 5:
                  if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                    if (!DocumentCloner.destroy(container)) {
                      context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                    }
                  }
                  context.logger.debug("Finished rendering");
                  return [2, canvas];
              }
            });
          });
        };
        var parseBackgroundColor = function(context, element, backgroundColorOverride) {
          var ownerDocument = element.ownerDocument;
          var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
          var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
          var defaultBackgroundColor = typeof backgroundColorOverride === "string" ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 4294967295;
          return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
        };
        return html2canvas2;
      });
    }
  });

  // scripts/Danish.js
  var useDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  tinymce.init({
    selector: "textarea#mytextarea",
    plugins: "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons spellchecker",
    imagetools_cors_hosts: ["picsum.photos"],
    menu: {
      custom: { title: "File", items: "newdocument | open | save | preview | print" },
      tools: { title: "Tools", items: "spellchecker | screenshot | code wordcount" }
    },
    menubar: "custom edit view insert format tools table help",
    toolbar: "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify  | ltr rtl | spellchecker | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | outdent indent | numlist bullist",
    toolbar_sticky: true,
    autosave_ask_before_unload: true,
    autosave_interval: "30s",
    autosave_prefix: "{path}{query}-{id}-",
    autosave_restore_when_empty: false,
    autosave_retention: "2m",
    image_advtab: true,
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar: "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
    noneditable_noneditable_class: "mceNonEditable",
    toolbar_mode: "sliding",
    contextmenu: "link image imagetools table spellchecker",
    skin: useDarkMode ? "oxide-dark" : "oxide",
    content_css: useDarkMode ? "dark" : "default",
    content_style: "body { font-family: Verdana,UKIJ,sans-serif; }",
    spellchecker_languages: "Bulgarian=bg,Catalan=ca,Czech=cs,Croatian=hr,Danish=da,Dutch=nl,English=en,French=fr_FR,German=de,Georgian=ka,Greek=el,Hebrew=he,Hungarian=hu,Italian=it,Korean=ko,Lithuanian=lt,Polish=pl,Portuguese=pt_PT,Persian=fa,Romanian=ro,Russian=ru,Spanish=es,Swedish=sv,Slovak=sk,Slovenian=sl,Turkish=tr,Uyghur=ug,Ukrainian=uk",
    spellchecker_rpc_url: window.location.origin+'/tinymce_spellchecker/spellchecker.php',
    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
    language: "da",
    setup: function(editor) {
      editor.ui.registry.addToggleMenuItem("open", {
        text: "Open",
        icon: "browse",
        onAction: function() {
          openFile();
        }
      });
      editor.ui.registry.addToggleMenuItem("save", {
        text: "Save",
        icon: "save",
        onAction: function() {
          saveFile();
        }
      });
      editor.ui.registry.addToggleMenuItem("screenshot", {
        text: "Screenshot",
        icon: "edit-image",
        onAction: function() {
          saveAsImage();
        }
      });
    }
  });
  var fileHandle;
  async function openFile() {
    const options = {
      types: [
        {
          description: "Text files",
          accept: {
            "text/plain": [".txt"]
          }
        }
      ]
    };
    [fileHandle] = await window.showOpenFilePicker(options);
    const file = await fileHandle.getFile();
    const content = await file.text();
    tinymce.get("mytextarea").setContent(content);
    return content;
  }
  async function saveFile() {
    const options = {
      types: [
        {
          description: "Text files",
          accept: {
            "text/plain": [".txt"]
          }
        }
      ]
    };
    const handle = await window.showSaveFilePicker(options);
    const writable = await handle.createWritable();
    const content = tinymce.get("mytextarea").getContent();
    await writable.write(content);
    await writable.close();
    return handle;
  }
  var FileSaver = require_FileSaver_min();
  var html2canvas = require_html2canvas();
  async function saveAsImage() {
    var content = tinymce.get("mytextarea").getContent() + "<p>&nbsp;</p>";
    tinymce.get("mytextarea").setContent(content);
    var elem = tinymce.get("mytextarea").contentDocument.body;
    html2canvas(elem).then(function(canvas) {
      canvas.toBlob(function(blob) {
        saveAs(blob, "my-doc.png");
      });
    });
  }
})();
/*! Bundled license information:

html2canvas/dist/html2canvas.js:
  (*!
   * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   *)
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
  
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
  
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** *)
*/
