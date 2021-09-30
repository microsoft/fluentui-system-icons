import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A3.75 3.75 0 002 6.75v10.5A3.75 3.75 0 005.75 21H7v3.3a1.75 1.75 0 002.77 1.41L16.31 21h5.94A3.75 3.75 0 0026 17.25V6.75A3.75 3.75 0 0022.25 3H5.75z" fill={primaryFill} /></svg>;
}

const Comment28Filled = wrapIcon(rawSvg({}), 'Comment28Filled');
export default Comment28Filled;
      