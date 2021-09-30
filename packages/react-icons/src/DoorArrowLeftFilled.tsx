import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2.5c-.83 0-1.5.67-1.5 1.5v12c0 .83.67 1.5 1.5 1.5h3.89a5.5 5.5 0 015.61-8.4V4c0-.83-.67-1.5-1.5-1.5H6zM8 10a1 1 0 11-2 0 1 1 0 012 0zm11 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L13.71 15h2.79a.5.5 0 000-1h-2.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2z" fill={primaryFill} /></svg>;
}

const DoorArrowLeftFilled = wrapIcon(rawSvg({}), 'DoorArrowLeftFilled');
export default DoorArrowLeftFilled;
      