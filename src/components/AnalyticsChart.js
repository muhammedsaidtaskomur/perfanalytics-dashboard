import { Line } from "react-chartjs-2";
import "./AnalyticsChart.css";

export default function AnalyticsChart({data}) {
    const dataSet = {
        labels: data.timeLine,
        datasets: [
          {
            label: "FCPTime",
            data: data.FCPTimes,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192)",
            tension: 0.5,
          },
          {
            label: "TTFBTime",
            data: data.TTFBTimes,
            fill: true,
            borderColor: "rgb(67, 160, 71)",
            backgroundColor: "rgb(67, 160, 71, 0.2)",
            tension: 0.5,
          },
          {
            label: "DOM Load Time",
            data: data.domLoadTimes,
            fill: true,
            borderColor: "rgb(94, 53, 177)",
            backgroundColor: "rgba(94, 53, 177,0.2)",
            tension: 0.5,
          },
          {
            label: "Window LoadTime",
            data: data.windowLoadTime,
            fill: true,
            borderColor: "rgb(216, 27, 96)",
            backgroundColor: "rgba(216, 27, 96,0.2)",
            tension: 0.5,
          }
        ]
      };
    return (
        <div className="LineChart">
          <Line data={dataSet} />
        </div>
      );
  }
  