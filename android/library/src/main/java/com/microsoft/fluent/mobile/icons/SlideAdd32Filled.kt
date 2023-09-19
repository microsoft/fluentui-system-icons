package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideAdd32: ImageVector
  get() {
    if (_slideAdd32 != null) {
      return _slideAdd32!!
    }
    _slideAdd32 = fluentIcon(name = "Filled.SlideAdd32", 32f) {
      materialPath {
          moveTo(2.0F, 8.5F)
          curveTo(2.0F, 6.015F, 4.015F, 4.0F, 6.5F, 4.0F)
          horizontalLineToRelative(19.0F)
          curveTo(27.985F, 4.0F, 30.0F, 6.015F, 30.0F, 8.5F)
          verticalLineToRelative(8.843F)
          curveTo(28.35F, 15.303F, 25.827F, 14.0F, 23.0F, 14.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          curveToRelative(0.0F, 1.85F, 0.558F, 3.57F, 1.515F, 5.0F)
          horizontalLineTo(6.5F)
          curveTo(4.015F, 28.0F, 2.0F, 25.985F, 2.0F, 23.5F)
          verticalLineToRelative(-15.0F)
          close()
          moveToRelative(21.0F, 22.0F)
          curveToRelative(4.142F, 0.0F, 7.5F, -3.358F, 7.5F, -7.5F)
          curveToRelative(0.0F, -4.142F, -3.358F, -7.5F, -7.5F, -7.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, 3.358F, 7.5F, 7.5F, 7.5F)
          close()
          moveToRelative(1.0F, -12.25F)
          verticalLineTo(22.0F)
          horizontalLineToRelative(3.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(24.0F)
          verticalLineToRelative(3.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(23.5F)
          horizontalLineToRelative(-3.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(18.336F, 22.0F, 18.75F, 22.0F)
          horizontalLineToRelative(3.75F)
          verticalLineToRelative(-3.75F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(24.0F, 17.836F, 24.0F, 18.25F)
          close()        
      }
    }
    return _slideAdd32!!
  }

private var _slideAdd32: ImageVector? = null
