import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentHeaderFooter20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 4a1 1 0 00-1-1H6a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4zm-1 2.5v-1c0-.83-.67-1.5-1.5-1.5h-5C6.67 4 6 4.67 6 5.5v1C6 7.33 6.67 8 7.5 8h5c.83 0 1.5-.67 1.5-1.5zm0 7c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-1zM4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3.5 1h5c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1c0-.28.22-.5.5-.5zm0 8h5c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default DocumentHeaderFooter20Regular;