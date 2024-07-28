import { color } from "../../constants/color";

const StepsCircle = ({ cx, cy, r, number, status }) => {
    return (
        <>
            <circle className="steps_circle" cx={cx} cy={cy} r={r} fill={status ? color.primaryBlue : color.primaryWhite} />
            <text x={cx}
                y={cy}
                fontSize="20"
                textAnchor="middle"
                fill={status ? color.primaryWhite : color.primaryDisabled}
                dominantBaseline="central"
                className="fw-semibold"
                
            >
                {number}
            </text>
        </>
    )
};

export default StepsCircle