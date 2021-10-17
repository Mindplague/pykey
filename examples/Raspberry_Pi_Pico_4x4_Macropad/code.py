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

# define keys for 4x4 v1
keys = keypad.KeyMatrix(
    row_pins=(board.GP0, board.GP1, board.GP2, board.GP3),
    column_pins=(board.GP4, board.GP5, board.GP6, board.GP7),
    columns_to_anodes=True,
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
    ("Paste", [Keycode.LEFT_CONTROL, Keycode.V]),
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
