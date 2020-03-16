declare module "*.css" {
    const value: { [key: string]: string };
    export default value;
}

declare module "*.scss" {
    const value: { [key: string]: string };
    export default value;
}

declare module "*.inline.svg" {
    const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default value;
}

declare module "*.svg" {
    const value: string;
    export default value;
}
