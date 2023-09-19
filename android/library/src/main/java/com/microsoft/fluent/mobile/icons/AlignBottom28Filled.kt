package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignBottom28: ImageVector
  get() {
    if (_alignBottom28 != null) {
      return _alignBottom28!!
    }
    _alignBottom28 = fluentIcon(name = "Filled.AlignBottom28", 28f) {
      materialPath {
          moveTo(2.75F, 25.0F)
          curveTo(2.336F, 25.0F, 2.0F, 24.664F, 2.0F, 24.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(22.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(25.664F, 25.0F, 25.25F, 25.0F)
          horizontalLineTo(2.75F)
          close()
          moveTo(5.0F, 19.25F)
          curveTo(5.0F, 20.769F, 6.231F, 22.0F, 7.75F, 22.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(5.75F)
          curveTo(13.0F, 4.231F, 11.769F, 3.0F, 10.25F, 3.0F)
          horizontalLineToRelative(-2.5F)
          curveTo(6.231F, 3.0F, 5.0F, 4.231F, 5.0F, 5.75F)
          verticalLineToRelative(13.5F)
          close()
          moveToRelative(10.0F, 0.0F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          horizontalLineToRelative(2.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-8.0F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          horizontalLineToRelative(-2.5F)
          curveTo(16.231F, 8.5F, 15.0F, 9.731F, 15.0F, 11.25F)
          verticalLineToRelative(8.0F)
          close()        
      }
    }
    return _alignBottom28!!
  }

private var _alignBottom28: ImageVector? = null
