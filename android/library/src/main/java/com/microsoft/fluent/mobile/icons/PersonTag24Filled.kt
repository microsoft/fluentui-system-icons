package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonTag24: ImageVector
  get() {
    if (_personTag24 != null) {
      return _personTag24!!
    }
    _personTag24 = fluentIcon(name = "Filled.PersonTag24", 24f) {
      materialPath {
          moveTo(11.0F, 14.0F)
          verticalLineToRelative(2.935F)
          curveToRelative(0.0F, 0.785F, 0.309F, 1.538F, 0.859F, 2.098F)
          lineToRelative(2.256F, 2.297F)
          curveToRelative(-1.18F, 0.448F, -2.554F, 0.671F, -4.115F, 0.671F)
          curveToRelative(-3.42F, 0.0F, -5.944F, -1.072F, -7.486F, -3.236F)
          curveToRelative(-0.332F, -0.466F, -0.51F, -1.024F, -0.51F, -1.596F)
          verticalLineToRelative(-0.92F)
          curveTo(2.004F, 15.007F, 3.01F, 14.0F, 4.253F, 14.0F)
          horizontalLineTo(11.0F)
          close()
          moveToRelative(4.0F, -6.995F)
          curveToRelative(0.0F, -2.761F, -2.238F, -5.0F, -5.0F, -5.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, 2.239F, -5.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          curveToRelative(2.762F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          close()
          moveToRelative(1.572F, 15.4F)
          lineToRelative(-4.0F, -4.073F)
          curveTo(12.205F, 17.96F, 12.0F, 17.457F, 12.0F, 16.935F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, -1.102F, 0.896F, -1.996F, 2.002F, -1.997F)
          lineTo(16.919F, 12.0F)
          curveToRelative(0.527F, 0.0F, 1.034F, 0.207F, 1.41F, 0.577F)
          lineToRelative(4.075F, 4.014F)
          curveToRelative(0.79F, 0.777F, 0.795F, 2.045F, 0.012F, 2.829F)
          lineToRelative(-2.992F, 2.996F)
          curveToRelative(-0.788F, 0.789F, -2.07F, 0.784F, -2.852F, -0.012F)
          close()
          moveTo(14.996F, 16.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.447F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.551F, 0.0F, -0.998F, 0.448F, -0.998F, 1.0F)
          curveToRelative(0.0F, 0.553F, 0.447F, 1.0F, 0.998F, 1.0F)
          close()        
      }
    }
    return _personTag24!!
  }

private var _personTag24: ImageVector? = null
