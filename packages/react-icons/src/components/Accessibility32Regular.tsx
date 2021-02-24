import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Accessibility32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a4.5 4.5 0 00-4.37 5.59l-3.68-1.4a3.21 3.21 0 00-2.37 5.97L10 14.01v4.78l-2.32 6.96a3.21 3.21 0 006.06 2.13L16 21.83l2.24 6.05a3.21 3.21 0 006.06-2.13L22 18.8V14l4.37-1.8a3.22 3.22 0 00-2.38-6l-3.62 1.37A4.51 4.51 0 0016 2zm-2.5 4.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm11.2 1.57a1.22 1.22 0 01.9 2.27l-4.98 2.07a1 1 0 00-.62.92v5.62c0 .11.02.22.05.32l2.34 7.1a1.21 1.21 0 01-2.28.8l-2.38-6.4a1.86 1.86 0 00-3.49 0l-2.37 6.42a1.21 1.21 0 01-2.29-.8l2.37-7.12a1 1 0 00.05-.32v-5.6a1 1 0 00-.61-.93l-5.04-2.1a1.21 1.21 0 01.9-2.25l7.14 2.7a4.5 4.5 0 003.19 0l7.12-2.7z" fill={primaryFill} /></svg>;
};

export default Accessibility32Regular;