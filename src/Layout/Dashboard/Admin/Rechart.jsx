import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import useGetAllDonar from "../../../hook/useGetAllDonar";
const Rechart = () => {
    const [allDonar, isLoading] = useGetAllDonar();
    const aPlus = allDonar?.filter(donar=>donar.bloodGroup === "A+");
    const aMinus = allDonar?.filter(donar=>donar.bloodGroup === "A-");
    const abPlus = allDonar?.filter(donar=>donar.bloodGroup === "AB+");
    const abMinus = allDonar?.filter(donar=>donar.bloodGroup === "AB-");
    const oPlus = allDonar?.filter(donar=>donar.bloodGroup === "O+");
    const oMinus = allDonar?.filter(donar=>donar.bloodGroup === "O-");
    const bPlus = allDonar?.filter(donar=>donar.bloodGroup === "B+");
    const bMinus = allDonar?.filter(donar=>donar.bloodGroup === "B-");
  const data = [
    {
      name: "A+",
      user: aPlus.length,
    },
    {
      name: "A-",
      user: aMinus.length,
    },
    {
      name: "AB+",
      user: abPlus.length,
    },
    {
      name: "AB-",
      user: abMinus.length,
    },
    {
      name: "B+",
      user: bPlus.length,
    },
    {
      name: "B-",
      user: bMinus.length,
    },
    {
      name: "O+",
      user: oPlus.length,
    },
    {
      name: "O-",
      user: oMinus.length,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
      Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis className="font-semibold" dataKey="name" />
        <YAxis />
        <Bar
          dataKey="user"
          fill="red"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Rechart;
