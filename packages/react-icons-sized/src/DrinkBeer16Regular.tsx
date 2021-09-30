import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5z" fill={primaryFill} /><path d="M7.5 6c.28 0 .5.22.5.5v5a.5.5 0 01-1 0v-5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M6 6.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5z" fill={primaryFill} /><path d="M5.25 1C4.01 1 3 2 3 3.25V13.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V12h.75C13.99 12 15 11 15 9.75v-3.5C15 5.01 14 4 12.75 4H12v-.75C12 2.01 11 1 9.75 1h-4.5zM12 5h.75c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25H12V5zM4 3.25C4 2.56 4.56 2 5.25 2h4.5c.69 0 1.25.56 1.25 1.25V4H4v-.75zM4 5h7v8.5a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5V5z" fill={primaryFill} /></svg>;
}

const DrinkBeer16Regular = wrapIcon(rawSvg({}), 'DrinkBeer16Regular');
export default DrinkBeer16Regular;
      