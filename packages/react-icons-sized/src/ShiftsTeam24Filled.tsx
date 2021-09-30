import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm11.25-9C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25h-5.77a6.47 6.47 0 00-.37-7.51h.07l.07.01h4.6a.75.75 0 000-1.5H12.5V6.65a.75.75 0 00-1.5 0V12.8a6.48 6.48 0 00-8-.79V6.25C3 4.45 4.46 3 6.25 3h11.5zM6.5 17.5h-3a.5.5 0 00-.5.41v.59c0 .99.76 1.5 2 1.5 1.18 0 1.92-.46 2-1.36V18a.5.5 0 00-.5-.5zm3.02-.01H7.91c.04.12.07.24.08.38L8 18v.7c-.03.29-.08.54-.17.76.13.02.27.02.42.02 1.03 0 1.7-.32 1.76-1.03l.01-.13v-.33a.5.5 0 00-.41-.5h-.09zM5 14.5a1 1 0 100 2 1 1 0 000-2zm3.13.26a.87.87 0 100 1.74.87.87 0 000-1.74z" fill={primaryFill} /></svg>;
}

const ShiftsTeam24Filled = wrapIcon(rawSvg({}), 'ShiftsTeam24Filled');
export default ShiftsTeam24Filled;
      