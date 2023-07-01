package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Elevator20: ImageVector
  get() {
    if (_elevator20 != null) {
      return _elevator20!!
    }
    _elevator20 = fluentIcon(name = "Filled.Elevator20", 20f) {
      materialPath {
          moveTo(9.5F, 3.0F)
          horizontalLineTo(5.0F)
          curveTo(3.343F, 3.0F, 2.0F, 4.343F, 2.0F, 6.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(4.5F)
          verticalLineTo(3.0F)
          close()
          moveTo(5.646F, 7.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          lineTo(6.5F, 8.707F)
          verticalLineTo(11.5F)
          curveTo(6.5F, 11.776F, 6.276F, 12.0F, 6.0F, 12.0F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(8.707F)
          lineTo(4.854F, 9.353F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(1.5F, -1.5F)
          close()
          moveTo(10.5F, 16.0F)
          horizontalLineTo(15.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineToRelative(-4.5F)
          verticalLineToRelative(13.0F)
          close()
          moveToRelative(3.854F, -4.146F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineToRelative(0.646F, 0.646F)
          verticalLineTo(7.5F)
          curveTo(13.5F, 7.224F, 13.724F, 7.0F, 14.0F, 7.0F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(2.793F)
          lineToRelative(0.646F, -0.646F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-1.5F, 1.5F)
          close()        
      }
    }
    return _elevator20!!
  }

private var _elevator20: ImageVector? = null
