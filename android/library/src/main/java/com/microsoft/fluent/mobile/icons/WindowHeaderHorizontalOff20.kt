package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.WindowHeaderHorizontalOff20: ImageVector
  get() {
    if (_windowHeaderHorizontalOff20 != null) {
      return _windowHeaderHorizontalOff20!!
    }
    _windowHeaderHorizontalOff20 = fluentIcon(name = "Regular.WindowHeaderHorizontalOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(3.415F, 4.12F)
          curveTo(3.152F, 4.516F, 3.0F, 4.991F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.51F, 0.0F, 0.983F, -0.152F, 1.379F, -0.414F)
          lineToRelative(1.267F, 1.268F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveToRelative(12.294F, 13.707F)
          curveTo(14.95F, 15.948F, 14.732F, 16.0F, 14.5F, 16.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 16.0F, 4.0F, 15.328F, 4.0F, 14.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(2.293F)
          lineToRelative(8.854F, 8.854F)
          close()
          moveTo(16.0F, 7.0F)
          verticalLineToRelative(6.879F)
          lineToRelative(0.975F, 0.975F)
          curveTo(16.991F, 14.738F, 17.0F, 14.62F, 17.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.38F, 3.0F, 5.262F, 3.009F, 5.146F, 3.025F)
          lineTo(9.121F, 7.0F)
          horizontalLineTo(16.0F)
          close()        
      }
    }
    return _windowHeaderHorizontalOff20!!
  }

private var _windowHeaderHorizontalOff20: ImageVector? = null
