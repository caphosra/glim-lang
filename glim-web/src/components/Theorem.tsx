import React, { useState } from 'react';
import { ArcherContainer } from 'react-archer';
import Step from './Step';

function Theorem() {
    return (
        <ArcherContainer strokeColor="red">
            <table><tbody>
                <tr>
                    <td><Step id="root" children_id={["child1", "child2"]} premises={[]} goal="A /\ B"/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><Step id="child1" children_id={[]} premises={[]} goal="A"/></td>
                    <td><Step id="child2" children_id={[]} premises={[]} goal="B"/></td>
                    <td></td>
                </tr>
            </tbody></table>
        </ArcherContainer>
    );
}

export default Theorem;
