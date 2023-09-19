package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ShareScreenPerson16: ImageVector
  get() {
    if (_shareScreenPerson16 != null) {
      return _shareScreenPerson16!!
    }
    _shareScreenPerson16 = fluentIcon(name = "Regular.ShareScreenPerson16", 16f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(2.12F, 3.0F, 1.0F, 4.12F, 1.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveTo(1.0F, 11.88F, 2.12F, 13.0F, 3.5F, 13.0F)
          horizontalLineToRelative(3.538F)
          curveTo(7.013F, 12.834F, 7.0F, 12.667F, 7.0F, 12.5F)
          curveToRelative(0.0F, -0.171F, 0.017F, -0.338F, 0.05F, -0.5F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 12.0F, 2.0F, 11.328F, 2.0F, 10.5F)
          verticalLineToRelative(-5.0F)
          curveTo(2.0F, 4.672F, 2.672F, 4.0F, 3.5F, 4.0F)
          horizontalLineToRelative(9.0F)
          curveTo(13.328F, 4.0F, 14.0F, 4.672F, 14.0F, 5.5F)
          verticalLineToRelative(0.841F)
          curveToRelative(0.273F, 0.41F, 0.447F, 0.891F, 0.49F, 1.41F)
          curveTo(14.5F, 7.887F, 14.612F, 8.0F, 14.75F, 8.0F)
          reflectiveCurveTo(15.0F, 7.888F, 15.0F, 7.75F)
          verticalLineTo(5.5F)
          curveTo(15.0F, 4.12F, 13.88F, 3.0F, 12.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveToRelative(10.0F, 5.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveToRelative(1.5F, 4.5F)
          curveToRelative(0.0F, 1.245F, -1.0F, 2.5F, -3.5F, 2.5F)
          reflectiveCurveTo(8.0F, 13.75F, 8.0F, 12.5F)
          curveTo(8.0F, 11.672F, 8.672F, 11.0F, 9.5F, 11.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _shareScreenPerson16!!
  }

private var _shareScreenPerson16: ImageVector? = null
