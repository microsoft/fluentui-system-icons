import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Color20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.77 3.17a7.82 7.82 0 017.93-.18c3.97 2.04 5.5 6.16 4.18 10.44a7.46 7.46 0 01-2.37 3.59 4.32 4.32 0 01-4.2.8 3.84 3.84 0 01-2.2-1.68c-.41-.7-.53-1.47-.58-2.14l-.04-.58-.02-.37c-.02-.3-.05-.55-.1-.76a1.16 1.16 0 00-.2-.47.75.75 0 00-.4-.24 1.86 1.86 0 00-1.15-.04c-.25.08-.45.2-.69.35l-.2.12c-.31.18-.72.4-1.23.37a2.91 2.91 0 01-1.66-.77 2.63 2.63 0 01-.94-2.12c0-.79.25-1.63.62-2.43a9.6 9.6 0 013.25-3.9zm3.98 3.58a1 1 0 100-2 1 1 0 000 2zm3 1a1 1 0 100-2 1 1 0 000 2zM15.5 9a1 1 0 10-2 0 1 1 0 002 0zm-1 4a1 1 0 100-2 1 1 0 000 2zm-1 1a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
};

export default Color20Filled;