import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.77 10.29a.75.75 0 00-1.04-1.08l-7.25 7.01-2.23-2.02a.75.75 0 00-1 1.1L11 17.8c.29.27.74.26 1.02-.01l7.75-7.5zm-5.33-8.15a.75.75 0 00-.89.01c-1.34 1-2.98 1.73-4.55 2.24A26.48 26.48 0 013.7 5.5H3.7a.75.75 0 00-.69.75v6.5c0 5.1 3.48 10.87 10.77 13.21.15.05.31.05.46 0 7.3-2.34 10.52-8.13 10.52-12.96V6.25c0-.39-.3-.71-.69-.75H24a11.58 11.58 0 01-.88-.12c-.6-.09-1.44-.24-2.4-.48a18.61 18.61 0 01-6.29-2.76zM4.5 12.75V6.92a26.85 26.85 0 004.96-1.1c1.5-.5 3.12-1.18 4.55-2.15a20.69 20.69 0 006.35 2.68 27.42 27.42 0 002.89.57V13c0 4.12-2.72 9.27-9.25 11.46-6.55-2.2-9.5-7.35-9.5-11.71z" fill={primaryFill} /></svg>;
}

const ShieldTask28Regular = wrapIcon(rawSvg({}), 'ShieldTask28Regular');
export default ShieldTask28Regular;
      