import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardLetter16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v3.72l-.13-.3a1.5 1.5 0 00-.87-.83V3.5a.5.5 0 00-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1H4.5a.5.5 0 00-.5.5v10c0 .28.22.5.5.5h2.58a1.5 1.5 0 000 1H4.5A1.5 1.5 0 013 13.5v-10C3 2.67 3.67 2 4.5 2h.59zM6.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M11.95 7.3a.5.5 0 00-.92 0l-2.11 4.95a.5.5 0 00-.05.1l-.83 1.96a.5.5 0 10.92.4L9.68 13h3.63l.73 1.7a.5.5 0 00.91-.4l-.83-1.94a.5.5 0 00-.05-.1L11.95 7.3zm.93 4.7H10.1l1.38-3.23L12.88 12z" fill={primaryFill} /></svg>;
};

export default ClipboardLetter16Regular;