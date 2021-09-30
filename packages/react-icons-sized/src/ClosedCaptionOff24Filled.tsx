import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l1.25 1.25A3.25 3.25 0 002 7.25v9.5C2 18.55 3.46 20 5.25 20h13.69l1.78 1.78a.75.75 0 001.06-1.06L3.28 2.22zm5.3 7.41C7.68 9.78 7 10.63 7 12c0 2 1.48 2.9 2.88 2.1a.75.75 0 01.74 1.3c-2.4 1.37-5.12-.26-5.12-3.4 0-1.7.8-2.96 1.9-3.54l1.17 1.17zm8.8.27c-1.24-.7-2.55-.08-2.83 1.47l7.01 7.01c.28-.48.44-1.03.44-1.63v-9.5C22 5.45 20.54 4 18.75 4H7.18l6.18 6.17a3.26 3.26 0 014.76-1.57.75.75 0 01-.74 1.3z" fill={primaryFill} /></svg>;
}

const ClosedCaptionOff24Filled = wrapIcon(rawSvg({}), 'ClosedCaptionOff24Filled');
export default ClosedCaptionOff24Filled;
      