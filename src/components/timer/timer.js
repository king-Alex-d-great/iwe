import React from "react";
import "./timer.css";

const Timer = (props) => {
  return (
    <section className="countdown">
      <main className="countdown_item">
        <aside className="countdown_item-content">
          <p className="countdown-item-amount" data-ng-bind="mminutes">
            {props.number}
          </p>
          <p className="countdown-item-unit">{props.unit}</p>
        </aside>
      </main>
      <div class="countdown-item-delimiter">{props.separate}</div>
    </section>
  );
};

export default Timer;
