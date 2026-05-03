---
title: "Autonomous Clue Detect Robot"
description: "Autonomous clue detecting robot for the ENPH 353 competition. Worked in Gazebo/ROS simulation environment and implemented FSM integrating dual-lane PID drive, OCR CNN."
featured: true
priority: 4 
tags: [Gazebo, ROS, Python, FSM, OpenCV, OCR CNN, PID]
coverImage: /images/clue_detect_robot/pre_truck_detection.png
---

![Robot navigating the competition track](/images/clue_detect_robot/pre_truck_detection.png)

## Overview

The robot competed in pairs for ENPH 353 competition, PID driving a robot in Gazebo simulation on various surface conditions while reading clues placed along the track.  

My role:
- Finite State Machine (FSM)
- ROS nodes
- PID-driving
- CNN integration

Teammate's role:
- Clue detecting CNN 

Full report embedded at the bottom of the page. 

## Objectives

![Competition Environment](/images/clue_detect_robot/Competition_env.png)

Navigate a Gazebo simulation track autonomously, detect and read roadside clue boards, and submit the decoded clue text to a scoring server in real time.

## Gazebo and ROS

The simulation environment used ROS (Robot Operating System) with a custom Gazebo world. The robot received camera and odometry data via ROS topics and published velocity commands to navigate.

![ROS structure](/images/clue_detect_robot/ROS.png)

## Finite State Machine Structure

![FSM diagram](/images/clue_detect_robot/FSM.png)

The robot behavior was structured as a Finite State Machine with states for normal driving, intersection handling, pedestrian detection, clue detection, and homing.

## Dual-Line PID Control Algorithm
<figure class="side-by-side">
  <img src="/images/clue_detect_robot/drive_steep_right.jpg" alt="Drive steep right">
  <img src="/images/clue_detect_robot/drive_steep_left.jpg" alt="Drive steep left">
  <figcaption>Shifting reference line for steep curve</figcaption>
</figure>
 
On a dual-lane PID driving, the premise for a convential center line-following, **"the center of the robot being the absolute reference"**, does not work.
At the steep curve, the side-lane's centroid is close the center of the robot even though the centroid of the lane is way off to the side.
To account for this, I shifted the reference line from the center of the robot to the side depending on the y-coordinate of the centroid. 
The PID driving with this method worked so smoothly, that I had to add an intentional jitter to get clue board in the frame of the camera right after 90 degrees curve. 

## Controller GUI
![Qt GUI](/images/clue_detect_robot/Controller_GUI.png)

A Python Qt5 GUI was implemented to centralize all the controls, launch files, and PID drive and CNN debugging interfaces on a single window. This allowed us to control everything 
without switching 4+ terminal tabs, which resulted in significantly boosting our productivity 

## Clue Detection

![Letter extraction pipeline](/images/clue_detect_robot/letter_extraction_pipeline.png)

![Dataset sample](/images/clue_detect_robot/dataset.png)

A custom CNN was trained to classify individual characters extracted from clue boards. The pipeline:
1. Detect the board using color segmentation
2. Perspective-correct and crop the board
3. Segment individual characters
4. Classify each character with the CNN

![Confusion matrix](/images/clue_detect_robot/confusion.png)

## Competition Result

![Competition result (Kinda)](/images/clue_detect_robot/comp_result.png)

In the competition, our robot achieved an official score of 18 out of 57 in 240 simulation seconds. We tied
for 11th place out of 17 total teams. Unfortunately, our robot was not able to reliably see the
clue boards in frame while driving which caused unexpected bugs to occur.  

Running our robot again for demonstration purposes after our run, we were able to reach the tunnel and achieve a score of **38 points** in 187 simulation seconds.  
This was the best score out of all the teams that implemented PID-based driving, so I am happy about that.
As a team that developed a PID control system, I think it was very hard to implement Pure PID-based driving. Although it is simpler to start with, there are too many edge cases to efficiently design around. 

## Report

<div class="pdf-embed">
  <object data="/images/clue_detect_robot/ENPH353_Final_Report.pdf" type="application/pdf" width="100%" height="800px">
    <p>Your browser does not support embedded PDFs. <a href="/images/clue_detect_robot/ENPH353_Final_Report.pdf">Download the report.</a></p>
  </object>
</div>
