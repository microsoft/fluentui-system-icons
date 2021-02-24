import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPdf20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 11a.5.5 0 00-.5.5v2a.5.5 0 001 0v-.17h.33a1.17 1.17 0 000-2.33H6.5zm.83 1.33H7V12h.33a.17.17 0 010 .33z" fill={primaryFill} /><path d="M12 11.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1H13v.33h.5a.5.5 0 110 1H13v.17a.5.5 0 01-1 0v-2z" fill={primaryFill} /><path d="M9.5 11a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h.5a1.5 1.5 0 000-3h-.5zm.5 2v-1a.5.5 0 010 1z" fill={primaryFill} /><path d="M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06v1.67c.58.2 1 .76 1 1.42v4c0 .65-.42 1.2-1 1.41V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-.09c-.58-.2-1-.76-1-1.41v-4c0-.66.42-1.21 1-1.42V4zm11 4h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1v5h10V8zM5 16a1 1 0 001 1h8a1 1 0 001-1H5zm6-12.8v3.3c0 .28.22.5.5.5h3.3L11 3.2zM4.5 10a.5.5 0 00-.5.5v4c0 .28.23.5.5.5h11a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-11z" fill={primaryFill} /></svg>;
};

export default DocumentPdf20Regular;