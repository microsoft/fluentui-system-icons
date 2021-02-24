import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LauncherSettings24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.01 2.25c.73 0 1.47.1 2.18.25.31.07.55.33.58.65l.17 1.53a1.38 1.38 0 001.93 1.11l1.4-.61c.3-.13.63-.06.85.17a9.8 9.8 0 012.2 3.8c.1.3 0 .63-.27.82l-1.24.92a1.38 1.38 0 000 2.22l1.25.92c.25.19.36.52.27.82a9.8 9.8 0 01-2.2 3.8.75.75 0 01-.85.17l-1.41-.62a1.38 1.38 0 00-1.93 1.12l-.17 1.52a.75.75 0 01-.57.65 9.52 9.52 0 01-4.4 0 .75.75 0 01-.58-.65l-.16-1.52a1.38 1.38 0 00-1.93-1.11l-1.4.62a.75.75 0 01-.85-.18 9.8 9.8 0 01-2.2-3.8c-.1-.3 0-.63.26-.82l1.25-.92a1.38 1.38 0 000-2.22l-1.25-.92a.75.75 0 01-.27-.82 9.8 9.8 0 012.2-3.8c.22-.23.56-.3.86-.17l1.4.62a1.39 1.39 0 001.93-1.12l.17-1.53a.75.75 0 01.58-.65c.72-.16 1.45-.24 2.2-.25zM13.58 8H10.3l3.1 4-2.76 3.51a.3.3 0 00.23.49h2.7a.3.3 0 00.24-.12l2.78-3.57a.5.5 0 000-.62l-2.78-3.57a.3.3 0 00-.23-.12zm-3.9.8L7.4 11.7a.5.5 0 00-.05.53l.05.08 2 2.55.05.05a.3.3 0 00.38 0l.05-.04 1.33-1.68a.3.3 0 00.04-.3l-.04-.08-.64-.81.79-1-1.7-2.2z" fill={primaryFill} /></svg>;
};

export default LauncherSettings24Filled;