/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

const ReactSuspenseServerRenderer = require('./ReactSuspenseServerRenderer');

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest
module.exports = ReactSuspenseServerRenderer.default
  ? ReactSuspenseServerRenderer.default
  : ReactSuspenseServerRenderer;

// WEBPACK FOOTER //
// ../react/packages/react-dom/server.suspense.js
