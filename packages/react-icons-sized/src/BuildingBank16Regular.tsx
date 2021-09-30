import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 5a.75.75 0 100-1.5A.75.75 0 008 5z" fill={primaryFill} /><path d="M8.74 1.45a1.17 1.17 0 00-1.48 0l-5 4.07A.83.83 0 002.8 7H3v4.2c-.6.3-1 .92-1 1.63v.67c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-.67c0-.7-.4-1.33-1-1.63V7h.21a.83.83 0 00.53-1.48l-5-4.07zm-.84.78a.17.17 0 01.2 0L12.75 6H3.26L7.9 2.23zM12 11h-1V7h1v4zm-2 0H8.5V7H10v4zm-2.5 0H6V7h1.5v4zm4.67 1c.46 0 .83.37.83.83V13H3v-.17c0-.46.37-.83.83-.83h8.34zM5 11H4V7h1v4z" fill={primaryFill} /></svg>;
}

const BuildingBank16Regular = wrapIcon(rawSvg({}), 'BuildingBank16Regular');
export default BuildingBank16Regular;
      