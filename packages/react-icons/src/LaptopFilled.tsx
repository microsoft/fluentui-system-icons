import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 5C3.67 5 3 5.67 3 6.5v6c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-11z" fill={primaryFill} /><path d="M2.5 15a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /></svg>;
}

const LaptopFilled = wrapIcon(rawSvg({}), 'LaptopFilled');
export default LaptopFilled;
      