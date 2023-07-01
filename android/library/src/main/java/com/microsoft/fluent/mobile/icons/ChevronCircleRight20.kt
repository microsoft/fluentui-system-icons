package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronCircleRight20: ImageVector
  get() {
    if (_chevronCircleRight20 != null) {
      return _chevronCircleRight20!!
    }
    _chevronCircleRight20 = fluentIcon(name = "Regular.ChevronCircleRight20", 20f) {
      materialPath {
          moveTo(10.0F, 17.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          close()
          moveToRelative(-8.0F, -7.0F)
          curveToRelative(0.0F, 4.418F, 3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          close()
          moveToRelative(6.146F, 3.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.5F, -3.5F)
          curveTo(12.448F, 10.26F, 12.5F, 10.133F, 12.5F, 10.0F)
          curveToRelative(0.0F, -0.133F, -0.053F, -0.26F, -0.146F, -0.354F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineTo(11.293F, 10.0F)
          lineToRelative(-3.146F, 3.146F)
          close()        
      }
    }
    return _chevronCircleRight20!!
  }

private var _chevronCircleRight20: ImageVector? = null
