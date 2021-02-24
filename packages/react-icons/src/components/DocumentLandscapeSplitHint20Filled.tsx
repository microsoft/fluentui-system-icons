import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentLandscapeSplitHint20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 011-1h.5a.5.5 0 000-1H4a2 2 0 00-2 2v.5a.5.5 0 001 0V6z" fill={primaryFill} /><path d="M4 15a1 1 0 01-1-1v-.5a.5.5 0 00-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 000-1H4z" fill={primaryFill} /><path d="M2.5 8c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M6.5 4a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M6 15.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M12 8.5V4h-1.5a.5.5 0 00-.5.5v11c0 .28.22.5.5.5H16a2 2 0 002-2v-4h-4.5A1.5 1.5 0 0112 8.5z" fill={primaryFill} /><path d="M13 8.5V4.06c.24.07.47.2.65.38l3.91 3.91c.18.18.31.4.38.65H13.5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default DocumentLandscapeSplitHint20Filled;