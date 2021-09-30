import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.62 12.02a4 4 0 111.35-3.48c.36 1.81.36 3.97-.46 5.9-.86 2.04-2.6 3.76-5.57 4.54a.75.75 0 11-.38-1.46c2.53-.66 3.9-2.06 4.57-3.66.24-.59.4-1.2.49-1.84z" fill={primaryFill} /></svg>;
}

const Comma24Regular = wrapIcon(rawSvg({}), 'Comma24Regular');
export default Comma24Regular;
      