import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AppShell from "../components/AppShell";
import { colors } from "../data/theme";

const features = ["Modern UI", "Smooth & fast", "Pixel perfect"];

export default function HomeScreen() {
  return (
    <AppShell activeRoute="/" eyebrow="DESIGN SYSTEM" title="">
      <View style={styles.heroCard}>
        <View style={styles.heroCopy}>
          <Text style={styles.buildTag}>BUILD YOUR</Text>
          <Text style={styles.heroTitle}>DREAM</Text>
          <Text style={styles.heroSubTitle}>IN REACT NATIVE</Text>

          <View style={styles.timeBlock}>
            <Text style={styles.timeLabel}>START BUILDING IN</Text>
            <Text style={styles.timeValue}>10 minutes</Text>
          </View>

          <View style={styles.featureList}>
            {features.map((feature) => (
              <View key={feature} style={styles.featureItem}>
                <Text style={styles.featureIcon}>✓</Text>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.posterCard}>
          <View style={styles.posterGlow} />
          <View style={styles.posterContent}>
            <Text style={styles.posterBrand}>N</Text>
            <View style={styles.posterRule} />
            <Text style={styles.posterTag}>YOUR</Text>
            <Text style={styles.posterTag}>NEXT</Text>
            <Text style={styles.posterTagAccent}>BIG IDEA</Text>
            <Text style={styles.posterMeta}>BUILT WITH REACT NATIVE</Text>
          </View>
        </View>
      </View>

      <View style={styles.ctaArea}>
        <Link href="/lessons" asChild>
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
          >
            <Text style={styles.primaryButtonText}>Explore the lessons</Text>
            <Text style={styles.primaryButtonArrow}>↗</Text>
          </Pressable>
        </Link>
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: "#111111",
    borderRadius: 26,
    padding: 16,
    flexDirection: "row",
    alignItems: "stretch",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    marginTop: 8,
  },
  heroCopy: {
    flex: 1,
    justifyContent: "center",
    paddingRight: 10,
  },
  buildTag: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 3,
  },
  heroTitle: {
    color: "#ff1e2d",
    fontSize: 40,
    fontWeight: "900",
    letterSpacing: -2.5,
    lineHeight: 42,
  },
  heroSubTitle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.7,
    marginTop: 5,
  },
  timeBlock: {
    marginTop: 19,
    marginBottom: 18,
  },
  timeLabel: {
    color: "#B9B9B9",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  timeValue: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "900",
    marginTop: 3,
  },
  featureList: {
    marginBottom: 3,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },
  featureIcon: {
    color: "#ff1e2d",
    fontSize: 14,
    fontWeight: "900",
    marginRight: 8,
  },
  featureText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
  },
  posterCard: {
    width: "40%",
    minHeight: 310,
    borderRadius: 19,
    backgroundColor: "#361014",
    overflow: "hidden",
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.16)",
  },
  posterGlow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 30, 45, 0.24)",
  },
  posterContent: {
    padding: 12,
  },
  posterBrand: {
    color: "#ff1e2d",
    fontSize: 48,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 40,
  },
  posterRule: {
    height: 2,
    backgroundColor: "#ff1e2d",
    marginBottom: 12,
  },
  posterTag: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: -1,
    lineHeight: 25,
  },
  posterTagAccent: {
    color: "#ff1e2d",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: -0.5,
    marginTop: 2,
  },
  posterMeta: {
    color: "#E5DCDD",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginTop: 9,
  },
  ctaArea: {
    marginTop: 16,
  },
  primaryButton: {
    backgroundColor: "#ff1e2d",
    borderRadius: 15,
    minHeight: 52,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  primaryButtonArrow: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "800",
  },
  pressed: {
    opacity: 0.8,
  },
});
