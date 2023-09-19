package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlashlightOff20: ImageVector
  get() {
    if (_flashlightOff20 != null) {
      return _flashlightOff20!!
    }
    _flashlightOff20 = fluentIcon(name = "Filled.FlashlightOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(15.0F, 15.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveToRelative(13.94F, 9.267F)
          lineTo(15.706F, 12.5F)
          lineTo(7.5F, 4.293F)
          lineToRelative(1.085F, -1.086F)
          curveToRelative(0.781F, -0.781F, 2.048F, -0.781F, 2.829F, 0.0F)
          lineToRelative(5.378F, 5.379F)
          curveToRelative(0.781F, 0.78F, 0.781F, 2.047F, 0.0F, 2.828F)
          close()
          moveTo(6.792F, 9.0F)
          lineTo(11.0F, 13.207F)
          lineToRelative(-4.086F, 4.086F)
          curveToRelative(-0.781F, 0.781F, -2.047F, 0.781F, -2.828F, 0.0F)
          lineToRelative(-1.38F, -1.379F)
          curveToRelative(-0.78F, -0.78F, -0.78F, -2.047F, 0.0F, -2.828F)
          lineTo(6.794F, 9.0F)
          close()
          moveToRelative(0.06F, 4.854F)
          lineToRelative(1.0F, -1.0F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          lineToRelative(-1.0F, 1.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _flashlightOff20!!
  }

private var _flashlightOff20: ImageVector? = null
