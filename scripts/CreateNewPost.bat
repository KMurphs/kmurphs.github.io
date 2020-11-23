@ECHO OFF



@REM Usage CreateNewPost.bat "title" "permalink" "category-1 category-2"

@REM Handle Post Title
IF [%1]==[] (
  SET /p title="Enter Post Title: "
) ELSE (
  SET title=%1
)
SET title=%title:"=%


@REM Handle Post Permalink
IF "%2"=="" (
  SET permalink=%title%
) ELSE (
  SET permalink=%2
)
SET permalink=%permalink:"=%
SET permalink=%permalink: =-%

@REM Convert to lower case
echo>%Temp%\%permalink%
dir /b/l %Temp%\%permalink%>%Temp%\lower.tmp
set /p permalink=<%Temp%\lower.tmp
del %Temp%\%permalink%
del %Temp%\lower.tmp




@REM Handle Post Categories
IF "%3"=="" (
  SET categories="uncategorized"
) ELSE (
  SET categories=%3
)
SET categories=%categories:"=%

@REM Handle Author
SET author=Stephane Kibonge




@REM Get Year, month, day, hour, minute, second
FOR /F "skip=1 delims=" %%F in ('wmic PATH Win32_LocalTime GET Day^,Month^,Year^, Hour^, Minute^, Second /FORMAT:TABLE') DO (
  FOR /F "tokens=1-6" %%L in ("%%F") do (
    SET CurrDay=0%%L
    SET CurrHour=0%%M
    SET CurrMinute=0%%N
    SET CurrMonth=0%%O
    SET CurrSecond=0%%P
    SET CurrYear=%%Q
  )
)
SET CurrDay=%CurrDay:~-2%
SET CurrMonth=%CurrMonth:~-2%
SET CurrHour=%CurrHour:~-2%
SET CurrMinute=%CurrMinute:~-2%
SET CurrSecond=%CurrSecond:~-2%





@REM Get Time Zone
SYSTEMINFO | FINDSTR  /C:"Time Zone" > tmpFile
SET /p myvar= < tmpFile 
DEL tmpFile 
FOR /f "tokens=2 delims=()" %%a IN ("%myvar%") DO (
  SET tz=%%a
)
SET tz=%tz:~3,7%



@REM Create Post File
CD ..
SET post_file= _posts\%CurrYear%-%CurrMonth%-%CurrDay%-%permalink%.markdown
ECHO --- >%post_file%
ECHO layout: post >>%post_file%
ECHO title:  "%title%" >>%post_file%
ECHO date:   %CurrYear%-%CurrMonth%-%CurrDay% %CurrHour%:%CurrMinute%:%CurrSecond% %tz::=% >>%post_file%
ECHO categories: %categories% >>%post_file%
ECHO author: %author% >>%post_file%
ECHO --- >>%post_file%
CD scripts