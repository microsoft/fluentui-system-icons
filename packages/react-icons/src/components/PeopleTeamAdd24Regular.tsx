import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleTeamAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zm-3.25-4c.84 0 1.57.45 1.96 1.13-.54.1-1.05.28-1.52.5a.74.74 0 00-.44-.13h-4.5a.75.75 0 00-.75.75v4.25a3 3 0 002.29 2.91c.17.57.42 1.1.73 1.6L12 21a4.5 4.5 0 01-4.5-4.5v-4.25c0-1.24 1-2.25 2.25-2.25h4.5zm-6.84 0c-.4.41-.69.93-.82 1.5H4.25a.75.75 0 00-.75.75V15a2.5 2.5 0 003.08 2.43c.09.5.24.99.45 1.43A4 4 0 012 15v-2.74c0-1.2.93-2.17 2.1-2.24l.15-.01h3.16zm12.34 0c1.24 0 2.25 1 2.25 2.25v.56A6.48 6.48 0 0017.5 11h-.25a3.21 3.21 0 00-.65-1h3.15zM18.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 3a3 3 0 110 6 3 3 0 010-6zM5.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 1.5a1 1 0 100 2 1 1 0 000-2zm-6.5-1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-6.5 1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
};

export default PeopleTeamAdd24Regular;