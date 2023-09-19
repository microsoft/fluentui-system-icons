package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StackVertical24: ImageVector
  get() {
    if (_stackVertical24 != null) {
      return _stackVertical24!!
    }
    _stackVertical24 = fluentIcon(name = "Filled.StackVertical24", 24f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineTo(20.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-3.75F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(6.25F)
          curveTo(5.56F, 15.0F, 5.0F, 15.56F, 5.0F, 16.25F)
          verticalLineTo(20.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(2.0F, 7.0F)
          curveTo(5.385F, 13.088F, 5.807F, 13.0F, 6.25F, 13.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.443F, 0.0F, 0.865F, 0.089F, 1.25F, 0.25F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(6.25F)
          curveTo(5.56F, 10.0F, 5.0F, 10.56F, 5.0F, 11.25F)
          verticalLineToRelative(2.0F)
          close()
          moveToRelative(14.0F, -7.0F)
          curveTo(19.0F, 5.56F, 18.44F, 5.0F, 17.75F, 5.0F)
          horizontalLineTo(6.25F)
          curveTo(5.56F, 5.0F, 5.0F, 5.56F, 5.0F, 6.25F)
          verticalLineToRelative(2.0F)
          curveTo(5.385F, 8.088F, 5.807F, 8.0F, 6.25F, 8.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.443F, 0.0F, 0.865F, 0.089F, 1.25F, 0.25F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _stackVertical24!!
  }

private var _stackVertical24: ImageVector? = null
