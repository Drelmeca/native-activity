import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AppShell from "../components/AppShell";
import { colors } from "../data/theme";



export default function HomeScreen() {
  return (
    <AppShell activeRoute="/" eyebrow="DESIGN SYSTEM" title="">
      <View style={styles.heroCard}>
        <View style={styles.leftPanel}>
          <Text style={styles.buildTag}>BUILD</Text>
          <Text style={styles.heroTitle}>YOUR</Text>
          <Text style={styles.heroTitleAccent}>DREAM  </Text>
          <Text style={styles.heroSubTitle}>IN REACT NATIVE</Text>

          <View style={styles.timeBlock}>
            <Text style={styles.timeLabel}>IN JUST</Text>
            <View style={styles.timeValueRow}>
              <Text style={styles.timeValue}>10</Text>
              <Text style={styles.timeUnit}>Minutes</Text>
            </View>
          </View>


          <View style={styles.bottomRow}>
            <View style={styles.sourceWrap}>
              <View style={styles.playIconWrap}>
                <Text style={styles.playIcon}>◉</Text>
              </View>
              <Text style={styles.sourceText}>SOURCE CODE</Text>
            </View>
            <View style={styles.metaStat}>
              <Text style={styles.metaStatValue}>30</Text>
              <Text style={styles.metaStatLabel}>SECONDS</Text>
            </View>
            <View style={styles.metaStatAccent}>
              <Text style={styles.metaStatValue}>REACT</Text>
              <Text style={styles.metaStatLabel}>NATIVE</Text>
            </View>
          </View>
        </View>


            <View style={styles.posterCard}>
              <View style={styles.posterGlow} />
              <View style={styles.posterContent}>
                <Text style={styles.posterTag}>STRANGER</Text>
                <Text style={styles.posterTag}>THINGS</Text>
                <Text style={styles.posterMeta}>Thriller • Drama • Mystery</Text>
              </View>
            </View>

      </View>

      <View style={styles.ctaArea}>
        <Link href="/lessons" asChild>
          <Pressable accessibilityRole="button" style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
            <Text style={styles.primaryButtonText}>Start learning</Text>
          </Pressable>
        </Link>
      </View> 
    </AppShell>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: "#111111",
    borderRadius: 28,
    padding:90  ,
    flexDirection: "row",
    alignItems: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    marginTop: 8,
  },
  leftPanel: {
    flex: 1,
    paddingRight: 8,
  },
  buildTag: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: -1,
    marginBottom: 2,
    lineHeight: 25,
  },
  heroTitle: {
    color: "#ff1e2d",
    fontSize: 58,
    fontWeight: "900",
    letterSpacing: -3,
    lineHeight: 52,
  },
  heroTitleAccent: {
    color: "#ff1e2d",
    fontSize: 52,
    fontWeight: "900",
    letterSpacing: -2.2,
    lineHeight: 52,
    marginTop: 4,
  },
  heroSubTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1.1,
    marginTop: 10,
  },
  timeBlock: {
    marginTop: 18,
    marginBottom: 18,
  },
  timeLabel: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.1,
    marginBottom: 3,
  },
  timeValueRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 2,
  },
  timeValue: {
    color: "#ff1e2d",
    fontSize: 44,
    fontWeight: "900",
    letterSpacing: -2,
    lineHeight: 42,
  },
  timeUnit: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 1,
    marginLeft: 8,
  },
  featureList: {
    marginBottom: 18,
  },
 
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  sourceWrap: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },
  playIconWrap: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ff1e2d",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  playIcon: {
    color: colors.white,
    fontSize: 9,
    fontWeight: "900",
  },
  sourceText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  metaStat: {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginLeft: 10,
    alignItems: "center",
  },
  metaStatAccent: {
    backgroundColor: "rgba(255, 30, 45, 0.18)",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginLeft: 8,
    alignItems: "center",
  },
  metaStatValue: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "900",
  },
  metaStatLabel: {
    color: "#d9d9d9",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 0.9,
    marginTop: 1,
  },
  rightPanel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  actionText: {
    color: "#d3d3d3",
    fontSize: 8,
    fontWeight: "700",
    marginLeft: 8,
  },
  posterCard: {
    height: 205,
    borderRadius: 18,
    backgroundColor: "#5d1b1d",
    overflow: "hidden",
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  posterGlow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 127, 40, 0.2)",
  },
  posterContent: {
    paddingHorizontal: 14,
    paddingBottom: 12,
    zIndex: 1,
  },
  posterTag: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: -1,
    lineHeight: 22,
  },
  posterMeta: {
    color: "#f0d2b7",
    fontSize: 9,
    fontWeight: "700",
    marginTop: 6,
  },
  phoneActions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 9,
  },
  actionButton: {
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    flex: 1,
  },
  actionButtonText: {
    color: "#111111",
    fontSize: 11,
    fontWeight: "800",
    textAlign: "center",
  },
  secondaryActionButton: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flex: 1,
  },
  secondaryActionText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
  },
  rowTitleWrap: {
    marginBottom: 8,
  },
  rowTitle: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "800",
  },  
  
  ctaArea: {
    marginTop: 16,
    alignItems: "center",
  },
  
  primaryButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  pressed: {
    opacity: 0.8,
  },
});
