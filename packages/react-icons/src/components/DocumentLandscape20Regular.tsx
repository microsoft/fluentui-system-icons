import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentLandscape20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 14a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V14zm-2 1a1 1 0 001-1v-4h-3.5A1.5 1.5 0 0112 8.5V5H4a1 1 0 00-1 1v8a1 1 0 001 1h12zm-3-9.8v3.3c0 .28.22.5.5.5h3.3L13 5.2z" fill={primaryFill} /></svg>;
};

export default DocumentLandscape20Regular;