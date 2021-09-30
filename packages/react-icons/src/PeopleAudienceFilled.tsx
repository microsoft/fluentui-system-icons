import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.21 5.22a2.23 2.23 0 10-4.45 0 2.23 2.23 0 004.45 0z" fill={primaryFill} /><path d="M2.52 12H5.5V9.01l.01-.18c.03-.3.12-.57.26-.82H3.02l-.12.01a1 1 0 00-.88 1v2.48c0 .28.22.5.5.5z" fill={primaryFill} /><path d="M17.99 11.5a.5.5 0 01-.5.5h-3.02V8.87c-.02-.31-.12-.6-.26-.86h2.78a1 1 0 011 .89v2.6z" fill={primaryFill} /><path d="M13.47 8.9a1 1 0 00-1-.89H7.5l-.11.01a1 1 0 00-.89 1V12h6.97V8.9z" fill={primaryFill} /><path d="M14.97 3.62a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82z" fill={primaryFill} /><path d="M6.93 5.53a1.91 1.91 0 10-3.83 0 1.91 1.91 0 003.83 0z" fill={primaryFill} /><path d="M2.5 13a.5.5 0 00-.5.5v1A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-.5-.5h-15z" fill={primaryFill} /></svg>;
}

const PeopleAudienceFilled = wrapIcon(rawSvg({}), 'PeopleAudienceFilled');
export default PeopleAudienceFilled;
      