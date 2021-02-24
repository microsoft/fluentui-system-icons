import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SaveSync20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h8.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0117 6.62v2.64a5.5 5.5 0 00-1-.66V6.62a1 1 0 00-.3-.7L14.1 4.28a1 1 0 00-.71-.29H13v2.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 016 6.5V4H5a1 1 0 00-1 1v10a1 1 0 001 1v-4.5c0-.83.67-1.5 1.5-1.5h2.76c-.26.3-.48.64-.66 1H6.5a.5.5 0 00-.5.5V16h2.6c.18.36.4.7.66 1H5a2 2 0 01-2-2V5zm4-1v2.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V4H7z" fill={primaryFill} /><path d="M18 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.5-3a.5.5 0 00-.5.5v1.5c0 .28.22.5.5.5H13a.5.5 0 000-1h-.47a1.97 1.97 0 01.94-.25 2 2 0 011.44.59.5.5 0 00.71-.71 3 3 0 00-3.62-.48V11a.5.5 0 00-.5-.5zm.88 5.53a3 3 0 002.62-.18V16a.5.5 0 001 0v-1.5a.5.5 0 00-.5-.5H14a.5.5 0 000 1h.47a1.97 1.97 0 01-.94.25 2 2 0 01-1.44-.59.5.5 0 00-.71.71 3 3 0 001 .66z" fill={primaryFill} /></svg>;
};

export default SaveSync20Regular;