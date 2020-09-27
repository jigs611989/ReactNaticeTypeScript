//
//  DeviceTypeModule.swift
//  InvestecPractical
//
//  Created by Jignesh Patel on 28/09/20.
//

import Foundation

@objc(DeviceTypeModule)
class DeviceTypeModule: NSObject, RCTBridgeModule {
  
  @objc
  func checkDeviceType(_ callback: RCTResponseSenderBlock) {
    #if targetEnvironment(simulator)
      callback([NSNull(), "simulator"])
    #else
      callback([NSNull(), "device"])
    #endif
  }

  static func moduleName() -> String! {
    return "DeviceTypeModule"
  }
  
  static func requiresMainQueueSetup() -> Bool {
      return false
  }
}
