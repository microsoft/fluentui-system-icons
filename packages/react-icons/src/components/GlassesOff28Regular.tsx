import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlassesOff28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 2.22c.3-.3.77-.3 1.06 0l22.5 22.5a.75.75 0 01-1.06 1.06L19.94 21h-1.19A3.75 3.75 0 0115 17.25v-1.19l-1.81-1.81H13v3A3.75 3.75 0 019.25 21h-3.5A3.75 3.75 0 012 17.25v-4c0-.68.25-1.3.66-1.78l.02-.03c.09-.1.19-.2.29-.28l3.58-3.54-4.33-4.34a.75.75 0 010-1.06zm5.4 6.46L5.77 10.5h3.67L7.62 8.68zm-3.84 3.78c-.18.22-.28.5-.28.79v4c0 1.24 1 2.25 2.25 2.25h3.5c1.24 0 2.25-1 2.25-2.25v-4c0-.69-.56-1.25-1.25-1.25h-5.5c-.3 0-.56.1-.78.27l-.19.2z" fill={primaryFill} /><path d="M10.68 7.5L9.18 6H10.76a.75.75 0 010 1.5h-.07z" fill={primaryFill} /><path d="M15.26 12.08l1.24 1.24v-.07c0-.69.56-1.25 1.25-1.25h5.5c.3 0 .56.1.78.27l.19.2c.18.2.28.48.28.78v4c0 1.1-.8 2.03-1.85 2.22l1.18 1.18a3.75 3.75 0 002.17-3.4v-4c0-.68-.25-1.3-.66-1.78l-.02-.03c-.09-.1-.18-.2-.29-.28l-4.42-4.37c-.51-.5-1.2-.79-1.93-.79h-1.43a.75.75 0 000 1.5h1.43c.33 0 .64.13.88.36l2.67 2.64h-4.48c-1.1 0-2.05.65-2.49 1.58z" fill={primaryFill} /></svg>;
};

export default GlassesOff28Regular;