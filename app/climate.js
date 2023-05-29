import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import climateImage from "../assets/images/climate.png";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

const ClimateScreen = () => {
  const [temperature, setTemperature] = useState(10);
  const [on, setOn] = useState(false);
  const [vent, setVent] = useState(true);

  return (
    <View style={styles.container}>
      <Image source={climateImage} style={styles.image} resizeMode="cover" />

      <View style={styles.footer}>
        <View style={styles.controlsRow}>
          <Pressable
            onPress={() => setOn(!on)}
            style={styles.iconButtonContainer}
          >
            <MaterialCommunityIcons
              name="power"
              size={42}
              color={on ? "white" : "gray"}
            />
            <Text style={styles.iconButtonText}>{on ? "On" : "off"}</Text>
          </Pressable>

          <View style={styles.temperatureContainer}>
            <Entypo
              onPress={() => setTemperature(temperature - 1)}
              name="chevron-left"
              size={30}
              color="gray"
            />
            <Text style={styles.temperatureText}>{temperature}°</Text>
            <Entypo
              onPress={() => setTemperature(temperature + 1)}
              name="chevron-right"
              size={30}
              color={temperature + 1 ? "white" : "gray"}
            />
          </View>

          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons
              onPress={() => setVent(!vent)}
              name="car-door"
              size={42}
              color={vent ? "gray" : "white"}
            />
            <Text style={styles.iconButtonText}>
              {vent ? "Closed" : "Opened"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },

  image: {
    width: "100%",
    height: "83%",
  },
  footer: {
    alignItems: "center",
    padding: 12,
    marginBottom: 20,
    marginTop: "auto",
  },
  label: {
    color: "gray",
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 20,
  },
  controlsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: "300",
    color: "white",
    marginHorizontal: 20,
  },
  iconButtonContainer: {
    alignItems: "center",
  },
  iconButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
});

export default ClimateScreen;
