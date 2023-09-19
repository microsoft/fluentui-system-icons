package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronCircleDown16: ImageVector
  get() {
    if (_chevronCircleDown16 != null) {
      return _chevronCircleDown16!!
    }
    _chevronCircleDown16 = fluentIcon(name = "Regular.ChevronCircleDown16", 16f) {
      materialPath {
          moveTo(3.0F, 8.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveToRelative(-5.0F, 2.239F, -5.0F, 5.0F)
          close()
          moveToRelative(5.0F, 6.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          close()
          moveToRelative(2.854F, -6.646F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(8.0F, 8.793F)
          lineToRelative(2.146F, -2.146F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          close()        
      }
    }
    return _chevronCircleDown16!!
  }

private var _chevronCircleDown16: ImageVector? = null
