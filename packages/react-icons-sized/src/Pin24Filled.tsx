import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.07 7.76l-4.83-4.83a2.75 2.75 0 00-4.4.72L9.4 8.52a.75.75 0 01-.42.37L4.8 10.33a1.25 1.25 0 00-.48 2.07l3.1 3.1L3 19.94V21h1.06l4.44-4.44 3.1 3.1c.66.66 1.77.4 2.07-.47l1.44-4.17c.06-.18.2-.34.37-.42l4.87-2.44a2.75 2.75 0 00.72-4.4z" fill={primaryFill} /></svg>;
}

const Pin24Filled = wrapIcon(rawSvg({}), 'Pin24Filled');
export default Pin24Filled;
      