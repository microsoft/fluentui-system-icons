package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Notebook32: ImageVector
  get() {
    if (_notebook32 != null) {
      return _notebook32!!
    }
    _notebook32 = fluentIcon(name = "Filled.Notebook32", 32f) {
      materialPath {
          moveTo(7.25F, 2.0F)
          curveTo(5.455F, 2.0F, 4.0F, 3.455F, 4.0F, 5.25F)
          verticalLineToRelative(21.5F)
          curveTo(4.0F, 28.545F, 5.455F, 30.0F, 7.25F, 30.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(5.25F)
          curveTo(27.0F, 3.455F, 25.545F, 2.0F, 23.75F, 2.0F)
          horizontalLineTo(7.25F)
          close()
          moveTo(10.0F, 7.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(18.0F, 1.0F)
          horizontalLineToRelative(1.25F)
          curveTo(29.664F, 8.0F, 30.0F, 8.336F, 30.0F, 8.75F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(28.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(1.25F, 6.0F)
          horizontalLineTo(28.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(1.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveTo(28.0F, 20.0F)
          horizontalLineToRelative(1.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(28.0F)
          verticalLineToRelative(-4.0F)
          close()        
      }
    }
    return _notebook32!!
  }

private var _notebook32: ImageVector? = null
