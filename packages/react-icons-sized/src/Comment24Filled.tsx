import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 18A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h13.5C20.55 3 22 4.46 22 6.25v8.5c0 1.8-1.46 3.25-3.25 3.25h-5.79l-5.38 3.82A1 1 0 016 21v-3h-.75z" fill={primaryFill} /></svg>;
}

const Comment24Filled = wrapIcon(rawSvg({}), 'Comment24Filled');
export default Comment24Filled;
      