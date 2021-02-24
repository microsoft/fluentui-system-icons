import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TapSingle24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 6c1.36 0 1.95.9 2 2.33V11l2.87.41a2.75 2.75 0 012.3 3.29l-.05.17-1.22 4.44c-.17.62-.67 1.1-1.3 1.24l-.14.03-3.06.43c-.76.11-1.5-.29-1.83-.97l-.06-.14-.21-.57a4.13 4.13 0 00-1.18-1.67l-.2-.17-1.6-1.2a1.75 1.75 0 00-.27-.16l-.14-.07-2.2-.86a.75.75 0 01-.47-.66c-.03-.73.5-1.25 1.42-1.72.72-.36 1.73-.33 3.07.05l.27.08V8.5c0-1.54.58-2.51 2-2.51zm0-3.5a5.75 5.75 0 015.3 7.99l.17.04-.45-.1-1.27-.18a4.25 4.25 0 10-6.75 1.02v.41a5.6 5.6 0 00-1.67-.07 5.75 5.75 0 014.67-9.1z" fill={primaryFill} /></svg>;
};

export default TapSingle24Filled;