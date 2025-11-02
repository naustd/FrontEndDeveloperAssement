import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import boredmLogo from "../logos/restapi.png";
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
    flexDirection: "row",
  },
  headerCenter: {
    width: "55%",
    borderRightWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  headerRight: {
    width: "20%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  companyName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    letterSpacing: 1,
  },
  companyNameEnd: {
    color: "#7d7d7d",
    fontWeight: "bold",
  },
  projectTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 18,
  },
  projectSubtitle: {
    fontSize: 9,
    fontWeight: "bold",
  },
  codeLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pageInfo: {
    fontSize: 8,
  },

  // ===== TABLE + REMARKS SECTION =====
  tableWrapper: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000",
    width: "100%",
  },
  tableContent: {
    flexDirection: "row",
  },
  leftTable: {
    width: "75%",
  },
  rightRemarks: {
    width: "25%",
    borderLeftWidth: 1,
    borderColor: "#000",
    justifyContent: "flex-start",
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
  },
  value2: {
    width: "25%",
    padding: 5,
  },

  hammerRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#000",
    width: "100%",
  },

  hammerLabel: {
    width: "20%", // aligns with Drilling Firm
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 5,
  },

  hammerValue: {
    width: "17.5%", // aligns with BoreDM Drilling column
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderColor: "#000",
  },

  brandLabel: {
    width: "18%", // aligns with "Project No." column
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 5,
  },

  brandValue: {
    width: "30%", // aligns with "25-3332" column under Remarks
    paddingVertical: 4,
    paddingHorizontal: 5,
  },

  // ===== REMARKS =====
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
            <Image
              src={boredmLogo}
              style={{ width: 25, height: 25, marginBottom: 4 }}
            />
            <Text style={styles.companyName}>
              BORE<Text style={styles.companyNameEnd}>DM</Text>
            </Text>
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
        <View style={styles.tableWrapper}>
          <View style={styles.tableContent}>
            {/* LEFT TABLE */}
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
                <Text style={styles.label}>Water:</Text>
                <Text style={styles.value}>N/A</Text>
                <Text style={styles.label2}>Boring Elevation:</Text>
                <Text style={styles.value2}>N/A</Text>
              </View>
            </View>

            {/* RIGHT REMARKS BOX */}
            <View style={styles.rightRemarks}>
              <Text style={styles.remarksLabel}>Remarks:</Text>
              <Text style={styles.remarksText}>-</Text>
            </View>
          </View>

          {/* HAMMER TYPE + BRAND ADDRESS ROW */}

          {/* Hammer Type */}
          {/* <View style={styles.hammerSection}>
            <Text style={styles.hammerLabel}>Hammer Type:</Text>
            <Text style={styles.hammerValue}>-</Text>
            <Text style={styles.brandLabel}>Brand Address:</Text>
            <Text style={styles.brandValue}>
              4909 N. 44th St, Phoenix, AZ 85018
            </Text>
          </View> */}
          {/* Hammer Type + Brand Address (perfectly aligned) */}
          <View style={styles.hammerRow}>
            <Text style={styles.hammerLabel}>Hammer Type:</Text>
            <Text style={styles.hammerValue}>-</Text>
            <Text style={styles.brandLabel}>Brand Address:</Text>
            <Text style={styles.brandValue}>
              4909 N. 44th St, Phoenix, AZ 85018
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
