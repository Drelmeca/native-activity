export const lessons = [
  //Lesson #1
  {
    id: "jsx",
    number: "01",
    topic: "Getting started",
    title: "Meet your first screen",
    duration: "5 min",
    description: "See how JSX describes the interface your app puts on screen.",
    summary:
      "A React Native screen is built from components. JSX lets you describe those components and the content they show.",
    objectives: [
      "Recognize a function component",
      "Use View and Text to build a simple screen",
      "Read JSX as a description of the UI",
    ],
    example: `function Welcome() {\n  return (\n    <View>\n      <Text>Hello, learner!</Text>\n    </View>\n  );\n}`,
    challenge: "(From Precillas ).",
  },
  //Lesson #2
  {
    id: "components",
    number: "02",
    topic: "Components",
    title: "Build with components",
    duration: "5 min",
    description: "Break a screen into small, reusable pieces with clear jobs.",
    summary:
      "Components are reusable building blocks. A screen can combine smaller components so each part stays easy to understand.",
    objectives: [
      "Describe what a component does",
      "Split a large screen into smaller pieces",
      "Reuse a component in more than one place",
    ],
    example: `function Greeting() {\n  return <Text>Welcome back!</Text>;\n}\n\nfunction HomeScreen() {\n  return <View><Greeting /></View>;\n}`,
    challenge: "(Dribble by ROino).",
  },
  //Part 3
  {
    id: "props",
    number: "03",
    topic: "Props",
    title: "Pass data with props",
    duration: "5 min",
    description: "Customize a reusable component by passing it information.",
    summary:
      "Props are values a parent passes to a component. They let one component show different content in different places.",
    objectives: [
      "Pass a value from a parent component",
      "Read props inside a child component",
      "Use the same component with different data",
    ],
    example: `function Greeting({ name }) {\n  return <Text>Hello, {name}!</Text>;\n}\n\n<Greeting name="Sam" />`,
    challenge: "((Pass to Gensis)",
  },
  //Part #4
  {
    id: "state",
    number: "04",
    topic: "State",
    title: "Make screens remember",
    duration: "5 min",
    description: "Use state to keep track of information that can change.",
    summary:
      "State is a component’s changing memory. Updating state asks React to render the screen again with the latest value.",
    objectives: [
      "Tell changing state apart from fixed text",
      "Create state with useState",
      "Update the screen in response to a state change",
    ],
    example: `const [count, setCount] = useState(0);\n\n<Pressable onPress={() => setCount(count + 1)}>\n  <Text>{count}</Text>\n</Pressable>`,
    challenge: "(Back to Precillas )",
  },
  //Part #5
  {
    id: "lists",
    number: "05",
    topic: "Lists & conditions",
    title: "Show the right content",
    duration: "5 min",
    description: "Render collections of data and respond to different situations.",
    summary:
      "Arrays can describe repeated content, and conditions can decide which UI appears for the current situation.",
    objectives: [
      "Use map to turn an array into components",
      "Give each list item a stable key",
      "Use a condition to show different content",
    ],
    example: `const names = ["Ari", "Sam"];\n\n{names.map((name) => (\n  <Text key={name}>{name}</Text>\n))}`,
    challenge: "(Assist by Gensis)",
  },
  //Part # 6
  {
    id: "navigation",
    number: "06",
    topic: "Navigation & input",
    title: "Connect screens & ideas",
    duration: "5 min",
    description: "Move between screens and let people enter their own information.",
    summary:
      "Navigation connects separate screens into one app. Inputs collect user text, and state can hold that text as it changes.",
    objectives: [
      "Navigate between screens with a link",
      "Connect a TextInput to state",
      "Combine components, props, state, and events",
    ],
    example: `<Link href="/lessons">Lessons</Link>\n\n<TextInput\n  value={note}\n  onChangeText={setNote}\n/>`,
    challenge: "(Score to shoot by Roino).",
  },
];
