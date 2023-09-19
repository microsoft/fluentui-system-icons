package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextPositionTopBottom20: ImageVector
  get() {
    if (_textPositionTopBottom20 != null) {
      return _textPositionTopBottom20!!
    }
    _textPositionTopBottom20 = fluentIcon(name = "Filled.TextPositionTopBottom20", 20f) {
      materialPath {
          moveTo(2.75F, 3.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-13.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(0.0F, 12.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-13.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(5.0F, -7.0F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          reflectiveCurveToRelative(2.25F, 1.007F, 2.25F, 2.25F)
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
    return _textPositionTopBottom20!!
  }

private var _textPositionTopBottom20: ImageVector? = null
