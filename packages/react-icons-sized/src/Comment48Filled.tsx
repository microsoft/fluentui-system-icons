import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 13.25C4 9.25 7.25 6 11.25 6h25.5c4 0 7.25 3.25 7.25 7.25v15.5c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0112 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5z" fill={primaryFill} /></svg>;
}

const Comment48Filled = wrapIcon(rawSvg({}), 'Comment48Filled');
export default Comment48Filled;
      