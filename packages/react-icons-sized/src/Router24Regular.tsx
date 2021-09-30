import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.5A7.5 7.5 0 004.5 11v.25a.75.75 0 01-1.5 0V11a9 9 0 0118 0v.25a.75.75 0 01-1.5 0V11A7.5 7.5 0 0012 3.5z" fill={primaryFill} /><path d="M12 6.5A4.5 4.5 0 007.5 11v.25a.75.75 0 01-1.5 0V11a6 6 0 1112 0v.25a.75.75 0 01-1.5 0V11A4.5 4.5 0 0012 6.5z" fill={primaryFill} /><path d="M12 8a3 3 0 00-.75 5.9V16H6a3 3 0 100 6h12a3 3 0 100-6h-5.25v-2.1A3 3 0 0012 8zm-1.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM6 17.5h12a1.5 1.5 0 010 3H6a1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
}

const Router24Regular = wrapIcon(rawSvg({}), 'Router24Regular');
export default Router24Regular;
      