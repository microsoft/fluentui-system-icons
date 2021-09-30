import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27 7.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-9.15-3.35a.5.5 0 00-.7.7l2.64 2.65-2.64 2.65a.5.5 0 00.7.7l2.65-2.64 2.65 2.64a.5.5 0 00.7-.7L21.21 7.5l2.64-2.65a.5.5 0 00-.7-.7L20.5 6.79l-2.65-2.64zM20.5 15c1.69 0 3.25-.56 4.5-1.5v2.75c0 2.35-1.9 4.25-4.25 4.25h-6v3h4.5a.75.75 0 010 1.5H8.75a.75.75 0 010-1.5h4.5v-3h-6A4.25 4.25 0 013 16.25V6.73A2 2 0 014 3h10.5a7.5 7.5 0 006 12z" fill={primaryFill} /></svg>;
}

const ProjectionScreenDismiss28Filled = wrapIcon(rawSvg({}), 'ProjectionScreenDismiss28Filled');
export default ProjectionScreenDismiss28Filled;
      