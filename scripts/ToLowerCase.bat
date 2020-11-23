@echo off

@REM https://stackoverflow.com/a/29118785/9034699

echo>%Temp%\%1
dir /b/l %Temp%\%1>%Temp%\lower.tmp
set /p result=<%Temp%\lower.tmp
del %Temp%\%1
del %Temp%\lower.tmp
echo %result%