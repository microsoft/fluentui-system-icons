import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7L18.21 6.5l1.64-1.65a.5.5 0 00-.7-.7L17.5 5.79l-1.65-1.64zM17.5 13c1.29 0 2.49-.38 3.5-1.02v1.27A3.75 3.75 0 0117.25 17h-4.5v2.5h3.5a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5h3.5V17h-4.5A3.75 3.75 0 013 13.25V5.91A1.5 1.5 0 013.5 3h8.52a6.5 6.5 0 005.48 10z" fill={primaryFill} /></svg>;
}

const ProjectionScreenDismiss24Filled = wrapIcon(rawSvg({}), 'ProjectionScreenDismiss24Filled');
export default ProjectionScreenDismiss24Filled;
      