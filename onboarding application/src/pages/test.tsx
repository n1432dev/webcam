import React, { useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

export const OldRecordPractice: React.FC = () => {
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
        clearBlobUrl
    } = useReactMediaRecorder({ video: true });

    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        if (mediaBlobUrl) {
            setIsSaved(true);
        }
    };

    return (
        <div className="container">
            <div className="row">
                
                {/* Left Section - Control Buttons */}
                <div className="col-md-6 btn_con" style={{ padding: '20px' }}>
                    <button className='camera-btns-contrl' onClick={startRecording} disabled={status === "recording"}>
                        Start Recording
                    </button>
                    <button className='camera-btns-contrl' onClick={stopRecording} disabled={status !== "recording"}>
                        Stop
                    </button>
                    {mediaBlobUrl && <button className='camera-btns-contrl' onClick={handleSave}>Save</button>}
                    {isSaved && <button className='camera-btns-contrl'><a href={mediaBlobUrl} download="recorded-video.webm">Download</a> </button>}
                    {isSaved && <button  className='camera-btns-contrl' onClick={clearBlobUrl}>Clear</button>}
                </div>

                {/* Right Section - Video Frame */}
                <div className="col-md-6" style={{ padding: '20px' }}>
                    <p>{status === "recording" ?(<>
                    <div className="col-md-6">
                        <div className="col-md-12 camera-width-con">
                            <img src="/static/media/defult-Video.776ae5b0b6022fe9c99c.png" alt="
                            " style={{display: "block"}}/>
 
                                
                                </div></div></>):(<></>)}</p>
                    {mediaBlobUrl && <video src={mediaBlobUrl} controls autoPlay style={{ width: '100%' }} />}
                </div>
            </div>
        </div>
    );
}
