

@echo off

SET post=%1
echo %post%

@REM Read Title from post file
FOR /F "tokens=* USEBACKQ" %%i IN (`findstr title ..\_posts\%post%`) DO set title=%%i
set title=%title:title:  =%
set title=%title:"=%

@REM Extract Date
for /F "tokens=1-3 delims=-" %%a in ("%post%") do set date=%%a-%%b-%%c

@REM Extract permalink
call set permalink=%%post:%date%-=%%
set permalink=%permalink:.markdown=%


set post_link=[%title%](https://kmurphs.github.io/posts/%permalink%)

echo %post%
echo %date%
echo %permalink%
echo %title%
echo %post_link%