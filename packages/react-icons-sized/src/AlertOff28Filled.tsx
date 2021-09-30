import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.26 4.26a8.46 8.46 0 00-.98 3.96v4.11l-1.42 3.65-.04.12A1.28 1.28 0 005.27 21h14.67l4.78 4.78a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M8.34 5.16l15.37 15.37c.18-.22.3-.5.3-.81l-.02-.16c-.01-.1-.04-.2-.07-.3L22.5 15.6V11.25a8.5 8.5 0 00-14.16-6.1z" fill={primaryFill} /><path d="M17.47 22a3.5 3.5 0 01-6.94 0h6.94z" fill={primaryFill} /></svg>;
}

const AlertOff28Filled = wrapIcon(rawSvg({}), 'AlertOff28Filled');
export default AlertOff28Filled;
      