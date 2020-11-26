@ECHO OFF
@REM Usage: AddPostToReadMe.bat "2020-11-19-creational-patterns.markdown"


@REM POST jekyll id
SET post=%1


@REM Read Title from post file
FOR /F "tokens=* USEBACKQ" %%i IN (`findstr title ..\_posts\%post%`) DO set title=%%i
set title=%title:title:  =%

@REM Extract Date
for /F "tokens=1-3 delims=-" %%a in ("%post%") do set date=%%a-%%b-%%c

@REM Extract permalink
call set permalink=%%post:%date%-=%%
set permalink=%permalink:.markdown=%




@REM Set Variable for files to be used
SET tmpFile=tmp.md
SET srcFile=..\readme.md




@REM Copy old readme file into temporary file - line by line
FOR /F "delims=" %%i in ('type %srcFile%') DO (
  ECHO.%%i>>%tmpFile%

  @REM Insert new title just below the line |-|-|
  if "%%i"=="|-|-|" (
    CALL echo|SET /p="|%%title%%|%%date%%|">>%tmpFile%
    ECHO.>>%tmpFile%
  )
)



@REM Finalize and Cleanup
COPY /Y %tmpFile% %srcFile% 
DEL %tmpFile%


@REM Push to Master 
cd ..
git add *
git commit -m "Added %post%"
git push origin gh-pages:master
cd scripts