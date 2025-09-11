// Performance optimization utilities

/**
 * Throttle function to limit how often a function can be called
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

/**
 * Debounce function to delay execution until after wait time has passed
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
}

/**
 * Optimized scroll handler with throttling
 * @param {Function} callback - Function to call on scroll
 * @param {number} throttleMs - Throttle time in milliseconds (default: 16ms for 60fps)
 * @returns {Function} Throttled scroll handler
 */
export function createOptimizedScrollHandler(callback, throttleMs = 16) {
  return throttle(callback, throttleMs);
}

/**
 * Optimized resize handler with debouncing
 * @param {Function} callback - Function to call on resize
 * @param {number} debounceMs - Debounce time in milliseconds (default: 250ms)
 * @returns {Function} Debounced resize handler
 */
export function createOptimizedResizeHandler(callback, debounceMs = 250) {
  return debounce(callback, debounceMs);
}
