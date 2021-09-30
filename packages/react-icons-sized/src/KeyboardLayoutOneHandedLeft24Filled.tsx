import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 5C20.99 5 22 6 22 7.25v9.5C22 18 20.99 19 19.75 19H4.25C3.01 19 2 18 2 16.75v-9.5C2 6.01 3 5 4.25 5h15.5zM6.5 16H10a.75.75 0 000-1.5H6.5a.75.75 0 000 1.5zm3-5a1 1 0 100 2 1 1 0 000-2zm-3 0a1 1 0 100 2 1 1 0 000-2zM6 8a1 1 0 100 2 1 1 0 000-2zm3 0a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const KeyboardLayoutOneHandedLeft24Filled = wrapIcon(rawSvg({}), 'KeyboardLayoutOneHandedLeft24Filled');
export default KeyboardLayoutOneHandedLeft24Filled;
      