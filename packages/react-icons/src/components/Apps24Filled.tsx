import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Apps24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 2.33l3.17 3.18c.88.88.88 2.3 0 3.18l-2.42 2.42A2.5 2.5 0 0121 13.5v5a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 18.5v-13A2.5 2.5 0 015.5 3h5a2.5 2.5 0 012.39 1.75l2.42-2.42c.88-.88 2.3-.88 3.18 0zM11 13H5v5.5c0 .28.22.5.5.5H11v-6zm7.5 0H13v6h5.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zm-4.06-2L13 9.56V11h1.44zM10.5 5h-5a.5.5 0 00-.5.5V11h6V5.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default Apps24Filled;