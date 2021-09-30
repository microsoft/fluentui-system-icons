import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 5c5.12 0 9.76 2.02 13.18 5.31a2 2 0 01.5.51A19 19 0 1124 5zm11.93 9.9L14.9 35.93A15 15 0 0036.15 15.2l-.22-.3zM24 9a15 15 0 00-11.93 24.1L33.1 12.07A14.93 14.93 0 0024 9z" fill={primaryFill} /></svg>;
}

const Prohibited48Filled = wrapIcon(rawSvg({}), 'Prohibited48Filled');
export default Prohibited48Filled;
      