import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7L15.21 5.5l1.14-1.15zM16 11v-.2c.35-.1.68-.24 1-.4v.6a3 3 0 01-3 3h-3.5v2h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-2H6a3 3 0 01-3-3V5a1 1 0 010-2h6.6a5.47 5.47 0 00-.58 2H4v6c0 1.1.9 2 2 2h8a2 2 0 002-2z" fill={primaryFill} /></svg>;
}

const ProjectionScreenDismiss20Regular = wrapIcon(rawSvg({}), 'ProjectionScreenDismiss20Regular');
export default ProjectionScreenDismiss20Regular;
      