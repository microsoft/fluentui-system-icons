import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocalLanguage28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 2a1 1 0 000 2h5v2.5c0 .83-.32 1.42-.8 1.82-.5.41-1.26.68-2.2.68a1 1 0 100 2c1.3 0 2.54-.37 3.47-1.14A4.23 4.23 0 0020 6.5V3a1 1 0 00-1-1h-6z" fill={primaryFill} /><path d="M10.93 7.61a1 1 0 00-1.85 0l-7 17a1 1 0 101.84.77L5.73 21h8.54l1.8 4.4a1 1 0 101.86-.77l-1.96-4.76a1 1 0 00-.2-.47L10.94 7.6zM13.45 19h-6.9L10 10.62 13.45 19z" fill={primaryFill} /><path d="M22 2a1 1 0 011 1v5h2a1 1 0 110 2h-2v9a1 1 0 11-2 0V3a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default LocalLanguage28Filled;