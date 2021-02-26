import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyboardShift20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.86 2.53c.6-.7 1.68-.7 2.28 0l6.62 7.8a1 1 0 01-.76 1.65h-3V17a1 1 0 01-1 1H7a1 1 0 01-1-1v-5.02H3a1 1 0 01-.76-1.65l6.62-7.8zm1.52.65a.5.5 0 00-.76 0L3 10.98h3.5c.28 0 .5.23.5.5V17h6v-5.52c0-.27.22-.5.5-.5H17l-6.62-7.8z" fill={primaryFill} /></svg>;
};

export default KeyboardShift20Regular;