import React, { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active:
      "https://img.icons8.com/fluency-systems-filled/144/ffffff/home--v1.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home--v1.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active:
      "https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/218604641_4157927094289148_8066337023297876106_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zBOLxtWX8Q8AX9sksQW&tn=bg7AIVxMQURN8YDG&_nc_ht=scontent.fcai21-3.fna&oh=df9dda507507e43024f9ea7a9b5af511&oe=616AAB4A",
    inactive:
      "https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/162335722_3807788149303046_7727381123586933836_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=0sCx7nJ_3awAX_EU2YG&_nc_oc=AQmLmpp_Hl6nw7LX-FcASzCO8vWxjcRkXVx6sA1ewHSZh-_c5i7gziCTdEeBWF_VI3k&tn=bg7AIVxMQURN8YDG&_nc_ht=scontent.fcai21-4.fna&oh=a160d06bd5998c04fc0cefec079a5aa9&oe=6188F645",
  },
];
const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab == icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name == "Profile" ? styles.profilePic() : null,
          activeTab == "Profile" && icon.name == activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab == "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});

export default BottomTabs;
