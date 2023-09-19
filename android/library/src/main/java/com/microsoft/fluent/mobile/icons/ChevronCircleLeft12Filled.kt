package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronCircleLeft12: ImageVector
  get() {
    if (_chevronCircleLeft12 != null) {
      return _chevronCircleLeft12!!
    }
    _chevronCircleLeft12 = fluentIcon(name = "Filled.ChevronCircleLeft12", 12f) {
      materialPath {
          moveTo(11.0F, 6.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveTo(1.0F, 8.761F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          close()
          moveTo(6.146F, 7.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(5.707F, 6.0F)
          lineToRelative(1.147F, -1.146F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.5F, 1.5F)
          close()        
      }
    }
    return _chevronCircleLeft12!!
  }

private var _chevronCircleLeft12: ImageVector? = null
