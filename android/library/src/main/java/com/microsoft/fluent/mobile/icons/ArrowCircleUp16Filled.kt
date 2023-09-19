package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleUp16: ImageVector
  get() {
    if (_arrowCircleUp16 != null) {
      return _arrowCircleUp16!!
    }
    _arrowCircleUp16 = fluentIcon(name = "Filled.ArrowCircleUp16", 16f) {
      materialPath {
          moveTo(1.0F, 8.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          close()
          moveToRelative(6.809F, -3.462F)
          curveToRelative(-0.059F, 0.024F, -0.113F, 0.06F, -0.16F, 0.106F)
          lineTo(7.646F, 4.647F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(7.5F, 6.207F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(6.207F)
          lineToRelative(1.646F, 1.647F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-2.5F, -2.5F)
          lineTo(8.35F, 4.645F)
          curveTo(8.261F, 4.555F, 8.137F, 4.5F, 8.0F, 4.5F)
          curveToRelative(-0.068F, 0.0F, -0.132F, 0.013F, -0.191F, 0.038F)
          close()        
      }
    }
    return _arrowCircleUp16!!
  }

private var _arrowCircleUp16: ImageVector? = null
