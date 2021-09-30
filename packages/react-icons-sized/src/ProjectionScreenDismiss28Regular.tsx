import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27 7.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-9.15-3.35a.5.5 0 00-.7.7l2.64 2.65-2.64 2.65a.5.5 0 00.7.7l2.65-2.64 2.65 2.64a.5.5 0 00.7-.7L21.21 7.5l2.64-2.65a.5.5 0 00-.7-.7L20.5 6.79l-2.65-2.64zm5.65 12.1v-1.87a7.49 7.49 0 001.5-.88v2.75c0 2.35-1.9 4.25-4.25 4.25h-6v3h4.5a.75.75 0 010 1.5H8.75a.75.75 0 010-1.5h4.5v-3h-6A4.25 4.25 0 013 16.25V6.73A2 2 0 014 3h10.5a7.46 7.46 0 00-1.48 4H4.5v9.25A2.75 2.75 0 007.25 19h13.5a2.75 2.75 0 002.75-2.75z" fill={primaryFill} /></svg>;
}

const ProjectionScreenDismiss28Regular = wrapIcon(rawSvg({}), 'ProjectionScreenDismiss28Regular');
export default ProjectionScreenDismiss28Regular;
      