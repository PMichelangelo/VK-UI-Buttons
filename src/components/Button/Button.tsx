import { Component, JSX, splitProps } from "solid-js";
import { mergeProps } from "solid-js";
import { className } from "solid-js/web";
import style from './Button.module.css'
type Size = "s" | "m" | "l"
type Variant = "primary"
    | "secondary"
    | "muted"
    | "tertiary"
    | "outline"
    | "commerce"
    | "overlay-primary"
    | "overlay-secondary"
    | "overlay-outline"
interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
    size?: Size;
    variant?: Variant;
    disabled?: boolean;
    before?: JSX.Element;
    after?: JSX.Element;
    streched?: boolean;
}

const ButtonPropsDefault: ButtonProps = {
    size: "m",
    variant: "primary",
    disabled: false,
    streched: false,
}


export const Button: Component<ButtonProps> = (params) => {
    //const props = mergeProps(ButtonPropsDefault, params)
    const [props, attrs] = splitProps(params, ["size", "variant", "disabled", "streched", "before", "after", "children"]);
    console.log(style)
    return (
        <button {...attrs} class={`${style[props.variant]} ${style[props.size]}}`}
            disabled={props.disabled} > {props.children}</button >
    )
}
//generic
//class={`${ style.primary } `}



