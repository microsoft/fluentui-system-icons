package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignRight28: ImageVector
  get() {
    if (_alignRight28 != null) {
      return _alignRight28!!
    }
    _alignRight28 = fluentIcon(name = "Filled.AlignRight28", 28f) {
      materialPath {
          moveTo(25.0F, 2.75F)
          curveTo(25.0F, 2.336F, 24.664F, 2.0F, 24.25F, 2.0F)
          reflectiveCurveTo(23.5F, 2.336F, 23.5F, 2.75F)
          verticalLineToRelative(22.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(25.0F, 25.664F, 25.0F, 25.25F)
          verticalLineTo(2.75F)
          close()
          moveTo(19.25F, 5.0F)
          curveTo(20.769F, 5.0F, 22.0F, 6.231F, 22.0F, 7.75F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(5.75F)
          curveTo(4.231F, 13.0F, 3.0F, 11.769F, 3.0F, 10.25F)
          verticalLineToRelative(-2.5F)
          curveTo(3.0F, 6.231F, 4.231F, 5.0F, 5.75F, 5.0F)
          horizontalLineToRelative(13.5F)
          close()
          moveToRelative(0.0F, 10.0F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineToRelative(-8.0F)
          curveToRelative(-1.519F, 0.0F, -2.75F, -1.231F, -2.75F, -2.75F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -1.519F, 1.231F, -2.75F, 2.75F, -2.75F)
          horizontalLineToRelative(8.0F)
          close()        
      }
    }
    return _alignRight28!!
  }

private var _alignRight28: ImageVector? = null
