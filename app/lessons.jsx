import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AppShell from "../components/AppShell";
import { lessons } from "../data/lessons";
import { colors } from "../data/theme";

export default function LessonsScreen() {
  return (
    <AppShell activeRoute="/lessons" eyebrow="THE COURSE" title="Learn at your">
      <Text style={styles.headlineAccent}>own pace.</Text>
      <Text style={styles.intro}>
        A beginner-friendly path through the building blocks of React Native.
      </Text>

      <View style={styles.courseSummary}>
        <View style={styles.summaryNumber}>
          <Text style={styles.summaryNumberText}>06</Text>
        </View>
        <View style={styles.summaryCopy}>
          <Text style={styles.summaryTitle}>React Native foundations</Text>
          <Text style={styles.summaryMeta}>6 lessons · about 30 minutes</Text>
        </View>
        <Text style={styles.summarySpark}>✳</Text>
      </View>

      <Text style={styles.listHeading}>LESSONS 01—06</Text>
      <View style={styles.lessonList}>
        {lessons.map((lesson, index) => (
          <Link href={`/lesson/${lesson.id}`} asChild key={lesson.id}>
            <Pressable
              accessibilityRole="button"
              style={({ pressed }) => [styles.lessonCard, pressed && styles.pressed]}
            >
              <View style={[styles.lessonNumber, index === 0 && styles.lessonNumberActive]}>
                <Text style={[styles.lessonNumberText, index === 0 && styles.lessonNumberTextActive]}>
                  {lesson.number}
                </Text>
              </View>
              <View style={styles.lessonCopy}>
                <View style={styles.lessonMetaRow}>
                  <Text style={styles.lessonTopic}>{lesson.topic.toUpperCase()}</Text>
                  <Text style={styles.duration}>{lesson.duration}</Text>
                </View>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonDescription} numberOfLines={2}>
                  {lesson.description}
                </Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </Pressable>
          </Link>
        ))}
      </View>
      <Text style={styles.footerNote}>No rush. Come back whenever you’re ready.</Text>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  headlineAccent: {
    color: colors.green,
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: -1.7,
    lineHeight: 40,
  },
  intro: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
    marginBottom: 23,
    maxWidth: 330,
  },
  courseSummary: {
    backgroundColor: colors.ink,
    borderRadius: 22,
    minHeight: 86,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
  },
  summaryNumber: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.lime,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },
  summaryNumberText: {
    color: colors.ink,
    fontSize: 17,
    fontWeight: "900",
  },
  summaryCopy: {
    flex: 1,
  },
  summaryTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "800",
  },
  summaryMeta: {
    color: "#AEB9B3",
    fontSize: 11,
    marginTop: 5,
  },
  summarySpark: {
    color: colors.lime,
    fontSize: 23,
    marginLeft: 8,
  },
  listHeading: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  lessonList: {
    gap: 10,
  },
  lessonCard: {
    backgroundColor: colors.white,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 14,
    minHeight: 98,
    flexDirection: "row",
    alignItems: "center",
  },
  lessonNumber: {
    width: 42,
    height: 42,
    borderRadius: 14,
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
  lessonMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  lessonTopic: {
    color: colors.green,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },
  duration: {
    color: colors.muted,
    fontSize: 10,
  },
  lessonTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "800",
  },
  lessonDescription: {
    color: colors.muted,
    fontSize: 11,
    lineHeight: 16,
    marginTop: 4,
  },
  arrow: {
    color: colors.muted,
    fontSize: 23,
    marginLeft: 8,
  },
  footerNote: {
    color: colors.muted,
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 8,
  },
  pressed: {
    opacity: 0.76,
  },
});
