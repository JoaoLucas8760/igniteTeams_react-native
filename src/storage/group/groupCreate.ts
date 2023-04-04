import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUPS_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function GroupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    const storage = JSON.stringify([...storedGroups, newGroup]);
    await AsyncStorage.setItem(GROUPS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
