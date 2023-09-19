package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SplitHorizontal48: ImageVector
  get() {
    if (_splitHorizontal48 != null) {
      return _splitHorizontal48!!
    }
    _splitHorizontal48 = fluentIcon(name = "Filled.SplitHorizontal48", 48f) {
      materialPath {
          moveTo(42.75F, 25.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(43.44F, 23.0F, 42.75F, 23.0F)
          horizontalLineTo(5.25F)
          curveTo(4.56F, 23.0F, 4.0F, 23.56F, 4.0F, 24.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(37.5F)
          close()
          moveTo(8.0F, 39.75F)
          verticalLineTo(27.5F)
          horizontalLineToRelative(32.0F)
          verticalLineToRelative(12.25F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          horizontalLineToRelative(-23.5F)
          curveTo(9.903F, 44.0F, 8.0F, 42.097F, 8.0F, 39.75F)
          close()
          moveTo(40.0F, 21.0F)
          verticalLineTo(8.25F)
          curveTo(40.0F, 5.903F, 38.097F, 4.0F, 35.75F, 4.0F)
          horizontalLineToRelative(-23.5F)
          curveTo(9.903F, 4.0F, 8.0F, 5.903F, 8.0F, 8.25F)
          verticalLineTo(21.0F)
          horizontalLineToRelative(32.0F)
          close()        
      }
    }
    return _splitHorizontal48!!
  }

private var _splitHorizontal48: ImageVector? = null
