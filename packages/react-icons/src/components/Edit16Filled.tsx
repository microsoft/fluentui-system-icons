import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Edit16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.24 6.59l-5.97 5.97a2.5 2.5 0 01-1.16.66l-2.3.57a.5.5 0 01-.6-.6l.57-2.3c.11-.44.34-.84.66-1.16l5.97-5.97 2.83 2.83zm1.42-4.25a2 2 0 010 2.83l-.71.7-2.83-2.82.7-.7a2 2 0 012.84 0z" fill={primaryFill} /></svg>;
};

export default Edit16Filled;