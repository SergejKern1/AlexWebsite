
interface LazyPlaceholderParams {
    width: number;
    height: number;
}

/**
 * @param arg1 LazyPlaceholderParams or width
 * @param arg2 height
 * @returns minHeight-style
 */
export function lazyPlaceholder(arg1: number | LazyPlaceholderParams, arg2?: number) : { aspectRatio: string } {
    // Determine how the function was called:
    let width: number, height: number;
    
    if (typeof arg1 === 'object') {
      // Called with an object.
      ({ width, height } = arg1);
    } else {
      // Called with positional parameters.
      width = arg1;
      height = arg2!;
    }

    return {aspectRatio: `${width} / ${height}`};
}