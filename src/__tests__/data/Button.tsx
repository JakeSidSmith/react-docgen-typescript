import * as React from 'react';
import { HTMLProps } from 'react';

/**
 * Button properties.
 */
export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    /** prop1 description */
    prop1?: string;
    /** prop2 description */
    prop2: number;
    /**
     * prop3 description
     */
    prop3: () => void;
    /** prop4 description */
    prop4: 'option1' | 'option2' | "option3";
    // Not a doc comment
    prop5: null;
}

/**
 * Button description
 */
export class Button extends React.Component<IButtonProps, {}> {
    public static defaultProps: Partial<IButtonProps> = {
        prop1: 'prop1'
    };

    render() {
        const {prop1, ...rest} = this.props;
        return <button {...rest}>{prop1}</button>;
    }
}

export default Button;
