import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V7h-1V4.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5V8h5.5c-.22.3-.38.63-.45 1H5a1 1 0 00-1 1v5.5c0 .28.22.5.5.5h6.55c.07.37.23.7.45 1h-7A1.5 1.5 0 013 15.5V10c0-1.1.9-2 2-2V4.5zm7 5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 01-1.5-1.5v-6zm1.5-.5a.5.5 0 00-.5.5v6c0 .28.22.5.5.5h2a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-2zm-7.88 1a.62.62 0 110 1.25.62.62 0 010-1.25zm0 2.25a.62.62 0 110 1.25.62.62 0 010-1.25zM8.5 13a.62.62 0 10-1.25 0 .62.62 0 001.25 0zm-.63-3a.62.62 0 110 1.25.62.62 0 010-1.25z" fill={primaryFill} /></svg>;
}

const Fax20Regular = wrapIcon(rawSvg({}), 'Fax20Regular');
export default Fax20Regular;
      