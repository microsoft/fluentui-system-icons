import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a10 10 0 10-20 0 10 10 0 0020 0zm-14.53.28a.75.75 0 01-.07-.98l.07-.08 4-4a.75.75 0 01.98-.07l.08.07 4 4a.75.75 0 01-.98 1.13l-.08-.07-2.72-2.72v6.7c0 .37-.28.68-.65.73L12 17a.75.75 0 01-.74-.65l-.01-.1V9.56l-2.72 2.72a.75.75 0 01-.98.07l-.08-.07z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp24Filled = wrapIcon(rawSvg({}), 'ArrowCircleUp24Filled');
export default ArrowCircleUp24Filled;
      