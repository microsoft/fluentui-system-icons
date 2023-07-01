package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FixedWidth24: ImageVector
  get() {
    if (_fixedWidth24 != null) {
      return _fixedWidth24!!
    }
    _fixedWidth24 = fluentIcon(name = "Filled.FixedWidth24", 24f) {
      materialPath {
          moveTo(3.75F, 4.0F)
          curveTo(4.164F, 4.0F, 4.5F, 4.308F, 4.5F, 4.688F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(6.75F)
          verticalLineTo(4.687F)
          curveTo(11.25F, 4.308F, 11.586F, 4.0F, 12.0F, 4.0F)
          reflectiveCurveToRelative(0.75F, 0.308F, 0.75F, 0.688F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(6.75F)
          verticalLineTo(4.687F)
          curveTo(19.5F, 4.308F, 19.836F, 4.0F, 20.25F, 4.0F)
          reflectiveCurveTo(21.0F, 4.308F, 21.0F, 4.688F)
          verticalLineToRelative(4.125F)
          curveToRelative(0.0F, 0.38F, -0.336F, 0.687F, -0.75F, 0.687F)
          reflectiveCurveTo(19.5F, 9.192F, 19.5F, 8.812F)
          verticalLineTo(7.5F)
          horizontalLineToRelative(-6.75F)
          verticalLineToRelative(1.313F)
          curveToRelative(0.0F, 0.38F, -0.336F, 0.687F, -0.75F, 0.687F)
          reflectiveCurveToRelative(-0.75F, -0.308F, -0.75F, -0.688F)
          verticalLineTo(7.5F)
          horizontalLineTo(4.5F)
          verticalLineToRelative(1.313F)
          curveTo(4.5F, 9.193F, 4.164F, 9.5F, 3.75F, 9.5F)
          reflectiveCurveTo(3.0F, 9.192F, 3.0F, 8.812F)
          verticalLineTo(4.689F)
          curveTo(3.0F, 4.308F, 3.336F, 4.0F, 3.75F, 4.0F)
          close()
          moveToRelative(2.0F, 7.0F)
          curveTo(4.231F, 11.0F, 3.0F, 12.231F, 3.0F, 13.75F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          horizontalLineToRelative(5.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(-5.5F)
          close()
          moveToRelative(12.5F, 9.5F)
          horizontalLineToRelative(-5.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          close()        
      }
    }
    return _fixedWidth24!!
  }

private var _fixedWidth24: ImageVector? = null
