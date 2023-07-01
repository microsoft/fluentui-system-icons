package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Voicemail32: ImageVector
  get() {
    if (_voicemail32 != null) {
      return _voicemail32!!
    }
    _voicemail32 = fluentIcon(name = "Filled.Voicemail32", 32f) {
      materialPath {
          moveTo(11.0F, 18.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveToRelative(8.0F, -2.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          close()
          moveTo(5.25F, 4.0F)
          curveTo(3.455F, 4.0F, 2.0F, 5.455F, 2.0F, 7.25F)
          verticalLineToRelative(17.5F)
          curveTo(2.0F, 26.545F, 3.455F, 28.0F, 5.25F, 28.0F)
          horizontalLineToRelative(21.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(7.25F)
          curveTo(30.0F, 5.455F, 28.545F, 4.0F, 26.75F, 4.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(15.0F, 16.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          curveToRelative(0.0F, -0.729F, 0.195F, -1.412F, 0.535F, -2.0F)
          horizontalLineToRelative(-3.07F)
          curveTo(14.805F, 14.588F, 15.0F, 15.271F, 15.0F, 16.0F)
          close()        
      }
    }
    return _voicemail32!!
  }

private var _voicemail32: ImageVector? = null
