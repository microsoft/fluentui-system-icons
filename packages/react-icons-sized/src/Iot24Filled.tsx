import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 4.5a2.5 2.5 0 01-3.01 2.44L14.7 9.06C15.5 9.79 16 10.84 16 12v.05l1.3.27a2.5 2.5 0 11-.28 1.47l-1.32-.26a4.02 4.02 0 01-1.75 1.96l.5 1.51h.05a2.5 2.5 0 11-1.47.48l-.5-1.52a4.04 4.04 0 01-3.75-1.59l-1.8.85.02.28a2.5 2.5 0 11-.62-1.65l1.75-.83a4 4 0 01.79-3.57l-1-1.13A2.5 2.5 0 014.5 6a2.5 2.5 0 114.59 1.38l.98 1.12a3.98 3.98 0 013.36-.24l1.25-2.06A2.5 2.5 0 0116.5 2 2.5 2.5 0 0119 4.5z" fill={primaryFill} /></svg>;
}

const Iot24Filled = wrapIcon(rawSvg({}), 'Iot24Filled');
export default Iot24Filled;
      