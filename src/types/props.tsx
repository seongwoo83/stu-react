interface ViewerProps{
    count: number;
}
interface ControllerProps{
    onClickButton : (value: number)=>void;
}

export type { ViewerProps, ControllerProps };