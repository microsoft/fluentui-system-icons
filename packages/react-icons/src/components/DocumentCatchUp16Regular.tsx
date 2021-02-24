import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentCatchUp16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1a2 2 0 00-2 2v3.5a.5.5 0 001 0V3a1 1 0 011-1h3v2.5C8 5.33 8.67 6 9.5 6H12v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-2H3v2c0 1.1.9 2 2 2h6a2 2 0 002-2V5.41c0-.4-.16-.78-.44-1.06L9.65 1.44A1.5 1.5 0 008.59 1H5zm6.8 4H9.5a.5.5 0 01-.5-.5V2.2L11.8 5z" fill={primaryFill} /><path d="M6.48 6.36a.5.5 0 00-.93-.08L4.2 9H2.5a.5.5 0 000 1h2a.5.5 0 00.45-.28l.93-1.87 1.14 3.8a.5.5 0 00.88.15L9.25 10h1.25a.5.5 0 000-1H9a.5.5 0 00-.4.2l-.9 1.2-1.22-4.04z" fill={primaryFill} /></svg>;
};

export default DocumentCatchUp16Regular;