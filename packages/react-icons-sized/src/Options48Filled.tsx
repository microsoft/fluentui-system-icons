import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 15.5h19.88a6.25 6.25 0 0012.25 0h5.37a1.25 1.25 0 100-2.5h-5.38a6.25 6.25 0 00-12.24 0H5.25a1.25 1.25 0 100 2.5zm0 19h5.63a6.25 6.25 0 0012.24 0h19.63a1.25 1.25 0 100-2.5H23.12a6.25 6.25 0 00-12.25 0H5.25a1.25 1.25 0 100 2.5z" fill={primaryFill} /></svg>;
}

const Options48Filled = wrapIcon(rawSvg({}), 'Options48Filled');
export default Options48Filled;
      