import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderLink28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.25 18.5a3.75 3.75 0 01.2 7.5h-1.2a.75.75 0 01-.1-1.49h.1l1-.01a2.25 2.25 0 00.15-4.5h-1.15a.75.75 0 01-.1-1.5h1.1zm-4.5 0a.75.75 0 01.1 1.5h-1.1a2.25 2.25 0 00-.15 4.5h1.15a.75.75 0 01.1 1.5h-1.1a3.75 3.75 0 01-.2-7.5h1.2zm6-12c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v10.59a4.74 4.74 0 00-3.75-1.84h-5.5a4.75 4.75 0 00-4.42 6.5H4.25c-1.2 0-2.17-.93-2.24-2.1L2 21.75V10.5H10.4c.4-.04.77-.18 1.1-.4l.15-.12 4.17-3.48h7.93zm-1.5 15a.75.75 0 01.1 1.5h-5.6a.75.75 0 01-.1-1.5h5.6zM10.21 4c.46 0 .9.14 1.28.4l.16.12 2.1 1.75-3.06 2.56-.09.06a.75.75 0 01-.29.1l-.1.01H2V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h5.96z" fill={primaryFill} /></svg>;
};

export default FolderLink28Filled;