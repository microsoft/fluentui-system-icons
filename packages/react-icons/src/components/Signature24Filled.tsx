import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Signature24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 16.5c1.3 0 1.82.58 2.2 1.87l.07.24c.19.66.3.86.52.95.25.1.43.09.7-.05l.15-.08a5 5 0 00.17-.12l.66-.45c.62-.4 1.17-.67 1.85-.84a.75.75 0 01.36 1.46c-.4.1-.76.25-1.14.49l-.3.19-.48.33c-.23.15-.4.26-.59.35a2.2 2.2 0 01-1.96.1c-.74-.3-1.04-.78-1.32-1.72l-.16-.54c-.18-.59-.3-.68-.73-.68-.3 0-.63.15-1.07.52l-.18.16-.92.88c-1.41 1.32-2.61 1.97-4.33 1.97-1.69 0-3.15-.26-4.37-.77l2.95-.8c.44.04.92.07 1.42.07 1.18 0 2.03-.42 3.08-1.37l.26-.24.53-.5c.24-.23.42-.4.6-.55.68-.57 1.3-.87 2.03-.87zm4.28-13.53a3.58 3.58 0 010 5.06l-.29.29c1.15 1.4 1.11 2.89.04 3.96l-2 2a.75.75 0 01-1.06-1.06l2-2c.48-.49.54-1.09-.04-1.84L9.06 18c-.28.28-.62.48-1 .58l-5.11 1.4a.75.75 0 01-.92-.93l1.4-5.11c.1-.38.3-.73.57-1l9.97-9.97a3.58 3.58 0 015.06 0z" fill={primaryFill} /></svg>;
};

export default Signature24Filled;