import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TapDouble24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 7c1.36 0 1.95.9 2 2.33V12l2.87.41a2.76 2.76 0 012.3 3.29l-.05.17-1.22 4.44c-.17.62-.67 1.1-1.3 1.24l-.14.03-3.06.43c-.76.11-1.5-.29-1.83-.97l-.06-.14-.21-.57a4.13 4.13 0 00-1.18-1.67l-.2-.17-1.6-1.2a1.75 1.75 0 00-.27-.16l-.14-.07-2.2-.86a.75.75 0 01-.47-.66c-.03-.73.5-1.25 1.42-1.72.72-.36 1.73-.33 3.07.05l.27.08V9.5c0-1.54.58-2.51 2-2.51zm0-5a7.25 7.25 0 016.67 10.1 3.74 3.74 0 00-1.2-.57l-.17-.04a5.73 5.73 0 00-5.3-7.99 5.75 5.75 0 00-4.62 9.18 3.22 3.22 0 00-1.51.44A7.25 7.25 0 0111.75 2zm0 2.5a4.75 4.75 0 014.27 6.82l-1.27-.18v-.65a3.24 3.24 0 00-.83-3.66l-.15-.12A2.85 2.85 0 0011.75 6c-.89 0-1.56.26-2.04.72a3.24 3.24 0 00-.96 3.79v1.85a.3.3 0 01-.3.3 4.75 4.75 0 013.3-8.16z" fill={primaryFill} /></svg>;
};

export default TapDouble24Filled;