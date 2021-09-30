import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM0 6a6 6 0 1112 0A6 6 0 010 6z" fill={primaryFill} /></svg>;
}

const PresenceUnknown12Regular = wrapIcon(rawSvg({}), 'PresenceUnknown12Regular');
export default PresenceUnknown12Regular;
      