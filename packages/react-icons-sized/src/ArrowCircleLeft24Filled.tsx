import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.28 14.53a.75.75 0 01-.98.07l-.08-.07-4-4a.75.75 0 01-.07-.98l.07-.08 4-4a.75.75 0 011.13.98l-.07.08-2.72 2.72h6.69c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01H9.56l2.72 2.72c.27.27.3.68.07.98l-.07.08z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeft24Filled = wrapIcon(rawSvg({}), 'ArrowCircleLeft24Filled');
export default ArrowCircleLeft24Filled;
      