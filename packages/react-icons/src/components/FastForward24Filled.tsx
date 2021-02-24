import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FastForward24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.71 4.16l9 7c.39.3.39.88 0 1.18l-9 7a.75.75 0 01-1.21-.59v-5.08l-7.3 5.67a.75.75 0 01-1.2-.59v-14c0-.62.72-.97 1.21-.6l7.29 5.68V4.75c0-.62.72-.97 1.21-.6z" fill={primaryFill} /></svg>;
};

export default FastForward24Filled;