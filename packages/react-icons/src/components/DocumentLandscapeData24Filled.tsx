import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentLandscapeData24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zM12 7a2 2 0 00-2 2v6a2 2 0 104 0V9a2 2 0 00-2-2zm-5 5a2 2 0 00-2 2v1a2 2 0 104 0v-1a2 2 0 00-2-2zm8 0v3a2 2 0 104 0v-3a2 2 0 10-4 0z" fill={primaryFill} /></svg>;
};

export default DocumentLandscapeData24Filled;