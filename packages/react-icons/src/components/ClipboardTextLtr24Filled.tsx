import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardTextLtr24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 3.5h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5zm0-1.5c1.14 0 2.08.85 2.23 1.94l.01.14V4h1.76C18.99 4 20 5 20 6.25v13.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76v.08l.01-.14A2.25 2.25 0 0110.25 2h3.5zM14 17H8a.75.75 0 000 1.5h6a.75.75 0 000-1.5zm-2-4H8a.75.75 0 000 1.5h4a.75.75 0 000-1.5zm4-4H8a.75.75 0 000 1.5h8A.75.75 0 0016 9z" fill={primaryFill} /></svg>;
};

export default ClipboardTextLtr24Filled;