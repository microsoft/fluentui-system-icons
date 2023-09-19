package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlagCheckered20: ImageVector
  get() {
    if (_flagCheckered20 != null) {
      return _flagCheckered20!!
    }
    _flagCheckered20 = fluentIcon(name = "Filled.FlagCheckered20", 20f) {
      materialPath {
          moveTo(4.5F, 3.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(2.75F)
          curveTo(6.0F, 17.664F, 5.664F, 18.0F, 5.25F, 18.0F)
          reflectiveCurveTo(4.5F, 17.664F, 4.5F, 17.25F)
          verticalLineToRelative(-14.0F)
          close()
          moveTo(6.0F, 13.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          close()        
      }
    }
    return _flagCheckered20!!
  }

private var _flagCheckered20: ImageVector? = null
