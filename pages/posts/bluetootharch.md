---
title: Bluetooth In Linux
date: 2023/01/10
description: How to get Bluetooth to work in linux
tag: linux, bluetooth, arch linux
author: Arsh Mehta
---

## How to use bluetooth in Linux

#### To use bluetooth in Linux first of all **btusb** kernel module must be loaded.

#### It can be checked by running the following command

```
modinfo btusb
```

#### If it is not loaded then it can be loaded by running

```
modprobe btusb
```

Note: If you have updated your system recently and haven't rebooted you may have to reboot as sometimes you may get the error file not found. This happens because when your kernel is updated modprobe may be looking in the wrong location and cannot find the module you are trying to load.

#### After loading the module, the next step is installing bluez

In arch linux it can be installed with

```
sudo pacman -S bluez
```

#### You may also want to install bluez-utils if you want bluetoothctl

It can be installed with

```
sudo pacman -S bluez-utils
```

#### After all of this you have to enable bluetooth.service

It can be enabled and started with

```
sudo systemctl enable bluetooth.service
sudo systemctl start bluetooth.service
```

#### After this you have to install a frontend for bluetooth

You can use **bluetoothctl** for cli or **blueman** if you want gui

#### If you want to use a bluetooth headset

If you use **pipewire** which is a replacement for pulseaudio it already had built-in bluetooth support.

In pulse audio you have to load some modules for bluetooth to work

In `/etc/pulse/system.pa`
Add these lines

```
load-module module-bluetooth-policy
load-module module-bluetooth-discover
```

You can also add

```
load-module module-switch-on-connect
```

if you want to auto-switch all audio to bluetooth headset

#### Now after all of this bluetooth should work in your system

For more details refer to the [ArchWiki](https://wiki.archlinux.org/title/bluetooth)
