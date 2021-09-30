import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.17 3.13A.5.5 0 015.5 3h1a.5.5 0 010 1h-.81L3.44 6H5.5C6.33 6 7 6.67 7 7.5V8h2v-.5c0-.83.67-1.5 1.5-1.5h2.06l-2.25-2H9.5a.5.5 0 010-1h1a.5.5 0 01.33.13l3.62 3.21c.34.28.55.7.55 1.16v2a2.5 2.5 0 01-2.5 2.5h-1A2.5 2.5 0 019 9.5V9H7v.5A2.5 2.5 0 014.5 12h-1A2.5 2.5 0 011 9.5v-2c0-.47.21-.88.55-1.16l3.62-3.21zM13.8 7.1A.5.5 0 0013.5 7h-3a.5.5 0 00-.5.5v2c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 00-.17-.38l-.02-.01zm-11.64.01A.5.5 0 002 7.5v2c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 00-.5-.5h-3a.5.5 0 00-.3.1l-.03.02z" fill={primaryFill} /></svg>;
}

const Glasses16Regular = wrapIcon(rawSvg({}), 'Glasses16Regular');
export default Glasses16Regular;
      