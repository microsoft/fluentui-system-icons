import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallForward24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.98 2.05l.22.05.82.2a2.75 2.75 0 012.1 2.95L12.95 7a2.75 2.75 0 01-2.12 2.4l-1.69.4a.25.25 0 00-.15.1c-.2.33-.32 1.04-.32 2.1 0 .79.06 1.39.19 1.79.04.14.08.24.11.3l.05.09.04.01 1.77.41c1.15.27 2 1.23 2.12 2.4l.17 1.75a2.75 2.75 0 01-2.1 2.95l-.8.2a3.75 3.75 0 01-3.66-1.13C4.84 18.87 4 15.94 4 12c0-3.94.84-6.87 2.57-8.77a3.75 3.75 0 013.41-1.18zm-2.3 2.19C6.24 5.82 5.5 8.4 5.5 12c0 3.6.74 6.18 2.17 7.76.55.6 1.4.87 2.2.68l.8-.2c.62-.14 1.03-.72.96-1.34l-.18-1.74a1.25 1.25 0 00-.96-1.1l-1.82-.42-.13-.04c-1-.38-1.37-1.6-1.37-3.6 0-1.32.16-2.26.54-2.88.24-.4.64-.68 1.1-.79l1.68-.39c.52-.12.91-.56.96-1.1l.18-1.75c.07-.62-.34-1.2-.96-1.34l-.81-.19-.17-.03c-.74-.12-1.5.15-2.01.7zm7.97 3.06l.07-.08a.75.75 0 01.98-.07l.08.07 4 4c.26.26.29.68.07.97l-.07.09-4 4a.75.75 0 01-1.13-.97l.07-.09 2.71-2.71H12a.75.75 0 01-.74-.65v-.1c0-.38.27-.7.64-.75h6.54l-2.72-2.73a.75.75 0 01-.07-.98l.07-.08-.07.08z" fill={primaryFill} /></svg>;
};

export default CallForward24Regular;