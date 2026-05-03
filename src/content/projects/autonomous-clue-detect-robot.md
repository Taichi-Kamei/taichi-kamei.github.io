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

Full report embedded below. The robot competed in UBC's ENPH 353 competition, navigating a simulated environment while reading license-plate-style clues placed along the track.

## Report

<div class="pdf-embed">
  <object data="/images/clue_detect_robot/ENPH353_Final_Report.pdf" type="application/pdf" width="100%" height="800px">
    <p>Your browser does not support embedded PDFs. <a href="/images/clue_detect_robot/ENPH353_Final_Report.pdf">Download the report.</a></p>
  </object>
</div>

## Objectives

Navigate a Gazebo simulation track autonomously, detect and read roadside clue boards, and submit the decoded clue text to a scoring server in real time.

## Gazebo and ROS

The simulation environment used ROS (Robot Operating System) with a custom Gazebo world. The robot received camera and odometry data via ROS topics and published velocity commands to navigate.

## Finite State Machine Structure

![FSM diagram](/images/clue_detect_robot/Controller_GUI.png)

The robot behavior was structured as a Finite State Machine with states for normal driving, intersection handling, pedestrian detection, clue detection, and homing.

## Dual-Line PID Control Algorithm

![Tape edge detection](/images/clue_detect_robot/tape_edge.png)

Rather than single-line following, a dual-line PID tracked both edges of the track tape for more stable control — especially on steep inclines and tight turns.

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

![Competition result](/images/clue_detect_robot/comp_result.png)
