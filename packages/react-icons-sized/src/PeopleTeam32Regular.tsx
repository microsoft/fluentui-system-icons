import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 12a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4zm-9 2a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm21-1a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 10-2 0 1 1 0 002 0zm-15.03 5.25c.28-.16.6-.25.95-.25h8.16A1.91 1.91 0 0122 15.92V22a5.98 5.98 0 01-6 6 6 6 0 01-6-6v-6.08c0-.71.4-1.34.97-1.67zM12 22a4 4 0 008 0v-6h-8v6zm-3.5-6.08c0-.71.22-1.37.6-1.92H4a2 2 0 00-2 2v5a5 5 0 007.33 4.43c-.31-.6-.54-1.25-.68-1.92A3 3 0 014 21v-5.01h4.5v-.08zM25 26c-.84 0-1.63-.2-2.33-.57.31-.6.54-1.25.68-1.92A3 3 0 0028 21v-5.01h-4.5v-.08a3.4 3.4 0 00-.6-1.92H28a2 2 0 012 2v5a5 5 0 01-5 5z" fill={primaryFill} /></svg>;
}

const PeopleTeam32Regular = wrapIcon(rawSvg({}), 'PeopleTeam32Regular');
export default PeopleTeam32Regular;
      