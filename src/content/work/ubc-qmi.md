---
role: "Firmware & Validation Engineer Co-op"
company: "UBC Quantum Matter Institute"
period: "May 2026 - Present"
priority: 1
---

- Developing full-stack embedded firmware for the multi-channel low-noise SNSPD biasing quasi-current source (voltage controlled with current readback) in C++, achieving lower noise spectral density than commercial SMU
- Designed an active object architecture on ESP32 with ESP-IDF, FreeRTOS, dual-core task isolation, inter-core queue communication, and event coordination for deterministic concurrent per-channel control
- Developed bidirectional V-I sweep measurement mode with hysteresis to characterize the switching current of the superconducting nanowire used for identifying a SNSPD steady biasing current
- Designed programmable steady-state biasing mode with configurable voltage and duration for SNSPD operating point control
- Porting Analog Devices no-OS ADC/DAC drivers to ESP-IDF, implementing SPI/GPIO platform abstraction layer
- Building Python Remi GUI and CSV data logger for per-channel user control and data analysis
- Testing and verifying the noise floor, negative rail voltage noise, time domain voltage drift characteristics, and DAC & ADC accuracy of the instrument using oscilloscope and pico-ammeter
- Designing a current source PCB casing on SolidWorks, reducing vibrational noise coupling into the PCB
