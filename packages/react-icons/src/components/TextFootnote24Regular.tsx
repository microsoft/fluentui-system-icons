import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextFootnote24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 7.26c-.2.18-.4.34-.6.48a.75.75 0 01-.84-1.25 3.55 3.55 0 001.46-1.9.75.75 0 011.48.16v6.5a.75.75 0 01-1.5 0V7.26z" fill={primaryFill} /><path d="M12.22 17.76a.87.87 0 01-.22-.61V7.9c0-.25.07-.47.24-.64a.84.84 0 01.63-.27c.24 0 .46.09.62.26.17.18.25.4.25.65v2.84c.18-.2.39-.36.62-.5.46-.26.97-.39 1.52-.39 1 0 1.83.38 2.46 1.14.61.75.91 1.73.91 2.93 0 1.2-.3 2.19-.91 2.94A3.06 3.06 0 0115.86 18a2.86 2.86 0 01-2.19-.9v.05a.84.84 0 01-.84.85.8.8 0 01-.6-.24zm4.75-1.98c.34-.44.52-1.04.52-1.85 0-.8-.18-1.4-.52-1.84a1.6 1.6 0 00-1.35-.64c-.55 0-1 .21-1.35.66a2.84 2.84 0 00-.54 1.82c0 .78.19 1.38.54 1.83.36.44.8.65 1.35.65a1.6 1.6 0 001.35-.63z" fill={primaryFill} /><path d="M2 17.19c0 .23.1.43.27.59.19.15.4.22.65.22.2 0 .39-.05.55-.17.15-.12.26-.3.33-.49l.88-2.39h3.88l.89 2.4c.07.19.18.36.33.48a.9.9 0 00.55.17c.24 0 .46-.07.64-.22a.76.76 0 00.28-.6c0-.13-.04-.28-.1-.44L7.71 7.77c-.1-.23-.23-.43-.41-.57-.2-.14-.42-.2-.66-.2-.25 0-.49.06-.68.2-.2.14-.33.34-.43.58L2.1 16.74c-.06.16-.1.3-.1.45zm4.63-7.6L8 13.35H5.25l1.38-3.78z" fill={primaryFill} /></svg>;
};

export default TextFootnote24Regular;