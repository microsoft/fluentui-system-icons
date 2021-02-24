import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookNumber24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.02 7.57l-.22.91H9.63a.75.75 0 00-.65.75v.1c.06.37.37.65.75.65h.7l-.38 1.59h-.9a.75.75 0 00-.65.75v.1c.06.36.37.65.75.65h.43l-.12.5-.02.1c-.04.37.2.72.57.81l.1.02c.36.04.71-.2.8-.57l.21-.86h1.54l-.12.51-.01.1c-.04.37.2.72.58.8l.1.02c.37.03.71-.21.8-.58l.2-.85h.93l.1-.01a.75.75 0 00.65-.74v-.1a.75.75 0 00-.75-.65h-.6l.37-1.59h.82a.75.75 0 00.65-.75v-.1a.75.75 0 00-.75-.65h-.38l.13-.56.02-.1a.75.75 0 00-.58-.8l-.1-.02a.75.75 0 00-.8.58l-.2.9h-1.48l.14-.55.02-.1a.75.75 0 00-1.48-.26zm.96 2.41h1.49l-.36 1.59h-1.52l.39-1.59z" fill={primaryFill} /><path d="M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5zM19 18H5.5V4.5a1 1 0 011-1H18a1 1 0 011 1V18z" fill={primaryFill} /></svg>;
};

export default BookNumber24Regular;