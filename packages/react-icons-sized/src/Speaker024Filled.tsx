import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7 3.44c.2.23.3.51.3.8v15.51a1.25 1.25 0 01-2.06.95l-4.96-4.2H4.25c-1.24 0-2.25-1-2.25-2.25v-4.5C2 8.5 3 7.5 4.25 7.5h3.73l4.96-4.2a1.25 1.25 0 011.76.14z" fill={primaryFill} /></svg>;
}

const Speaker024Filled = wrapIcon(rawSvg({}), 'Speaker024Filled');
export default Speaker024Filled;
      