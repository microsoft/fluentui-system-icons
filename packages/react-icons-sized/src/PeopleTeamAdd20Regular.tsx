import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.47 8.01a1 1 0 011 .89v.2c-.34.06-.68.16-1 .28v-.37H7.51v4.37c0 1.07.67 1.99 1.62 2.33.1.4.22.77.39 1.12a3.49 3.49 0 01-3-3.26l-.01-.19V9.01a1 1 0 01.88-.99h5.08z" fill={primaryFill} /><path d="M14.5 9l.4.01H17v.59c.35.18.68.4 1 .65V9.01l-.02-.11A1 1 0 0017 8h-2.78c.14.26.24.55.26.86V9h.03z" fill={primaryFill} /><path d="M5.77 8.01c-.14.25-.23.53-.26.82v.18H3v3.74a1.86 1.86 0 002.62 1.7c.08.33.2.64.35.94a2.86 2.86 0 01-3.96-2.47V9.01a1 1 0 01.88-.99h2.87z" fill={primaryFill} /><path d="M9.99 2.99a2.23 2.23 0 110 4.45 2.23 2.23 0 010-4.45zm0 1a1.23 1.23 0 100 2.45 1.23 1.23 0 000-2.45z" fill={primaryFill} /><path d="M14.98 3.62a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82zm0 1a.91.91 0 100 1.82.91.91 0 000-1.82z" fill={primaryFill} /><path d="M5.02 3.62a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82zm0 1a.91.91 0 100 1.82.91.91 0 000-1.82z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const PeopleTeamAdd20Regular = wrapIcon(rawSvg({}), 'PeopleTeamAdd20Regular');
export default PeopleTeamAdd20Regular;
      