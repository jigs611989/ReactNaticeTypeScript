//
//  DeviceTypeModule.m
//  InvestecPractical
//
//  Created by Jignesh Patel on 28/09/20.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(DeviceTypeModule, NSObject<RCTBridgeModule>)
RCT_EXTERN_METHOD(checkDeviceType:(RCTResponseSenderBlock)callback)
@end
