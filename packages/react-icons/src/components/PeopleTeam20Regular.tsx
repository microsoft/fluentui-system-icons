import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleTeam20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.47 8.01a1 1 0 011 .89v4.48a3.48 3.48 0 01-6.96.2V9a1 1 0 01.88-.99h5.08zm0 1H7.51v4.37a2.48 2.48 0 004.96.16V9.02zm-6.7-1c-.14.25-.23.53-.26.82v.18H3v3.74a1.86 1.86 0 002.62 1.7c.08.33.2.64.35.94a2.86 2.86 0 01-3.96-2.47V9.01a1 1 0 01.88-.99h2.87zm8.44 0h2.78a1 1 0 011 .89v3.85a2.86 2.86 0 01-3.98 2.63c.15-.3.26-.62.34-.94a1.86 1.86 0 002.64-1.54V9h-2.52v-.14c-.02-.31-.12-.6-.26-.86zM9.99 3a2.23 2.23 0 110 4.45 2.23 2.23 0 010-4.45zm4.99.63a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82zm-9.96 0a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82zm4.97.37a1.23 1.23 0 100 2.45 1.23 1.23 0 000-2.45zm4.99.63a.91.91 0 100 1.82.91.91 0 000-1.82zm-9.96 0a.91.91 0 100 1.82.91.91 0 000-1.82z" fill={primaryFill} /></svg>;
};

export default PeopleTeam20Regular;