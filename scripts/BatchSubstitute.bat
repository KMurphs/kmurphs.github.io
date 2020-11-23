@ECHO off

@REM SOURCE https://www.dostips.com/DtCodeBatchFiles.php#Batch.FindAndReplace
@REM This batch allows string substitution in a text file. It parses each line of a text file for a particular string and replaces it with another string.
@REM I.e. To replace all occurrences of "Yellow Submarine" in "color.txt" with "uboot" and put the output on the screen run:
@REM BatchSubstitute.bat "Yellow Submarine" uboot color.txt
@REM Or
@REM type color.txt|BatchSubstitute.bat "Yellow Submarine" uboot

@REM Optionally pipe the output into a new file, i.e.
@REM BatchSubstitute.bat "Yellow Submarine" uboot color.txt>newfile.txt
@REM Or
@REM type color.txt|BatchSubstitute.bat "Yellow Submarine" uboot>newfile.txt

@REM Note: Due to the nature of the FOR command and string substitution, the following known restrictions apply:
@REM Lines starting with "]" character will end up empty
@REM OldStr must not start with "*"
@REM Lines must not contain any of the following characters within a quoted string: "&<>|^"



@REM -- Prepare the Command Processor --
SETLOCAL ENABLEEXTENSIONS
SETLOCAL DISABLEDELAYEDEXPANSION

::BatchSubstitude - parses a File line by line and replaces a substring"
::syntax: BatchSubstitude.bat OldStr NewStr File
::          OldStr [in] - string to be replaced
::          NewStr [in] - string to replace with
::          File   [in] - file to be parsed
:$changed 20100115
:$source https://www.dostips.com

if "%~1"=="" findstr "^::" "%~f0"&GOTO:EOF
for /f "tokens=1,* delims=]" %%A in ('"type %3|find /n /v """') do (
    set "line=%%B"
    if defined line (
        call set "line=echo.%%line:%~1=%~2%%"
        for /f "delims=" %%X in ('"echo."%%line%%""') do %%~X
    ) ELSE echo.
)