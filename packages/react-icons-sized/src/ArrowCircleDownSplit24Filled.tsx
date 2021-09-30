import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 22a10 10 0 110-20 10 10 0 010 20zm-1-8l-.08-.07a.75.75 0 00-.98.07l-.44.44V10.5h5v3.94l-.51-.44-.09-.07a.75.75 0 00-.97 1.13l1.79 1.72.08.07c.3.22.71.2.98-.07l1.72-1.72.07-.08c.22-.3.2-.71-.07-.98l-.08-.07a.75.75 0 00-.98.07l-.44.44v-4.8a.75.75 0 00-.75-.64h-2.5V5.65A.75.75 0 0012 5h-.1a.75.75 0 00-.65.75V9h-2.6a.75.75 0 00-.65.75v4.69L7.56 14l-.08-.07a.75.75 0 00-.98 1.13l1.72 1.72.08.07c.3.22.71.2.98-.07L11 15.06l.07-.08c.22-.3.2-.71-.07-.98z" fill={primaryFill} /></svg>;
}

const ArrowCircleDownSplit24Filled = wrapIcon(rawSvg({}), 'ArrowCircleDownSplit24Filled');
export default ArrowCircleDownSplit24Filled;
      