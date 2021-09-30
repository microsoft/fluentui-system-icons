import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.15 7.15a.5.5 0 01.7.7l-4.5 4.5a.5.5 0 01-.7 0l-4.5-4.5a.5.5 0 11.7-.7L8 11.29l4.15-4.14zm0-4a.5.5 0 01.7.7l-4.5 4.5a.5.5 0 01-.7 0l-4.5-4.5a.5.5 0 11.7-.7L8 7.29l4.15-4.14z" fill={primaryFill} /></svg>;
}

const ChevronDoubleDown16Regular = wrapIcon(rawSvg({}), 'ChevronDoubleDown16Regular');
export default ChevronDoubleDown16Regular;
      