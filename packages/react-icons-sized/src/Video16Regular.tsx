import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.5a2 2 0 00-2 2v5c0 1.1.9 2 2 2h5a2 2 0 002-2V10l1.8 1.35c.5.37 1.2.02 1.2-.6v-5.5c0-.62-.7-.97-1.2-.6L11 6v-.5a2 2 0 00-2-2H4zm7 3.75l2-1.5v4.5l-2-1.5v-1.5zM10 5.5v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1h5a1 1 0 011 1z" fill={primaryFill} /></svg>;
}

const Video16Regular = wrapIcon(rawSvg({}), 'Video16Regular');
export default Video16Regular;
      