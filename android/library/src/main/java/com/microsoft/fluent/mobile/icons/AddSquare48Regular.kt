package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.AddSquare48: ImageVector
  get() {
    if (_addSquare48 != null) {
      return _addSquare48!!
    }
    _addSquare48 = fluentIcon(name = "Regular.AddSquare48", 48f) {
      materialPath {
          moveTo(12.25F, 6.0F)
          curveTo(8.798F, 6.0F, 6.0F, 8.798F, 6.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveTo(6.0F, 39.202F, 8.798F, 42.0F, 12.25F, 42.0F)
          horizontalLineToRelative(23.5F)
          curveToRelative(3.452F, 0.0F, 6.25F, -2.798F, 6.25F, -6.25F)
          verticalLineToRelative(-23.5F)
          curveTo(42.0F, 8.798F, 39.202F, 6.0F, 35.75F, 6.0F)
          horizontalLineToRelative(-23.5F)
          close()
          moveTo(8.5F, 12.25F)
          curveToRelative(0.0F, -2.071F, 1.679F, -3.75F, 3.75F, -3.75F)
          horizontalLineToRelative(23.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          verticalLineToRelative(23.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineToRelative(-23.5F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineToRelative(-23.5F)
          close()
          moveTo(24.0F, 14.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(7.5F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-7.5F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineToRelative(-7.5F)
          horizontalLineToRelative(-7.5F)
          curveTo(14.56F, 25.25F, 14.0F, 24.69F, 14.0F, 24.0F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(7.5F)
          verticalLineToRelative(-7.5F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          close()        
      }
    }
    return _addSquare48!!
  }

private var _addSquare48: ImageVector? = null
