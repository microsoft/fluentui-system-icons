import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 4.75c0-.41.34-.75.75-.75h5.25v6h-6V4.75zM4.75 11.5a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75H10v-6H4.75zm12.75 0h-6v6h5.25c.41 0 .75-.34.75-.75V11.5zM24.25 4H19v6h5.25c.41 0 .75-.34.75-.75v-4.5a.75.75 0 00-.75-.75zM7 23.13C7 22.5 7.5 22 8.13 22H13v6H8.12C7.5 28 7 27.5 7 26.87v-3.75zM20.5 28v-6h-6v6h6zm1.5-6h4.88c.62 0 1.12.5 1.12 1.13v3.75c0 .62-.5 1.12-1.13 1.12H22v-6zm1.13-7.5c-.63 0-1.13.5-1.13 1.13v4.87h6v-4.88c0-.62-.5-1.12-1.13-1.12h-3.75z" fill={primaryFill} /></svg>;
}

const TetrisApp32Filled = wrapIcon(rawSvg({}), 'TetrisApp32Filled');
export default TetrisApp32Filled;
      