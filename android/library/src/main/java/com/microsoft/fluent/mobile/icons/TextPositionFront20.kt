package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextPositionFront20: ImageVector
  get() {
    if (_textPositionFront20 != null) {
      return _textPositionFront20!!
    }
    _textPositionFront20 = fluentIcon(name = "Filled.TextPositionFront20", 20f) {
      materialPath {
          moveTo(2.75F, 3.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-13.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveTo(10.0F, 6.25F)
          curveToRelative(-0.98F, 0.0F, -1.813F, 0.626F, -2.122F, 1.5F)
          horizontalLineTo(6.325F)
          curveToRelative(0.348F, -1.712F, 1.86F, -3.0F, 3.675F, -3.0F)
          curveToRelative(1.814F, 0.0F, 3.328F, 1.288F, 3.675F, 3.0F)
          horizontalLineToRelative(-1.553F)
          curveTo(11.813F, 6.876F, 10.98F, 6.25F, 10.0F, 6.25F)
          close()
          moveToRelative(-3.75F, 5.0F)
          horizontalLineToRelative(1.5F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-2.25F)
          close()
          moveToRelative(7.5F, 0.0F)
          horizontalLineToRelative(-1.5F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-2.25F)
          close()
          moveTo(3.5F, 14.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(0.0F, -6.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-13.0F)
          close()        
      }
    }
    return _textPositionFront20!!
  }

private var _textPositionFront20: ImageVector? = null
