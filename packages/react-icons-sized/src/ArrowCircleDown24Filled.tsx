import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 12a10 10 0 1020 0 10 10 0 00-20 0zm14.53-.28c.27.27.29.68.07.98l-.07.08-4 4a.75.75 0 01-.98.07l-.08-.07-4-4a.75.75 0 01.97-1.13l.09.07 2.72 2.72v-6.7c0-.37.28-.68.65-.73L12 7c.38 0 .7.28.74.65v.1l.01 6.69 2.72-2.72c.27-.27.68-.3.98-.07l.08.07z" fill={primaryFill} /></svg>;
}

const ArrowCircleDown24Filled = wrapIcon(rawSvg({}), 'ArrowCircleDown24Filled');
export default ArrowCircleDown24Filled;
      