---
title: "Drone Flight Controller"
description: "Building drone from a ground up with a team of three. We are at the stage of designing flighter controler PCB are at the stage of designing flighter controler PCB."  
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
    - Battery management system (BMS) with 4S Lipo input
    - ESP32-S3
    - RF transceiver
    - IMU, barometer, magnetometer, GPS module
2. Implement Kalman filter firmware in Rust
3. Design and fabricate a drone frame and test rigs

## Electrical

![High Level Flight Controller Schematics](/images/drone/high_level_schematics.png)
![BMS schematics](/images/drone/BMS.png)
![GPS & Magnetometer Schematics](/images/drone/GPS+Magnetometer_schematics.png)
![4-layer GPS & Magnetometer Module PCB](/images/drone/GPS+Magnetometer.png)
 
## Mechanical

## Firmware
