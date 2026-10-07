import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AppShell from "../components/AppShell";
import { lessons } from "../data/lessons";
import { colors } from "../data/theme";

export default function HomeScreen() {
  const firstLesson = lessons[0];

  return (
    <AppShell activeRoute="/" eyebrow="YOUR REACT NATIVE JOURNEY" title="Build something">
      <Text style={styles.headlineAccent}>you’re proud of.</Text>
      <Text style={styles.intro}>
        Learn the building blocks of React Native with a friendly, hands-on course.
      </Text>

      <View style={styles.courseCard}>
        <View style={styles.cardTop}>
          <View style={styles.courseMark}>
            <Text style={styles.courseMarkText}>✳</Text>
          </View>
          <Text style={styles.cardEyebrow}>A GOOD PLACE TO START</Text>
        </View>
        <Text style={styles.courseTitle}>React Native foundations</Text>
        <Text style={styles.courseDescription}>
          {lessons.length} bite-sized lessons to help you go from your first screen to a connected app.
        </Text>
        <View style={styles.courseDetails}>
          <Text style={styles.courseDetail}>{lessons.length} SHORT LESSONS</Text>
          <View style={styles.detailDivider} />
          <Text style={styles.courseDetail}>LEARN AT YOUR PACE</Text>
        </View>
        <Link href={`/lesson/${firstLesson.id}`} asChild>
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
          >
            <Text style={styles.primaryButtonText}>Start learning</Text>
            <Text style={styles.primaryButtonArrow}>↗</Text>
          </Pressable>
        </Link>
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  headlineAccent: {
    color: colors.white,
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: -1.7,
    lineHeight: 40,
  },
  intro: {
    color: colors.white,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
    marginBottom: 23,
    maxWidth: 330,
  },
  courseCard: {
    backgroundColor: colors.ink,
    borderRadius: 25,
    padding: 21,
    marginBottom: 29,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
  },
  courseMark: {
    width: 30,
    height: 30,
    borderRadius: 11,
    backgroundColor: "#283C35",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  courseMarkText: {
    color: colors.lime,
    fontSize: 17,
  },
  cardEyebrow: {
    color: "#A8B3AE",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.2,
  },
  courseTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  courseDescription: {
    color: "#B4C0BA",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
  },
  courseDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 17,
    marginBottom: 18,
  },
  courseDetail: {
    color: colors.lime,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  detailDivider: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#728177",
    marginHorizontal: 9,
  },
  primaryButton: {
    backgroundColor: colors.lime,
    borderRadius: 15,
    minHeight: 52,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  primaryButtonText: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: "800",
  },
  primaryButtonArrow: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: "700",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  sectionSubtitle: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 4,
  },
  seeAll: {
    color: colors.green,
    fontSize: 13,
    fontWeight: "800",
  },
  previewList: {
    backgroundColor: colors.white,
    borderRadius: 21,
    paddingHorizontal: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.line,
  },
  lessonRow: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  lastLessonRow: {
    borderBottomWidth: 0,
  },
  lessonNumber: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: colors.canvas,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  lessonNumberActive: {
    backgroundColor: colors.lime,
  },
  lessonNumberText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800",
  },
  lessonNumberTextActive: {
    color: colors.ink,
  },
  lessonCopy: {
    flex: 1,
  },
  lessonTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "700",
  },
  lessonMeta: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 4,
  },
  rowArrow: {
    color: colors.muted,
    fontSize: 22,
    marginLeft: 8,
  },
  pressed: {
    opacity: 0.76,
  },
});
