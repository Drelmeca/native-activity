import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { colors } from "../data/theme";

export default function AppShell({ children, eyebrow, title }) {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.canvas} />
      <View style={styles.page}>
        <Image
          source={require("../assets/smoke-background.png")}
          resizeMode="stretch"
          style={styles.backgroundImage}
        />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.brandRow}>
            <View style={styles.brand}>
              <View style={styles.brandMark}>
                <Text style={styles.brandMarkText}>L</Text>
              </View>
              <Text style={styles.brandName}>project</Text>
            </View>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>✳</Text>
            </View>
          </View>
          <Text style={styles.eyebrow}>{eyebrow}</Text>
          <Text style={styles.title}>{title}</Text>
          {children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  page: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    maxWidth: 560,
    backgroundColor: colors.canvas,
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "110%",
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 9,
    paddingBottom: 25,
  },
  brandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
  },
  brandMark: {
    height: 31,
    width: 31,
    borderRadius: 11,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  brandMarkText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "900",
  },
  brandName: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: -0.3,
  },
  avatar: {
    height: 34,
    width: 34,
    borderRadius: 17,
    backgroundColor: "#D7F7DE",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: colors.green,
    fontSize: 17,
  },
  eyebrow: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.6,
    marginBottom: 8,
  },
  title: {
    color: colors.white,
    fontSize: 34,
    lineHeight: 39,
    fontWeight: "800",
    letterSpacing: -1.5,
  },
});
