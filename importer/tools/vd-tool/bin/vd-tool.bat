@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem

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

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and VD_TOOL_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS=

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto execute

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\vd-tool.jar;%APP_HOME%\lib\sdk-common-31.10.0.jar;%APP_HOME%\lib\sdklib-31.10.0.jar;%APP_HOME%\lib\repository-31.10.0.jar;%APP_HOME%\lib\shared-31.10.0.jar;%APP_HOME%\lib\ddmlib-31.10.0.jar;%APP_HOME%\lib\layoutlib-api-31.10.0.jar;%APP_HOME%\lib\dvlib-31.10.0.jar;%APP_HOME%\lib\common-31.10.0.jar;%APP_HOME%\lib\annotations-31.10.0.jar;%APP_HOME%\lib\aapt2-proto-8.10.0-12782657.jar;%APP_HOME%\lib\gson-2.11.0.jar;%APP_HOME%\lib\jimfs-1.1.jar;%APP_HOME%\lib\guava-33.3.1-jre.jar;%APP_HOME%\lib\protos-31.10.0.jar;%APP_HOME%\lib\protobuf-java-3.25.5.jar;%APP_HOME%\lib\javax.inject-1.jar;%APP_HOME%\lib\kxml2-2.3.0.jar;%APP_HOME%\lib\commons-compress-1.21.jar;%APP_HOME%\lib\bcpkix-jdk18on-1.79.jar;%APP_HOME%\lib\bcutil-jdk18on-1.79.jar;%APP_HOME%\lib\bcprov-jdk18on-1.79.jar;%APP_HOME%\lib\jaxb-runtime-2.3.2.jar;%APP_HOME%\lib\kotlin-reflect-2.1.0.jar;%APP_HOME%\lib\kotlin-stdlib-jdk7-2.1.0.jar;%APP_HOME%\lib\kotlin-stdlib-2.1.0.jar;%APP_HOME%\lib\kotlin-stdlib-jdk8-2.1.0.jar;%APP_HOME%\lib\jna-platform-5.6.0.jar;%APP_HOME%\lib\annotations-23.0.0.jar;%APP_HOME%\lib\httpmime-4.5.6.jar;%APP_HOME%\lib\httpclient-4.5.6.jar;%APP_HOME%\lib\httpcore-4.4.16.jar;%APP_HOME%\lib\error_prone_annotations-2.28.0.jar;%APP_HOME%\lib\failureaccess-1.0.2.jar;%APP_HOME%\lib\listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar;%APP_HOME%\lib\jsr305-3.0.2.jar;%APP_HOME%\lib\checker-qual-3.43.0.jar;%APP_HOME%\lib\j2objc-annotations-3.0.0.jar;%APP_HOME%\lib\stax-ex-1.8.1.jar;%APP_HOME%\lib\jakarta.xml.bind-api-2.3.2.jar;%APP_HOME%\lib\txw2-2.3.2.jar;%APP_HOME%\lib\istack-commons-runtime-3.0.8.jar;%APP_HOME%\lib\FastInfoset-1.2.16.jar;%APP_HOME%\lib\jakarta.activation-api-1.2.1.jar;%APP_HOME%\lib\jna-5.6.0.jar;%APP_HOME%\lib\javax.activation-1.2.0.jar;%APP_HOME%\lib\commons-logging-1.2.jar;%APP_HOME%\lib\commons-codec-1.10.jar


@rem Execute vd-tool
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %VD_TOOL_OPTS%  -classpath "%CLASSPATH%" com.android.ide.common.vectordrawable.VdCommandLineTool %*

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
