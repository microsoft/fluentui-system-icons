import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenDismiss24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 9.97v10.28c0 .97-.79 1.75-1.75 1.75H13c-.09 0-.17 0-.26-.02V11.8A6.47 6.47 0 0022 9.97zM10.02 6a6.63 6.63 0 001.22 4.32v11.66L11 22H3.75C2.78 22 2 21.2 2 20.25V7.75C2 6.78 2.78 6 3.75 6h6.27zm-.78 11.5h-1.6a.75.75 0 000 1.5H9.34a.75.75 0 000-1.5h-.1zm7 0h-1.6a.75.75 0 000 1.5H16.34a.75.75 0 000-1.5h-.1zM16.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-2.4 2.97l-.08.05-.05.07a.5.5 0 000 .57l.05.07L15.8 6.5l-1.76 1.77-.06.07a.5.5 0 000 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 000-.57l-.05-.07L17.2 6.5l1.77-1.77.06-.07a.5.5 0 000-.57l-.06-.07-.07-.05a.5.5 0 00-.57 0l-.07.05L16.5 5.8l-1.77-1.77-.07-.05a.5.5 0 00-.5-.05l-.07.05z" fill={primaryFill} /></svg>;
};

export default DualScreenDismiss24Filled;