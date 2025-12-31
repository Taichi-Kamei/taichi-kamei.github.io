---
layout: projects
title: Autonomous Pet-Rescue Robot
---

![alt text](/assets/images/pet_rescue_robot/comp_init.jpg)

* TOC
{:toc}


# Objectives

- Pet-rescue
- Competition rules
- Limitations: height, width

# Brainstorming


![alt text](/assets/images/pet_rescue_robot/brainstorming/hebb6_discussing.jpg)

![alt text](/assets/images/pet_rescue_robot/brainstorming/arm_base_discuss.jpg)

![alt text](/assets/images/pet_rescue_robot/brainstorming/bucket_discuss.jpg)

![alt text](/assets/images/pet_rescue_robot/brainstorming/detect_cv_height.jpg)

# Initial Design

![alt text](/assets/images/pet_rescue_robot/brainstorming/chassis_layout_sketch.jpg)


![alt text](/assets/images/pet_rescue_robot/brainstorming/arm_clean_sketch.jpg)

# Major Contributions

## Arm / Arm Base Design

- desmos
- referenced arm
- cad
- midway arm
- final arm

- Sandwiching with Delrin and PMMA
- Use brushed DC motor and magnetic encoder PID for rotation
- Section view
- Major
- Major Issue with sandwiching mechanism running 80% duty cycle and yet struggled
- Solution

- Gif of arm movement or maybe youtube clip

## LiDAR Detection Algorithm

- VL5C5CX 2D Lidar
- General Algorithm
- Development on Rpi and Python
- Implementation in cpp with ESP
- FreeRTOS and ran on different core

## I2C multiplexer & I2C Buffer Custom PCB

- Why we needed multiplexer and buffer
- Kicad design
- Some issues with the wiring

## Circuitry Casing 

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

## Basket Lifting / Deploying Mechanism

## H-Bridge Custom PCB

## Magnetic Encoder Custom PCB

## Mother Board

## Software

### Finite State Machine

### Arm inverse Kinematics


# Struggles During Integration

- ESP32 pico PWM working weird and had to see the source code
- H-bridge burning the day before comp. had spares 
- Detecting wall 
- PID base control <-- Should've used stepper with micro-steps


# Final Robot Design


# Competition Result and Reflections

![alt text](/assets/images/pet_rescue_robot/group_pic.jpg)

- Unexpected things happen during integration
	- Thus each component has to be fabricated as quick as possible so we'll have time for integrating + debugging
	- Modular testing is important
- Software is important
- No last second changes like the x-sephamore
- Though the comp was devastating, we can confidently say we did our best and there's no regret. I learned a lot during this robot summer, and I realized how I enjoy building robots.