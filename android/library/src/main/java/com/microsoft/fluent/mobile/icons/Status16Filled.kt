package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Status16: ImageVector
  get() {
    if (_status16 != null) {
      return _status16!!
    }
    _status16 = fluentIcon(name = "Filled.Status16", 16f) {
      materialPath {
          moveTo(14.354F, 1.647F)
          curveToRelative(-0.886F, -0.886F, -2.322F, -0.886F, -3.207F, 0.0F)
          lineToRelative(-4.25F, 4.25F)
          curveTo(6.841F, 5.95F, 6.8F, 6.018F, 6.775F, 6.092F)
          lineToRelative(-1.25F, 3.75F)
          curveToRelative(-0.06F, 0.18F, -0.013F, 0.378F, 0.12F, 0.512F)
          curveToRelative(0.134F, 0.134F, 0.333F, 0.18F, 0.512F, 0.12F)
          lineToRelative(3.75F, -1.25F)
          curveToRelative(0.074F, -0.024F, 0.14F, -0.065F, 0.196F, -0.12F)
          lineToRelative(4.25F, -4.25F)
          curveToRelative(0.885F, -0.886F, 0.885F, -2.322F, 0.0F, -3.207F)
          close()
          moveToRelative(-1.367F, 5.988F)
          curveTo(12.996F, 7.755F, 13.0F, 7.877F, 13.0F, 8.0F)
          curveToRelative(0.0F, 2.762F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.238F, -5.0F, -5.0F)
          curveToRelative(0.0F, -2.76F, 2.239F, -5.0F, 5.0F, -5.0F)
          curveToRelative(0.123F, 0.0F, 0.245F, 0.005F, 0.366F, 0.013F)
          lineTo(9.248F, 2.13F)
          curveTo(8.846F, 2.045F, 8.429F, 2.0F, 8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          curveToRelative(0.0F, -0.428F, -0.045F, -0.846F, -0.13F, -1.248F)
          lineToRelative(-0.883F, 0.883F)
          close()        
      }
    }
    return _status16!!
  }

private var _status16: ImageVector? = null
