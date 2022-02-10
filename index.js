/**
 * @format
 */

import { AppRegistry, Platform } from "react-native";
import App from './App';
import {name as appName} from './app.json';

import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification, {Importance} from "react-native-push-notification";

PushNotification.configure({
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

PushNotification.createChannel(
  {
    channelId: "alarm",
    channelName: "alarm",
    playSound: true,
    importance: Importance.HIGH,
    vibrate: true,
    vibration: 800,
    visibility: 'public',
  },
  (created) => console.log(`createChannel returned '${created}'`)
);

AppRegistry.registerComponent(appName, () => App);
