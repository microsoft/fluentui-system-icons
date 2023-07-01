package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SplitVertical28: ImageVector
  get() {
    if (_splitVertical28 != null) {
      return _splitVertical28!!
    }
    _splitVertical28 = fluentIcon(name = "Filled.SplitVertical28", 28f) {
      materialPath {
          moveTo(12.998F, 25.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(2.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(22.5F)
          close()
          moveTo(2.0F, 6.75F)
          curveTo(2.0F, 5.231F, 3.232F, 4.0F, 4.75F, 4.0F)
          horizontalLineToRelative(7.248F)
          verticalLineToRelative(20.0F)
          horizontalLineTo(4.75F)
          curveTo(3.23F, 24.0F, 2.0F, 22.77F, 2.0F, 21.25F)
          verticalLineTo(6.75F)
          close()
          moveTo(22.75F, 24.0F)
          horizontalLineToRelative(-7.252F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(7.252F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          close()        
      }
    }
    return _splitVertical28!!
  }

private var _splitVertical28: ImageVector? = null
