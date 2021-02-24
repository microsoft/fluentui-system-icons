import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentBriefcase24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10.5c0 .83-.67 1.5-1.5 1.5H14v-5.25A2.75 2.75 0 0011.25 14v-1c0-.83-.67-1.5-1.5-1.5H4.5c-.18 0-.34.03-.5.09V3.5C4 2.67 4.67 2 5.5 2H12z" fill={primaryFill} /><path d="M13.5 2.5V8c0 .28.22.5.5.5h5.5l-6-6z" fill={primaryFill} /><path d="M3.75 13.25c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75V15h.5c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25h-7.5C2.01 23 1 22 1 20.75v-3.5C1 16.01 2 15 3.25 15h.5v-1.75zm5 .75h-3.5v1h3.5v-1zm-5.5 2.5a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75h-7.5z" fill={primaryFill} /></svg>;
};

export default DocumentBriefcase24Filled;