import cx_Freeze
import sys
import os
base = None

if sys.platform == 'win64':
    base = 'Win64GUI'


executables = [cx_Freeze.Executable('main.py',base=base )]

cx_Freeze.setup(
    name = 'eyes',
    options = {"build_exe":{"packages":["tkinter","os"]}},
    version = "1.00",
    description = 'yo',
    executables = executables
)