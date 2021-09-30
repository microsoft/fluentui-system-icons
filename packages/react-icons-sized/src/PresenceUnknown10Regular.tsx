import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1a4 4 0 100 8 4 4 0 000-8zM0 5a5 5 0 1110 0A5 5 0 010 5z" fill={primaryFill} /></svg>;
}

const PresenceUnknown10Regular = wrapIcon(rawSvg({}), 'PresenceUnknown10Regular');
export default PresenceUnknown10Regular;
      