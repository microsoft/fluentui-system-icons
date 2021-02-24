import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonFeedback24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 14c1.24 0 2.25 1 2.25 2.25v1.61c-.32 2.13-2.23 3.15-5.43 3.15C4.37 21 2.43 20 2 17.9L2 17.75v-1.5C2 15.01 3 14 4.25 14h6.5zM7.5 6a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm12.25-4C20.99 2 22 3 22 4.25v3.5C22 8.99 21 10 19.75 10H18.2l-2.54 2.2a1 1 0 01-1.66-.75V10a2.25 2.25 0 01-2-2.24v-3.5C12 3.01 13 2 14.25 2h5.5z" fill={primaryFill} /></svg>;
};

export default PersonFeedback24Filled;