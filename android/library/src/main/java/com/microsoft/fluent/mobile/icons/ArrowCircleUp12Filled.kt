package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleUp12: ImageVector
  get() {
    if (_arrowCircleUp12 != null) {
      return _arrowCircleUp12!!
    }
    _arrowCircleUp12 = fluentIcon(name = "Filled.ArrowCircleUp12", 12f) {
      materialPath {
          moveTo(1.0F, 6.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          close()
          moveToRelative(2.647F, -0.098F)
          curveToRelative(0.195F, 0.196F, 0.511F, 0.196F, 0.707F, 0.0F)
          lineTo(5.5F, 4.756F)
          verticalLineTo(8.5F)
          curveTo(5.5F, 8.776F, 5.724F, 9.0F, 6.0F, 9.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(4.756F)
          lineToRelative(1.146F, 1.146F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-2.0F, -2.0F)
          curveTo(6.158F, 3.0F, 5.841F, 3.0F, 5.646F, 3.195F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          close()        
      }
    }
    return _arrowCircleUp12!!
  }

private var _arrowCircleUp12: ImageVector? = null
