import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.25 9.94l4.47-4.47a.75.75 0 011.13.98l-.07.08-5 5a.75.75 0 01-.98.07l-.08-.07-2.5-2.5a.75.75 0 01.98-1.13l.08.07 1.97 1.97 4.47-4.47-4.47 4.47z" fill={primaryFill} /></svg>;
}

const CheckmarkCircle24Regular = wrapIcon(rawSvg({}), 'CheckmarkCircle24Regular');
export default CheckmarkCircle24Regular;
      