import { useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
  Modal,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Popup = ({ visible, children }) => {
  const [showPopup, setShowPopup] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    togglePopup();
  }, [visible]);

  const togglePopup = () => {
    if (visible) {
      setShowPopup(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowPopup(false), 400);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal
      transparent
      visible={showPopup}
      supportedOrientations={[
        "portrait",
        "portrait-upside-down",
        "landscape",
        "landscape-left",
        "landscape-right",
      ]}
    >
      <View style={styles.popupBackground}>
        <Animated.View
          style={[
            styles.popupContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export const CategoryGridTile = ({ title, thumbnail }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.gridItem}>
      <Popup visible={visible}>
        <View style={styles.popupView}>
          <View style={styles.popupHeader}>
            <Pressable onPress={() => setVisible(false)}>
              <AntDesign
                name="closecircleo"
                size={deviceWidth < 450 ? 24 : 48}
                color="white"
              />
            </Pressable>
          </View>
          <ImageBackground
            source={{ uri: thumbnail }}
            resizeMode="cover"
            style={styles.popupImage}
          />
        </View>
      </Popup>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
        onPress={() => setVisible(true)}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image
          source={{ uri: thumbnail }}
          resizeMode="cover"
          style={styles.image}
        />
      </Pressable>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: deviceWidth < 450 ? 100 : 255,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : null,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    paddingLeft: 8,
    borderRadius: 8,
    alignItems: "flex-start",
  },
  title: {
    fontSize: deviceWidth < 450 ? 8 : 16,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  popupBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContainer: {
    width: "100%",
    height: "100%",
    padding: 8,
    borderRadius: 10,
  },
  popupView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  popupHeader: {
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  popupImage: {
    width: deviceWidth < 450 ? 200 : 545,
    height: deviceWidth < 450 ? 200 : 255,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
