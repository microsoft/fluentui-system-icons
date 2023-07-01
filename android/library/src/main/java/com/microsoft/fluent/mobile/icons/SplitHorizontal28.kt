package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SplitHorizontal28: ImageVector
  get() {
    if (_splitHorizontal28 != null) {
      return _splitHorizontal28!!
    }
    _splitHorizontal28 = fluentIcon(name = "Filled.SplitHorizontal28", 28f) {
      materialPath {
          moveTo(2.75F, 12.998F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(22.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(2.75F)
          close()
          moveTo(21.25F, 2.0F)
          curveTo(22.769F, 2.0F, 24.0F, 3.232F, 24.0F, 4.75F)
          verticalLineToRelative(7.248F)
          horizontalLineTo(4.0F)
          verticalLineTo(4.75F)
          curveTo(4.0F, 3.23F, 5.23F, 2.0F, 6.75F, 2.0F)
          horizontalLineToRelative(14.5F)
          close()
          moveTo(4.0F, 22.75F)
          verticalLineToRelative(-7.252F)
          horizontalLineToRelative(20.0F)
          verticalLineToRelative(7.252F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(6.75F)
          curveTo(5.23F, 25.5F, 4.0F, 24.269F, 4.0F, 22.75F)
          close()        
      }
    }
    return _splitHorizontal28!!
  }

private var _splitHorizontal28: ImageVector? = null
