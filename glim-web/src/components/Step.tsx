import React, { useState } from "react";
import { ArcherElement } from "react-archer";
import "../styles/Step.css";

interface IStepProps {
    id: string;
    children_id: string[];
    premises: string[];
    goal: string;
}

function Step(props: IStepProps) {
    return (
        <ArcherElement
            id={props.id}
            relations={props.children_id.map((child_id) => {
                return {
                    targetId: child_id,
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                    style: { strokeColor: "blue", strokeWidth: 1 },
                };
            })}
        >
            <div className="step">
                <p>Premises: {props.premises}</p>
                <p>Goal: {props.goal}</p>
            </div>
        </ArcherElement>
    );
}

export default Step;
