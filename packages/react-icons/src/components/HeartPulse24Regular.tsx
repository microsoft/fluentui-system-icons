import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HeartPulse24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.82 5.58L12 6.4l-.82-.82A5.37 5.37 0 002.25 11h1.6a3.88 3.88 0 016.27-4.36L11.47 8c.3.3.79.29 1.08-.02l1.33-1.34A3.88 3.88 0 0120.15 11h1.6a5.37 5.37 0 00-8.93-5.42z" fill={primaryFill} /><path d="M11.47 21.08L4.89 14.5h2.12L12 19.47l4.99-4.98h2.12l-6.58 6.58c-.3.29-.77.29-1.06 0z" fill={primaryFill} /><path d="M9.42 8.41a.75.75 0 00-1.35.02L6.38 12H2.75a.75.75 0 000 1.5h4.1c.3 0 .56-.17.69-.43l1.23-2.6 2.56 5.11a.75.75 0 001.28.1l2.7-3.73 1.13 1.3c.14.16.34.25.56.25h4.25a.75.75 0 000-1.5h-3.91l-1.53-1.74a.75.75 0 00-1.17.05l-2.52 3.5-2.7-5.4z" fill={primaryFill} /></svg>;
};

export default HeartPulse24Regular;