import React, { useState } from "react";
import "../styles/Induction.css";

function Induction(props: { ind: string }) {
    return <div className="induction">{props.ind}</div>;
}

export default Induction;
