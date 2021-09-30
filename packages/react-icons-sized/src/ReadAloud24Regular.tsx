import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.86 2.1a.75.75 0 10-.72 1.3 10.23 10.23 0 014.1 3.83c.9 1.53 1.31 3.35 1.26 5.46a.75.75 0 001.5.04c.06-2.38-.43-4.47-1.46-6.25a11.72 11.72 0 00-4.68-4.39zm-.24 3.6A.75.75 0 1014.91 7c.72.4 1.3.96 1.73 1.72.44.76.65 1.54.63 2.37a.75.75 0 001.5.03 5.92 5.92 0 00-.83-3.15 5.92 5.92 0 00-2.32-2.29zM9 4c.3 0 .58.19.7.47l5.75 14.5a.75.75 0 01-1.4.56L12.25 15h-6.5l-1.8 4.53a.75.75 0 11-1.4-.56L8.3 4.47A.75.75 0 019 4zm0 2.78L6.34 13.5h5.32L9 6.78z" fill={primaryFill} /></svg>;
}

const ReadAloud24Regular = wrapIcon(rawSvg({}), 'ReadAloud24Regular');
export default ReadAloud24Regular;
      