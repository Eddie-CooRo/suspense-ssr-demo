/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
const ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null,
};

export default ReactCurrentOwner;

// WEBPACK FOOTER //
// ../react/packages/react/src/ReactCurrentOwner.js
