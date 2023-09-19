package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarOff12: ImageVector
  get() {
    if (_starOff12 != null) {
      return _starOff12!!
    }
    _starOff12 = fluentIcon(name = "Filled.StarOff12", 12f) {
      materialPath {
          moveTo(1.853F, 1.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.706F, 0.0F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.706F)
          lineToRelative(2.082F, 2.083F)
          lineTo(1.685F, 4.16F)
          curveTo(1.03F, 4.255F, 0.768F, 5.06F, 1.242F, 5.524F)
          lineToRelative(1.8F, 1.754F)
          lineToRelative(-0.425F, 2.476F)
          curveToRelative(-0.112F, 0.653F, 0.574F, 1.152F, 1.16F, 0.843F)
          lineToRelative(2.224F, -1.169F)
          lineToRelative(2.223F, 1.169F)
          curveToRelative(0.484F, 0.254F, 1.034F, -0.039F, 1.15F, -0.515F)
          lineToRelative(0.772F, 0.772F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-9.0F, -9.0F)
          close()
          moveToRelative(8.906F, 4.377F)
          lineTo(9.182F, 7.061F)
          lineTo(4.75F, 2.628F)
          lineToRelative(0.535F, -1.082F)
          curveToRelative(0.293F, -0.595F, 1.14F, -0.595F, 1.434F, 0.0F)
          lineTo(7.83F, 3.799F)
          lineToRelative(2.486F, 0.36F)
          curveToRelative(0.656F, 0.096F, 0.918F, 0.902F, 0.443F, 1.365F)
          close()        
      }
    }
    return _starOff12!!
  }

private var _starOff12: ImageVector? = null
