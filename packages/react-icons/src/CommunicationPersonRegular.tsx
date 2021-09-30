import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 11a7 7 0 0113.5-2.6A3 3 0 0118 11a8 8 0 10-13.66 5.65.5.5 0 00.7-.7A6.98 6.98 0 013 11zm7-5a5 5 0 014.1 2.14 3 3 0 00-.9.46 4 4 0 10-6.03 5.22.5.5 0 11-.71.71A4.99 4.99 0 0110 6zm0 3a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2zm3 1a2 2 0 114 0 2 2 0 01-4 0zm-.5 3h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.25 3.25 0 0111 15.5c0-.83.67-1.5 1.5-1.5z" fill={primaryFill} /></svg>;
}

const CommunicationPersonRegular = wrapIcon(rawSvg({}), 'CommunicationPersonRegular');
export default CommunicationPersonRegular;
      