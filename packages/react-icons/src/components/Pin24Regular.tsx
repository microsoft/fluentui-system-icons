import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pin24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.55 2.66c.87-.8 2.2-.8 3.06-.02l.12.13 4.77 5.08a2.25 2.25 0 01-.39 3.4l-.14.1-4.9 2.8a.75.75 0 00-.27.27l-.05.1-1.8 4.5a.75.75 0 01-1.15.33l-.08-.07-3.23-3.24L4.54 21H3.47v-1.06l4.96-4.96-3.2-3.2a.75.75 0 01.15-1.18l.1-.05 4.49-1.8a.75.75 0 00.33-.25l.05-.09 2.76-5.16c.11-.22.26-.42.44-.59zm6.86 6.22l-4.77-5.09a.75.75 0 00-1.17.1l-.04.06-2.76 5.17c-.22.42-.56.75-.98.96l-.17.07-3.43 1.37 5.89 5.9 1.38-3.46c.17-.42.45-.77.81-1.02l.16-.1 4.9-2.8c.36-.2.48-.66.28-1.02l-.05-.08-.05-.06z" fill={primaryFill} /></svg>;
};

export default Pin24Regular;