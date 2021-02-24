import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleTeam28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 11c1.25 0 2.25 1 2.25 2.25v6.25a5.5 5.5 0 01-11 0v-6.25c0-1.24 1-2.25 2.25-2.25h6.5zm0 1.5h-6.5a.75.75 0 00-.75.75v6.25a4 4 0 008 0v-6.25a.75.75 0 00-.75-.75zm-13-1.5h4.16c-.4.41-.69.93-.82 1.5H4.25a.75.75 0 00-.75.75v5.25a3 3 0 004.24 2.73c.13.5.32.96.56 1.4A4.49 4.49 0 012 18.5v-5.25C2 12.01 3 11 4.25 11zm19.5 0c1.24 0 2.25 1 2.25 2.25v5.25a4.5 4.5 0 01-6.3 4.13l.06-.1c.21-.41.38-.84.5-1.3a3 3 0 004.23-2.74v-5.24a.75.75 0 00-.74-.75h-3.33a3.24 3.24 0 00-.82-1.5h4.15zM14 3a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm8 1a3 3 0 110 6 3 3 0 010-6zM6 4a3 3 0 110 6 3 3 0 010-6zm8 .5a2 2 0 100 4 2 2 0 000-4zm8 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-16 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
};

export default PeopleTeam28Regular;