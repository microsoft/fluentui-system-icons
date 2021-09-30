import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-3.25-2c.84 0 1.57.45 1.96 1.13A6.5 6.5 0 0012.02 21H12a4.5 4.5 0 01-4.5-4.5v-4.25c0-1.24 1-2.25 2.25-2.25h4.5zm.84 4.97l-.07.05-.05.07a.5.5 0 000 .57l.05.07 1.77 1.77-1.76 1.77-.06.07a.5.5 0 000 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 000-.57l-.05-.07-1.77-1.77 1.77-1.77.06-.07a.5.5 0 000-.57l-.06-.07-.07-.05a.5.5 0 00-.57 0l-.07.05-1.77 1.77-1.77-1.77-.07-.05a.5.5 0 00-.5-.05l-.07.05zM7.41 10a3.24 3.24 0 00-.9 2.03v4.47c0 .85.18 1.65.52 2.36A4 4 0 012 15v-2.74c0-1.2.93-2.17 2.1-2.24l.15-.01h3.16zm12.34 0c1.24 0 2.25 1 2.25 2.25v.56A6.48 6.48 0 0017.5 11h-.24a3.25 3.25 0 00-.66-1h3.15zM18.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 3a3 3 0 110 6 3 3 0 010-6zM5.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
}

const PeopleTeamDelete24Filled = wrapIcon(rawSvg({}), 'PeopleTeamDelete24Filled');
export default PeopleTeamDelete24Filled;
      