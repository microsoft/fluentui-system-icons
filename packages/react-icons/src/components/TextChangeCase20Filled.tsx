import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextChangeCase20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 15.17a.63.63 0 01-.61-.5c-.6.33-1.18.5-1.72.5-1.3 0-2.3-.92-2.3-2.3 0-.6.21-1.13.6-1.54.39-.4.94-.66 1.62-.74a5.1 5.1 0 011.78.1.9.9 0 00-.25-.58c-.16-.16-.42-.26-.82-.28-.63-.03-1.05.06-1.28.22a.62.62 0 11-.71-1.02 3.1 3.1 0 011.86-.45h.2c.67.04 1.22.25 1.61.62.4.38.61.9.64 1.53v3.81c0 .32-.23.58-.54.62H7.5zm-2.26-3.32c-.4.05-.67.18-.85.35a.94.94 0 00-.26.7c0 .34.1.6.28.77.18.17.44.27.76.27.41 0 .95-.2 1.6-.62l.1-.08v-1.23l-.1-.03a3.91 3.91 0 00-1.53-.13z" fill={primaryFill} /><path d="M14.2 3.75a.75.75 0 00-1.42-.02L8.8 14.23a.75.75 0 101.4.54l.86-2.27h4.59l.78 2.25a.75.75 0 001.41-.5L14.2 3.75zm.92 7.25h-3.49l1.82-4.8 1.67 4.8z" fill={primaryFill} /></svg>;
};

export default TextChangeCase20Filled;