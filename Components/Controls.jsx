import { View, Image, Pressable } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import car from "../assets/images/S.png";
import { useState } from "react";
const Controls = () => {
  const [locked, setLocked] = useState(true);
  const [fan, setFan] = useState(true);
  const [bolt, setBolt] = useState(true);
  const [sport, setSport] = useState(true);

  return (
    <>
      <Image
        source={car}
        style={{ width: "100%", height: 270 }}
        resizeMode="contain"
      />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Pressable onPress={() => setLocked(!locked)}>

          <Entypo name="lock" size={30} color={locked ? "white" : "gray"} />

        </Pressable>

        <Pressable onPress={() => setFan(!fan)}>
          <MaterialCommunityIcons
            name="fan"
            size={30}
            color={fan ? "white" : "gray"}
          />
        </Pressable>

        <Pressable onPress={() => setBolt(!bolt)}>

          <FontAwesome5 name="bolt" size={30} color={bolt ? "white" : "gray"} />

        </Pressable>

        <Pressable onPress={() => setSport(!sport)}>
          <Ionicons
            name="car-sport-sharp"
            size={30}
            color={sport ? "white" : "gray"}
          />
        </Pressable>
      </View>
    </>
  );
};
export default Controls;
