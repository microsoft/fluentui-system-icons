import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderArrowUp28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.75 6.5c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v5.65A7.5 7.5 0 0014.5 24H4.25c-1.2 0-2.17-.93-2.24-2.1L2 21.75V10.5H10.4c.4-.04.77-.18 1.1-.4l.15-.12 4.17-3.48h7.93z" fill={primaryFill} /><path d="M10.2 4c.47 0 .92.14 1.3.4l.15.12 2.1 1.75-3.06 2.56-.09.06a.75.75 0 01-.29.1l-.1.01H2V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h5.96z" fill={primaryFill} /><path d="M27 19.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-7-2.8v6.8a.5.5 0 001 0v-6.8l2.15 2.15a.5.5 0 00.7-.7l-3-3a.5.5 0 00-.35-.15.5.5 0 00-.35.15l-3 3a.5.5 0 00.7.7L20 16.71z" fill={primaryFill} /></svg>;
};

export default FolderArrowUp28Filled;