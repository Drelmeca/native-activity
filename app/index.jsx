import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AppShell from "../components/AppShell";
import { lessons } from "../data/lessons";
import { colors } from "../data/theme";

export default function HomeScreen() {
  const featuredLesson = lessons[0];

  return (
    <AppShell activeRoute="/" eyebrow="YOUR LEARNING SPACE" title="Small steps,">
      <Text style={styles.headlineAccent}>big progress.</Text>
      <Text style={styles.intro}>
        Build your React Native foundations one lesson at a time.
        Prepared by Team #3 Meca, Precillas, Hermoso, Gensis  
      </Text>

      

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Your learning path</Text>
          <Text style={styles.sectionSubtitle}>Six short lessons. One strong start.</Text>
        </View>
        <Link href="/lessons" asChild>
          <Pressable accessibilityRole="button" hitSlop={8}>
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.previewList}>
        {lessons.slice(0, 3).map((lesson, index) => (
          <Link href={`/lesson/${lesson.id}`} asChild key={lesson.id}>
            <Pressable
              accessibilityRole="button"
              style={({ pressed }) => [styles.lessonRow, pressed && styles.pressed]}
            >
              <View style={[styles.lessonNumber, index === 0 && styles.lessonNumberActive]}>
                <Text style={[styles.lessonNumberText, index === 0 && styles.lessonNumberTextActive]}>
                  {lesson.number}
                </Text>
              </View>
              <View style={styles.lessonCopy}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonMeta}>{lesson.duration} · {lesson.topic}</Text>
              </View>
              <Text style={styles.rowArrow}>›</Text>
            </Pressable>
          </Link>
        ))}
      </View>

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
    maxWidth: 310,
  },
  progressCard: {
    backgroundColor: colors.ink,
    borderRadius: 26,
    padding: 21,
    marginBottom: 29,
  },
  progressTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardEyebrow: {
    color: "#A8B3AE",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 7,
  },
  progressTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  progressBadge: {
    backgroundColor: "#283C35",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 20,
  },
  progressBadgeText: {
    color: colors.lime,
    fontSize: 11,
    fontWeight: "800",
  },
  progressTrack: {
    height: 6,
    borderRadius: 10,
    backgroundColor: "#3B4A44",
    marginTop: 22,
    overflow: "hidden",
  },
  progressFill: {
    width: "17%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: colors.lime,
  },
  progressCaption: {
    color: "#B4C0BA",
    fontSize: 12,
    marginTop: 9,
    marginBottom: 18,
  },
  continueButton: {
    backgroundColor: colors.lime,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  continueButtonText: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "800",
  },
  continueArrow: {
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
