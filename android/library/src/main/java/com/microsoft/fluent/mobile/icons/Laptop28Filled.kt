package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Laptop28: ImageVector
  get() {
    if (_laptop28 != null) {
      return _laptop28!!
    }
    _laptop28 = fluentIcon(name = "Filled.Laptop28", 28f) {
      materialPath {
          moveTo(4.0F, 8.25F)
          curveTo(4.0F, 7.007F, 5.007F, 6.0F, 6.25F, 6.0F)
          horizontalLineToRelative(15.5F)
          curveTo(22.993F, 6.0F, 24.0F, 7.007F, 24.0F, 8.25F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(6.25F)
          curveTo(5.007F, 19.5F, 4.0F, 18.493F, 4.0F, 17.25F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(2.75F, 20.5F)
          curveTo(2.336F, 20.5F, 2.0F, 20.836F, 2.0F, 21.25F)
          reflectiveCurveTo(2.336F, 22.0F, 2.75F, 22.0F)
          horizontalLineToRelative(22.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(2.75F)
          close()        
      }
    }
    return _laptop28!!
  }

private var _laptop28: ImageVector? = null
