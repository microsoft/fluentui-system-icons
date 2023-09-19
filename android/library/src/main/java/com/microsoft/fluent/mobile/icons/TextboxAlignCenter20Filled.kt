package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextboxAlignCenter20: ImageVector
  get() {
    if (_textboxAlignCenter20 != null) {
      return _textboxAlignCenter20!!
    }
    _textboxAlignCenter20 = fluentIcon(name = "Filled.TextboxAlignCenter20", 20f) {
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
          moveToRelative(-10.294F, 2.0F)
          horizontalLineToRelative(6.588F)
          curveTo(13.684F, 7.5F, 14.0F, 7.836F, 14.0F, 8.25F)
          reflectiveCurveTo(13.684F, 9.0F, 13.294F, 9.0F)
          horizontalLineTo(6.706F)
          curveTo(6.316F, 9.0F, 6.0F, 8.664F, 6.0F, 8.25F)
          reflectiveCurveTo(6.316F, 7.5F, 6.706F, 7.5F)
          close()
          moveToRelative(1.0F, 3.0F)
          horizontalLineToRelative(4.588F)
          curveToRelative(0.39F, 0.0F, 0.706F, 0.336F, 0.706F, 0.75F)
          reflectiveCurveTo(12.684F, 12.0F, 12.294F, 12.0F)
          horizontalLineTo(7.706F)
          curveTo(7.316F, 12.0F, 7.0F, 11.664F, 7.0F, 11.25F)
          reflectiveCurveToRelative(0.316F, -0.75F, 0.706F, -0.75F)
          close()        
      }
    }
    return _textboxAlignCenter20!!
  }

private var _textboxAlignCenter20: ImageVector? = null
