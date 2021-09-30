import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2a1 1 0 000 2v4.5A2.5 2.5 0 005.5 11h2v2h-2a.5.5 0 000 1h5a.5.5 0 000-1h-2v-2h2A2.5 2.5 0 0013 8.5V4a1 1 0 100-2H3zm1 2h8v4.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 014 8.5V4z" fill={primaryFill} /></svg>;
}

const ProjectionScreen16Regular = wrapIcon(rawSvg({}), 'ProjectionScreen16Regular');
export default ProjectionScreen16Regular;
      