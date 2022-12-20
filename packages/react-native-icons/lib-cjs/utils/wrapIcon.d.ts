/// <reference types="react" />
import { FluentIconsProps } from "./FluentIconsProps.types";
declare const wrapIcon: (Icon: (iconProps: FluentIconsProps) => JSX.Element, displayName?: string | undefined) => {
    (props: FluentIconsProps): JSX.Element;
    displayName: string | undefined;
};
export default wrapIcon;
