import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.47 8.01a1 1 0 011 .89V9c-.35 0-.69.08-1 .22v-.2H7.51v4.36c0 1.02.61 1.9 1.49 2.28v1.06a3.49 3.49 0 01-2.49-3.15V9.01a1 1 0 01.88-.99h5.08zM15.5 9l.27.01h1.22v.48c.5.37.85.92.97 1.55h.03V8.9a1 1 0 00-1-.89h-2.78c.14.26.24.55.26.86V9h1.03zm-9.73-.99c-.14.25-.23.53-.26.82v.18H3v3.74a1.86 1.86 0 002.62 1.7c.08.33.2.64.35.94a2.86 2.86 0 01-3.96-2.47V9.01a1 1 0 01.88-.99h2.87zM10 3a2.23 2.23 0 110 4.45 2.23 2.23 0 010-4.45zm0 1a1.23 1.23 0 100 2.45 1.23 1.23 0 000-2.45zm4.99-.37a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82zm0 1a.91.91 0 100 1.82.91.91 0 000-1.82zm-9.96-1a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82zm0 1a.91.91 0 100 1.82.91.91 0 000-1.82zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 101 0V16h3v.5a.5.5 0 101 0V16z" fill={primaryFill} /></svg>;
}

const PeopleTeamToolboxRegular = wrapIcon(rawSvg({}), 'PeopleTeamToolboxRegular');
export default PeopleTeamToolboxRegular;
      