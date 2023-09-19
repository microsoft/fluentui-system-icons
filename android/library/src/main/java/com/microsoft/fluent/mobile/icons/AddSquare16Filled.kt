package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AddSquare16: ImageVector
  get() {
    if (_addSquare16 != null) {
      return _addSquare16!!
    }
    _addSquare16 = fluentIcon(name = "Filled.AddSquare16", 16f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveTo(7.724F, 4.5F, 7.5F, 4.724F, 7.5F, 5.0F)
          verticalLineToRelative(2.5F)
          horizontalLineTo(5.0F)
          curveTo(4.724F, 7.5F, 4.5F, 7.724F, 4.5F, 8.0F)
          reflectiveCurveTo(4.724F, 8.5F, 5.0F, 8.5F)
          horizontalLineToRelative(2.5F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(8.5F)
          horizontalLineTo(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.276F, 7.5F, 11.0F, 7.5F)
          horizontalLineTo(8.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _addSquare16!!
  }

private var _addSquare16: ImageVector? = null
