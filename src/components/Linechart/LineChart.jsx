
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentData = [
        { id: 1, name: 'Student 1', performance: 85 },
        { id: 2, name: 'Student 2', performance: 90 },
        { id: 3, name: 'Student 3', performance: 78 },
        { id: 4, name: 'Student 4', performance: 82 },
        { id: 5, name: 'Student 5', performance: 88 },
        { id: 6, name: 'Student 6', performance: 75 },
        { id: 7, name: 'Student 7', performance: 95 },
        { id: 8, name: 'Student 8', performance: 80 },
        { id: 9, name: 'Student 9', performance: 87 }
    ]
    return (
        <div className='bg-white flex justify-center'>
            <LChart width={500} height={500} data={studentData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'performance'} stroke='Blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;