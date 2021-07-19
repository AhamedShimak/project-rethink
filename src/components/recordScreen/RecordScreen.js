import * as React from "react";
import useScreenRecorder from "use-screen-recorder";

const RecordScreen = () => {
    const {
        blobUrl,
        pauseRecording,
        resetRecording,
        resumeRecording,
        startRecording,
        status,
        stopRecording,
      } = useScreenRecorder();
      return (
        <div>
          <video src={blobUrl} />
    
          <small>Status: {status}</small>
    
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <button onClick={pauseRecording}>Pause Recording</button>
          <button onClick={resumeRecording}>Resume Recording</button>
          <button onClick={resetRecording}>Reset Recording</button>
        </div>
      );
      };
  export default RecordScreen;