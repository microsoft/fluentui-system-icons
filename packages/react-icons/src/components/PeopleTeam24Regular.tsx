import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleTeam24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 10c.97 0 1.75.78 1.75 1.75v4.75a4.5 4.5 0 01-9 0v-4.75c0-.97.79-1.75 1.75-1.75h5.5zm0 1.5h-5.5a.25.25 0 00-.25.25v4.75a3 3 0 006 0v-4.75a.25.25 0 00-.25-.25zm-11-1.5h3.38c-.34.41-.57.93-.62 1.5H3.75a.25.25 0 00-.25.25V15a2.5 2.5 0 003.08 2.43c.09.5.24.99.45 1.43A4 4 0 012 15v-3.24c0-.97.78-1.75 1.75-1.75zm13.12 0h3.38c.97 0 1.75.78 1.75 1.75V15a4 4 0 01-5.03 3.87c.21-.45.37-.93.46-1.44A2.5 2.5 0 0020.5 15v-3.25a.25.25 0 00-.25-.25h-2.76a2.74 2.74 0 00-.62-1.5zM12 3a3 3 0 110 6 3 3 0 010-6zm6.5 1a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm6.5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.5 1a1 1 0 100 2 1 1 0 000-2zm-13 0a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
};

export default PeopleTeam24Regular;