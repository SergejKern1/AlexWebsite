/**
 * Linear interpolation function
 * @param {number} start - Starting value
 * @param {number} end - Ending value
 * @param {number} t - Interpolation factor (0 to 1)
 * @returns {number} Interpolated value
 */
export function lerp(start:number, end:number, t:number) {
    return start + (end - start) * t;
}
/**
 * clamp value
 * @param {number} a - value to clamp
 * @param {number} min - minimum value
 * @param {number} max - maximum value
 * @returns {number} clamped value
 */
export function clamp(a:number, min:number, max:number) {
    return Math.min(Math.max(a, min), max);
}
/**
 * clamp value between 0 and 1
 * @param {number} a - value to clamp
 * @returns {number} clamped value
 */
export function clamp01(a:number) {
    return clamp(a, 0, 1);
}