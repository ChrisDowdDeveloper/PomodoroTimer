import React from "react";


export default function Stop({isTimerRunning, setIsTimerRunning, session, setSession, sound}) {
    
    function stopTimer() {
        setIsTimerRunning(false)
        setSession(null)
    }
    
    return (
        <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="stop"
              title="Stop the session"
              disabled={!isTimerRunning}
              onClick={stopTimer}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
)}
