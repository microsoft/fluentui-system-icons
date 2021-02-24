import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Backpack32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 16c0-1.1.9-2 2-2h4a2 2 0 012 2h-8zm4-14a4 4 0 00-4 4v.83A10 10 0 006 16v4h20v-4a10 10 0 00-6-9.17V6a4 4 0 00-4-4zm0 4c-.68 0-1.35.07-2 .2V6a2 2 0 114 0v.2c-.65-.13-1.32-.2-2-.2zm-2 6h4a4 4 0 014 4 2 2 0 01-2 2h-8a2 2 0 01-2-2 4 4 0 014-4zm-2 13v-3H6v3a5 5 0 005 5h10a5 5 0 005-5v-3H14v3a1 1 0 11-2 0z" fill={primaryFill} /></svg>;
};

export default Backpack32Filled;