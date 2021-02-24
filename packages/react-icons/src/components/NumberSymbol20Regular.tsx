import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NumberSymbol20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.99 2.6a.5.5 0 00-.98-.2L7.09 7H3.5a.5.5 0 100 1h3.39l-.8 4H2.5a.5.5 0 000 1h3.4L5 17.4a.5.5 0 10.98.2l.92-4.6h5l-.9 4.4a.5.5 0 00.98.2l.95-4.6h3.56a.5.5 0 000-1h-3.36l.82-4h3.54a.5.5 0 100-1h-3.33l.9-4.39a.5.5 0 10-.98-.2l-.95 4.6H8.11l.88-4.41zM7.91 8h5.03l-.82 4h-5l.79-4z" fill={primaryFill} /></svg>;
};

export default NumberSymbol20Regular;