import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CameraAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zM13.92 2.5c.8 0 1.54.43 1.94 1.11L16.68 5h2.07C20.55 5 22 6.45 22 8.25v4.56a6.52 6.52 0 00-1.5-1.08V8.25c0-.97-.78-1.75-1.75-1.75h-2.5a.75.75 0 01-.65-.37l-1.03-1.76a.75.75 0 00-.65-.37h-3.8c-.22 0-.43.1-.57.27l-.07.09-1.1 1.78a.75.75 0 01-.63.36h-2.5c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75h6.06c.18.53.42 1.04.71 1.5H5.25A3.25 3.25 0 012 17.75v-9.5C2 6.45 3.46 5 5.25 5h2.08l.88-1.42a2.25 2.25 0 011.91-1.08h3.8zM12 8c2 0 3.7 1.3 4.28 3.11-.5.1-.98.25-1.43.45a3 3 0 10-3.51 3.87c-.16.46-.27.96-.31 1.46A4.5 4.5 0 0112 8z" fill={primaryFill} /></svg>;
};

export default CameraAdd24Regular;