package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Archive48: ImageVector
  get() {
    if (_archive48 != null) {
      return _archive48!!
    }
    _archive48 = fluentIcon(name = "Filled.Archive48", 48f) {
      materialPath {
          moveTo(6.25F, 8.75F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          horizontalLineToRelative(30.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(8.75F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.12F, -2.5F, -2.5F)
          verticalLineToRelative(-4.0F)
          close()
          moveToRelative(2.0F, 9.0F)
          horizontalLineToRelative(31.5F)
          verticalLineTo(34.5F)
          curveToRelative(0.0F, 4.004F, -3.246F, 7.25F, -7.25F, 7.25F)
          horizontalLineToRelative(-17.0F)
          curveToRelative(-4.004F, 0.0F, -7.25F, -3.246F, -7.25F, -7.25F)
          verticalLineTo(17.75F)
          close()
          moveToRelative(12.25F, 4.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _archive48!!
  }

private var _archive48: ImageVector? = null
