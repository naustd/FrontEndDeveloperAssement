import "./styles.css";

import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 20 },
  header: { fontSize: 24, marginBottom: 12 },
  row: { flexDirection: "row", marginBottom: 6 },
  cell: { flex: 1, border: "1pt solid #000", padding: 4 },
});

const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Front End Developer Assessment</Text>
      <View style={styles.row}>
        <Text style={styles.cell}>BoreDM</Text>
        <Text style={styles.cell}>4909 N. 44th St, Phoenix, AZ</Text>
        <Text style={styles.cell}>85018</Text>
      </View>
      {/* replicate the rest of your layout here */}
    </Page>
  </Document>
);

function App() {
  return (
    <div style={{ padding: 20 }}>
      <PDFDownloadLink document={<MyDoc />} fileName="Result.pdf">
        {({ loading }) => (loading ? "Preparing your PDF…" : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
}
export default App;
