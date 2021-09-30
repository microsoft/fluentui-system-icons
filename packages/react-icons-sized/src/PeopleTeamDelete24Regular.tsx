import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-3.25-2c.84 0 1.57.45 1.96 1.13-.54.1-1.05.28-1.52.5a.74.74 0 00-.44-.13h-4.5a.75.75 0 00-.75.75v4.25a3 3 0 002.29 2.91c.17.57.42 1.1.73 1.6L12 21a4.5 4.5 0 01-4.5-4.5v-4.25c0-1.24 1-2.25 2.25-2.25h4.5zm.84 4.97l-.07.05-.05.07a.5.5 0 000 .57l.05.07 1.77 1.77-1.76 1.77-.06.07a.5.5 0 000 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 000-.57l-.05-.07-1.77-1.77 1.77-1.77.06-.07a.5.5 0 000-.57l-.06-.07-.07-.05a.5.5 0 00-.57 0l-.07.05-1.77 1.77-1.77-1.77-.07-.05a.5.5 0 00-.5-.05l-.07.05zM7.41 10c-.4.41-.69.93-.82 1.5H4.25a.75.75 0 00-.75.75V15a2.5 2.5 0 003.08 2.43c.09.5.24.99.45 1.43A4 4 0 012 15v-2.74c0-1.2.93-2.17 2.1-2.24l.15-.01h3.16zm12.34 0c1.24 0 2.25 1 2.25 2.25v.56A6.48 6.48 0 0017.5 11h-.25a3.21 3.21 0 00-.65-1h3.15zM18.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 3a3 3 0 110 6 3 3 0 010-6zM5.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 1.5a1 1 0 100 2 1 1 0 000-2zm-6.5-1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-6.5 1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const PeopleTeamDelete24Regular = wrapIcon(rawSvg({}), 'PeopleTeamDelete24Regular');
export default PeopleTeamDelete24Regular;
      