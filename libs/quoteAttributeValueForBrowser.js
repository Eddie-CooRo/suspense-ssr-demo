/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import escapeTextForBrowser from './escapeTextForBrowser';

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

export default quoteAttributeValueForBrowser;



// WEBPACK FOOTER //
// ../react/packages/react-dom/src/server/quoteAttributeValueForBrowser.js