package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronCircleLeft20: ImageVector
  get() {
    if (_chevronCircleLeft20 != null) {
      return _chevronCircleLeft20!!
    }
    _chevronCircleLeft20 = fluentIcon(name = "Regular.ChevronCircleLeft20", 20f) {
      materialPath {
          moveTo(10.0F, 3.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          close()
          moveToRelative(8.0F, 7.0F)
          curveToRelative(0.0F, -4.418F, -3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          close()
          moveToRelative(-6.146F, -3.146F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveTo(7.553F, 9.74F, 7.5F, 9.867F, 7.5F, 10.0F)
          curveToRelative(0.0F, 0.133F, 0.053F, 0.26F, 0.146F, 0.354F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(8.707F, 10.0F)
          lineToRelative(3.147F, -3.146F)
          close()        
      }
    }
    return _chevronCircleLeft20!!
  }

private var _chevronCircleLeft20: ImageVector? = null
