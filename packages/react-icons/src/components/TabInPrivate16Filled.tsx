import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabInPrivate16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.2 1.99c-1.25 0-2.26 1-2.26 2.25v7.5C1.94 13 2.95 14 4.2 14h7.5c1.25 0 2.26-1.01 2.26-2.25V4.24c0-1.24-1-2.25-2.25-2.25H4.2zm-.76 2.25c0-.41.34-.75.75-.75h.3L3.43 4.73v-.5zm0 2.04l2.35-2.8h1.35L3.44 7.9V6.3zm5-2.8H9.8l-6.35 7.58V9.45l5-5.96zm2.66 0h.6c.22 0 .41.1.55.25L4.89 12.5h-.7a.75.75 0 01-.5-.2l7.4-8.81zm1.35 1.56v1.61l-4.9 5.85H6.18l6.26-7.46zm0 3.17v1.6L10.2 12.5H8.85l3.6-4.3zm0 3.16v.38c0 .41-.34.75-.75.75h-.2l.95-1.13z" fill={primaryFill} /></svg>;
};

export default TabInPrivate16Filled;