import React, { useEffect } from "react";
// import { saveAs } from "file-saver";
import { pdf, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ResultDoc from "./report/ResultDoc";

export default function App() {
  // const fileName = "Result.pdf";

  // // Auto-generate and save Result.pdf on first load
  // useEffect(() => {
  //   const generate = async () => {
  //     const blob = await pdf(<ResultDoc />).toBlob();
  //     // saveAs(blob, fileName);
  //   };
  //   generate();
  // }, []);

  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, Arial",
        padding: 24,
        lineHeight: 1.4,
      }}
    >
      <h1 style={{ marginTop: 0 }}>Front End Developer Assessment</h1>

      {/* <PDFDownloadLink document={<ResultDoc />} fileName={fileName}>
        {({ loading }) => (
          <button
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid #222",
              cursor: "pointer",
            }}
          >
            {loading ? "Rendering…" : "Download Result.pdf"}
          </button>
        )}
      </PDFDownloadLink> */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "90%",
            border: "1px solid #ccc",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <PDFViewer width="100%" height="100%">
            <ResultDoc />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
