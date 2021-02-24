import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailUnread48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M30.67 11c-.36.77-.59 1.61-.65 2.5H11.25a2.75 2.75 0 00-2.75 2.75v.6l14.5 8.7 9.85-5.92c.81.6 1.76 1.04 2.8 1.24l-12 7.2c-.36.21-.79.24-1.16.07l-.13-.07L8.5 19.76v12.99c0 .97.78 1.75 1.75 1.75h25.5c.97 0 1.75-.78 1.75-1.75V20.98c.89-.06 1.73-.29 2.5-.65v12.42C40 35.1 38.1 37 35.75 37h-25.5A4.25 4.25 0 016 32.75V17.64v-1.39C6 13.35 8.35 11 11.25 11h19.42zM37 9a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
};

export default MailUnread48Regular;