import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.61 3.14a.75.75 0 11.78-1.28 7.2 7.2 0 012.98 3.13c.63 1.33.88 2.96.88 5.01v5.44l2.72-2.72a.75.75 0 111.06 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 011.06-1.06l2.72 2.72V10c0-1.95-.25-3.32-.74-4.37a5.71 5.71 0 00-2.4-2.49z" fill={primaryFill} /></svg>;
}

const ArrowCurveDownRightFilled = wrapIcon(rawSvg({}), 'ArrowCurveDownRightFilled');
export default ArrowCurveDownRightFilled;
      