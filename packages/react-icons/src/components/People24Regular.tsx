import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const People24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 14h9a2 2 0 012 1.85v1.65C15 21 11.28 22 8.5 22c-2.72 0-6.34-.96-6.5-4.27V16a2 2 0 011.85-2H4zm11.22 0H20a2 2 0 012 1.85V17c0 3.06-2.86 4-5 4-.68 0-1.43-.1-2.14-.32.34-.39.6-.83.8-1.33.54.13 1.05.15 1.34.15h.27c.98-.05 3.08-.37 3.22-2.3l.01-.2v-1a.5.5 0 00-.41-.5h-4.14c-.08-.5-.3-.96-.6-1.34l-.13-.16H20h-4.78zM4 15.5h-.1a.5.5 0 00-.25.14.5.5 0 00-.14.26l-.01.1v1.5c0 1 .45 1.72 1.42 2.24.82.45 2 .72 3.26.76h.64a7.64 7.64 0 003.26-.76c.9-.49 1.36-1.14 1.41-2.06l.01-.18V16a.5.5 0 00-.41-.5H4zM8.5 3a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm9 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm-9-.5a3 3 0 100 6 3 3 0 000-6zm9 2a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /></svg>;
};

export default People24Regular;