package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SquareMultiple48: ImageVector
  get() {
    if (_squareMultiple48 != null) {
      return _squareMultiple48!!
    }
    _squareMultiple48 = fluentIcon(name = "Filled.SquareMultiple48", 48f) {
      materialPath {
          moveTo(16.495F, 10.0F)
          horizontalLineToRelative(-2.503F)
          curveToRelative(0.131F, -3.336F, 2.877F, -6.0F, 6.245F, -6.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(5.109F, 0.0F, 9.25F, 4.141F, 9.25F, 9.25F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 3.364F, -2.658F, 6.108F, -5.989F, 6.245F)
          verticalLineTo(31.49F)
          curveToRelative(1.95F, -0.134F, 3.49F, -1.758F, 3.49F, -3.741F)
          verticalLineToRelative(-14.5F)
          curveToRelative(0.0F, -3.728F, -3.023F, -6.75F, -6.75F, -6.75F)
          horizontalLineToRelative(-14.5F)
          curveToRelative(-1.988F, 0.0F, -3.614F, 1.546F, -3.742F, 3.5F)
          close()
          moveTo(4.0F, 18.25F)
          curveTo(4.0F, 14.798F, 6.798F, 12.0F, 10.25F, 12.0F)
          horizontalLineToRelative(19.5F)
          curveToRelative(3.452F, 0.0F, 6.25F, 2.798F, 6.25F, 6.25F)
          verticalLineToRelative(19.5F)
          curveToRelative(0.0F, 3.452F, -2.798F, 6.25F, -6.25F, 6.25F)
          horizontalLineToRelative(-19.5F)
          curveTo(6.798F, 44.0F, 4.0F, 41.202F, 4.0F, 37.75F)
          verticalLineToRelative(-19.5F)
          close()        
      }
    }
    return _squareMultiple48!!
  }

private var _squareMultiple48: ImageVector? = null
