import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FoodEgg16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.7 8.22a.73.73 0 01.2-.37.38.38 0 01.11-.07.5.5 0 00.19-.99c-.4-.08-.76.13-.98.33-.24.23-.43.54-.5.9a.5.5 0 10.97.2z" fill={primaryFill} /><path d="M3.52 5.83c-1.79 1.42-1.83 3.84-1 5.46a3.61 3.61 0 003.28 2.07l.92-.02c.69-.03.82-.04 1.78.35 1.28.52 2.65.37 3.79-.35 1.03-.65 1.62-2.15 1.52-3.37-.06-.65 0-.91.07-1.21.05-.27.12-.56.12-1.18 0-1.32-.39-2.16-.78-2.84a5.32 5.32 0 00-2.01-2.13 4.54 4.54 0 00-4.33-.11A5.31 5.31 0 004.6 4.74c-.24.41-.48.61-1.08 1.09zM11.6 8.3a3.3 3.3 0 11-6.6 0 3.3 3.3 0 016.6 0z" fill={primaryFill} /></svg>;
};

export default FoodEgg16Filled;