import { NativeModules } from 'react-native'
const { DeviceTypeModule } = NativeModules

type DeviceType = 'simulator' | 'device'

const checkDeviceType = (callback: (error: string, type: DeviceType) => void)  => {
  DeviceTypeModule.checkDeviceType(callback) 
}

export { checkDeviceType };
