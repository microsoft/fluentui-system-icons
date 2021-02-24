import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPdf32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 16a1 1 0 00-1 1v5a1 1 0 102 0v-1h.5a2.5 2.5 0 000-5H9zm1.5 3H10v-1h.5a.5.5 0 010 1zm3.5-2a1 1 0 011-1h.5a3.5 3.5 0 110 7H15a1 1 0 01-1-1v-5zm2 3.91a1.5 1.5 0 000-2.82v2.82zM20 22v-5a1 1 0 011-1h3a1 1 0 110 2h-2v1h2a1 1 0 110 2h-2v1a1 1 0 11-2 0zM6 5v8H5a2 2 0 00-2 2v9c0 1.1.9 2 2 2h1v1a3 3 0 003 3h14a3 3 0 003-3v-1h1a2 2 0 002-2v-9a2 2 0 00-2-2h-1V9.83a3 3 0 00-.88-2.12L20.3 2.88A3 3 0 0018.17 2H9a3 3 0 00-3 3zm3-1h7v5a3 3 0 003 3h5v1H8V5a1 1 0 011-1zM8 27v-1h16v1a1 1 0 01-1 1H9a1 1 0 01-1-1zM24 9.83V10h-5a1 1 0 01-1-1V4h.17a1 1 0 01.7.3l4.84 4.82a1 1 0 01.29.7zM5 15h22v9H5v-9z" fill={primaryFill} /></svg>;
};

export default DocumentPdf32Regular;