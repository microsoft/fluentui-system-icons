import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CameraEdit20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.78 2.83c.26-.51.78-.83 1.34-.83h3.77c.57 0 1.08.32 1.34.83L13.8 4h1.7A2.5 2.5 0 0118 6.5v2.2c-.3-.26-.65-.45-1-.56V6.5c0-.83-.68-1.5-1.5-1.5h-2a.5.5 0 01-.45-.28l-.73-1.44A.5.5 0 0011.9 3H8.12a.5.5 0 00-.44.28l-.73 1.44A.5.5 0 016.5 5h-2C3.68 5 3 5.67 3 6.5v8c0 .83.68 1.5 1.5 1.5h3.72l-.16.65L8 17H4.5A2.5 2.5 0 012 14.5v-8A2.5 2.5 0 014.5 4h1.7l.58-1.17z" fill={primaryFill} /><path d="M13.89 9.06a4 4 0 10-4.82 4.83l.2-.22.67-.67A3 3 0 1113 9.94l.89-.88z" fill={primaryFill} /><path d="M14.8 9.55l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" fill={primaryFill} /></svg>;
};

export default CameraEdit20Regular;