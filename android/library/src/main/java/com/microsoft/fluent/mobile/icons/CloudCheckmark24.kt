package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudCheckmark24: ImageVector
  get() {
    if (_cloudCheckmark24 != null) {
      return _cloudCheckmark24!!
    }
    _cloudCheckmark24 = fluentIcon(name = "Filled.CloudCheckmark24", 24f) {
      materialPath {
          moveTo(6.08F, 8.02F)
          curveTo(6.548F, 5.171F, 9.02F, 3.0F, 12.0F, 3.0F)
          reflectiveCurveToRelative(5.452F, 2.172F, 5.92F, 5.02F)
          curveTo(20.208F, 8.23F, 22.0F, 10.155F, 22.0F, 12.5F)
          curveToRelative(0.0F, 0.166F, -0.009F, 0.33F, -0.027F, 0.492F)
          curveTo(20.818F, 11.192F, 18.798F, 10.0F, 16.5F, 10.0F)
          curveToRelative(-3.59F, 0.0F, -6.5F, 2.91F, -6.5F, 6.5F)
          curveToRelative(0.0F, 0.168F, 0.006F, 0.335F, 0.019F, 0.5F)
          horizontalLineTo(6.5F)
          curveTo(4.015F, 17.0F, 2.0F, 14.985F, 2.0F, 12.5F)
          curveToRelative(0.0F, -2.344F, 1.792F, -4.269F, 4.08F, -4.48F)
          close()
          moveTo(22.0F, 16.5F)
          curveToRelative(0.0F, 3.038F, -2.462F, 5.5F, -5.5F, 5.5F)
          reflectiveCurveTo(11.0F, 19.538F, 11.0F, 16.5F)
          reflectiveCurveToRelative(2.462F, -5.5F, 5.5F, -5.5F)
          reflectiveCurveToRelative(5.5F, 2.462F, 5.5F, 5.5F)
          close()
          moveToRelative(-2.146F, -2.354F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(15.5F, 17.793F)
          lineToRelative(-1.646F, -1.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _cloudCheckmark24!!
  }

private var _cloudCheckmark24: ImageVector? = null
