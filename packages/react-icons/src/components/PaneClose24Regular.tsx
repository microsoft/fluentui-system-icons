import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PaneClose24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12c0-.28.23-.5.5-.5h4.79L9.64 9.85a.5.5 0 11.71-.7l2.5 2.5c.2.19.2.5 0 .7l-2.5 2.5a.5.5 0 11-.7-.7l1.64-1.65H6.5A.5.5 0 016 12z" fill={primaryFill} /><path d="M19.25 20A2.75 2.75 0 0022 17.25V6.75A2.75 2.75 0 0019.25 4H4.75A2.75 2.75 0 002 6.75v10.5A2.75 2.75 0 004.75 20h14.5zm1.25-2.75c0 .7-.56 1.25-1.25 1.25H16v-13h3.25c.69 0 1.25.56 1.25 1.25v10.5zm-6-11.75v13H4.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.7.56-1.25 1.25-1.25h9.75z" fill={primaryFill} /></svg>;
};

export default PaneClose24Regular;