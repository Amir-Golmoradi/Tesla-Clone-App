import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const MenuOption = ({ item }) => {
  return (
    <Link href={item.href} asChild>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
        <Text
          style={{
            color: "#eee",
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: "#eee",
            fontWeight: "bold",
            fontSize:17,
            marginTop: 60,
            marginHorizontal:-70,
          }}
        >
          {item.subtitle}
        </Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </Link>
  );
};

export default MenuOption;
