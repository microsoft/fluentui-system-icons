import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlashOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.15 2.3l.07-.08a.75.75 0 01.98-.08l.08.08 18.5 18.5a.75.75 0 01-.98 1.14l-.08-.07-6.6-6.61-6.32 6.59c-.51.53-1.38.09-1.3-.6l.03-.1L8.29 14H5.75a.75.75 0 01-.74-.86l.02-.1 1.54-5.4-4.35-4.36a.75.75 0 01-.07-.98l.07-.08-.07.08zm5.64 6.55L6.74 12.5h2.51c.46 0 .8.4.75.84l-.02.1-1.31 5.26 4.39-4.58-5.27-5.27zM8.75 2h7c.48 0 .82.44.74.89l-.03.1L14.8 8h4.46c.62 0 .96.7.61 1.19l-.07.08L16.2 13l-1.06-1.06L17.5 9.5h-3.74a.75.75 0 01-.74-.89l.03-.1L14.7 3.5H9.3l-.58 2.05-1.21-1.22.5-1.79c.1-.28.33-.49.62-.53L8.75 2z" fill={primaryFill} /></svg>;
};

export default FlashOff24Regular;