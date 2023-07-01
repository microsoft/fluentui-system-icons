package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronCircleLeft16: ImageVector
  get() {
    if (_chevronCircleLeft16 != null) {
      return _chevronCircleLeft16!!
    }
    _chevronCircleLeft16 = fluentIcon(name = "Filled.ChevronCircleLeft16", 16f) {
      materialPath {
          moveTo(8.0F, 14.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          close()
          moveToRelative(0.646F, -8.854F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.708F)
          lineTo(7.208F, 8.0F)
          lineToRelative(2.147F, -2.146F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          close()        
      }
    }
    return _chevronCircleLeft16!!
  }

private var _chevronCircleLeft16: ImageVector? = null
