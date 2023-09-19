package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.NumberCircle120: ImageVector
  get() {
    if (_numberCircle120 != null) {
      return _numberCircle120!!
    }
    _numberCircle120 = fluentIcon(name = "Regular.NumberCircle120", 120f) {
      materialPath {
          moveTo(11.0F, 6.5F)
          curveToRelative(0.0F, -0.253F, -0.188F, -0.465F, -0.439F, -0.496F)
          curveToRelative(-0.25F, -0.031F, -0.485F, 0.13F, -0.546F, 0.375F)
          curveToRelative(-0.103F, 0.41F, -0.373F, 0.911F, -0.728F, 1.384F)
          curveToRelative(-0.353F, 0.47F, -0.75F, 0.862F, -1.064F, 1.071F)
          curveToRelative(-0.23F, 0.153F, -0.292F, 0.464F, -0.139F, 0.693F)
          curveToRelative(0.153F, 0.23F, 0.464F, 0.292F, 0.693F, 0.139F)
          curveToRelative(0.405F, -0.27F, 0.845F, -0.705F, 1.223F, -1.19F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveToRelative(-7.0F, 8.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          close()        
      }
    }
    return _numberCircle120!!
  }

private var _numberCircle120: ImageVector? = null
