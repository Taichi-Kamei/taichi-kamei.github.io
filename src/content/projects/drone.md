---
title: "Drone Flight Controller"
description: "Building a drone from ground up with a team of three. Currently designing flight controller PCB."  
featured: true
priority: 1 
tags: [PCB Design, C++, Rust, Kalman Filter, RF, UART, SPI, I2C, ESP32]
coverImage: "/images/drone/GPS+Magnetometer.png"
---

## Objective

1. Build a drone from ground up that is LQR controlled with Kalman filter IMU, barometer, magnetometer, and GPS module  
2. Add a MIPI camera and a FPGA controlled path finder CNN for autonomous navigation and control  
3. Build a mother drone that can deploy mini drones from its back

## My Main Tasks
1. Design a drone flight controller PCB with follwing features:
    - Battery management system (BMS) for 4S Lipo input
    - ESP32-S3-MINI1U
    - RF transceiver using SX1261
    - IMU, barometer, magnetometer, GPS module
2. Implement Kalman filter firmware in Rust
3. Design and fabricate a drone frame and test rigs

## Drone Flight Controller PCBs

![High Level Flight Controller Schematics](/images/drone/high_level_schematics.png)
![BMS Schematics](/images/drone/BMS.png)
![Flight Controller Schematics](/images/drone/FC.png)
![Sensors Schematics](/images/drone/Sensors.png)
![RF transceiver Schematics](/images/drone/RF.png)

![Flight Controller Layout (Still working on RF)](/images/drone/fc_proto.png)
![GPS & Magnetometer Schematics](/images/drone/GPS+Magnetometer_schematics.png)
![](/images/drone/GPS+Magnetometer_Editor.png)
 

<figure class="side-by-side">
  <img src="/images/drone/GPS+Magnetometer_back.png" alt="">
  <img src="/images/drone/GPS+Magnetometer_front.png" alt="">
  <figcaption>4-layer GPS & Magnetometer Module PCB</figcaption>
</figure>
