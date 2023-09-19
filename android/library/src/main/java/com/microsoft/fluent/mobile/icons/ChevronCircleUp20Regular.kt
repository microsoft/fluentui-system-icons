package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronCircleUp20: ImageVector
  get() {
    if (_chevronCircleUp20 != null) {
      return _chevronCircleUp20!!
    }
    _chevronCircleUp20 = fluentIcon(name = "Regular.ChevronCircleUp20", 20f) {
      materialPath {
          moveTo(3.0F, 10.0F)
          curveToRelative(0.0F, 3.866F, 3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          close()
          moveToRelative(7.0F, 8.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          close()
          moveToRelative(-3.146F, -6.146F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(3.5F, -3.5F)
          curveTo(9.74F, 7.553F, 9.867F, 7.5F, 10.0F, 7.5F)
          curveToRelative(0.133F, 0.0F, 0.26F, 0.053F, 0.354F, 0.146F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(10.0F, 8.707F)
          lineToRelative(-3.146F, 3.147F)
          close()        
      }
    }
    return _chevronCircleUp20!!
  }

private var _chevronCircleUp20: ImageVector? = null
