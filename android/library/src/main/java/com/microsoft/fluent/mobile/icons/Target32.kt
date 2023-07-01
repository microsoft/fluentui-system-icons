package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Target32: ImageVector
  get() {
    if (_target32 != null) {
      return _target32!!
    }
    _target32 = fluentIcon(name = "Filled.Target32", 32f) {
      materialPath {
          moveTo(16.0F, 13.75F)
          curveToRelative(-1.243F, 0.0F, -2.25F, 1.007F, -2.25F, 2.25F)
          reflectiveCurveToRelative(1.007F, 2.25F, 2.25F, 2.25F)
          reflectiveCurveToRelative(2.25F, -1.007F, 2.25F, -2.25F)
          reflectiveCurveToRelative(-1.007F, -2.25F, -2.25F, -2.25F)
          close()
          moveTo(16.0F, 8.75F)
          curveToRelative(-4.004F, 0.0F, -7.25F, 3.246F, -7.25F, 7.25F)
          reflectiveCurveToRelative(3.246F, 7.25F, 7.25F, 7.25F)
          reflectiveCurveToRelative(7.25F, -3.246F, 7.25F, -7.25F)
          reflectiveCurveTo(20.004F, 8.75F, 16.0F, 8.75F)
          close()
          moveTo(11.25F, 16.0F)
          curveToRelative(0.0F, -2.623F, 2.127F, -4.75F, 4.75F, -4.75F)
          reflectiveCurveToRelative(4.75F, 2.127F, 4.75F, 4.75F)
          reflectiveCurveToRelative(-2.127F, 4.75F, -4.75F, 4.75F)
          reflectiveCurveToRelative(-4.75F, -2.127F, -4.75F, -4.75F)
          close()
          moveTo(16.001F, 3.75F)
          curveTo(9.235F, 3.75F, 3.75F, 9.235F, 3.75F, 16.001F)
          curveToRelative(0.0F, 6.766F, 5.485F, 12.252F, 12.251F, 12.252F)
          curveToRelative(6.766F, 0.0F, 12.252F, -5.486F, 12.252F, -12.252F)
          curveTo(28.253F, 9.235F, 22.767F, 3.75F, 16.0F, 3.75F)
          close()
          moveTo(6.25F, 16.001F)
          curveToRelative(0.0F, -5.385F, 4.366F, -9.751F, 9.751F, -9.751F)
          curveToRelative(5.386F, 0.0F, 9.752F, 4.366F, 9.752F, 9.751F)
          curveToRelative(0.0F, 5.386F, -4.366F, 9.752F, -9.752F, 9.752F)
          curveToRelative(-5.385F, 0.0F, -9.751F, -4.366F, -9.751F, -9.752F)
          close()        
      }
    }
    return _target32!!
  }

private var _target32: ImageVector? = null
