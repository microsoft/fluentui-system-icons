import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.85 3.15c.2.2.2.5 0 .7L5.71 5l1.14 1.15a.5.5 0 11-.7.7L5 5.71 3.85 6.85a.5.5 0 11-.7-.7L4.29 5 3.15 3.85a.5.5 0 11.7-.7L5 4.29l1.15-1.14c.2-.2.5-.2.7 0z" fill={primaryFill} /><path d="M0 5a5 5 0 1110 0A5 5 0 010 5zm5-4a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /></svg>;
}

const PresenceOffline10Regular = wrapIcon(rawSvg({}), 'PresenceOffline10Regular');
export default PresenceOffline10Regular;
      