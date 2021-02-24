import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherThunderstorm20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.61 12.13c.2.18.22.5.04.7L10.62 14h1.88a.5.5 0 01.4.81l-2.46 3a.5.5 0 01-.78-.62l1.8-2.19H9.5a.5.5 0 01-.37-.83l1.78-2a.5.5 0 01.7-.04zM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0118 12.24 2.82 2.82 0 0115.13 15h-1.21a1.5 1.5 0 00-1.15-1.97l-.13-.02a1.5 1.5 0 00-2.56-1.4l-1.7 1.89c-.4.45-.47 1.02-.3 1.5h-1.2A2.82 2.82 0 014 12.24a2.82 2.82 0 012.87-2.77h.06C7.13 7.57 8.53 6 11 6zM8.4 3c1.45 0 2.72.83 3.34 2.04A6.05 6.05 0 0011 5C8.6 5 6.87 6.3 6.25 8.29l-.07.21-.04.19-.17.03a3.73 3.73 0 00-2.71 2.26 2.62 2.62 0 011.2-4.86h.22A3.77 3.77 0 018.39 3z" fill={primaryFill} /></svg>;
};

export default WeatherThunderstorm20Filled;