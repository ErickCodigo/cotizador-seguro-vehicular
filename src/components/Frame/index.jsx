import React from "react";

export default function Frame() {
    return (
        <div className="frame">
            <span className="brand">Rimac</span>
            <div>
                <h1 className="title">Flujo HP</h1>
                <p className="paragraph">Mobile/Desktop</p>
            </div>

            <style jsx>{`
              .frame {
                background: var(--bg-color-default);
                min-height: 100vh;
                width: 100%;
                position: relative;
                font-family: 'Inter';
              }

              .brand {
                position: absolute;
                width: 154px;
                height: 28px;
                left: 72px;
                top: 100px;
                color: #FFFFFF;
                font-family: 'Inter';
                font-weight: bold;
                font-style: oblique;
                text-transform: uppercase;
              }

              .title {
                position: absolute;
                width: 656px;
                height: 68px;
                left: 72px;
                top: 247px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: normal;
                font-size: 52px;
                line-height: 68px;
                letter-spacing: -0.6px;
                color: #FFFFFF;
              }

              .paragraph {
                position: absolute;
                width: 656px;
                height: 40px;
                left: 72px;
                top: 354.66px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: normal;
                font-size: 28px;
                line-height: 40px;
                color: #FFFFFF;
              }
            `
            }</style>
        </div>
    )
}
