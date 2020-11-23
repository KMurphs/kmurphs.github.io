@ECHO OFF
@REM Usage: AddPostToReadMe.bat "[Gentle Introduction to Creational Design Patterns](https://kmurphs.github.io/posts/creational-patterns2)" "2020-11-19"


@REM Get Post Link and Title
SET post=%1
SET post=%post:"=%
SET post

@REM Get Post Date
SET date=%2
SET date=%date:"=%
SET date

@REM Set Variable for files to be used
SET tmpFile=tmp.md
SET srcFile=..\readme.md




@REM Copy old readme file into temporary file - line by line
FOR /F "delims=" %%i in ('type %srcFile%') DO (
  ECHO.%%i>>%tmpFile%

  @REM Insert new post just below the line |-|-|
  if "%%i"=="|-|-|" (
    CALL echo|SET /p="|%%post%%|%%date%%|">>%tmpFile%
    ECHO.>>%tmpFile%
  )
)



@REM Finalize and Cleanup
COPY /Y %tmpFile% %srcFile% 
DEL %tmpFile%


@REM Push to Master 
git add *
git commit -m "Added %post%"
git push origin gh-pages:master