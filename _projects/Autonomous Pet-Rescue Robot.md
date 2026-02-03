---
layout: projects
title: Autonomous Pet-Rescue Robot
featured: true
---

![alt text](/assets/images/pet_rescue_robot/comp_init.jpg)

* TOC
{:toc}


# Objectives


![alt text](/assets/images/pet_rescue_robot/plz_siblings.jpg)

![alt text](/assets/images/pet_rescue_robot/Competition%20Environment%20CAD.png)

The competition theme was "Pet Rescue"
The goal of the competition was to then navigate a non-cyclic course, by guide of black tape, and retrieve 'animal plushies' along the track, to ultimately return them to a safe zone at the start of the course. Various complications were involved including obstructed pets, unguided and rough track sections, and size/budget limitations.

*The CAD file does not include the black line and debris section before the zip-line.

# Brainstorming

<div style="display: flex; gap: 1px; justify-content: center;">
<img src="/assets/images/pet_rescue_robot/brainstorming/hebb6_discussing.jpg" alt="alt text" style="max-width: 35%; height: auto;">
<img src="/assets/images/pet_rescue_robot/brainstorming/arm_base_discuss.jpg" alt="alt text" style="max-width: 35%; height: auto;">
</div>

![alt text](/assets/images/pet_rescue_robot/brainstorming/bucket_discuss.jpg)

![alt text](/assets/images/pet_rescue_robot/brainstorming/detect_cv_height.jpg)


# Major Contributions

## Arm / Arm Base Design

![alt text](/assets/images/pet_rescue_robot/brainstorming/arm_clean_sketch.jpg)

![alt text](/assets/images/pet_rescue_robot/arm/inital_cad.jpg)

![alt text](/assets/images/pet_rescue_robot/arm/init_arm_base_print.jpg)

![alt text](/assets/images/pet_rescue_robot/arm/arm_shaft.jpg)

![alt text](/assets/images/pet_rescue_robot/arm/early_arm_assembly.jpg)

![alt text](/assets/images/pet_rescue_robot/arm/early_arm_with_plz.jpg)

![alt text](/assets/images/pet_rescue_robot/arm/arm_base_close_up.jpg)

![alt text](/assets/images/pet_rescue_robot/arm/arm_fox_max.jpg)

![alt text](/assets/images/pet_rescue_robot/arm_base/sandwich_better.jpg)

![alt text](/assets/images/pet_rescue_robot/arm_base/lazy_suzan.jpg)




- Sandwiching with Delrin and PMMA
- Use brushed DC motor and magnetic encoder PID for rotation
- Section view
- Major
- Major Issue with sandwiching mechanism running 80% duty cycle and yet struggled
- Solution

- Gif of arm movement or maybe youtube clip

## LiDAR Detection Algorithm

![alt text](/assets/images/pet_rescue_robot/lidar_detect_proto.PNG)

Prototyped a payload detection algorithm in Python on Raspberry Pi using two VL5C5CX 2D Lidar, generating depth and reflectance map in 7Hz. Implemented it in C++ on ESP32 with 15 Hz real-time detection.

The algorithm was to detect a cylindrical shape in front of the sensors.

- VL5C5CX 2D Lidar
- General Algorithm
- Development on Rpi and Python
- Implementation in cpp with ESP

## I2C multiplexer & I2C Buffer Custom PCB

![alt text](/assets/images/pet_rescue_robot/i2c_mux_pcb/mux_schematics.png)

![alt text](/assets/images/pet_rescue_robot/i2c_mux_pcb/mux_img.png)

![alt text](/assets/images/pet_rescue_robot/i2c_mux_pcb/mux_3d.png)

![alt text](/assets/images/pet_rescue_robot/i2c_mux_pcb/i2c_pcb.jpg)

- Designed custom 2-layer I2C multiplexer and I2C buffer PCB on KiCAD to solve peripheral address
conflicts and signal degradation

The initial PCB had a minor wiring issue, and I debugged using oscilloscope and DMM, narrowed down the issue, modified the wiring, and soldered a functioning PCB.

## Circuitry Casing 

![alt text](/assets/images/pet_rescue_robot/arm_base/magnet_mount.jpg)

![alt text](/assets/images/pet_rescue_robot/arm_base/bottom_casing.jpg)

![alt text](/assets/images/pet_rescue_robot/encoder_placement.jpg)

- Magnetic Encoder mount
- Buck Converter 
- I2C mux/buffer pcb mount
- Precisely mounting encoder right under the dimetric magnet

## Minor Contributions
### Helping roller for the basket deployment mechanism

### Designing IR mounts

- Needed to extend a little for lazy suzan to freely rotate.
- Better looking by hiding the wires


# Other key Components

## Line-Following

## Chassis Layout

<div style="display: flex; gap: 1px; justify-content: center;">
<img src="/assets/images/pet_rescue_robot/chassis/chassis_layout_sketch.jpg" alt="alt text" style="max-width: 45%; height: auto;">
<img src="/assets/images/pet_rescue_robot/chassis/chassis_layout.PNG" alt="alt text" style="max-width: 45%; height: auto;">
</div>

## Basket Lifting / Deploying Mechanism

## Other Custom PCBs and Mother Board

<div style="display: flex; gap: 1px; justify-content: center;">
<img src="/assets/images/pet_rescue_robot/other_pcbs/h_bridge_3d.png" alt="alt text" style="max-width: 25%; height: auto;">
<img src="/assets/images/pet_rescue_robot/other_pcbs/encoder_3d.png" alt="alt text" style="max-width: 25%; height: auto;">
<img src="/assets/images/pet_rescue_robot/other_pcbs/reflectance_3d.png" alt="alt text" style="max-width: 25%; height: auto;">
</div>

- H bridge
- magnetic encoder
- IR sensor

<div style="display: flex; gap: 1px; justify-content: center;">
<img src="/assets/images/pet_rescue_robot/other_pcbs/mother_schematics.png" alt="alt text" style="max-width: 35%; height: auto;">
<img src="/assets/images/pet_rescue_robot/mother.jpg" alt="alt text" style="max-width: 35%; height: auto;">
</div>

## Software
Developed on ESP32 Pico in C++ with the use of FreeRTOS.

Finite State Machine
Arm inverse Kinematics


# Struggles During Integration

- ESP32 pico PWM working weird and had to see the source code
- H-bridge burning the day before comp. had spares 
- Detecting wall 
- PID base control <-- Should've used stepper with micro-steps


# Final Robot Design


![alt text](/assets/images/pet_rescue_robot/final_robot_prolly.jpg)

# Competition Result and Reflections

![alt text](/assets/images/pet_rescue_robot/group_pic.jpg)

- Unexpected things happen during integration
	- Thus each component has to be fabricated as quick as possible so we'll have time for integrating + debugging
	- Modular testing is important
- Software is important
- No last second changes like the x-sephamore
- Though the comp was devastating, we can confidently say we did our best and there's no regret. I learned a lot during this robot summer, and I realized how I enjoy building robots.