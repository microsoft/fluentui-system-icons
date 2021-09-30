import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10a2 2 0 011.8 1.14l-.8.8a1 1 0 00-1-.94H4a1 1 0 00-1 1v1.5C3 14.9 4.58 16 7.5 16c.65 0 1.24-.05 1.76-.16l-.2.81-.05.25c-.47.06-.97.1-1.51.1C4.09 17 2 15.55 2 13.5V12c0-1.1.9-2 2-2h7z" fill={primaryFill} /><path d="M15.8 9.55a1.87 1.87 0 112.65 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02l4.83-4.83z" fill={primaryFill} /><path d="M14.5 9a2.51 2.51 0 001.93-.91A2.5 2.5 0 1014.5 9zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /><path d="M7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill={primaryFill} /></svg>;
}

const PeopleEditRegular = wrapIcon(rawSvg({}), 'PeopleEditRegular');
export default PeopleEditRegular;
      