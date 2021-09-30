import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3C4.01 3 3 4 3 5.25v13.5C3 19.99 4 21 5.25 21h13.5c1.24 0 2.25-1 2.25-2.25V5.25C21 4.01 20 3 18.75 3H5.25zM6 6.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-.69l1.72 1.72a.75.75 0 11-1.06 1.06L7.5 8.56v.7a.75.75 0 11-1.5 0V6.74zm11.78 11.03a.75.75 0 01-.53.22h-2.5a.75.75 0 010-1.5h.69l-1.72-1.72a.75.75 0 011.06-1.06l1.72 1.72v-.69a.75.75 0 011.5 0v2.5c0 .2-.08.4-.22.53zM18 6.75v2.5a.75.75 0 01-1.5 0v-.69l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72h-.7a.75.75 0 010-1.5h2.51a.75.75 0 01.75.75zM6.22 17.78a.75.75 0 01-.22-.53v-2.5a.75.75 0 011.5 0v.69l1.72-1.72a.75.75 0 011.06 1.06L8.56 16.5h.7a.75.75 0 110 1.5H6.74a.75.75 0 01-.53-.22z" fill={primaryFill} /></svg>;
}

const ScaleFill24Filled = wrapIcon(rawSvg({}), 'ScaleFill24Filled');
export default ScaleFill24Filled;
      