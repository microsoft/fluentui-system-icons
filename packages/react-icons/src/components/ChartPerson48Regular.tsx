import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChartPerson48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 5.25a1.25 1.25 0 10-2.5 0V6H9.25A5.25 5.25 0 004 11.25v20.5C4 34.65 6.35 37 9.25 37h6.6l-4.52 4.9a1.25 1.25 0 101.84 1.7l6-6.5.08-.1h5.17a5.02 5.02 0 012.4-2.5H9.25a2.75 2.75 0 01-2.75-2.75v-20.5A2.75 2.75 0 019.25 8.5h29.5a2.75 2.75 0 012.75 2.75v10.94A7.98 7.98 0 0144 28V11.25C44 8.35 41.65 6 38.75 6H25v-.75zM26.76 37A3 3 0 0129 36h14a3 3 0 013 3v.71C46 43.3 41.79 46 36 46s-10-2.57-10-6.29V39c0-.77.29-1.47.76-2zM41.5 25.6a6 6 0 11-11 4.8 6 6 0 0111-4.8zM12.25 13.5a1.25 1.25 0 100 2.5h9.5a1.25 1.25 0 100-2.5h-9.5zM11 21.75c0-.69.56-1.25 1.25-1.25h14.5a1.25 1.25 0 110 2.5h-14.5c-.69 0-1.25-.56-1.25-1.25zm1.25 5.75a1.25 1.25 0 100 2.5h11.5a1.25 1.25 0 100-2.5h-11.5z" fill={primaryFill} /></svg>;
};

export default ChartPerson48Regular;