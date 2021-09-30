import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zm-3.25-4c.84 0 1.57.45 1.96 1.13A6.5 6.5 0 0012.02 21H12a4.5 4.5 0 01-4.5-4.5v-4.25c0-1.24 1-2.25 2.25-2.25h4.5zm-6.84 0a3.24 3.24 0 00-.9 2.03v4.47c0 .85.18 1.65.52 2.36A4 4 0 012 15v-2.74c0-1.2.93-2.17 2.1-2.24l.15-.01h3.16zm12.34 0c1.24 0 2.25 1 2.25 2.25v.56A6.48 6.48 0 0017.5 11h-.24a3.25 3.25 0 00-.66-1h3.15zM18.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 3a3 3 0 110 6 3 3 0 010-6zM5.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
}

const PeopleTeamAdd24Filled = wrapIcon(rawSvg({}), 'PeopleTeamAdd24Filled');
export default PeopleTeamAdd24Filled;
      