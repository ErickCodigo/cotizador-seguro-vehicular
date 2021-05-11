import {ProgressBar as ProgressBarInterface} from "./models/ProgressBar";

export default function ProgressBar(props: ProgressBarInterface) {
    const {percentageProgress} = props;

    return (
        <div className="w-full h-full flex items-center" style={{ backgroundColor: "#E4E8F7" }}>
            <span
                className="inline-block w-full rounded-2xl"
                style={{width: `${percentageProgress}%`, backgroundColor: "#6F7DFF", height: "6px"}}/>
        </div>
    )
}
