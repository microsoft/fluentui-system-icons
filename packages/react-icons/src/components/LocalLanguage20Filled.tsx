import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocalLanguage20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.74 1.99a.75.75 0 100 1.5h2.76v1.26c0 .55-.2.98-.48 1.27-.29.29-.71.48-1.27.48a.75.75 0 000 1.5c.92 0 1.74-.32 2.33-.92.6-.6.92-1.42.92-2.33v-2a.75.75 0 00-.75-.75l-3.5-.01z" fill={primaryFill} /><path d="M8.2 5.46a.75.75 0 00-1.4 0l-3.29 7.98-.01.03-1.44 3.5a.75.75 0 001.38.57l1.26-3.05h5.6l1.26 3.04a.75.75 0 001.38-.57L8.2 5.46zM9.67 13H5.32L7.5 7.71 9.68 13z" fill={primaryFill} /><path d="M15.75 2c.42 0 .75.34.75.75V6h.76a.75.75 0 010 1.5h-.76v5.75a.75.75 0 01-1.5 0V2.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default LocalLanguage20Filled;