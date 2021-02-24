import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadAloud24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.05 18.98l5.5-14.5a.75.75 0 011.35-.1l.05.1 5.5 14.5a.75.75 0 01-1.36.63l-.04-.1L12.33 15H6.16l-1.7 4.51a.75.75 0 01-.88.47l-.1-.03a.75.75 0 01-.46-.87l.03-.1 5.5-14.5-5.5 14.5zm6.2-12.12L6.73 13.5h5.04L9.25 6.86zm5.6-4.47c.2-.36.65-.5 1.01-.3a11.72 11.72 0 014.68 4.4A11.72 11.72 0 0122 12.72a.75.75 0 01-1.5-.04c.05-2.1-.37-3.92-1.26-5.46a10.23 10.23 0 00-4.1-3.82.75.75 0 01-.3-1.02zM14.6 6c.2-.36.65-.5 1.01-.3.97.53 1.75 1.3 2.32 2.3.57.99.85 2.04.82 3.14a.75.75 0 01-1.5-.03c.02-.82-.18-1.6-.62-2.37a4.43 4.43 0 00-1.73-1.72.75.75 0 01-.3-1.02z" fill={primaryFill} /></svg>;
};

export default ReadAloud24Regular;