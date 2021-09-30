import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 2.01a3.75 3.75 0 00-3.67 3h12.17A4.75 4.75 0 0123 9.76v8.67c1.71-.35 3-1.87 3-3.68V7.76a5.75 5.75 0 00-5.75-5.75H9.75zM22 9.76a3.75 3.75 0 00-3.75-3.75H5.75A3.75 3.75 0 002 9.76v8.99a3.75 3.75 0 003.75 3.75H6v2.24a1.25 1.25 0 002 1l4.25-3.24h6A3.75 3.75 0 0022 18.75V9.76z" fill={primaryFill} /></svg>;
}

const CommentMultiple28Filled = wrapIcon(rawSvg({}), 'CommentMultiple28Filled');
export default CommentMultiple28Filled;
      