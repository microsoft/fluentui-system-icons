import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4a1 1 0 00-1.7-.72l-2.04 2a1 1 0 000 1.43l2.04 2a1 1 0 001.7-.7V3.99zM4.96 6L7 4v4L4.96 6z" fill={primaryFill} /></svg>;
}

const CaretLeft12Regular = wrapIcon(rawSvg({}), 'CaretLeft12Regular');
export default CaretLeft12Regular;
      