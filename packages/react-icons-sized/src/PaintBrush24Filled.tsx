import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 2v3.25a.75.75 0 001.5 0V2h1v4.25a.75.75 0 001.5 0V2h1.75c.41 0 .75.34.75.75V11H5V2.75c0-.41.34-.75.75-.75h6.75z" fill={primaryFill} /><path d="M5 12.5v1.75c0 1.24 1 2.25 2.25 2.25H10V20a2 2 0 104 0v-3.5h2.75c1.24 0 2.25-1 2.25-2.25V12.5H5z" fill={primaryFill} /></svg>;
}

const PaintBrush24Filled = wrapIcon(rawSvg({}), 'PaintBrush24Filled');
export default PaintBrush24Filled;
      