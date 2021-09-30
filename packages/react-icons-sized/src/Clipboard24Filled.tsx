import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 3.5h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5zM10.25 2h3.5a2.25 2.25 0 012.24 2h1.76C18.99 4 20 5 20 6.25v13.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76L8 4.25C8 3.01 9 2 10.25 2z" fill={primaryFill} /></svg>;
}

const Clipboard24Filled = wrapIcon(rawSvg({}), 'Clipboard24Filled');
export default Clipboard24Filled;
      