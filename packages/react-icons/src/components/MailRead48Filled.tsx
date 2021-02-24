import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailRead48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.05 18.57l17.31 10.26c.4.23.88.23 1.28 0l17.31-10.26c.03.24.05.49.05.73v15.45C42 37.1 40.1 39 37.75 39h-27.5A4.25 4.25 0 016 34.75V19.3c0-.25.02-.49.05-.73zm18.58-12.4l14.76 8.6c.65.37 1.2.87 1.62 1.46L24 26.3 7 16.23c.42-.59.96-1.1 1.6-1.47l14.77-8.59c.39-.23.87-.23 1.26 0z" fill={primaryFill} /></svg>;
};

export default MailRead48Filled;