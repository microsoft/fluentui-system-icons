import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSqualls48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M38.05 19.55a5.98 5.98 0 11-.15 11.96H34.74c.56.87.88 1.89.88 2.99 0 3.06-2.3 5.5-5.33 5.5-3.02 0-4.82-1.74-5.31-4.18a1.25 1.25 0 112.45-.5c.27 1.36 1.13 2.19 2.86 2.19 1.62 0 2.83-1.3 2.83-3.01 0-1.56-1.2-2.84-2.75-2.98H5.28a1.25 1.25 0 01-.13-2.5H29.91l.17-.02c.13 0 .26 0 .38.02h7.56c1.86 0 3.4-1.47 3.5-3.3l.01-.2a3.48 3.48 0 00-6.96-.2 1.25 1.25 0 11-2.5-.16 5.98 5.98 0 015.98-5.61zm-15.03 4.48H5.28a1.25 1.25 0 01-.13-2.5H23.02a5.5 5.5 0 10-5.49-5.49 1.25 1.25 0 01-2.5 0 8 8 0 118 8H5.27h17.74z" fill={primaryFill} /></svg>;
};

export default WeatherSqualls48Regular;