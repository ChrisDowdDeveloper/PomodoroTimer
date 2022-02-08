import React from "react";

export default function BreakButton({ breakDuration, setBreakDuration, isTimerRunning }) {
  function increaseBreak() {
    setBreakDuration(breakDuration === 15 ? prevState => prevState + 0 : prevState => prevState + 1);
  }

  function decreaseBreak() {
    setBreakDuration(breakDuration === 1 ? prevState => prevState - 0 : prevState => prevState - 1);
  }


  if (breakDuration > 9) {
    return (
      <div>
        <div className="col">
          <div className="float-right">
            <div
              className="input-group input-group-lg mb-2"
            >
              <span
                className="input-group-text"
                data-testid="duration-break"
              >
                Break Duration: {breakDuration}:00
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={decreaseBreak}
                  disabled={isTimerRunning}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={increaseBreak}
                  disabled={isTimerRunning}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2"
            >
              <span
                className="input-group-text"
                data-testid="duration-break"
              >
                Break Duration: 0{breakDuration}:00
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={decreaseBreak}
                  disabled={isTimerRunning}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={increaseBreak}
                  disabled={isTimerRunning}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
