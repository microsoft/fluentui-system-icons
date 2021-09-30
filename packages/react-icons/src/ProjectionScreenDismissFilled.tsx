import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7L15.21 5.5l1.14-1.15zM14.5 11c.9 0 1.75-.22 2.5-.6v.6a3 3 0 01-3 3h-3.5v2h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-2H6a3 3 0 01-3-3V5a1 1 0 010-2h6.6a5.5 5.5 0 004.9 8z" fill={primaryFill} /></svg>;
}

const ProjectionScreenDismissFilled = wrapIcon(rawSvg({}), 'ProjectionScreenDismissFilled');
export default ProjectionScreenDismissFilled;
      