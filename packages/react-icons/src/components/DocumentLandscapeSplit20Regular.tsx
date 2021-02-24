import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentLandscapeSplit20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 16a2 2 0 002-2V9.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0012.59 4H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12zm1-2a1 1 0 01-1 1h-6V5h2v3.5c0 .83.67 1.5 1.5 1.5H17v4zM9 5v10H4a1 1 0 01-1-1V6a1 1 0 011-1h5zm4 3.5V5.2L16.8 9h-3.3a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default DocumentLandscapeSplit20Regular;