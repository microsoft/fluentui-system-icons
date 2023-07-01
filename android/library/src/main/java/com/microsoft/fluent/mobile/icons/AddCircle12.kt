package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.AddCircle12: ImageVector
  get() {
    if (_addCircle12 != null) {
      return _addCircle12!!
    }
    _addCircle12 = fluentIcon(name = "Regular.AddCircle12", 12f) {
      materialPath {
          moveTo(6.0F, 3.5F)
          curveToRelative(0.23F, 0.0F, 0.417F, 0.187F, 0.417F, 0.417F)
          verticalLineToRelative(1.666F)
          horizontalLineToRelative(1.666F)
          curveTo(8.313F, 5.583F, 8.5F, 5.77F, 8.5F, 6.0F)
          curveToRelative(0.0F, 0.23F, -0.187F, 0.417F, -0.417F, 0.417F)
          horizontalLineTo(6.417F)
          verticalLineToRelative(1.666F)
          curveTo(6.417F, 8.313F, 6.23F, 8.5F, 6.0F, 8.5F)
          curveToRelative(-0.23F, 0.0F, -0.417F, -0.187F, -0.417F, -0.417F)
          verticalLineTo(6.417F)
          horizontalLineTo(3.917F)
          curveTo(3.687F, 6.417F, 3.5F, 6.23F, 3.5F, 6.0F)
          curveToRelative(0.0F, -0.23F, 0.187F, -0.417F, 0.417F, -0.417F)
          horizontalLineToRelative(1.666F)
          verticalLineTo(3.917F)
          curveTo(5.583F, 3.687F, 5.77F, 3.5F, 6.0F, 3.5F)
          close()
          moveTo(1.0F, 6.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          close()
          moveToRelative(5.0F, -4.167F)
          curveTo(3.699F, 1.833F, 1.833F, 3.7F, 1.833F, 6.0F)
          curveToRelative(0.0F, 2.301F, 1.866F, 4.167F, 4.167F, 4.167F)
          curveToRelative(2.301F, 0.0F, 4.167F, -1.866F, 4.167F, -4.167F)
          curveTo(10.167F, 3.699F, 8.3F, 1.833F, 6.0F, 1.833F)
          close()        
      }
    }
    return _addCircle12!!
  }

private var _addCircle12: ImageVector? = null
