import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 10c.8 0 1.47.53 1.68 1.25h-.68A2.75 2.75 0 0013 14v.05a2.5 2.5 0 00-2 2.45v4.39a4.5 4.5 0 01-3.5-4.4v-4.74c0-.97.79-1.75 1.75-1.75h5.5zm4.5 1.25A2.75 2.75 0 0122 13.99v-2.24c0-.97-.78-1.75-1.75-1.75h-3.38c.3.35.5.78.59 1.25h1.79zM7.13 10c-.35.42-.57.95-.62 1.53v4.97c0 .85.18 1.65.52 2.36A4 4 0 012 15v-3.24c0-.92.7-1.67 1.6-1.74l.15-.01h3.38zM12 3a3 3 0 110 6 3 3 0 010-6zm6.5 1a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM14 15h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 011.5 0V18h3v-.25a.75.75 0 011.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1zM12 21.5v-2h2.5v.75a.75.75 0 001.5 0v-.75h3v.75a.75.75 0 001.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /></svg>;
}

const PeopleTeamToolbox24Filled = wrapIcon(rawSvg({}), 'PeopleTeamToolbox24Filled');
export default PeopleTeamToolbox24Filled;
      