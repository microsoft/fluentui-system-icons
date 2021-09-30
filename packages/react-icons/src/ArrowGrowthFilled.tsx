import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-.69l-4.47 4.47c-.3.3-.77.3-1.06 0L8.5 6.56l-4.22 4.22a.75.75 0 11-1.06-1.06l4.75-4.75c.3-.3.77-.3 1.06 0l2.47 2.47 3.94-3.94h-.69a.75.75 0 01-.75-.75zM3.75 14c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75zm4.75-2.25a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM11.75 13c.41 0 .75.34.75.75v3.5a.75.75 0 01-1.5 0v-3.5c0-.41.34-.75.75-.75zm4.75-3.25a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5z" fill={primaryFill} /></svg>;
}

const ArrowGrowthFilled = wrapIcon(rawSvg({}), 'ArrowGrowthFilled');
export default ArrowGrowthFilled;
      