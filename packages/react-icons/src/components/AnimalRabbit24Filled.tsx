import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AnimalRabbit24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.53 5.44l5.43 5.43a3.58 3.58 0 01-3.35 6V17a2 2 0 01-2 2h-2.1v-.75l-.01-.17a2.75 2.75 0 00-2.57-2.58H9.66a.75.75 0 000 1.5H10.87c.6.07 1.06.53 1.12 1.12V19H7a2 2 0 01-2-2v-2.5c0-.2.02-.39.04-.57a2.5 2.5 0 111.87-3.12A4.46 4.46 0 019.5 10h3.6c.6 0 1.18.11 1.71.33.16-.28.36-.54.6-.78l-2-2a1.5 1.5 0 012.11-2.1z" fill={primaryFill} /></svg>;
};

export default AnimalRabbit24Filled;