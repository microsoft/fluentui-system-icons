package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WindowHeaderHorizontalOff20: ImageVector
  get() {
    if (_windowHeaderHorizontalOff20 != null) {
      return _windowHeaderHorizontalOff20!!
    }
    _windowHeaderHorizontalOff20 = fluentIcon(name = "Filled.WindowHeaderHorizontalOff20", 20f) {
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
          moveToRelative(11.906F, 13.32F)
          curveToRelative(-0.083F, 0.021F, -0.17F, 0.033F, -0.259F, 0.033F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(1.793F)
          lineToRelative(8.466F, 8.466F)
          close()
          moveTo(15.5F, 7.0F)
          verticalLineToRelative(6.379F)
          lineToRelative(1.475F, 1.475F)
          curveTo(16.991F, 14.738F, 17.0F, 14.62F, 17.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.38F, 3.0F, 5.262F, 3.009F, 5.146F, 3.025F)
          lineTo(9.121F, 7.0F)
          horizontalLineTo(15.5F)
          close()        
      }
    }
    return _windowHeaderHorizontalOff20!!
  }

private var _windowHeaderHorizontalOff20: ImageVector? = null
