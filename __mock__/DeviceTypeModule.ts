const DeviceTypeModule = {
  checkDeviceType: (callback: (error: string | null, type: string) => void) => {
    callback(null, 'simulator');
  },
};
export const checkDeviceType = DeviceTypeModule.checkDeviceType;
export default DeviceTypeModule;
