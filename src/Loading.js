import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
    <svg width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={{ background: 'none' }}>
    <circle cx="75" cy="50" fill="#363a3c" r="6.39718">
        <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.875s"></animate>
    </circle>
    <circle cx="67.678" cy="67.678" fill="#363a3c" r="4.8">
        <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.75s"></animate>
    </circle>
    <circle cx="50" cy="75" fill="#363a3c" r="4.8">
        <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.625s"></animate>
    </circle>
    <circle cx="32.322" cy="67.678" fill="#363a3c" r="4.8">
        <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5s"></animate>
    </circle>
    <circle cx="25" cy="50" fill="#363a3c" r="4.8">
        <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.375s"></animate>
    </circle>
    <circle cx="32.322" cy="32.322" fill="#363a3c" r="4.80282">
        <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.25s"></animate>
    </circle>
    <circle cx="50" cy="25" fill="#363a3c" r="6.40282">
        <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.125s"></animate>
    </circle>
    <circle cx="67.678" cy="32.322" fill="#363a3c" r="7.99718">
        <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="0s"></animate>
    </circle>
</svg>
    </div>
  );
};

export default Loading;
