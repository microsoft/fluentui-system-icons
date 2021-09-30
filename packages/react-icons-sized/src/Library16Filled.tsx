import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.25 2C1.55 2 1 2.56 1 3.25v9.5c0 .68.56 1.24 1.25 1.24h.5C3.44 14 4 13.43 4 12.74v-9.5C4 2.57 3.44 2 2.75 2h-.5zm4 0C5.55 2 5 2.56 5 3.25v9.5c0 .68.56 1.24 1.25 1.24h.5c.69 0 1.24-.56 1.24-1.25v-9.5C8 2.57 7.44 2 6.75 2h-.5zm5.72 2.78a1.25 1.25 0 00-1.57-.72l-.58.2c-.67.24-1.01 1-.75 1.65l2.94 7.3c.25.63.94.94 1.57.72l.58-.2c.68-.24 1.02-.99.75-1.65l-2.94-7.3z" fill={primaryFill} /></svg>;
}

const Library16Filled = wrapIcon(rawSvg({}), 'Library16Filled');
export default Library16Filled;
      