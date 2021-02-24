import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDownload16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 13h9a.75.75 0 01.1 1.5H3.5a.75.75 0 01-.1-1.5h9.1-9zM7.9 1H8c.38 0 .7.28.74.65l.01.1v7.69l2.26-2.26a.75.75 0 01.97-.07l.09.07c.26.27.29.69.07.98l-.07.08-3.54 3.54a.75.75 0 01-.98.07l-.08-.07-3.54-3.54a.75.75 0 01.98-1.13l.08.07 2.26 2.26V1.75c0-.38.28-.7.65-.74L8 1h-.1z" fill={primaryFill} /></svg>;
};

export default ArrowDownload16Filled;