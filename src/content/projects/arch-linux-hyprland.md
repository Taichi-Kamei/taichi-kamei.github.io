---
title: "NixOS & Arch & Hyprland"
description: "My daily driving NixOS & Hyprland setup on a refurbished ThinkPad."
featured: true
priority: 2
tags: [Linux, NixOS, Arch, Hyprland, Wayland, Dotfiles, Neovim]
coverImage: /images/arch_hyprland/Hyprland.jpeg
---


## Current Setup

The theme for my ricing is **simple and daily drivable**.  
Most Hyprland setups online are visually astonishing, but I want to keep mine simple so that it doesn't bother myself while working.  

I use a QuickShell called the Dank Material Shell (DMS).  
This comes with a minimalistic waybar-like task bar as well as well designed control center GUI.  

<b><a href="https://github.com/Taichi-Kamei/nixos-config" target="_blank" rel="noopener noreferrer">NixOS Config Files</a></b>

![Fastfetch & DMS control GUI](/images/arch_hyprland/fastfetch&control.png)
![DMS Control Center](/images/arch_hyprland/dms_control.png)
![Neovim and yazi file manager on Tmux](/images/arch_hyprland/nvim_tmux_yazi.png)

## Initial Arch Setup

![](/images/arch_hyprland/early_ricing.jpg)

<figure class="side-by-side">
  <img src="/images/arch_hyprland/Initial_hyprland.jpeg" alt="Drive steep right">
  <img src="/images/arch_hyprland/current_ricing.jpg" alt="Drive steep left">
  <figcaption>Left: First day <br>   Right: A week into ricing</figcaption>
</figure>


## Arch Setup before switching to NixOS

<b><a href="https://github.com/Taichi-Kamei/dotfiles" target="_blank" rel="noopener noreferrer">Dotfile</a></b>
![Waybar, Rofi, nwg-dock](/images/arch_hyprland/current_setup.png)
![Logout Screen](/images/arch_hyprland/logout_screen.png)
![Typical ricing](/images/arch_hyprland/Ricing_like.png)
![Nvim with a cute cat background](/images/arch_hyprland/nvim_with_cat.png)


## Why Arch

- Used Xubuntu for the Autonomous Clue Detect Robot competition, and became comfortable with CLI tools
- Familiar with git and Unix commands from the summer
- Had a refurbished ThinkPad available and had a whole winter break
- Wanted to use Hyprland tiling manager because of its capability to automatically sort all windows.

## What I Learned

### Installation
- Storage partitioning with `fdisk`, EFI setup, bootloader configuration
- `lsblk` was very useful during the setup and also when I wanted to use an external HDD
- Had to install `sudo` manually 
- School WiFi (WPA Enterprise) setup was the hardest part of the setup and most time was spent on this

### Running Arch
- Less intimidating than expected, partly due to  prior experiences with Linux and Git from XUbuntu
- I can now say I use Arch btw

## Hyprland Experience

- **Kitty terminal**: Has image-protocol, but switched to Alacritty because the icon looked better and configuration is much easier than Kitty 
- **Keybindings and tiling**: Dramatically more efficient than macOS or Windows window management
- **Waybar**: Painful to configure initially, but learnt a bit of CSS throughout this experience 


## Switching to NixOS

### Why I switched to NixOS
Hyprland plugins like hyprexpo and split-monitor-workspace frequently breaks when I update Arch. 

I thought I can just not "sudo pacman -Syu", but what happened then was I installed new apps, which updated the dependency which Hyprland also uses, and could no longer use the feature on Hyprland.  

Similar things happened more than 3 times, and I thought it's time to switch to more stable distro with similar degree of freedom as what Arch provides.  

This led me to try NixOS, which has the largest packages repositories, and is stable once configured due to its declarative configuration and  the flake lock.

### Migrating to NixOS 

The first step I took was to create a basic NixOS setup on virtual machine so I can just clone the configured NixOS on the actual migration.  
What is good about this is that I can still use my Arch laptop and search online.

![Basic NixOS setups on a virtual machine](/images/arch_hyprland/nixos_vm.png)
 
While I was trying to configure Hyprland, I noticed that VM cannot do graphic intensive work, so I switched to SSD into the VM from Arch.

Getting used to the Nix syntax and understanding which files on config files do what took a lot of time, and it was definitely a big jump from before. But once I had a grasp of it, NixOS felt like the best distro.
![Clean NixOS configuration structure](/images/arch_hyprland/clean_declarative_structure.png)

This is the config files I ended up having, and I can't stop to be amazed by how this clean file tree builds the whole laptop. 

Using waybar, blueman-manager, iwgtk, btop, and other apps together worked fine, but it lacked integrity. I was thinking of making my own control center GUI, but it felt like too much to learn, so I decided to use DMS QuickShell instead. This Quickshell is simple and has everything I wanted, and now the setup feels more like a desktop manager with full integration.  


