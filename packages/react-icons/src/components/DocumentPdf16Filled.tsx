import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPdf16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 9a.5.5 0 00-.5.5v2a.5.5 0 001 0v-.16h.33a1.17 1.17 0 000-2.34H4.5zm.83 1.34H5V10h.33a.17.17 0 010 .34z" fill={primaryFill} /><path d="M10 9.5c0-.27.22-.5.5-.5h1a.5.5 0 010 1H11v.34h.5a.5.5 0 110 1H11v.16a.5.5 0 01-1 0v-2z" fill={primaryFill} /><path d="M7.5 9a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H8a1.5 1.5 0 000-3h-.5zm.5 2v-1a.5.5 0 010 1z" fill={primaryFill} /><path d="M9 2H4.5C3.67 2 3 2.67 3 3.5v3.58c-.58.21-1 .77-1 1.42v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.65-.42-1.21-1-1.42V6h-2.5A1.5 1.5 0 019 4.5V2zM3.5 8h9c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M12.7 5h-2.2a.5.5 0 01-.5-.5V2.3L12.7 5z" fill={primaryFill} /></svg>;
};

export default DocumentPdf16Filled;