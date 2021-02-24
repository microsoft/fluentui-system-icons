import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Whiteboard20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.33 3.46l.11.1.1.11c.64.76.61 1.9-.1 2.6l-3.6 3.63c-.22.22-.5.38-.8.47l-1.96.6a.84.84 0 01-1.04-1.08l.62-1.94c.1-.29.25-.55.47-.76l3.6-3.63a1.9 1.9 0 012.6-.1zm-1.88.8L11.84 7.9a.9.9 0 00-.23.37l-.53 1.66 1.67-.5a.9.9 0 00.38-.23l3.6-3.62a.93.93 0 00.06-1.24l-.06-.06-.06-.06a.9.9 0 00-1.22.06z" fill={primaryFill} /><path d="M12.9 4H5a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7.13l-1 1V13a2 2 0 01-2 2H5a2 2 0 01-2-2V9.23c.57-.49 1.34-1.11 2.07-1.54.41-.23.78-.38 1.07-.43.28-.05.42 0 .5.1.08.07.1.13.11.18.01.06 0 .15-.04.27-.1.28-.3.6-.6 1.02l-.1.13c-.25.35-.53.74-.73 1.14-.22.45-.4 1-.2 1.56.17.5.5.84.92 1 .4.17.85.15 1.24.08a6.5 6.5 0 002.02-.81.5.5 0 00-.52-.86c-.4.24-1.07.58-1.68.69-.3.05-.53.04-.7-.02-.13-.06-.26-.16-.34-.4-.06-.19-.03-.43.15-.8.16-.31.4-.64.66-1l.1-.13c.27-.39.58-.83.73-1.27.08-.23.12-.5.08-.76a1.32 1.32 0 00-.39-.73c-.4-.4-.91-.46-1.38-.38-.46.08-.95.3-1.4.56-.54.31-1.1.72-1.57 1.1V7c0-1.1.9-2 2-2h6.9l1-1z" fill={primaryFill} /></svg>;
};

export default Whiteboard20Regular;