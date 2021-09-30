import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2c1.2 0 2.36.21 3.42.6l-1.19 1.2a8.51 8.51 0 105.97 5.97l1.2-1.2A10 10 0 1112 2zm0 4c.52 0 1.02.07 1.5.19v1.57a4.5 4.5 0 102.74 2.74h1.57A6.01 6.01 0 1112 6zm2 6a2 2 0 11-1.22-1.84l1.72-1.72V5.25c0-.2.08-.39.22-.53l2.5-2.5a.75.75 0 011.28.53V5.5h2.75a.75.75 0 01.53 1.28l-2.5 2.5a.75.75 0 01-.53.22h-3.19l-1.72 1.72c.1.24.16.5.16.78zm4.44-4l1-1h-1.69a.75.75 0 01-.75-.75V4.56l-1 1v2.38a.7.7 0 01.06.06h2.38z" fill={primaryFill} /></svg>;
}

const TargetArrow24Regular = wrapIcon(rawSvg({}), 'TargetArrow24Regular');
export default TargetArrow24Regular;
      