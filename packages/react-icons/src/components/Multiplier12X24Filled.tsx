import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier12X24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.34 10.49a1 1 0 001.14-.82v-.01l.04-.1c.03-.1.09-.21.18-.33.15-.2.45-.48 1.15-.48.72 0 1.06.22 1.23.42.17.23.31.65.18 1.41a.88.88 0 01-.47.68c-.25.16-.53.25-.9.39l-.55.2c-.6.23-1.35.56-1.93 1.25-.6.7-.91 1.65-.91 2.9a1 1 0 001 1h4.75a1 1 0 100-2h-3.63c.09-.28.2-.47.32-.6.24-.29.59-.48 1.12-.68l.33-.13c.44-.15 1-.35 1.44-.62a2.87 2.87 0 001.4-2.05 3.7 3.7 0 00-.58-2.98c-.66-.83-1.67-1.19-2.8-1.19a3.29 3.29 0 00-3.22 2.14 3.02 3.02 0 00-.11.43v.02s-.04.2 0 0a1 1 0 00.82 1.15zM5.27 6.94A1 1 0 016 7.9V16a1 1 0 01-2 0v-5.33c-.28.23-.6.46-.99.69A1 1 0 012 9.64C3.23 8.9 3.67 8.17 4.07 7.5l.08-.12a1 1 0 011.12-.44zm13.44 5.35a1 1 0 00-1.42 1.42l.8.79-.8.8a1 1 0 001.42 1.4l.79-.79.8.8a1 1 0 001.4-1.42l-.79-.79.8-.8a1 1 0 00-1.42-1.4l-.79.79-.8-.8zM7.75 17a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
};

export default Multiplier12X24Filled;