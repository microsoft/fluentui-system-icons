import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6c.28 0 .5.22.5.5v5a.5.5 0 01-1 0v-5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M10 14.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M9.72 2.08a.5.5 0 01.56 0c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0117 5v4.5c0 3.9-2.3 6.73-6.82 8.47a.5.5 0 01-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 01.43-.5 15.05 15.05 0 006.3-2.42zM9.6 3.35A15.97 15.97 0 014 5.43V9.5c0 3.4 1.97 5.86 6 7.46 4.03-1.6 6-4.07 6-7.46V5.43a15.97 15.97 0 01-5.6-2.08L10 3.1l-.4.25z" fill={primaryFill} /></svg>;
}

const ShieldErrorRegular = wrapIcon(rawSvg({}), 'ShieldErrorRegular');
export default ShieldErrorRegular;
      