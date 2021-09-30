import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.35 4.33a.48.48 0 01.68.01c.2.2.19.54-.02.75a6.98 6.98 0 00.15 9.97c.22.2.23.55.03.75a.48.48 0 01-.67.02 7.98 7.98 0 01-.17-11.5z" fill={primaryFill} /><path d="M14.99 5.09a.53.53 0 01-.02-.75c.19-.18.5-.2.68 0a7.98 7.98 0 01-.17 11.5.48.48 0 01-.67-.03.53.53 0 01.03-.75 6.98 6.98 0 00.15-9.97z" fill={primaryFill} /><path d="M6.13 6.09a.46.46 0 01.66.02c.2.2.19.55-.02.76a4.49 4.49 0 00.14 6.4c.22.21.25.57.04.78a.46.46 0 01-.64.03 5.49 5.49 0 01-.18-7.99z" fill={primaryFill} /><path d="M13.23 6.87c-.2-.21-.23-.56-.02-.76.18-.19.48-.2.66-.02a5.48 5.48 0 01-.18 7.99.46.46 0 01-.64-.03c-.21-.21-.18-.57.04-.78a4.49 4.49 0 00.14-6.4z" fill={primaryFill} /><path d="M10 8.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
}

const Live20Regular = wrapIcon(rawSvg({}), 'Live20Regular');
export default Live20Regular;
      