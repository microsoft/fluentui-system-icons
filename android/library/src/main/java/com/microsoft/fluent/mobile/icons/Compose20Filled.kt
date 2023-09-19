package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Compose20: ImageVector
  get() {
    if (_compose20 != null) {
      return _compose20!!
    }
    _compose20 = fluentIcon(name = "Filled.Compose20", 20f) {
      materialPath {
          moveTo(17.78F, 3.28F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-7.5F, 7.505F)
          lineTo(9.0F, 11.0F)
          lineToRelative(1.28F, -0.215F)
          lineToRelative(7.5F, -7.505F)
          close()
          moveTo(5.75F, 3.0F)
          curveTo(4.231F, 3.0F, 3.0F, 4.231F, 3.0F, 5.75F)
          verticalLineToRelative(8.5F)
          curveTo(3.0F, 15.769F, 4.231F, 17.0F, 5.75F, 17.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(8.748F)
          curveToRelative(0.0F, -0.415F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.335F, -0.75F, 0.75F)
          verticalLineToRelative(5.502F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-8.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineToRelative(-8.5F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(5.49F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(11.656F, 3.0F, 11.24F, 3.0F)
          horizontalLineTo(5.75F)
          close()        
      }
    }
    return _compose20!!
  }

private var _compose20: ImageVector? = null
