import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardLetter16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 1c-.65 0-1.2.42-1.41 1H4.5C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5h2.58a1.5 1.5 0 01.04-1.09l.81-1.9.08-.2 2.1-4.9a1.5 1.5 0 012.76 0l.13.3V3.5c0-.83-.67-1.5-1.5-1.5h-.59c-.2-.58-.76-1-1.41-1h-3zM6 2.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm5.03 4.8a.5.5 0 01.92 0l2.12 4.95a.5.5 0 01.05.1l.83 1.96a.5.5 0 11-.91.4L13.3 13H9.68l-.72 1.7a.5.5 0 01-.92-.4l.83-1.94a.5.5 0 01.05-.1l2.11-4.95zm1.85 4.7l-1.39-3.23L10.11 12h2.77z" fill={primaryFill} /></svg>;
};

export default ClipboardLetter16Filled;