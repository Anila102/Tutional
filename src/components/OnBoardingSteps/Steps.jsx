import Line from '../common/Line';
import StepsCircle from '../common/StepsCircle';
import { color } from '../../constants/color';

const Steps = ({ stepsData }) => {
    const circles = stepsData.map((step, index) => (
        <>
            <StepsCircle
                key={index}
                cx={(index * 100) + 100}
                cy="60"
                r="30"
                number={step.number}
                status={step.status}
            />
            <text
                x={(index * 100) + 100}
                y="130"
                fontSize="14"
                textAnchor="middle"
                fill={step.status ? color.primaryBlack : color.primaryDisabled}
                className={step.status ? 'fw-semibold':'' }
            >
                {step.label}
            </text>

        </>
    ));

    const lines = stepsData.slice(1).map((step, index) => (
        <Line
            key={index}
            x1={(index * 100) + 130}
            y1="60"
            x2={((index + 1) * 100) + 70}
            y2="60"
            prevStatus={stepsData[index].status}
            nextStatus={stepsData[index + 1].status}
        />
    ));
    return (
        <svg height="160" viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            {circles}
            {lines}
        </svg>
    );
};

export default Steps;
