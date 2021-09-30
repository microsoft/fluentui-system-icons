import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3c0-1.1.9-2 2-2h6a2 2 0 012 2v5c-.88 0-1.44-.27-1.85-.65-.41-.39-.7-.93-.94-1.54l-.23-.61-.1-.3c-.12-.29-.23-.59-.38-.85C7.22 3.5 6.78 3 6 3s-1.22.51-1.5 1.05a7.22 7.22 0 00-.48 1.15l-.23.61c-.25.61-.53 1.15-.94 1.54-.4.38-.97.65-1.85.65V3zm0 6c0 1.1.9 2 2 2h6a2 2 0 002-2 3.53 3.53 0 01-2.53-.92 5.16 5.16 0 01-1.18-1.9 23.7 23.7 0 01-.25-.65l-.1-.27c-.11-.3-.21-.54-.32-.74C6.4 4.12 6.22 4 6 4c-.22 0-.4.11-.62.52a6.29 6.29 0 00-.42 1c-.07.22-.16.44-.25.67-.25.64-.6 1.35-1.18 1.9C2.93 8.64 2.12 9 1 9z" fill={primaryFill} /></svg>;
}

const BezierCurveSquare12Filled = wrapIcon(rawSvg({}), 'BezierCurveSquare12Filled');
export default BezierCurveSquare12Filled;
      