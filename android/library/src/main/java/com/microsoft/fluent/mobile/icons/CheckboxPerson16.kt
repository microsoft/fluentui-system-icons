package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckboxPerson16: ImageVector
  get() {
    if (_checkboxPerson16 != null) {
      return _checkboxPerson16!!
    }
    _checkboxPerson16 = fluentIcon(name = "Filled.CheckboxPerson16", 16f) {
      materialPath {
          moveTo(3.5F, 1.0F)
          curveTo(2.12F, 1.0F, 1.0F, 2.12F, 1.0F, 3.5F)
          verticalLineToRelative(7.0F)
          curveTo(1.0F, 11.88F, 2.12F, 13.0F, 3.5F, 13.0F)
          horizontalLineToRelative(4.55F)
          curveToRelative(0.217F, -1.069F, 1.116F, -1.89F, 2.223F, -1.99F)
          curveTo(9.793F, 10.478F, 9.5F, 9.773F, 9.5F, 9.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(0.17F, 0.0F, 0.337F, 0.014F, 0.5F, 0.042F)
          verticalLineTo(3.5F)
          curveTo(13.0F, 2.12F, 11.88F, 1.0F, 10.5F, 1.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(6.354F, 4.854F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(6.0F, 8.293F)
          lineToRelative(3.146F, -3.146F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.707F, 0.0F)
          curveToRelative(0.196F, 0.195F, 0.196F, 0.511F, 0.0F, 0.707F)
          close()
          moveTo(14.5F, 9.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveToRelative(1.5F, 4.5F)
          curveToRelative(0.0F, 1.245F, -1.0F, 2.5F, -3.5F, 2.5F)
          reflectiveCurveTo(9.0F, 14.75F, 9.0F, 13.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _checkboxPerson16!!
  }

private var _checkboxPerson16: ImageVector? = null
