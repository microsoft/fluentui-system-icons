import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.74 11a5.53 5.53 0 00-1.08-1h4.84a.5.5 0 010 1H9.74zm.66 1c.16.32.3.65.4 1h2.7a.5.5 0 000-1h-3.1zm.6 2.5c0 .17 0 .34-.02.5h2.52a.5.5 0 000-1h-2.52l.02.5zM5 4v5.02c-.34.03-.68.1-1 .19V4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2H9.74c.26-.3.48-.64.66-1H14a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1zm6.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5zm-6 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM5 12.5a.5.5 0 011 0V14h1a.5.5 0 010 1H5.5a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /></svg>;
}

const DocumentTextClock20Regular = wrapIcon(rawSvg({}), 'DocumentTextClock20Regular');
export default DocumentTextClock20Regular;
      