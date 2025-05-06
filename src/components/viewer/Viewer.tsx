import type { ViewerProps } from "../../types/props";

const Viewer = (props:ViewerProps) => {
    const count = props.count;
    return (
        <div>
            <div>현재 카운트:</div>
            <h1>{count}</h1>
        </div>
    )
}

export default Viewer;