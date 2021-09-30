import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3a1 1 0 000 2v6a3 3 0 003 3h3.5v2h-2a.5.5 0 000 1h5a.5.5 0 000-1h-2v-2H14a3 3 0 003-3V5a1 1 0 100-2H3z" fill={primaryFill} /></svg>;
}

const ProjectionScreen20Filled = wrapIcon(rawSvg({}), 'ProjectionScreen20Filled');
export default ProjectionScreen20Filled;
      