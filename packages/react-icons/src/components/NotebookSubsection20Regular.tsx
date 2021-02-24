import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NotebookSubsection20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.5A3.5 3.5 0 017.5 2H10c.82 0 1.54.4 2 1H7.5A2.5 2.5 0 005 5.5V15a2.5 2.5 0 01-1-2V5.5z" fill={primaryFill} /><path d="M13.43 2h.07c.25 0 .46.23.5.52V17.4c0 .33-.22.6-.5.6-.25 0-.46-.23-.5-.52V17H8a2 2 0 01-2-2V6c0-1.1.9-2 2-2h5V2.6c0-.3.19-.55.43-.6zM8 5a1 1 0 00-1 1v9a1 1 0 001 1h5V5H8z" fill={primaryFill} /></svg>;
};

export default NotebookSubsection20Regular;