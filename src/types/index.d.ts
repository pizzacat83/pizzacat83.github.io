declare module "*.css" {
    const value: { [key: string]: string };
    export default value;
}

declare module "*.scss" {
    const value: { [key: string]: string };
    export default value;
}

declare module "*.svg" {
    const value: string;
    export default value;
}
