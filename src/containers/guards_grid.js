import React from "react";
import Guards from "../components/guards";
import './styles/guards-grid.css';

const GuardsGrid = ({guards}) => {
    return (
        <div className="guards-grid">
            {guards.map((guard) => (
                <Guards key={guard.id} guard={guard} />
            ))
            }
        </div>
    );
}
export default GuardsGrid;