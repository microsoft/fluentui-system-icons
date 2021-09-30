import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M46 13a11 11 0 11-22 0 11 11 0 0122 0zm-4.3-4.7a1 1 0 00-1.4 0L33 15.58l-3.3-3.3a1 1 0 00-1.4 1.42l4 4a1 1 0 001.4 0l8-8a1 1 0 000-1.42z" fill={primaryFill} /><path d="M35 26c3.5 0 6.66-1.38 9-3.62v6.37c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0112 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5C4 9.25 7.25 6 11.25 6h12.8A13 13 0 0035 26z" fill={primaryFill} /></svg>;
}

const CommentCheckmark48Filled = wrapIcon(rawSvg({}), 'CommentCheckmark48Filled');
export default CommentCheckmark48Filled;
      