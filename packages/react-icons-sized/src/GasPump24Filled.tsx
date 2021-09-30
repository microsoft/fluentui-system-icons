import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3A2.75 2.75 0 004 5.75V20.5h-.25a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H17v-1.8a2.75 2.75 0 004-2.44v-5.84c0-.6-.2-1.18-.55-1.65l-1.1-1.47a.75.75 0 00-1.2.9l1.1 1.47c.16.21.25.48.25.75v5.83a1.24 1.24 0 11-2.49 0V14.5l-.01-.12V5.75A2.75 2.75 0 0014.25 3h-7.5zM7 6.75c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75v3.5c0 .41-.34.75-.75.75h-5.5a.75.75 0 01-.75-.75v-3.5z" fill={primaryFill} /></svg>;
}

const GasPump24Filled = wrapIcon(rawSvg({}), 'GasPump24Filled');
export default GasPump24Filled;
      