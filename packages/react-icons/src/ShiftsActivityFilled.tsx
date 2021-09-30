import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2.7a.75.75 0 01-.67.83 6.5 6.5 0 107.14 7.14.75.75 0 011.5.16 8 8 0 11-8.8-8.8c.42-.04.79.26.83.68z" fill={primaryFill} /><path d="M11.02 2.64c.1-.4.5-.65.9-.55.38.09.75.2 1.1.35a.75.75 0 11-.55 1.39 6.55 6.55 0 00-.9-.29.75.75 0 01-.55-.9z" fill={primaryFill} /><path d="M17.56 6.97a.75.75 0 10-1.39.56c.12.29.21.59.29.9a.75.75 0 001.45-.35c-.09-.38-.2-.75-.35-1.1z" fill={primaryFill} /><path d="M14.29 3.93a.75.75 0 011.06-.08c.3.27.6.56.86.87a.75.75 0 01-1.15.97 6.66 6.66 0 00-.7-.7.75.75 0 01-.07-1.06z" fill={primaryFill} /><path d="M10 5.75a.75.75 0 00-1.5 0v5c0 .41.34.75.75.75h3a.75.75 0 100-1.5H10V5.75z" fill={primaryFill} /></svg>;
}

const ShiftsActivityFilled = wrapIcon(rawSvg({}), 'ShiftsActivityFilled');
export default ShiftsActivityFilled;
      