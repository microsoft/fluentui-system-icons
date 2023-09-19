package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SplitVertical48: ImageVector
  get() {
    if (_splitVertical48 != null) {
      return _splitVertical48!!
    }
    _splitVertical48 = fluentIcon(name = "Filled.SplitVertical48", 48f) {
      materialPath {
          moveTo(25.5F, 5.25F)
          curveTo(25.5F, 4.56F, 24.94F, 4.0F, 24.25F, 4.0F)
          reflectiveCurveTo(23.0F, 4.56F, 23.0F, 5.25F)
          verticalLineToRelative(37.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(5.25F)
          close()
          moveTo(39.75F, 40.0F)
          horizontalLineTo(27.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(12.25F)
          curveTo(42.097F, 8.0F, 44.0F, 9.903F, 44.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          close()
          moveTo(21.0F, 8.0F)
          horizontalLineTo(8.25F)
          curveTo(5.903F, 8.0F, 4.0F, 9.903F, 4.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveTo(4.0F, 38.097F, 5.903F, 40.0F, 8.25F, 40.0F)
          horizontalLineTo(21.0F)
          verticalLineTo(8.0F)
          close()        
      }
    }
    return _splitVertical48!!
  }

private var _splitVertical48: ImageVector? = null
