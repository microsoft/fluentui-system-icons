package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Textbox20: ImageVector
  get() {
    if (_textbox20 != null) {
      return _textbox20!!
    }
    _textbox20 = fluentIcon(name = "Filled.Textbox20", 20f) {
      materialPath {
          moveTo(17.0F, 5.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(6.0F, 6.75F)
          curveTo(6.0F, 6.336F, 6.316F, 6.0F, 6.706F, 6.0F)
          horizontalLineToRelative(6.588F)
          curveTo(13.684F, 6.0F, 14.0F, 6.336F, 14.0F, 6.75F)
          reflectiveCurveTo(13.684F, 7.5F, 13.294F, 7.5F)
          horizontalLineTo(6.706F)
          curveTo(6.316F, 7.5F, 6.0F, 7.164F, 6.0F, 6.75F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(6.0F, 9.336F, 6.316F, 9.0F, 6.706F, 9.0F)
          horizontalLineToRelative(3.588F)
          curveTo(10.684F, 9.0F, 11.0F, 9.336F, 11.0F, 9.75F)
          reflectiveCurveToRelative(-0.316F, 0.75F, -0.706F, 0.75F)
          horizontalLineTo(6.706F)
          curveTo(6.316F, 10.5F, 6.0F, 10.164F, 6.0F, 9.75F)
          close()
          moveTo(6.706F, 12.0F)
          horizontalLineToRelative(6.588F)
          curveTo(13.684F, 12.0F, 14.0F, 12.336F, 14.0F, 12.75F)
          reflectiveCurveToRelative(-0.316F, 0.75F, -0.706F, 0.75F)
          horizontalLineTo(6.706F)
          curveTo(6.316F, 13.5F, 6.0F, 13.164F, 6.0F, 12.75F)
          reflectiveCurveTo(6.316F, 12.0F, 6.706F, 12.0F)
          close()        
      }
    }
    return _textbox20!!
  }

private var _textbox20: ImageVector? = null
