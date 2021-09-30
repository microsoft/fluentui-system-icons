import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.4 3.9c.8-.75 2.1-.18 2.1.91v18.37c0 1.1-1.3 1.66-2.1.92l-4.94-4.63c-.33-.3-.75-.47-1.2-.47H5.25A3.25 3.25 0 012 15.75v-3.5c0-1.79 1.46-3.24 3.25-3.24h3.01c.45 0 .87-.17 1.2-.48l4.93-4.63z" fill={primaryFill} /></svg>;
}

const Speaker028Filled = wrapIcon(rawSvg({}), 'Speaker028Filled');
export default Speaker028Filled;
      