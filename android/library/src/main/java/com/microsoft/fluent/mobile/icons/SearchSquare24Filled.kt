package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SearchSquare24: ImageVector
  get() {
    if (_searchSquare24 != null) {
      return _searchSquare24!!
    }
    _searchSquare24 = fluentIcon(name = "Filled.SearchSquare24", 24f) {
      materialPath {
          moveTo(11.0F, 14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          close()
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(8.0F, 9.25F)
          curveToRelative(0.972F, 0.0F, 1.872F, -0.308F, 2.607F, -0.832F)
          lineToRelative(2.613F, 2.612F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.612F, -2.613F)
          curveTo(15.192F, 12.872F, 15.5F, 11.972F, 15.5F, 11.0F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          reflectiveCurveTo(6.5F, 8.515F, 6.5F, 11.0F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          close()        
      }
    }
    return _searchSquare24!!
  }

private var _searchSquare24: ImageVector? = null
