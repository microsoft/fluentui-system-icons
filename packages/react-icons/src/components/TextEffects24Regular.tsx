import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextEffects24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.07 18.11l.02.05c.1.3.14.6.14.9 0 .67-.26 1.31-.77 1.8a2.51 2.51 0 01-3.13.28l-.06-.04-.05-.05c-.37-.3-.63-.66-.8-1.05l-.02-.03-.99-2.34h-4.8l-.94 2.29c-.17.47-.47.9-.92 1.2-.42.3-.9.45-1.4.45-.57 0-1.24-.16-1.77-.69-.5-.5-.68-1.13-.68-1.72 0-.2.03-.44.06-.6l.03-.16L9.67 4.63V4.6c.2-.43.5-.86.96-1.16a2.38 2.38 0 011.57-.41 2.44 2.44 0 012.28 1.64l5.59 13.43zm-7-12.9a.95.95 0 00-.37-.5 1.03 1.03 0 00-.6-.18.9.9 0 00-.64.15c-.17.13-.3.3-.41.54l-5.61 13.6-.04.34c0 .28.08.5.24.66.16.17.4.25.7.25.2 0 .4-.06.55-.18.18-.12.3-.29.38-.5l1.34-3.26h6.8l1.36 3.23c.1.22.23.4.4.53.17.12.36.18.57.18.26 0 .49-.1.68-.29.2-.2.3-.43.3-.73 0-.14-.01-.28-.06-.41L13.07 5.22zm1.5 8.92L12 7.97l-2.56 6.16h5.13zm-2.88-1.5h.63l-.32-.76-.31.76z" fill={primaryFill} /></svg>;
};

export default TextEffects24Regular;