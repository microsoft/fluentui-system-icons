import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Clock48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 5a19 19 0 110 38 19 19 0 010-38zm0 2.5a16.5 16.5 0 100 33 16.5 16.5 0 000-33zM22.75 12c.65 0 1.18.5 1.24 1.12l.01.13V24h6.75a1.25 1.25 0 01.13 2.5h-8.13c-.65 0-1.18-.5-1.24-1.12l-.01-.13v-12c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /></svg>;
};

export default Clock48Regular;