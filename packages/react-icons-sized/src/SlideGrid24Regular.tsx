import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 13.75c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-4C5.56 17 5 16.44 5 15.75v-2zm1.5.25v1.5H10V14H6.5zm7.25-1.5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25h-4zm.25 3V14h3.5v1.5H14zM5 8.25C5 7.56 5.56 7 6.25 7h4c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25v-2zm1.5.25V10H10V8.5H6.5zM13.75 7c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2C19 7.56 18.44 7 17.75 7h-4zm.25 3V8.5h3.5V10H14zM2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zM4.75 5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H4.75z" fill={primaryFill} /></svg>;
}

const SlideGrid24Regular = wrapIcon(rawSvg({}), 'SlideGrid24Regular');
export default SlideGrid24Regular;
      