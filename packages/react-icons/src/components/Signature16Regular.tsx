import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Signature16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.02 1.77a2.44 2.44 0 013.46 3.46l-.27.27.08.09a2 2 0 010 2.82l-1.44 1.44a.5.5 0 01-.7-.7l1.44-1.44a1 1 0 000-1.42l-.09-.08-5.65 5.64a.5.5 0 01-.23.14l-4 1a.5.5 0 01-.6-.65L2.29 8.6a.5.5 0 01.12-.2l6.62-6.62zm2.75.7a1.44 1.44 0 00-2.04 0L3.19 9.03l-.93 2.77 2.98-.74 6.53-6.53c.57-.56.57-1.48 0-2.04z" fill={primaryFill} /><path d="M4.97 15c-1.24 0-2.21-.57-2.86-1.1l1.29-.33c.44.25.97.43 1.57.43.4 0 .82-.16 1.27-.46.44-.29.87-.68 1.31-1.1l.11-.1c.39-.36.79-.74 1.17-1 .4-.27.95-.53 1.52-.3.37.14.62.4.79.73.16.3.27.69.38 1.1.05.2.13.38.23.5.04.06.08.1.11.12l.04.01c.12 0 .33-.08.63-.29.19-.12.34-.25.5-.37l.3-.24a4.76 4.76 0 01.98-.56l.02-.01h.01l.16.47-.16-.47a.5.5 0 01.32.94l-.03.02-.15.06c-.13.07-.32.18-.55.35l-.22.17c-.18.15-.4.33-.62.47-.3.21-.74.46-1.19.46a1.2 1.2 0 01-.95-.52c-.2-.25-.33-.57-.4-.85a4.4 4.4 0 00-.3-.9c-.09-.16-.17-.23-.26-.26-.08-.03-.25-.04-.6.2-.31.21-.65.53-1.06.91l-.1.1c-.43.4-.92.85-1.45 1.2-.52.35-1.14.62-1.81.62z" fill={primaryFill} /></svg>;
};

export default Signature16Regular;