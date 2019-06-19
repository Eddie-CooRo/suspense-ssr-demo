/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export default function(name, source, ownerName) {
  return (
    '\n    in ' +
    (name || 'Unknown') +
    (source
      ? ' (at ' +
        source.fileName.replace(/^.*[\\\/]/, '') +
        ':' +
        source.lineNumber +
        ')'
      : ownerName
        ? ' (created by ' + ownerName + ')'
        : '')
  );
}

// WEBPACK FOOTER //
// ../react/packages/shared/describeComponentFrame.js
