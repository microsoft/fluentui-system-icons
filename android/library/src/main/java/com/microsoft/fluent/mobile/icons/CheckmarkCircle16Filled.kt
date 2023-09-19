package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckmarkCircle16: ImageVector
  get() {
    if (_checkmarkCircle16 != null) {
      return _checkmarkCircle16!!
    }
    _checkmarkCircle16 = fluentIcon(name = "Filled.CheckmarkCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveToRelative(2.12F, 4.164F)
          lineTo(7.25F, 9.042F)
          lineTo(5.854F, 7.646F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.75F, 1.75F)
          curveToRelative(0.196F, 0.195F, 0.513F, 0.195F, 0.708F, 0.0F)
          lineToRelative(3.224F, -3.234F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.195F, -0.513F, -0.195F, -0.708F, 0.001F)
          close()        
      }
    }
    return _checkmarkCircle16!!
  }

private var _checkmarkCircle16: ImageVector? = null
