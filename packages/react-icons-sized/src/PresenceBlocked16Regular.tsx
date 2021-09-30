import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-2 0c0-1.3-.41-2.5-1.1-3.48L4.51 12.9A6 6 0 0014 8zm-2.52-4.9a6 6 0 00-8.37 8.37l8.37-8.36z" fill={primaryFill} /></svg>;
}

const PresenceBlocked16Regular = wrapIcon(rawSvg({}), 'PresenceBlocked16Regular');
export default PresenceBlocked16Regular;
      