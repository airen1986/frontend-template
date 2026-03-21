import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
window.bootstrap = bootstrap;
import '../../../scss/styles.scss'; // Bootstrap + SCSS theme
import '../../../common/css/custom.css'; // shared plain-CSS utilities
import '../css/main.css'; // home-page-specific styles

import {
  bsToastSuccess,
  bsToastError,
  bsToastWarning,
  bsToastInfo,
} from '../../../common/js/bsToast';
import { $, on } from '../../../common/js/dom';

// Bootstrap toast demo buttons
on($('#btn-bs-toast-success'), 'click', () => bsToastSuccess('Operation completed!'));
on($('#btn-bs-toast-error'), 'click', () =>
  bsToastError('Something went wrong.', { errorCode: 401 })
);
on($('#btn-bs-toast-warning'), 'click', () => bsToastWarning('Please double-check your input.'));
on($('#btn-bs-toast-info'), 'click', () => bsToastInfo('Here is some useful info.'));
