package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextField24: ImageVector
  get() {
    if (_textField24 != null) {
      return _textField24!!
    }
    _textField24 = fluentIcon(name = "Regular.TextField24", 24f) {
      materialPath {
          moveTo(15.5F, 7.5F)
          horizontalLineToRelative(-2.75F)
          verticalLineToRelative(9.0F)
          horizontalLineToRelative(0.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(13.664F, 18.0F, 13.25F, 18.0F)
          horizontalLineToRelative(-2.5F)
          curveTo(10.336F, 18.0F, 10.0F, 17.664F, 10.0F, 17.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(0.5F)
          verticalLineToRelative(-9.0F)
          horizontalLineTo(8.5F)
          verticalLineToRelative(0.75F)
          curveTo(8.5F, 8.664F, 8.164F, 9.0F, 7.75F, 9.0F)
          reflectiveCurveTo(7.0F, 8.664F, 7.0F, 8.25F)
          verticalLineToRelative(-1.5F)
          curveTo(7.0F, 6.336F, 7.336F, 6.0F, 7.75F, 6.0F)
          horizontalLineToRelative(8.5F)
          curveTo(16.664F, 6.0F, 17.0F, 6.336F, 17.0F, 6.75F)
          verticalLineToRelative(1.5F)
          curveTo(17.0F, 8.664F, 16.664F, 9.0F, 16.25F, 9.0F)
          reflectiveCurveTo(15.5F, 8.664F, 15.5F, 8.25F)
          verticalLineTo(7.5F)
          close()
          moveTo(5.75F, 3.0F)
          curveTo(3.679F, 3.0F, 2.0F, 4.679F, 2.0F, 6.75F)
          verticalLineToRelative(10.5F)
          curveTo(2.0F, 19.321F, 3.679F, 21.0F, 5.75F, 21.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(6.75F)
          curveTo(22.0F, 4.679F, 20.321F, 3.0F, 18.25F, 3.0F)
          horizontalLineTo(5.75F)
          close()
          moveTo(3.5F, 6.75F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(12.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(5.75F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(6.75F)
          close()        
      }
    }
    return _textField24!!
  }

private var _textField24: ImageVector? = null
