package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Desk24: ImageVector
  get() {
    if (_desk24 != null) {
      return _desk24!!
    }
    _desk24 = fluentIcon(name = "Regular.Desk24", 24f) {
      materialPath {
          moveTo(4.25F, 4.0F)
          curveTo(3.007F, 4.0F, 2.0F, 5.007F, 2.0F, 6.25F)
          verticalLineToRelative(11.0F)
          curveTo(2.0F, 18.769F, 3.231F, 20.0F, 4.75F, 20.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(8.5F)
          verticalLineToRelative(9.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(22.0F, 19.664F, 22.0F, 19.25F)
          verticalLineToRelative(-13.0F)
          curveTo(22.0F, 5.007F, 20.993F, 4.0F, 19.75F, 4.0F)
          horizontalLineTo(4.25F)
          close()
          moveTo(3.5F, 9.5F)
          horizontalLineToRelative(7.0F)
          verticalLineToRelative(7.75F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-4.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(9.5F)
          close()
          moveToRelative(0.0F, -1.5F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(15.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveToRelative(2.25F, 3.5F)
          curveTo(5.336F, 11.5F, 5.0F, 11.836F, 5.0F, 12.25F)
          reflectiveCurveTo(5.336F, 13.0F, 5.75F, 13.0F)
          horizontalLineToRelative(2.5F)
          curveTo(8.664F, 13.0F, 9.0F, 12.664F, 9.0F, 12.25F)
          reflectiveCurveTo(8.664F, 11.5F, 8.25F, 11.5F)
          horizontalLineToRelative(-2.5F)
          close()        
      }
    }
    return _desk24!!
  }

private var _desk24: ImageVector? = null
