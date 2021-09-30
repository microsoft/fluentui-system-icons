import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 14C19 14 20 15 20 16.25v.92c0 .57-.18 1.13-.5 1.6C17.93 20.93 15.41 22 12 22s-5.94-1.07-7.49-3.24a2.75 2.75 0 01-.5-1.6v-.91C4 15 5 14 6.24 14h11.5zM12 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
}

const Person24Filled = wrapIcon(rawSvg({}), 'Person24Filled');
export default Person24Filled;
      