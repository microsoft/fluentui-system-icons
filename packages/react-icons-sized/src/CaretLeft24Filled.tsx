import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 17.9a1.25 1.25 0 01-2.07.94l-6.31-5.52c-.8-.7-.8-1.94 0-2.64l6.3-5.52c.82-.7 2.08-.13 2.08.94v11.8z" fill={primaryFill} /></svg>;
}

const CaretLeft24Filled = wrapIcon(rawSvg({}), 'CaretLeft24Filled');
export default CaretLeft24Filled;
      