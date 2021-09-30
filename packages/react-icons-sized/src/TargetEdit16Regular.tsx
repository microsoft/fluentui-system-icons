import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 8a1 1 0 11-2 0 1 1 0 012 0zM8 4.5a3.5 3.5 0 00-.95 6.87c.09-.12.19-.23.3-.34l.53-.53a2.5 2.5 0 112.62-2.62l.86-.86A3.5 3.5 0 008 4.5zm4.64 1.63a5 5 0 10-6.28 6.6l-.01.06-.23.9a6 6 0 117.54-7.68c-.34-.03-.7 0-1.02.12zM8.3 11.48l3.18-3.18.85-.85a1.56 1.56 0 012.2 2.2l-4.28 4.3c-.36.35-.8.6-1.3.73l-1.2.3a.6.6 0 01-.74-.74l.07-.3.23-.9.02-.08c.13-.46.37-.88.7-1.22l.27-.26z" fill={primaryFill} /></svg>;
}

const TargetEdit16Regular = wrapIcon(rawSvg({}), 'TargetEdit16Regular');
export default TargetEdit16Regular;
      