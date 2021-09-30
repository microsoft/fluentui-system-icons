import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7L10.5 4.79 9.35 3.65a.5.5 0 10-.7.7L9.79 5.5 8.65 6.65a.5.5 0 10.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7L11.21 5.5l1.14-1.15zM10.5 11c.37 0 .73-.04 1.07-.1A2.5 2.5 0 019.5 12h-2v2h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-2h-2A2.5 2.5 0 012 9.5V5a1 1 0 010-2h3.6a5.46 5.46 0 00-.58 2H3v4.5c0 .83.67 1.5 1.5 1.5h5c.12 0 .23-.01.34-.04.22.03.44.04.66.04z" fill={primaryFill} /></svg>;
}

const ProjectionScreenDismiss16Regular = wrapIcon(rawSvg({}), 'ProjectionScreenDismiss16Regular');
export default ProjectionScreenDismiss16Regular;
      