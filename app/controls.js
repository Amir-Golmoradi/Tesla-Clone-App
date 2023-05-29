import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import car from "../assets/images/climate.png";
import { useState } from "react";

const controlScreen = () => {
  const [light, setLight] = useState(false);
  const [start, setStart] = useState(false);
  const [honk, setHonk] = useState(false);
  const [auto, setAuto] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Image source={car} style={styles.image} resizeMode="cover" />
        <View style={styles.footer}>
          <View style={styles.controlsInRow}>
            <Pressable onPress={() => setLight(!light)}>
              <MaterialCommunityIcons
                name="lightbulb"
                size={40}
                color={light ? "white" : "gray"}
              />
            </Pressable>

            <Pressable onPress={() => setAuto(!auto)}>
              <MaterialCommunityIcons
                name="steering"
                size={40}
                color={auto ? "white" : "gray"}
              />
            </Pressable>

            <Pressable onPress={() => setHonk(!honk)}>
              <MaterialCommunityIcons
                name="bullhorn"
                size={40}
                color={honk ? "white" : "gray"}
              />
            </Pressable>

            <Pressable onPress={() => setStart(!start)}>
              <Entypo name="key" size={40} color={start ? "white" : "gray"} />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: "#4C5265",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {light ? "lightsOn" : "lightsOff"}
          </Text>
          <Text
            style={{
              color: "#4C5265",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {auto ? "Auto" : "Manual"}
          </Text>
          <Text
            style={{
              color: "#4C5265",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {honk ? "Beeping" : "Beep"}
          </Text>
          <Text
            style={{
              color: "#4C5265",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {start ? "StartEngine" : "StopEngine"}
          </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  image: {
    width: "100%",
    height: "86%",
  },
  footer: {
    padding: 12,
    marginBottom: 20,
    marginTop: "auto",
  },
  controlsInRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default controlScreen;
