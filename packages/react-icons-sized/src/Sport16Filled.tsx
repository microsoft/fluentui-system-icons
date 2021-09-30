import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.73 2.98c.33.4.6.84.8 1.3a2 2 0 01-2.55.44l1.75-1.74zm-.71-.7l-1.74 1.74a2 2 0 01.44-2.55c.46.2.9.47 1.3.8zm1.1 7.2a5.5 5.5 0 00.76-4.14 3 3 0 01-3.62.1l-.59.6 3.45 3.44zm-3.57-4.74a3 3 0 01.11-3.62 5.5 5.5 0 00-4.14.76l3.44 3.45.6-.6zM5.72 2.5a5.59 5.59 0 00-1.3 1.87c1.34.4 2.95 1.06 4.28 2.22l.56-.55L5.72 2.5zm3.69 4.8l.55-.56 3.54 3.54a5.51 5.51 0 01-1.85 1.28A11.14 11.14 0 009.41 7.3zm1.6 6.07c0 1.03-.92 1.82-1.99 1.59-1.48-.32-3.72-1.03-5.32-2.62-1.58-1.59-2.3-3.83-2.63-5.32a1.62 1.62 0 011.95-1.97c1.5.31 3.77 1.02 5.36 2.61 1.6 1.6 2.3 3.87 2.6 5.35.03.13.04.25.04.36zM5.62 8.9a.5.5 0 10-.71.7l1.5 1.5a.5.5 0 00.7-.7L5.6 8.9z" fill={primaryFill} /></svg>;
}

const Sport16Filled = wrapIcon(rawSvg({}), 'Sport16Filled');
export default Sport16Filled;
      