import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Predictions24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.68 14.93l1.29 3.85c.26.8-.08 1.67-.81 2.08-1.37.77-3.1 1.14-5.16 1.14s-3.79-.37-5.16-1.14a1.75 1.75 0 01-.8-2.08l1.28-3.85a7.72 7.72 0 009.36 0zM12 2c1.34 0 2.58.39 3.63 1.06-.08.31-.2.54-.37.7-.25.26-.68.42-1.32.47l-.22.02h-.38c-2.17.16-2.12 3.5.16 3.5.89 0 1.46.18 1.76.49.26.25.42.68.47 1.32l.02.22v.38c.1 1.32 1.36 1.81 2.34 1.5A6.75 6.75 0 1112 2zm6.25 0c0 1.15.27 1.96.78 2.47.47.47 1.2.74 2.21.78h.26c.96 0 1 1.38.12 1.5h-.12c-1.15 0-1.96.27-2.47.78-.47.47-.74 1.2-.78 2.21V10c0 1-1.5 1-1.5 0 0-1.15-.27-1.96-.78-2.47-.47-.47-1.2-.74-2.21-.78h-.26c-.96 0-1-1.38-.12-1.5h.12c1.15 0 1.96-.27 2.47-.78.51-.51.78-1.32.78-2.47 0-1 1.5-1 1.5 0z" fill={primaryFill} /></svg>;
};

export default Predictions24Filled;