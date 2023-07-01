package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Open16: ImageVector
  get() {
    if (_open16 != null) {
      return _open16!!
    }
    _open16 = fluentIcon(name = "Filled.Open16", 16f) {
      materialPath {
          moveTo(4.75F, 3.5F)
          curveTo(4.06F, 3.5F, 3.5F, 4.06F, 3.5F, 4.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-1.5F)
          curveTo(12.5F, 9.336F, 12.836F, 9.0F, 13.25F, 9.0F)
          reflectiveCurveTo(14.0F, 9.336F, 14.0F, 9.75F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(3.231F, 14.0F, 2.0F, 12.769F, 2.0F, 11.25F)
          verticalLineToRelative(-6.5F)
          curveTo(2.0F, 3.231F, 3.231F, 2.0F, 4.75F, 2.0F)
          horizontalLineToRelative(1.5F)
          curveTo(6.664F, 2.0F, 7.0F, 2.336F, 7.0F, 2.75F)
          reflectiveCurveTo(6.664F, 3.5F, 6.25F, 3.5F)
          horizontalLineToRelative(-1.5F)
          close()
          moveTo(8.0F, 2.75F)
          curveTo(8.0F, 2.336F, 8.335F, 2.0F, 8.75F, 2.0F)
          horizontalLineToRelative(4.5F)
          curveTo(13.664F, 2.0F, 14.0F, 2.336F, 14.0F, 2.75F)
          verticalLineToRelative(4.5F)
          curveTo(14.0F, 7.664F, 13.664F, 8.0F, 13.25F, 8.0F)
          curveToRelative(-0.415F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(4.56F)
          lineTo(9.28F, 7.78F)
          curveToRelative(-0.293F, 0.293F, -0.768F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.294F, -0.292F, -0.294F, -0.767F, 0.0F, -1.06F)
          lineToRelative(3.22F, -3.22F)
          horizontalLineTo(8.75F)
          curveTo(8.335F, 3.5F, 8.0F, 3.164F, 8.0F, 2.75F)
          close()        
      }
    }
    return _open16!!
  }

private var _open16: ImageVector? = null
