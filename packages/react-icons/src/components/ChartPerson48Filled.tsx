import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChartPerson48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 5.25a1.25 1.25 0 10-2.5 0V6H9.25A5.25 5.25 0 004 11.25v20.5C4 34.65 6.35 37 9.25 37h6.6l-4.52 4.9a1.25 1.25 0 101.84 1.7l6-6.5.08-.1h5.17A5 5 0 0129 34h1.7A8 8 0 1144 28V11.25C44 8.35 41.65 6 38.75 6H25v-.75zm-14 9.5c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 110 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25zM12.25 23a1.25 1.25 0 110-2.5h14.5a1.25 1.25 0 110 2.5h-14.5zM11 28.75c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 110 2.5h-11.5c-.69 0-1.25-.56-1.25-1.25zM42 28a6 6 0 10-12 0 6 6 0 0012 0zm4 11a3 3 0 00-3-3H29a3 3 0 00-3 3v.71C26 43.43 30.21 46 36 46s10-2.7 10-6.29V39z" fill={primaryFill} /></svg>;
};

export default ChartPerson48Filled;