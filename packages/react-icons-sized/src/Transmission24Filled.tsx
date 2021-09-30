import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a2.75 2.75 0 00-.75 5.4v3.85a.75.75 0 001.5 0V7.4A2.75 2.75 0 0012 2zM5.5 4A2.5 2.5 0 003 6.5v12a2.5 2.5 0 005 0V15h1.5v3.5a2.5 2.5 0 005 0V15H19a2 2 0 002-2V6.5a2.5 2.5 0 00-5 0V10h-2.25v1.5h3.75v-5a1 1 0 112 0V13a.5.5 0 01-.5.5h-6v5a1 1 0 11-2 0v-5H6.5v5a1 1 0 11-2 0v-12a1 1 0 012 0v5h3.75V10H8V6.5A2.5 2.5 0 005.5 4z" fill={primaryFill} /></svg>;
}

const Transmission24Filled = wrapIcon(rawSvg({}), 'Transmission24Filled');
export default Transmission24Filled;
      