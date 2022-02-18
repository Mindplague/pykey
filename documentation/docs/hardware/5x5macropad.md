---
id: 5x5macropad
title: Raspberry Pi Pico 5x5 Macropad
sidebar_label: 5x5 Macropad
---

Coming Soon!

Buy it on [Tindie](https://www.tindie.com/products/jpconstantineau/raspberry-pi-pico-5x5-macropad/)

## Description


## Entering the Bootloader & flashing CircuitPython

* [Download CircuitPython UF2 file](https://circuitpython.org/board/raspberry_pi_pico/)
* Enter the bootloader by pressing the reset switch while holding Boot switch pressed
* Copy the UF2 file to the RPI drive.

## Firmware

You need to download the Adafruit CircuitPython Bundle 7.x from the [CircuitPython Libraries page](https://circuitpython.org/libraries).

Uncompress it and copy the library called `adafruit_hid` (folder) and the `neopixel.mpy` (file) to the lib folder of your macropad.

### Code
Copy the following to `code.py`

``` python
# SPDX-FileCopyrightText: 2021 Pierre Constantineau
# SPDX-License-Identifier: MIT
# Raspberry Pi Pico 4x4 Macropad 
"""
    Code adapted from the following sources:
    MACROPAD Hotkey (https://learn.adafruit.com/macropad-hotkeys/project-code)
    Pico Four Keypad  (https://learn.adafruit.com/pico-four-key-macropad/code-the-four-keypad)
"""
import board
import keypad
import usb_hid
from adafruit_hid.keyboard import Keyboard
from adafruit_hid.keycode import Keycode
from adafruit_hid.keyboard_layout_us import KeyboardLayoutUS

kpd = Keyboard(usb_hid.devices)
keyboard_layout = KeyboardLayoutUS(kpd)

# define keys for 4x4 v2
keys = keypad.Keys(
    pins=(  board.GP3, board.GP4,  board.GP21, board.GP22,  
            board.GP6, board.GP5,  board.GP20, board.GP19,
            board.GP7, board.GP8,  board.GP17, board.GP18,
            board.GP10,board.GP9,  board.GP16, board.GP15, 
          ),
    value_when_pressed=False
)


keymap = [
    ("Select all", [Keycode.LEFT_CONTROL, Keycode.A]),
    ("Cut", [Keycode.LEFT_CONTROL, Keycode.X]),
    ("Copy", [Keycode.LEFT_CONTROL, Keycode.C]),
    ("Paste", [Keycode.LEFT_CONTROL, Keycode.V]),
    ("Hello World", "Hello World"),
    ("Cut", [Keycode.LEFT_CONTROL, Keycode.X]),
    ("Copy", [Keycode.LEFT_CONTROL, Keycode.C]),
    ("Paste", [Keycode.LEFT_CONTROL, Keycode.V]),
    ("Select all", [Keycode.LEFT_CONTROL, Keycode.A]),
    ("Cut", [Keycode.LEFT_CONTROL, Keycode.X]),
    ("Copy", [Keycode.LEFT_CONTROL, Keycode.C]),
    ("Paste", [Keycode.LEFT_CONTROL, Keycode.V]),
    ("Select all", [Keycode.LEFT_CONTROL, Keycode.A]),
    ("Cut", [Keycode.LEFT_CONTROL, Keycode.X]),
    ("Copy", [Keycode.LEFT_CONTROL, Keycode.C]),
    ("Paste", [Keycode.LEFT_CONTROL, Keycode.V])
]

print("keymap:")
for key in keymap:
    print("\t", key[0])

while True:
    key_event = keys.events.get()
    if key_event:  
        if key_event.pressed:
            print(keymap[key_event.key_number][0])
            sequence = keymap[key_event.key_number][1]
            for item in sequence:
                if isinstance(item, int):
                    if item >= 0:
                        kpd.press(item)
                    else:
                        kpdrelease(-item)
                else:
                    keyboard_layout.write(item)
        else:
            # Release any still-pressed modifier keys
            for item in sequence:
                if isinstance(item, int) and item >= 0:
                    kpd.release(item)
```


## Pinout

## PCB

### Top of PCB

<img src="http://pykey.jpconstantineau.com/img/5x5picov1top.svg" width="700" /> 

### Bottom of PCB

<img src="http://pykey.jpconstantineau.com/img/5x5picov1bottom.svg" width="700" /> 

## Schematic

## Build Guide


[![I sell on Tindie](https://d2ss6ovg47m0r5.cloudfront.net/badges/tindie-mediums.png)](https://www.tindie.com/stores/jpconstantineau/?ref=offsite_badges&utm_source=sellers_jpconstantineau&utm_medium=badges&utm_campaign=badge_medium)
