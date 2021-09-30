import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a2 2 0 00-1 3.73v9.52c0 2.35 1.9 4.25 4.25 4.25h6v3h-4.5a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5h-4.5v-3h6c2.35 0 4.25-1.9 4.25-4.25V6.73A2 2 0 0024 3H4z" fill={primaryFill} /></svg>;
}

const ProjectionScreen28Filled = wrapIcon(rawSvg({}), 'ProjectionScreen28Filled');
export default ProjectionScreen28Filled;
      