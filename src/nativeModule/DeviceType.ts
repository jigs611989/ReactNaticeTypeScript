import { NativeModules } from 'react-native';
const { DeviceTypeModule } = NativeModules;

type DeviceType = 'simulator' | 'device';

const checkDeviceType = (
  callback: (error: string | null | undefined, type: DeviceType) => void,
) => {
  DeviceTypeModule.checkDeviceType(callback);
};

export { checkDeviceType };
