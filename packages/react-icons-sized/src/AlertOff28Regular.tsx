import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.26 4.26a8.46 8.46 0 00-.98 3.96v4.61l-1.42 3.65-.04.12a1.28 1.28 0 001.23 1.62h5.23v.2a3.5 3.5 0 007-.2h2.94l4.28 4.28a.75.75 0 001.06-1.06L3.28 2.22zM18.94 20H5.6l1.35-3.47.03-.1a.75.75 0 00.02-.18v-4.99c.03-.92.24-1.8.6-2.6L18.94 20zM16 21.65a2 2 0 01-4-.15h4v.15z" fill={primaryFill} /><path d="M8.34 5.16L9.4 6.22A7 7 0 0121 11.5v4.85l.05.17.86 2.2 2 2c.06-.15.1-.32.1-.5l-.02-.16c-.01-.1-.04-.2-.07-.3L22.5 16.1V11.25a8.5 8.5 0 00-14.16-6.1z" fill={primaryFill} /></svg>;
}

const AlertOff28Regular = wrapIcon(rawSvg({}), 'AlertOff28Regular');
export default AlertOff28Regular;
      