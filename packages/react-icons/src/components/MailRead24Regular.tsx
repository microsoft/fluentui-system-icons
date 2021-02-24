import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailRead24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.1 8.17l8.52-5.06c.2-.13.44-.14.66-.06l.1.06 8.52 5.06A2.25 2.25 0 0122 9.93v7.82a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 17.75V10.1c0-.73.36-1.42.96-1.84l.14-.1 8.52-5.05L3.1 8.17zm17.4 2.74l-8.15 4.25c-.18.1-.4.12-.59.05l-.1-.05-8.16-4.25v6.84c0 .92.7 1.67 1.6 1.74l.15.01h13.5c.92 0 1.67-.7 1.74-1.6l.01-.15v-6.84zM12 4.62L3.9 9.43l8.1 4.22 8.09-4.22L12 4.63z" fill={primaryFill} /></svg>;
};

export default MailRead24Regular;