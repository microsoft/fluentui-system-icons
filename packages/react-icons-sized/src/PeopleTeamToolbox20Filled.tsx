import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.47 8.01a1 1 0 011 .89V9a2.5 2.5 0 00-2.43 2.04A2.5 2.5 0 009 13.5v3.22a3.49 3.49 0 01-2.49-3.15V9.01a1 1 0 01.88-.99h5.08zm5.49 3.03h.03V8.9a1 1 0 00-1-.89h-2.78c.14.26.24.55.26.86V9h1.03a2.5 2.5 0 012.46 2.04zM5.77 8.01c-.14.25-.23.53-.26.82v4.76c.03.65.2 1.25.47 1.8a2.86 2.86 0 01-3.96-2.47V9.01a1 1 0 01.88-.99h2.87zM10 3a2.23 2.23 0 110 4.45 2.23 2.23 0 010-4.45zm4.99.63a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82zm-9.96 0a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 101 0V16h3v.5a.5.5 0 101 0V16z" fill={primaryFill} /></svg>;
}

const PeopleTeamToolbox20Filled = wrapIcon(rawSvg({}), 'PeopleTeamToolbox20Filled');
export default PeopleTeamToolbox20Filled;
      