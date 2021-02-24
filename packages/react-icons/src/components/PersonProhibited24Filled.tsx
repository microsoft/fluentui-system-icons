import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonProhibited24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-5.48 2a6.47 6.47 0 00.6 7.79c-.8.14-1.68.21-2.62.21-2.89 0-5.13-.66-6.7-2A3.75 3.75 0 012 17.16v-.91C2 15.01 3.01 14 4.25 14h7.77zm8.79 1.25l-5.56 5.56a4 4 0 005.56-5.56zM17.5 13.5a4 4 0 00-3.3 6.25l5.55-5.56a3.98 3.98 0 00-2.25-.69zM10 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
};

export default PersonProhibited24Filled;