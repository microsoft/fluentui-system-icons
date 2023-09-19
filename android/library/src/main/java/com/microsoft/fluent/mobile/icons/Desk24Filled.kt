package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Desk24: ImageVector
  get() {
    if (_desk24 != null) {
      return _desk24!!
    }
    _desk24 = fluentIcon(name = "Filled.Desk24", 24f) {
      materialPath {
          moveTo(4.25F, 4.0F)
          curveTo(3.007F, 4.0F, 2.0F, 5.007F, 2.0F, 6.25F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(18.5F)
          verticalLineToRelative(11.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(22.0F, 19.664F, 22.0F, 19.25F)
          verticalLineToRelative(-13.0F)
          curveTo(22.0F, 5.007F, 20.993F, 4.0F, 19.75F, 4.0F)
          horizontalLineTo(4.25F)
          close()
          moveTo(12.0F, 9.5F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(7.75F)
          curveTo(2.0F, 18.769F, 3.231F, 20.0F, 4.75F, 20.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(9.5F)
          close()
          moveToRelative(-7.0F, 3.25F)
          curveTo(5.0F, 12.336F, 5.336F, 12.0F, 5.75F, 12.0F)
          horizontalLineToRelative(2.5F)
          curveTo(8.664F, 12.0F, 9.0F, 12.336F, 9.0F, 12.75F)
          reflectiveCurveTo(8.664F, 13.5F, 8.25F, 13.5F)
          horizontalLineToRelative(-2.5F)
          curveTo(5.336F, 13.5F, 5.0F, 13.164F, 5.0F, 12.75F)
          close()        
      }
    }
    return _desk24!!
  }

private var _desk24: ImageVector? = null
