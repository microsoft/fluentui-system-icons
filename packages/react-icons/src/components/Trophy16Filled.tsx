import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Trophy16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3h-.5C2.67 3 2 3.67 2 4.5v1a2.5 2.5 0 002.12 2.47 4 4 0 003.38 3V12H6a2 2 0 00-2 2v.5c0 .28.22.5.5.5h7a.5.5 0 00.5-.5V14a2 2 0 00-2-2H8.5v-1.03a4 4 0 003.38-3A2.5 2.5 0 0014 5.5v-1c0-.83-.67-1.5-1.5-1.5H12a2 2 0 00-2-2H6a2 2 0 00-2 2zm8 1h.5c.28 0 .5.22.5.5v1c0 .65-.42 1.2-1 1.41V4zM4 4v2.91c-.58-.2-1-.76-1-1.41v-1c0-.28.22-.5.5-.5H4z" fill={primaryFill} /></svg>;
};

export default Trophy16Filled;