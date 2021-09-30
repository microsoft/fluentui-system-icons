import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.12 1.12c-.88-.25-1.58.38-1.82.98l-.26.66c-2 5.1-3.84 9.74-8.61 12.16a2.96 2.96 0 00-1.65 3.09l.42 2.5a3.75 3.75 0 002.67 2.98l7.69 2.2a6.75 6.75 0 008.47-5.15l1.22-6.04a3.75 3.75 0 00-3.67-4.5H18.4c.35-1.5.5-3.22.35-4.73-.19-1.77-.86-3.66-2.64-4.15z" fill={primaryFill} /></svg>;
}

const ThumbLike28Filled = wrapIcon(rawSvg({}), 'ThumbLike28Filled');
export default ThumbLike28Filled;
      