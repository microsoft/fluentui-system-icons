import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 4C20.99 4 22 5 22 6.25v11.5C22 19 21 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5zm0 1.5H4.25a.75.75 0 00-.75.75v11.5c0 .42.34.75.75.75h15.5c.41 0 .75-.33.75-.75V6.25a.75.75 0 00-.75-.75zm-9.5 10h3.5a.75.75 0 01.1 1.5h-3.6a.75.75 0 01-.1-1.5h3.6-3.5z" fill={primaryFill} /></svg>;
}

const Tablet24Regular = wrapIcon(rawSvg({}), 'Tablet24Regular');
export default Tablet24Regular;
      