import { FluentIconsProps } from "./FluentIconsProps.types";
import { makeStyles, mergeClasses } from "@griffel/react";
import { useIconContext } from "../contexts";

const useFlipStyles = makeStyles({
    flipped: {
      transform: 'scaleX(-1)'
    }
});

export const useAutoFlippingIconStyles = (state: FluentIconsProps) => {
    const iconContext = useIconContext();
    const styles = useFlipStyles();
    state.className = mergeClasses(iconContext.textDirection === 'rtl' && styles.flipped, state.className)
}