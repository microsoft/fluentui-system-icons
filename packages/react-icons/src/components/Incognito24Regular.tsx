import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Incognito24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a4.5 4.5 0 11-4.39 5.5H10.9a4.5 4.5 0 11.08-1.5h2.06a4.5 4.5 0 014.47-4zm-11 1.5a3 3 0 100 6 3 3 0 000-6zm11 0a3 3 0 100 6 3 3 0 000-6zM12 9.25c3.39 0 6.53.34 9.42 1.02a.75.75 0 01-.34 1.46 39.6 39.6 0 00-9.08-.98c-3.28 0-6.3.33-9.08.98a.75.75 0 01-.34-1.46A41.1 41.1 0 0112 9.25zm3.7-6c1.02 0 1.96.57 2.43 1.46l.08.17L19.7 8.2a.75.75 0 01-1.33.7l-.05-.1-1.47-3.3a1.25 1.25 0 00-1-.74l-.14-.01H8.3c-.45 0-.86.24-1.08.62l-.06.12L5.69 8.8a.75.75 0 01-1.41-.5l.03-.1L5.8 4.88A2.75 2.75 0 018.1 3.26l.19-.01h7.4z" fill={primaryFill} /></svg>;
};

export default Incognito24Regular;