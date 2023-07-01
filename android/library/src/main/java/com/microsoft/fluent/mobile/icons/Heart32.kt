package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Heart32: ImageVector
  get() {
    if (_heart32 != null) {
      return _heart32!!
    }
    _heart32 = fluentIcon(name = "Regular.Heart32", 32f) {
      materialPath {
          moveTo(3.384F, 7.13F)
          curveTo(6.356F, 2.96F, 12.55F, 2.957F, 15.53F, 7.123F)
          lineToRelative(0.465F, 0.65F)
          lineToRelative(0.417F, -0.593F)
          curveToRelative(2.955F, -4.195F, 9.16F, -4.236F, 12.17F, -0.081F)
          curveToRelative(2.098F, 2.895F, 1.854F, 6.87F, -0.583F, 9.485F)
          lineTo(16.732F, 28.681F)
          curveTo(16.543F, 28.884F, 16.278F, 29.0F, 16.0F, 29.0F)
          curveToRelative(-0.278F, 0.0F, -0.543F, -0.116F, -0.732F, -0.32F)
          lineTo(3.992F, 16.54F)
          curveToRelative(-2.41F, -2.595F, -2.664F, -6.526F, -0.608F, -9.41F)
          close()
          moveToRelative(10.52F, 1.155F)
          curveToRelative(-2.181F, -3.05F, -6.716F, -3.046F, -8.892F, 0.007F)
          curveToRelative(-1.504F, 2.11F, -1.318F, 4.988F, 0.446F, 6.887F)
          lineTo(16.002F, 26.53F)
          lineToRelative(10.534F, -11.31F)
          curveToRelative(1.785F, -1.917F, 1.964F, -4.829F, 0.427F, -6.95F)
          curveToRelative(-2.205F, -3.044F, -6.751F, -3.014F, -8.916F, 0.06F)
          lineToRelative(-1.229F, 1.744F)
          curveToRelative(-0.186F, 0.265F, -0.49F, 0.423F, -0.814F, 0.425F)
          curveToRelative(-0.324F, 0.0F, -0.628F, -0.155F, -0.817F, -0.419F)
          lineToRelative(-1.284F, -1.796F)
          close()        
      }
    }
    return _heart32!!
  }

private var _heart32: ImageVector? = null
