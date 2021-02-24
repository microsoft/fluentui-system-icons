import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoSwitch24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.75A2.75 2.75 0 016.75 3h6.5A2.75 2.75 0 0116 5.75v.54l2-1.52c.81-.63 2-.04 2 1v6.47a1.25 1.25 0 01-2 1l-2-1.53v.54A2.75 2.75 0 0113.25 15h-6.5A2.75 2.75 0 014 12.25v-6.5zM6.75 4.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.7 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25h-6.5zM16 9.82l2.5 1.91V6.27L16 8.17v1.65z" fill={primaryFill} /><path d="M18.36 16.14c-.95-.23-2.13-.42-3.45-.52.61-.3 1.13-.78 1.5-1.35.85.1 1.63.24 2.3.41.88.21 1.63.47 2.19.8.5.28 1.1.77 1.1 1.52 0 .47-.25.84-.52 1.1-.27.26-.63.47-1.01.65-.79.35-1.86.63-3.1.84a.75.75 0 01-.24-1.48c1.17-.2 2.1-.45 2.72-.73.3-.14.5-.27.6-.37l.01-.01a1.43 1.43 0 00-.31-.23 7.15 7.15 0 00-1.79-.63zm2.15.8z" fill={primaryFill} /><path d="M3.1 15.47c.31-.17.68-.33 1.1-.48.57.55 1.33.9 2.16.99-.25.05-.5.1-.72.16-.81.2-1.4.42-1.79.63-.17.1-.27.18-.31.23.04.05.14.12.31.23.38.21.98.44 1.79.63 1.58.39 3.81.64 6.3.64l-.72-.72a.75.75 0 111.06-1.06l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 01-1.06-1.06l.72-.72c-2.57 0-4.92-.26-6.66-.68a8.56 8.56 0 01-2.18-.8C2.6 18.25 2 17.76 2 17s.6-1.24 1.1-1.53z" fill={primaryFill} /></svg>;
};

export default VideoSwitch24Regular;