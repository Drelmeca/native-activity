import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AppShell from "../../components/AppShell";
import { lessons } from "../../data/lessons";
import { colors } from "../../data/theme";

export default function LessonDetailScreen() {
  const { id } = useLocalSearchParams();
  const lesson = lessons.find((item) => item.id === String(id));

  if (!lesson) {
    return (
      <AppShell eyebrow="LESSON NOT FOUND" title="Let’s get">
        <Text style={styles.headlineAccent}>back on track.</Text>
        <Text style={styles.intro}>That lesson isn’t in this learning path.</Text>
        <Link href="/lessons" asChild>
          <Pressable style={styles.primaryButton} accessibilityRole="button">
            <Text style={styles.primaryButtonText}>Browse all lessons</Text>
          </Pressable>
        </Link>
      </AppShell>
    );
  }

  return (
    <AppShell eyebrow={`LESSON ${lesson.number} · ${lesson.duration}`} title={lesson.title}>
      <Text style={styles.topic}>{lesson.topic.toUpperCase()}</Text>
      <Text style={styles.intro}>{lesson.description}</Text>

      <View style={styles.conceptCard}>
        <Text style={styles.cardEyebrow}>THE BIG IDEA</Text>
        <Text style={styles.conceptText}>{lesson.summary}</Text>
      </View>

      <Text style={styles.sectionTitle}>What you’ll learn</Text>
      <View style={styles.objectiveList}>
        {lesson.objectives.map((objective) => (
          <View style={styles.objectiveRow} key={objective}>
            <View style={styles.checkmark}>
              <Text style={styles.checkmarkText}>✓</Text>
            </View>
            <Text style={styles.objectiveText}>{objective}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>A tiny example</Text>
      <View style={styles.codeCard}>
        <Text style={styles.codeLabel}>JAVASCRIPT</Text>
        <Text selectable style={styles.codeText}>{lesson.example}</Text>
      </View>

      <View style={styles.challengeCard}>
        <Text style={styles.challengeLabel}>✳  YOUR TURN</Text>
        <Text style={styles.challengeText}>{lesson.challenge}</Text>
      </View>

      <Link href="/lessons" asChild>
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
        >
          <Text style={styles.primaryButtonText}>Back to all lessons</Text>
          <Text style={styles.primaryButtonArrow}>Back</Text>
        </Pressable>
      </Link>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  topic: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.4,
    marginTop: 14,
  },
  headlineAccent: {
    color: colors.white,
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: -1.4,
    lineHeight: 40,
  },
  intro: {
    color: colors.white,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
    marginBottom: 22,
  },
  conceptCard: {
    backgroundColor: colors.ink,
    borderRadius: 22,
    padding: 20,
    marginBottom: 26,
  },
  cardEyebrow: {
    color: colors.lime,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.4,
    marginBottom: 11,
  },
  conceptText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: -0.4,
    marginBottom: 12,
  },
  objectiveList: {
    gap: 12,
    marginBottom: 26,
  },
  objectiveRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkmark: {
    width: 23,
    height: 23,
    borderRadius: 9,
    backgroundColor: "#E4EFDF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkmarkText: {
    color: colors.green,
    fontSize: 13,
    fontWeight: "900",
  },
  objectiveText: {
    color: colors.ink,
    fontSize: 13,
    flex: 1,
    lineHeight: 19,
  },
  codeCard: {
    backgroundColor: "#19251F",
    borderRadius: 19,
    padding: 17,
    marginBottom: 16,
  },
  codeLabel: {
    color: colors.lime,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  codeText: {
    color: "#E2EBE4",
    fontFamily: "monospace",
    fontSize: 12,
    lineHeight: 20,
  },
  challengeCard: {
    backgroundColor: "#E7EFE7",
    borderRadius: 19,
    padding: 17,
    marginBottom: 19,
  },
  challengeLabel: {
    color: colors.green,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 8,
  },
  challengeText: {
    color: colors.ink,
    fontSize: 13,
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: colors.green,
    borderRadius: 16,
    minHeight: 54,
    paddingHorizontal: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "800",
  },
  primaryButtonArrow: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.78,
  },
});
