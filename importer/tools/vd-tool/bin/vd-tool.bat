@if "%DEBUG%" == "" @echo off
@rem ##########################################################################
@rem
@rem  vd-tool startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..

@rem Add default JVM options here. You can also use JAVA_OPTS and VD_TOOL_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS=

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto init

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto init

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:init
@rem Get command-line arguments, handling Windows variants

if not "%OS%" == "Windows_NT" goto win9xME_args

:win9xME_args
@rem Slurp the command line arguments.
set CMD_LINE_ARGS=
set _SKIP=2

:win9xME_args_slurp
if "x%~1" == "x" goto execute

set CMD_LINE_ARGS=%*

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\vd-tool.jar;%APP_HOME%\lib\sdk-common-26.2.0-dev.jar;%APP_HOME%\lib\sdklib-26.2.0-dev.jar;%APP_HOME%\lib\builder-test-api-3.2.0-dev.jar;%APP_HOME%\lib\builder-model-3.2.0-dev.jar;%APP_HOME%\lib\ddmlib-26.2.0-dev.jar;%APP_HOME%\lib\bcpkix-jdk15on-1.56.jar;%APP_HOME%\lib\bcprov-jdk15on-1.56.jar;%APP_HOME%\lib\repository-26.2.0-dev.jar;%APP_HOME%\lib\layoutlib-api-26.2.0-dev.jar;%APP_HOME%\lib\dvlib-26.2.0-dev.jar;%APP_HOME%\lib\common-26.2.0-dev.jar;%APP_HOME%\lib\kotlin-stdlib-jdk8-1.2.71.jar;%APP_HOME%\lib\kotlin-reflect-1.2.0.jar;%APP_HOME%\lib\protobuf-java-3.4.0.jar;%APP_HOME%\lib\javax.inject-1.jar;%APP_HOME%\lib\gson-2.8.0.jar;%APP_HOME%\lib\commons-compress-1.12.jar;%APP_HOME%\lib\httpmime-4.5.2.jar;%APP_HOME%\lib\httpclient-4.5.2.jar;%APP_HOME%\lib\httpcore-4.4.5.jar;%APP_HOME%\lib\annotations-26.2.0-dev.jar;%APP_HOME%\lib\kxml2-2.3.0.jar;%APP_HOME%\lib\kotlin-stdlib-jdk7-1.2.71.jar;%APP_HOME%\lib\kotlin-stdlib-1.2.71.jar;%APP_HOME%\lib\annotations-13.0.jar;%APP_HOME%\lib\javax.activation-1.2.0.jar;%APP_HOME%\lib\jaxb-runtime-2.2.11.jar;%APP_HOME%\lib\jimfs-1.1.jar;%APP_HOME%\lib\guava-23.0.jar;%APP_HOME%\lib\jaxb-core-2.2.11.jar;%APP_HOME%\lib\stax-ex-1.7.7.jar;%APP_HOME%\lib\FastInfoset-1.2.13.jar;%APP_HOME%\lib\commons-logging-1.2.jar;%APP_HOME%\lib\commons-codec-1.9.jar;%APP_HOME%\lib\jaxb-api-2.2.12-b140109.1041.jar;%APP_HOME%\lib\txw2-2.2.11.jar;%APP_HOME%\lib\istack-commons-runtime-2.21.jar;%APP_HOME%\lib\kotlin-stdlib-common-1.2.71.jar;%APP_HOME%\lib\jsr305-1.3.9.jar;%APP_HOME%\lib\error_prone_annotations-2.0.18.jar;%APP_HOME%\lib\j2objc-annotations-1.1.jar;%APP_HOME%\lib\animal-sniffer-annotations-1.14.jar

@rem Execute vd-tool
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %VD_TOOL_OPTS%  -classpath "%CLASSPATH%" com.android.ide.common.vectordrawable.VdCommandLineTool %CMD_LINE_ARGS%

:end
@rem End local scope for the variables with windows NT shell
if "%ERRORLEVEL%"=="0" goto mainEnd

:fail
rem Set variable VD_TOOL_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
if  not "" == "%VD_TOOL_EXIT_CONSOLE%" exit 1
exit /b 1

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
