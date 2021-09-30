import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 11c.97 0 1.75.78 1.75 1.75v6.75a5.5 5.5 0 01-11 0v-6.75c0-.97.79-1.75 1.75-1.75h7.5zm-14 0h4.38c-.35.42-.57.95-.62 1.53v6.97c0 1.13.28 2.2.8 3.13A4.49 4.49 0 012 18.5v-5.75c0-.97.78-1.75 1.75-1.75zm16.12 0h4.38c.97 0 1.75.78 1.75 1.75v5.75a4.5 4.5 0 01-6.3 4.13l.06-.1c.43-.82.69-1.73.74-2.7v-7.08c0-.67-.23-1.28-.63-1.75zM14 3a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm8 1a3 3 0 110 6 3 3 0 010-6zM6 4a3 3 0 110 6 3 3 0 010-6z" fill={primaryFill} /></svg>;
}

const PeopleTeam28Filled = wrapIcon(rawSvg({}), 'PeopleTeam28Filled');
export default PeopleTeam28Filled;
      