@echo off
title Something Mod Installer
echo ========================================0
echo   Something Mod - Windows Installer
echo ========================================
echo.
echo Dieser Installer bereitet die Dateien fuer Chrome/Brave vor.
echo.
echo 1. Der Mod-Ordner wird im Explorer geoeffnet.
echo 2. Dein Browser oeffnet die Erweiterungs-Seite.
echo.
pause

echo Offne Mod-Ordner...
start .
echo Offne Browser-Erweiterungen...
echo BITTE AKTIVIERE DEN ENTWICKLERMODUS UND KLICKE AUF 'ENTPACKTE ERWEITERUNG LADEN'
echo WAEHLE DEN DIREKTEN ORDNER AUS DEM DIE ZHP ENTPACKT WURDE
start chrome://extensions/
start brave://extensions/
echo.
echo Installation abgeschlossen! Waehle den aktuellen Ordner im Browser aus.
pause
