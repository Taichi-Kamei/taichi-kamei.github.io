---
title: "Autonomous Pet-Rescue Robot"
description: "Autonomous robot for UBC's Engineering Physics robot competition — navigated a line-following course, retrieved animal plushies using a custom robotic arm with LiDAR detection, and deployed a basket mechanism to deliver them to a safe zone."
featured: true
priority: 3 
tags: [ESP32, C++, FreeRTOS, KiCad, LiDAR, PCB Design, CAD]
coverImage: /images/pet_rescue_robot/final_robot_prolly.jpg
---

![Final robot](/images/pet_rescue_robot/final_robot_prolly.jpg)

## Objectives

The competition theme was "Pet Rescue." The goal was to navigate a non-cyclic course guided by black tape, retrieve animal plushies along the track, and return them to a safe zone at the start. Complications included obstructed pets, unguided rough-track sections, a zip-line, and strict size/budget limitations.

![Competition environment CAD](/images/pet_rescue_robot/Competition%20Environment%20CAD.png)

![Siblings plushies](/images/pet_rescue_robot/plz_siblings.jpg)

## Brainstorming

<div class="image-row">
  <img src="/images/pet_rescue_robot/brainstorming/hebb6_discussing.jpg" alt="Team discussion" />
  <img src="/images/pet_rescue_robot/brainstorming/arm_base_discuss.jpg" alt="Arm base discussion" />
</div>

![Bucket discussion](/images/pet_rescue_robot/brainstorming/bucket_discuss.jpg)

![CV height detection concept](/images/pet_rescue_robot/brainstorming/detect_cv_height.jpg)

## Major Contributions

### Arm and Arm Base Design

![Arm sketch](/images/pet_rescue_robot/brainstorming/arm_clean_sketch.jpg)

![Initial CAD](/images/pet_rescue_robot/arm/inital_cad.jpg)

<div class="image-row">
  <img src="/images/pet_rescue_robot/arm/init_arm_base_print.jpg" alt="Initial arm base print" />
  <img src="/images/pet_rescue_robot/arm/arm_shaft.jpg" alt="Arm shaft" />
</div>

<div class="image-row">
  <img src="/images/pet_rescue_robot/arm/early_arm_assembly.jpg" alt="Early assembly" />
  <img src="/images/pet_rescue_robot/arm/early_arm_with_plz.jpg" alt="Early arm with plushie" />
</div>

<div class="image-row">
  <img src="/images/pet_rescue_robot/arm/arm_base_close_up.jpg" alt="Arm base close-up" />
  <img src="/images/pet_rescue_robot/arm/arm_fox_max.jpg" alt="Arm at max extension" />
</div>

<div class="image-row">
  <img src="/images/pet_rescue_robot/arm_base/sandwich_better.jpg" alt="Sandwich mechanism" />
  <img src="/images/pet_rescue_robot/arm_base/lazy_suzan.jpg" alt="Lazy susan rotation base" />
</div>

The rotation base used a Delrin/PMMA sandwich with a lazy-susan bearing. A brushed DC motor with magnetic encoder PID handled rotation. A key challenge was the sandwiching mechanism struggling even at 80% duty cycle — resolved by redesigning the load path.

### LiDAR Detection Algorithm

![LiDAR detection prototype](/images/pet_rescue_robot/lidar_detect_proto.PNG)

Prototyped a payload detection algorithm in Python on Raspberry Pi using two VL53L5CX 2D LiDAR sensors, generating depth and reflectance maps at 7 Hz. Implemented in C++ on ESP32 achieving 15 Hz real-time detection.

The algorithm detected a cylindrical shape in front of the sensors — used to confirm a plushie was captured by the arm.

### I2C Multiplexer and Buffer Custom PCB

<div class="image-row">
  <img src="/images/pet_rescue_robot/i2c_mux_pcb/mux_schematics.png" alt="Mux schematics" />
  <img src="/images/pet_rescue_robot/i2c_mux_pcb/mux_3d.png" alt="Mux 3D render" />
</div>

![I2C PCB assembled](/images/pet_rescue_robot/i2c_mux_pcb/i2c_pcb.jpg)

Designed a custom 2-layer I2C multiplexer and I2C buffer PCB in KiCad to solve peripheral address conflicts and signal degradation across the robot's I2C bus. Debugged a wiring issue using an oscilloscope and DMM, then modified and resoldered a functioning board.

### Circuitry Casing

<div class="image-row">
  <img src="/images/pet_rescue_robot/arm_base/magnet_mount.jpg" alt="Magnet encoder mount" />
  <img src="/images/pet_rescue_robot/arm_base/bottom_casing.jpg" alt="Bottom casing" />
</div>

![Encoder placement](/images/pet_rescue_robot/encoder_placement.jpg)

Designed enclosures for the magnetic encoder mount, buck converter, and I2C PCB. Precise encoder placement directly beneath the diametric magnet was critical for reliable PID feedback.

## Other Key Components

### Line Following

Dual IR reflectance sensor arrays with PID control.

### Chassis Layout

<div class="image-row">
  <img src="/images/pet_rescue_robot/chassis/chassis_layout_sketch.jpg" alt="Chassis sketch" />
  <img src="/images/pet_rescue_robot/chassis/chassis_layout.PNG" alt="Chassis layout CAD" />
</div>

### Other Custom PCBs and Motherboard

<div class="image-row">
  <img src="/images/pet_rescue_robot/other_pcbs/h_bridge_3d.png" alt="H-bridge PCB" />
  <img src="/images/pet_rescue_robot/other_pcbs/encoder_3d.png" alt="Encoder PCB" />
  <img src="/images/pet_rescue_robot/other_pcbs/reflectance_3d.png" alt="Reflectance PCB" />
</div>

<div class="image-row">
  <img src="/images/pet_rescue_robot/other_pcbs/mother_schematics.png" alt="Motherboard schematics" />
  <img src="/images/pet_rescue_robot/mother.jpg" alt="Motherboard assembled" />
</div>

Custom H-bridge, magnetic encoder, and IR reflectance PCBs, plus a central motherboard integrating all subsystems.

### Software

Developed on ESP32 Pico in C++ with FreeRTOS. A Finite State Machine managed high-level behavior; inverse kinematics handled arm positioning.

## Struggles During Integration

- ESP32 Pico PWM timer behavior required reading the source code to debug
- H-bridge failed the day before the competition — had spares ready
- Wall detection reliability issues
- Base PID control — in hindsight, stepper motors with microstepping would have been more precise

## Final Robot

![Final robot assembled](/images/pet_rescue_robot/final_robot_prolly.jpg)

## Competition Result and Reflections

![Group photo](/images/pet_rescue_robot/group_pic.jpg)

Unexpected integration issues are inevitable — each component needs to be fabricated quickly to leave time for integration and debugging. Modular testing is critical. Despite a difficult competition result, there were no regrets: every subsystem worked as designed in isolation.
