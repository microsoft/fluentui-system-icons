import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleTeam24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 10c.97 0 1.75.78 1.75 1.75v4.75a4.5 4.5 0 01-9 0v-4.75c0-.97.79-1.75 1.75-1.75h5.5zm-7.62 0c-.35.42-.57.95-.62 1.53v4.97c0 .85.18 1.65.52 2.36A4 4 0 012 15v-3.24c0-.92.7-1.67 1.6-1.74l.15-.01h3.38zm9.74 0h3.38c.97 0 1.75.78 1.75 1.75V15a4 4 0 01-5.03 3.87c.3-.63.48-1.32.53-2.06v-5.06c0-.67-.23-1.28-.63-1.75zM12 3a3 3 0 110 6 3 3 0 010-6zm6.5 1a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
};

export default PeopleTeam24Filled;