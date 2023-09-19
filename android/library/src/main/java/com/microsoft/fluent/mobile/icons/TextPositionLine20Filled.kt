package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextPositionLine20: ImageVector
  get() {
    if (_textPositionLine20 != null) {
      return _textPositionLine20!!
    }
    _textPositionLine20 = fluentIcon(name = "Filled.TextPositionLine20", 20f) {
      materialPath {
          moveTo(3.5F, 2.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(3.086F, 4.25F, 3.5F, 4.25F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(0.0F, 12.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(7.25F, -2.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(-6.5F, -4.0F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          reflectiveCurveTo(8.75F, 7.257F, 8.75F, 8.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -2.071F, -1.679F, -3.75F, -3.75F, -3.75F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-5.0F)
          close()        
      }
    }
    return _textPositionLine20!!
  }

private var _textPositionLine20: ImageVector? = null
