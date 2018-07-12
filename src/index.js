'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// thousand
const K = 1000;
// million
const M = 1000 * K;
// billion
const B = 1000 * M;

/**
 *
 * @param {number} value
 * @return {object} kop and [parts] - array of strings of 3 digits each but first element
 */
const split = value => {
  let rub = Math.trunc(value);
  let kop = Math.round((value - rub) * 100).toString().padStart(2, '0');

  let parts = [];
  if (rub > B) parts.push(Math.trunc(rub / B));
  if (rub > M) parts.push(Math.trunc(rub % B / M));
  if (rub > K) parts.push(Math.trunc(rub % M / K));
  parts.push(Math.trunc(rub % K));

  parts = parts.map((part, i) => i > 0 ? part.toString().padStart(3, '0') : part.toString());

  return { kop, parts };
};

/**
 * Форматирует пробелами цену в рублях
 *
 * @param {number|string} value
 * @returns {string}
 */
const rubFormatWithSpaces = exports.rubFormatWithSpaces = value => {
  if (isNaN(value)) return '';

  let { parts } = split(value);
  return parts.join(' ');
};
/**
 * Форматирует пробелами цену в рублях с копейками
 *
 * @param {number|string} value
 * @returns {string}
 */
const rubKopFormatWithSpaces = exports.rubKopFormatWithSpaces = value => {
  if (isNaN(value)) return '';

  let { kop, parts } = split(value);
  return `${parts.join(' ')},${kop}`;
};
/**
 * Форматирует в html цену в рубях с отступами в span'ах,
 * чтобы легко было выделять и копировать
 *
 * @param {number|string} value
 * @return {string}
 */
const rubHtml = exports.rubHtml = value => {
  if (isNaN(value)) return '';

  let { parts } = split(value);
  return parts.map((part, i) => i > 0 ? `<span style="padding-left:.2em">${part}</span>` : part).join('');
};
/**
 * Форматирует в html цену в рубях с копейками
 * с отступами в span'ах и копейками помельче шрифтом,
 * чтобы легко было выделять и копировать
 *
 * @param {number|string} value
 * @return {string}
 */
const rubKopHtml = exports.rubKopHtml = value => {
  if (isNaN(value)) return '';

  let { kop, parts } = split(value);
  parts = parts.map((part, i) => i > 0 ? `<span style="padding-left:.2em">${part}</span>` : part);

  return parts.join('') + `<span style="font-size:75%;font-weight:normal;opacity:0.8">,${kop}</span>`;
};

exports.default = {
  rubFormatWithSpaces,
  rubKopFormatWithSpaces,
  rubHtml,
  rubKopHtml
};
