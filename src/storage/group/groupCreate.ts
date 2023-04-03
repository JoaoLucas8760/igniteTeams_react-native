import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUPS_COLLECTION } from "@storage/storageConfig";
import { err } from "react-native-svg/lib/typescript/xml";

export async function GroupCreate(newGroup: string) {
  try {
    await AsyncStorage.setItem(GROUPS_COLLECTION, newGroup);
  } catch (error) {
    throw error;
  }
}
