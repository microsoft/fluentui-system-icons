import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextItalic24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 4h8.5a.75.75 0 01.1 1.5H15.06l-5.01 13h4.2c.39 0 .7.28.75.65v.1c0 .38-.27.7-.64.74l-.1.01h-9.5a.75.75 0 01-.75-.75c0-.38.28-.7.65-.74l.1-.01h3.68l.03-.07L13.45 5.5h-3.7a.75.75 0 01-.74-.65L9 4.75c0-.38.28-.7.65-.74l.1-.01h8.5-8.5z" fillRule="nonzero" /></svg>;
};

export default TextItalic24Regular;