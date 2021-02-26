import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PaneOpen24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.8 9.25a.75.75 0 00-1.05-.06l-2.5 2.25a.75.75 0 000 1.12l2.5 2.25a.75.75 0 001-1.12l-1.05-.94h3.55a.75.75 0 100-1.5H13.7l1.05-.94c.31-.28.33-.75.06-1.06zm-12.8 8A2.75 2.75 0 004.75 20h14.5A2.75 2.75 0 0022 17.25V6.75A2.75 2.75 0 0019.25 4H4.75A2.75 2.75 0 002 6.75v10.5zm2.75 1.25c-.69 0-1.25-.56-1.25-1.25V6.75c0-.7.56-1.25 1.25-1.25H8v13H4.75zm4.75 0v-13h9.75c.69 0 1.25.56 1.25 1.25v10.5c0 .7-.56 1.25-1.25 1.25H9.5z" fill={primaryFill} /></svg>;
};

export default PaneOpen24Regular;