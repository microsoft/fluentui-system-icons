import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoOff28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.3 2.3A3.25 3.25 0 002 8.75v10.5c0 1.8 1.46 3.25 3.25 3.25h10.5a3.25 3.25 0 003.17-2.52l5.8 5.8a.75.75 0 001.06-1.06L3.28 2.22zM17.5 18.56v.69c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75V8.75C3.5 7.78 4.28 7 5.25 7h.69L17.5 18.56z" fill={primaryFill} /><path d="M8.68 5.5l1.5 1.5h5.57c.97 0 1.75.78 1.75 1.75v5.57l1.5 1.5v-3.67l5-3.42v10.55l-4.9-3.36L24.18 21c.68.04 1.32-.49 1.32-1.25V8.25c0-1-1.12-1.6-1.95-1.03L19 10.32V8.76c0-1.8-1.45-3.25-3.25-3.25H8.68z" fill={primaryFill} /></svg>;
};

export default VideoOff28Regular;