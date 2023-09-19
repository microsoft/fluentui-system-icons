package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonSubtract16: ImageVector
  get() {
    if (_personSubtract16 != null) {
      return _personSubtract16!!
    }
    _personSubtract16 = fluentIcon(name = "Filled.PersonSubtract16", 16f) {
      materialPath {
          moveTo(9.626F, 5.07F)
          curveToRelative(-1.313F, 0.209F, -2.47F, 0.882F, -3.299F, 1.847F)
          curveToRelative(-1.193F, -0.3F, -2.077F, -1.38F, -2.077F, -2.667F)
          curveTo(4.25F, 2.731F, 5.481F, 1.5F, 7.0F, 1.5F)
          reflectiveCurveToRelative(2.75F, 1.231F, 2.75F, 2.75F)
          curveToRelative(0.0F, 0.285F, -0.043F, 0.56F, -0.124F, 0.82F)
          close()
          moveTo(5.6F, 8.0F)
          curveTo(5.216F, 8.75F, 5.0F, 9.6F, 5.0F, 10.5F)
          curveToRelative(0.0F, 1.31F, 0.458F, 2.512F, 1.222F, 3.457F)
          curveTo(3.555F, 13.653F, 2.0F, 11.803F, 2.0F, 10.0F)
          verticalLineTo(9.5F)
          curveTo(2.0F, 8.672F, 2.672F, 8.0F, 3.5F, 8.0F)
          horizontalLineToRelative(2.1F)
          close()
          moveToRelative(4.9F, 7.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(12.985F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(6.0F, 8.015F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 15.0F, 10.5F, 15.0F)
          close()
          moveToRelative(-2.121F, -5.0F)
          horizontalLineToRelative(4.242F)
          curveToRelative(0.277F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.223F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(8.38F)
          curveToRelative(-0.277F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveTo(8.103F, 10.0F, 8.38F, 10.0F)
          close()        
      }
    }
    return _personSubtract16!!
  }

private var _personSubtract16: ImageVector? = null
