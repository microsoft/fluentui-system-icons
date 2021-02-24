import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CellularData220Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 01-1.5.1v-2.6c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64v6.61a.75.75 0 01-1.48.11l-.01-.11v-6.5c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64v8.61a.75.75 0 01-1.48.11l-.01-.11v-8.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default CellularData220Filled;