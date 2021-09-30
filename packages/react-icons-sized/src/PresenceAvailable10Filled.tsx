import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 10A5 5 0 105 0a5 5 0 000 10zm2.1-5.9L4.85 6.35a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 1.9-1.9a.5.5 0 01.7.71z" fill={primaryFill} /></svg>;
}

const PresenceAvailable10Filled = wrapIcon(rawSvg({}), 'PresenceAvailable10Filled');
export default PresenceAvailable10Filled;
      