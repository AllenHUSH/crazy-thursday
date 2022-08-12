import { LitElement } from 'lit';
export default class CrazyModel extends LitElement {
    static styles: import("lit").CSSResult;
    content: string;
    isCopyed: boolean;
    onCancel(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
