import React from "react";
import { tickets } from "./data/data"
import "./RepeatedSubject.css"


function RepeatedSubject () {
    const subjectCounts = {};

    // نحسب عدد مرات كل موضوع
    tickets.forEach(ticket => {
    if (subjectCounts[ticket.subject]) {
        subjectCounts[ticket.subject] += 1;
    } else {
        subjectCounts[ticket.subject] = 1;
    }
    });

    // نجيب الموضوع الأكثر تكرارًا
    let mostCommonSubject = "";
    let maxCount = 0;

    for (const [subject, count] of Object.entries(subjectCounts)) {
    if (count > maxCount) {
        maxCount = count;
        mostCommonSubject = subject;
    }
    }

    console.log("أعلى طلب متكرر:", mostCommonSubject, "عدد مرات الظهور:", maxCount);




    return (
        <>
        <div className="repeated-subject-card" style={{padding: "20px", margin: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "800px"}}>
      <h3>أعلى طلب متكرر</h3>
      <p>الموضوع: <strong>{mostCommonSubject}</strong></p>
      <p>عدد مرات الظهور: <strong>{maxCount}</strong></p>
    </div>
        </>
    );
}

export default RepeatedSubject
