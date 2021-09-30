import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10a2 2 0 012 2v1.5c0 2.05-2.09 3.5-5.5 3.5S2 15.55 2 13.5V12c0-1.1.9-2 2-2h7zm-7 1a1 1 0 00-1 1v1.5C3 14.9 4.58 16 7.5 16s4.5-1.1 4.5-2.5V12a1 1 0 00-1-1H4z" fill={primaryFill} /><path d="M15.16 14.84l-.07-.03.13-.03-.06.06z" fill={primaryFill} /><path d="M14.9 10.9l-.03.1h-1.04a3 3 0 00-.6-1h2.05l-.38.9z" fill={primaryFill} /><path d="M7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill={primaryFill} /><path d="M14.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /><path d="M15.83 11.26l.4-.94a.96.96 0 011.08-.59l.1.03.5.16c.49.16.87.58 1 1.11.28 1.27-.07 2.81-1.06 4.63-.99 1.82-2.07 2.9-3.25 3.28a1.4 1.4 0 01-1.32-.27l-.1-.1-.38-.38c-.32-.33-.4-.85-.17-1.26l.05-.09.58-.84a.95.95 0 01.98-.4l.1.02 1.05.35a4.03 4.03 0 001.53-2.46l.03-.22-.88-.83c-.29-.28-.4-.7-.27-1.1l.03-.1z" fill={primaryFill} /></svg>;
}

const PeopleCallRegular = wrapIcon(rawSvg({}), 'PeopleCallRegular');
export default PeopleCallRegular;
      