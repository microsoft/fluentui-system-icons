package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DismissCircle12: ImageVector
  get() {
    if (_dismissCircle12 != null) {
      return _dismissCircle12!!
    }
    _dismissCircle12 = fluentIcon(name = "Filled.DismissCircle12", 12f) {
      materialPath {
          moveTo(6.0F, 11.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveTo(8.761F, 1.0F, 6.0F, 1.0F)
          reflectiveCurveTo(1.0F, 3.239F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()
          moveToRelative(1.854F, -6.854F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(6.707F, 6.0F)
          lineToRelative(1.147F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(6.0F, 6.707F)
          lineTo(4.854F, 7.854F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(5.293F, 6.0F)
          lineTo(4.146F, 4.854F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(6.0F, 5.293F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _dismissCircle12!!
  }

private var _dismissCircle12: ImageVector? = null
