import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.75C2 4.78 2.78 4 3.75 4h13.5c.97 0 1.75.78 1.75 1.75V11h-3a2 2 0 00-2 2v3H3.75C2.78 16 2 15.22 2 14.25v-8.5zm3 .5c0 .41-.34.75-.75.75h-1v1.5h1c1.24 0 2.25-1 2.25-2.25v-1H5v1zm5.5 6.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm-6.25.5c.41 0 .75.34.75.75v1h1.5v-1c0-1.24-1-2.25-2.25-2.25h-1V13h1zm12.5-6a.75.75 0 01-.75-.75v-1h-1.5v1c0 1.24 1 2.25 2.25 2.25h1V7h-1zM4.4 17.5H14V19H7a3 3 0 01-2.6-1.5zM22 9v2h-1.5V6.4A3 3 0 0122 9zm-5.5 3c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-5zm.5 4.5h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zm-3 2h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zm-3 2h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zM16.5 14c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1z" fill={primaryFill} /></svg>;
}

const MoneyCalculator24Filled = wrapIcon(rawSvg({}), 'MoneyCalculator24Filled');
export default MoneyCalculator24Filled;
      