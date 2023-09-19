package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SearchSquare20: ImageVector
  get() {
    if (_searchSquare20 != null) {
      return _searchSquare20!!
    }
    _searchSquare20 = fluentIcon(name = "Filled.SearchSquare20", 20f) {
      materialPath {
          moveTo(9.0F, 11.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveTo(10.38F, 6.5F, 9.0F, 6.5F)
          reflectiveCurveTo(6.5F, 7.62F, 6.5F, 9.0F)
          reflectiveCurveToRelative(1.12F, 2.5F, 2.5F, 2.5F)
          close()
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(6.0F, 6.5F)
          curveToRelative(0.786F, 0.0F, 1.512F, -0.26F, 2.096F, -0.697F)
          lineToRelative(2.55F, 2.55F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.195F, 0.196F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-2.55F, -2.55F)
          curveTo(12.241F, 10.512F, 12.5F, 9.786F, 12.5F, 9.0F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          reflectiveCurveTo(5.5F, 7.067F, 5.5F, 9.0F)
          reflectiveCurveToRelative(1.567F, 3.5F, 3.5F, 3.5F)
          close()        
      }
    }
    return _searchSquare20!!
  }

private var _searchSquare20: ImageVector? = null
