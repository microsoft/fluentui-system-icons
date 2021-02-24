import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocationDismiss24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.84 4.56a8.7 8.7 0 0112.52 12.1l-.2.21c-.92.92-2.45 2.41-4.6 4.49-.87.84-2.25.84-3.12 0L6.59 17.6l-.75-.74a8.7 8.7 0 010-12.31zM17.1 5.62a7.2 7.2 0 10-10.2 10.2l1.7 1.66 2.88 2.8c.29.28.75.28 1.04 0l2.98-2.89 1.6-1.58a7.2 7.2 0 000-10.19zm-2.15 2l.08.07c.27.26.3.68.07.97l-.07.09-1.97 1.97 1.97 1.97c.27.26.3.68.07.97l-.07.09a.75.75 0 01-.98.07l-.08-.07L12 11.78l-1.97 1.97a.75.75 0 01-.98.07l-.08-.07a.75.75 0 01-.07-.98l.07-.08 1.97-1.97-1.97-1.97a.75.75 0 01-.07-.98l.07-.08a.75.75 0 01.98-.08l.08.08L12 9.66l1.97-1.97a.75.75 0 01.98-.08z" fill={primaryFill} /></svg>;
};

export default LocationDismiss24Regular;