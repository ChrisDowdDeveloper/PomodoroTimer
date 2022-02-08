import React from "react";

export default function FocusButton({ focusDuration, setFocusDuration, isTimerRunning }) {

  function decreaseFocus() {
    setFocusDuration(focusDuration === 5 ? prevState => prevState - 0 : prevState => prevState - 5);
  }

  function increaseFocus() {
    setFocusDuration(focusDuration === 60 ? prevState => prevState + 0 : prevState => prevState + 5);
  }

  if (focusDuration > 9) {
    return (
      <div>
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span
              className="input-group-text"
              data-testid="duration-focus"
            >
              Focus Duration: {focusDuration}:00
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={decreaseFocus}
                disabled={isTimerRunning}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={increaseFocus}
                disabled={isTimerRunning}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="col">
          <div
            className="input-group input-group-lg mb-2"
          >
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: 0{focusDuration}:00
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={decreaseFocus}
                disabled={isTimerRunning}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={increaseFocus}
                disabled={isTimerRunning}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
