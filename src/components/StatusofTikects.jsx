import React from "react";
import "./TikectsStatus.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";


function StatusofTikects({tikectss}) {

    const total = tikectss.length; //بحسب مجموع التذاكر
    const completed = tikectss.filter((tikect) => tikect.status ==="مفتوحة").length; //بناءً على شرط الحالة، يجيب لي طول الاراي اللي بس عندها تذاكر مفتوحة
    const pending = tikectss.filter((tikect) => tikect.status ==="قيد المعالجة").length;
    const closed = tikectss.filter((tikect) => tikect.status ==="مغلقة").length;

    const data = {
        labels: ["مفتوحة", "قيد المعالجة", "مغلقة"],
        datasets: [
          {
            data: [completed, pending, closed],
            backgroundColor: ["#43e97b", "#f9d423", "#ff6b6b"],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div className="tikect-status-chart">
                    
                {/* <h3>نظرة عامة</h3> */}
                <Doughnut data={data} />

    
            {/* 
            <div className="status-item">
                <span>مفتوحة</span>
                <span>{completed}</span>
                <div className="progress-bar">
                    <div className="progress-fill green" style={{width : `${(completed / total) * 100}%`}}></div>
                </div>
            </div>

            <div className="status-item">
                <span>قيد المعالجة</span>
                <span>{pending}</span>
                <div className="progress-bar">
                    <div className="progress-fill yellow" style={{width : `${(pending / total) * 100}%`}}></div>
                </div>
            </div>


            <div className="status-item">
                <span>مغلقة</span>
                <span>{closed}</span>
                <div className="progress-bar">
                    <div className="progress-fill red" style={{width : `${(closed / total) * 100}%`}}></div>
                </div>
            </div> */}
       </div>

    );



}

export default StatusofTikects