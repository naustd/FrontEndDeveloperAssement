import React from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 9,
    color: "#000",
    fontFamily: "Helvetica",
  },

  // ===== HEADER =====
  headerContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    height: 70,
  },
  headerLeft: {
    width: "25%",
    borderRightWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  headerCenter: {
    width: "55%",
    borderRightWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  headerRight: {
    width: "20%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  companyName: {
    fontSize: 11,
    fontWeight: "bold",
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  projectSubtitle: {
    fontSize: 9,
    marginTop: 2,
  },
  codeLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pageInfo: {
    fontSize: 8,
  },

  // ===== TABLE =====
  tableContainer: {
    flexDirection: "row",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000",
    flexWrap: "wrap",
    width: "100%",
  },

  leftTable: {
    width: "75%", // 75% for main table
  },
  rightRemarks: {
    width: "25%", // 25% for remarks
    borderLeftWidth: 1,
    borderColor: "#000",
    padding: 5,
  },

  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#000",
    width: "100%",
  },
  label: {
    width: "25%",
    fontWeight: "bold",
    padding: 5,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  value: {
    width: "25%",
    padding: 5,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  label2: {
    width: "25%",
    fontWeight: "bold",
    padding: 5,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  value2: {
    width: "25%",
    padding: 5,
  },

  // ===== REMARKS BOX =====
  remarksBox: {
    borderBottomWidth: 1,
    borderColor: "#000",
    height: "100%",
    justifyContent: "flex-start",
  },
  remarksLabel: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  remarksText: {
    marginTop: 2,
  },
});

export default function ResultDoc() {
  return (
    <Document title="Result.pdf">
      <Page size="LETTER" style={styles.page}>
        {/* ===== HEADER ===== */}
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Text style={styles.companyName}>BOREDM</Text>
          </View>
          <View style={styles.headerCenter}>
            <Text style={styles.projectTitle}>Riverside Condominiums</Text>
            <Text style={styles.projectSubtitle}>
              General Location - Project
            </Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.codeLabel}>B-17</Text>
            <Text style={styles.pageInfo}>Page 1 of 1</Text>
          </View>
        </View>

        {/* ===== TABLE + REMARKS ===== */}
        <View style={styles.tableContainer}>
          {/* Left Table */}
          <View style={styles.leftTable}>
            <View style={styles.row}>
              <Text style={styles.label}>Drilling Firm:</Text>
              <Text style={styles.value}>BoreDM Drilling</Text>
              <Text style={styles.label2}>Project No.:</Text>
              <Text style={styles.value2}>25-3332</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Driller:</Text>
              <Text style={styles.value}>PA</Text>
              <Text style={styles.label2}>Date Drilled:</Text>
              <Text style={styles.value2}>03/05/2025</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Logged By:</Text>
              <Text style={styles.value}>LA</Text>
              <Text style={styles.label2}>Boring Depth:</Text>
              <Text style={styles.value2}>-</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Water:</Text>
              <Text style={styles.value}>N/A</Text>
              <Text style={styles.label2}>Boring Elevation:</Text>
              <Text style={styles.value2}>N/A</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Hammer Type:</Text>
              <Text style={styles.value}>-</Text>
              <Text style={styles.label2}>Brand Address:</Text>
              <Text style={styles.value2}>
                4909 N. 44th St, Phoenix, AZ 85018
              </Text>
            </View>
          </View>

          {/* Remarks Box */}
          <View style={styles.rightRemarks}>
            <View style={styles.remarksBox}>
              <Text style={styles.remarksLabel}>Remarks:</Text>
              <Text style={styles.remarksText}>-</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
