import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M40.32 12.7a1.5 1.5 0 01-.02 2.12l-22.25 22a1.5 1.5 0 01-2.1 0l-9.25-9a1.5 1.5 0 112.1-2.15l8.2 7.98 21.2-20.97a1.5 1.5 0 012.12.02z" fill={primaryFill} /></svg>;
}

const Checkmark48Filled = wrapIcon(rawSvg({}), 'Checkmark48Filled');
export default Checkmark48Filled;
      