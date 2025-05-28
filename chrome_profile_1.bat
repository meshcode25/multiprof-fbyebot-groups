@echo off

REM Set Chrome executable path
set "chrome_path=C:\Program Files\Google\Chrome\Application\chrome.exe"

REM Set user data directory (persistent profile)
set "user_data_dir=%USERPROFILE%\AppData\Roaming\multiprofile-fbyebot-groups\fbyebotChromeProfiles\Profile 1"

REM Create the directory if it doesn't exist
if not exist "%user_data_dir%" (
    mkdir "%user_data_dir%"
)

REM Launch Chrome with custom user data dir
"%chrome_path%" ^
  --user-data-dir="%user_data_dir%" ^
  --no-first-run ^
  --no-default-browser-check ^
  --disable-popup-blocking ^
   about:blank

