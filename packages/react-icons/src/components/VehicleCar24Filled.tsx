import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleCar24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.8 3c1.49 0 2.79 1.01 3.15 2.46L19.34 7h.91c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-.54l.21.83c.65.4 1.08 1.1 1.08 1.92v8.5c0 .96-.78 1.75-1.75 1.75h-1.5c-.97 0-1.75-.79-1.75-1.75V18.5H8v1.25c0 .96-.78 1.75-1.75 1.75h-1.5C3.78 21.5 3 20.7 3 19.75v-8.5c0-.81.43-1.53 1.08-1.92l.2-.83h-.53a.75.75 0 01-.74-.65L3 7.75c0-.38.28-.7.65-.74l.1-.01h.91l.39-1.54A3.25 3.25 0 018.2 3h7.6zM6.5 18.5h-2v1.25c0 .13.11.25.25.25h1.5c.14 0 .25-.12.25-.25V18.5zm13 0h-2v1.25c0 .13.11.25.25.25h1.5c.14 0 .25-.12.25-.25V18.5zM13.75 14h-3.6a.75.75 0 000 1.5h3.7a.75.75 0 00-.1-1.5zM17 12a1 1 0 100 2 1 1 0 000-2zM7 12a1 1 0 100 2 1 1 0 000-2zm8.8-7.5H8.2c-.8 0-1.5.55-1.7 1.33L5.71 9H18.3l-.8-3.18c-.19-.77-.89-1.32-1.7-1.32z" fill={primaryFill} /></svg>;
};

export default VehicleCar24Filled;