package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Compose16: ImageVector
  get() {
    if (_compose16 != null) {
      return _compose16!!
    }
    _compose16 = fluentIcon(name = "Filled.Compose16", 16f) {
      materialPath {
          moveTo(2.0F, 4.75F)
          curveTo(2.0F, 3.231F, 3.231F, 2.0F, 4.75F, 2.0F)
          horizontalLineToRelative(4.49F)
          curveToRelative(0.415F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(9.656F, 3.5F, 9.24F, 3.5F)
          horizontalLineTo(4.75F)
          curveTo(4.06F, 3.5F, 3.5F, 4.06F, 3.5F, 4.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(6.748F)
          curveToRelative(0.0F, -0.415F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(14.0F, 6.333F, 14.0F, 6.748F)
          verticalLineToRelative(4.502F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(3.231F, 14.0F, 2.0F, 12.769F, 2.0F, 11.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveToRelative(12.78F, -3.53F)
          curveToRelative(0.293F, 0.292F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-7.5F, 7.505F)
          lineTo(6.0F, 10.0F)
          lineToRelative(0.22F, -1.275F)
          lineToRelative(7.5F, -7.505F)
          curveToRelative(0.292F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _compose16!!
  }

private var _compose16: ImageVector? = null
