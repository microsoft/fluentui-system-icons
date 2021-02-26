import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PaneClose24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.2 9.25a.75.75 0 011.05-.06l2.5 2.25a.75.75 0 010 1.12l-2.5 2.25a.75.75 0 11-1-1.12l1.05-.94H6.75a.75.75 0 010-1.5h3.55l-1.05-.94a.75.75 0 01-.06-1.06zm12.8 8A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5zm-7 1.25v-13H4.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25H15z" fill={primaryFill} /></svg>;
};

export default PaneClose24Filled;