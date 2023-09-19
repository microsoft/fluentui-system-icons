package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Temperature24: ImageVector
  get() {
    if (_temperature24 != null) {
      return _temperature24!!
    }
    _temperature24 = fluentIcon(name = "Regular.Temperature24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(1.733F, 0.0F, 3.15F, 1.357F, 3.245F, 3.066F)
          lineTo(15.25F, 5.25F)
          lineToRelative(0.001F, 7.952F)
          lineToRelative(0.08F, 0.069F)
          curveToRelative(0.925F, 0.826F, 1.517F, 1.97F, 1.644F, 3.223F)
          lineToRelative(0.019F, 0.252F)
          lineTo(17.0F, 17.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          curveToRelative(0.0F, -1.363F, 0.55F, -2.634F, 1.49F, -3.56F)
          lineToRelative(0.18F, -0.17F)
          lineToRelative(0.079F, -0.068F)
          lineTo(8.75F, 5.25F)
          curveToRelative(0.0F, -1.671F, 1.261F, -3.048F, 2.884F, -3.23F)
          lineToRelative(0.182F, -0.015F)
          lineTo(12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-0.918F, 0.0F, -1.671F, 0.707F, -1.744F, 1.606F)
          lineTo(10.25F, 5.25F)
          verticalLineToRelative(8.694F)
          lineTo(9.94F, 14.17F)
          curveTo(9.041F, 14.825F, 8.5F, 15.866F, 8.5F, 17.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          curveToRelative(0.0F, -1.062F, -0.476F, -2.044F, -1.276F, -2.703F)
          lineToRelative(-0.165F, -0.127F)
          lineToRelative(-0.307F, -0.225F)
          lineTo(13.75F, 5.25F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          close()
          moveTo(12.0F, 8.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(5.865F)
          curveTo(13.766F, 14.933F, 14.5F, 15.88F, 14.5F, 17.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(9.5F, 18.38F, 9.5F, 17.0F)
          curveToRelative(0.0F, -1.12F, 0.736F, -2.067F, 1.75F, -2.386F)
          verticalLineTo(8.75F)
          curveTo(11.25F, 8.336F, 11.586F, 8.0F, 12.0F, 8.0F)
          close()        
      }
    }
    return _temperature24!!
  }

private var _temperature24: ImageVector? = null
