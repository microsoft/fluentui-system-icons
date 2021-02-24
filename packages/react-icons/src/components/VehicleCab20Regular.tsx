import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleCab20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 12a1 1 0 10-2 0 1 1 0 002 0zm8 0a1 1 0 10-2 0 1 1 0 002 0zM7 3h-.86a2.5 2.5 0 00-2.45 2.01l-.2.99h-.74a.75.75 0 000 1.5h.44l-.11.56A1.5 1.5 0 002 9.5v5c0 .83.67 1.5 1.5 1.5H4v1a1 1 0 102 0v-1h8v1a1 1 0 102 0v-1h.5c.83 0 1.5-.67 1.5-1.5v-5a1.5 1.5 0 00-1.08-1.44l-.11-.56h.54a.75.75 0 00.65-.75v-.1a.75.75 0 00-.75-.65h-.74l-.2-.99A2.5 2.5 0 0013.86 3H13V1.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V3zm1 0V2h4v1H8zM3.5 9h13c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-5c0-.28.22-.5.5-.5zm2.64-5h7.72c.72 0 1.33.5 1.47 1.2L15.9 8H4.11l.56-2.8C4.8 4.5 5.42 4 6.14 4z" fill={primaryFill} /></svg>;
};

export default VehicleCab20Regular;