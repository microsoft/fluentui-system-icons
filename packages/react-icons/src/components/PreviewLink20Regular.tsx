import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PreviewLink20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-3zM5 6v2h10V6H5z" fill={primaryFill} /><path d="M11.5 10a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4zm.5 4v-3h3v3h-3z" fill={primaryFill} /><path d="M4 11c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5A.5.5 0 014 11z" fill={primaryFill} /><path d="M4.5 13.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /><path d="M2 5.5A2.5 2.5 0 014.5 3h11A2.5 2.5 0 0118 5.5v9a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5v-9zM4.5 4C3.67 4 3 4.67 3 5.5v9c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-11z" fill={primaryFill} /></svg>;
};

export default PreviewLink20Regular;