package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SplitHorizontal28: ImageVector
  get() {
    if (_splitHorizontal28 != null) {
      return _splitHorizontal28!!
    }
    _splitHorizontal28 = fluentIcon(name = "Regular.SplitHorizontal28", 28f) {
      materialPath {
          moveTo(2.75F, 12.998F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(22.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(2.75F)
          close()
          moveTo(24.0F, 4.75F)
          curveTo(24.0F, 3.23F, 22.769F, 2.0F, 21.25F, 2.0F)
          horizontalLineTo(6.75F)
          curveTo(5.23F, 2.0F, 4.0F, 3.232F, 4.0F, 4.75F)
          verticalLineToRelative(7.248F)
          horizontalLineToRelative(1.5F)
          verticalLineTo(4.75F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.559F, 1.25F, 1.25F)
          verticalLineToRelative(7.247F)
          horizontalLineTo(24.0F)
          verticalLineTo(4.75F)
          close()
          moveToRelative(-18.5F, 18.0F)
          verticalLineToRelative(-7.252F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(7.252F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          horizontalLineToRelative(14.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-7.252F)
          horizontalLineToRelative(-1.5F)
          verticalLineToRelative(7.252F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(6.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          close()        
      }
    }
    return _splitHorizontal28!!
  }

private var _splitHorizontal28: ImageVector? = null
